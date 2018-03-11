;(function($){
	var LightBox = function(setting){
		var _this = this;
		_this.default = {dropSpeed:700,switchSpeed:500};
		_this.setting = setting || {};
		$.extend(_this.default,_this.setting);
		console.log(_this.default);
		_this.img = $(".lightbox");
		_this.groupName = "";
		_this.groupArr = [];
		_this.index = 0;//从一开始

		_this.setImgId(); //给每张图片设置一个唯一的data-id

		_this.setDOM();//设置弹出框的DOM,只需设置一次

		_this.setDOMFunc();//设置弹出框里的JS交互功能，只设置一次

		_this.img.on("click",function(e){ //给每张图片绑定单击事件
			var $this = $(this);
			e.preventDefault();
			e.stopPropagation();
			var currentG = $this.attr("data-group");
			if(currentG !== _this.groupName){
				//更新组名
				_this.groupName = currentG;
				//获得所有的组员
				_this.getGroupMem();
			}
			_this.getIndex($this);

			//更新弹出层内容,图片，标题，xx of xx
			_this.updateInfo();
			//设置弹出框动画特效；
			_this.showPopBox();
			//设置图片的大小

			_this.switchPic(0); //更新箭头状态
		})
	};
	LightBox.prototype={
		showPopBox:function(){
			var _this = this;
			var winW = $(window).width();
			var winH = $(window).height();
			var boxW = parseInt(winW/4);
			var boxH = parseInt(winH/4);

			_this.popMask.fadeIn();
			_this.popBox.fadeIn();
			_this.popDscrib.hide();
			_this.popPic.hide();

			_this.popBox.css({
				"width":boxW +"px",
				"height":boxH+"px",
				"marginTop":-boxH-10+"px",
			}).animate({
				"marginTop":(winH-boxH-10)/2+"px",
			},_this.default.dropSpeed.speed,function(){
				_this.setPicSize(_this.default.switchSpeed);
			});


		},
		preloadPic:function(src,callback){
	      var image = new Image();
	      if(!!window.ActiveXObject){
	        //兼容IE
	        image.onreadystatechange = function(){
	          if(this.readyState == "complete"){
	            callback();
	          }
	        };
	      }else{
	        image.onload = function(){
	            callback();
	        };
	      }
	      image.src = src;
		},
		setPicSize:function(speed){ //设置切换的时间
			var _this = this;
			var winW = $(window).width();
			var winH = $(window).height();
			var src = _this.popPic.attr("src");
			var scale = 0.8;
			_this.preloadPic(src,function(){
				var picW = _this.popPic.width();
				var picH = _this.popPic.height();

				if(picW >= winW || picH >= winH){
					picW = parseInt(picW*scale);
					picH = parseInt(picH*scale);
				}

				_this.popBox.animate({
				"width":picW +"px",
				"height":picH+"px",
				"marginTop":(winH-picH-10)/2+"px"
				},speed,function(){
					_this.popPic.css({"display":"block"});
				_this.popDscrib.css({"display":"block"});
				});
				
			 })

		},
		updateInfo:function(){
			var _this = this;
			_this.popPic.attr("src",_this.groupArr[_this.index-1].src);
			_this.popTitle.html(_this.groupArr[_this.index-1].title);
			_this.popQueNum.html(_this.index+" of " + _this.groupArr.length);
		},
		switchPic:function(dir){//dir 为0时，只是判断箭头是否要disabled，可为1和-1
			var _this = this;
			var length = _this.groupArr.length;
			var index = _this.index-1;
			dir = dir || 0;

			index += dir;
			if(index === length || index === -1){
				//no operation
			}else{
				if(index === 0){
					_this.popBtnPrev.addClass("disabled");
					_this.popBtnPrev.removeClass("enabled");
					_this.popBtnNext.addClass("enabled");
				}else if(index === length-1){
					_this.popBtnNext.addClass("disabled");
					_this.popBtnNext.removeClass("enabled");
					_this.popBtnPrev.addClass("enabled");
				}else{
					_this.popBtnPrev.addClass("enabled");
					_this.popBtnNext.addClass("enabled");
					_this.popBtnNext.removeClass("disabled");
					_this.popBtnPrev.removeClass("disabled");

				}
				_this.index = index +1;//_this.index从1开始

				if(dir !== 0){   //只是更新状态，不用更新图片为0
					_this.popPic.css({"display":"none"});//图片隐藏
					_this.popDscrib.css({"display":"none"});//描述隐藏
					_this.updateInfo();//更新图片和描述信息
					_this.setPicSize(0);//更改图片尺寸
				}
				
			}

			
		},
		setDOMFunc:function(){
			var _this = this;
			//图片切换
			_this.popBtn.click(function(e){
				e.stopPropagation();
				var $this = $(e.target);

				if($this.hasClass("prev")){
					_this.switchPic(-1);
				}
				if($this.hasClass("next")){
					_this.switchPic(1);
				}

			})
			//点击关闭按键，弹出层全部消失
			_this.popBtnClose.click(function(e){
				e.stopPropagation();
				_this.popMask.fadeOut();
				_this.popBox.fadeOut();
			})
			//点击外框，弹出层全部消失
			_this.popMask.click(function(){
				_this.popMask.fadeOut();
				_this.popBox.fadeOut();
			})
		},
		setDOM:function(){
			var _this = this;
			var html = "";
			_this.body = $("body");
			_this.popMask = $("<div class='pop-mask'></div>");
			_this.popBox = $("<div class='pop-box'></div>");
			html = '<div class="pop-box-view">'
					+'<div class="view-pic">'
						+'<img src="" alt="">'
					+'</div>'
					+'<div class="view-describ">'
						+'<div class="view-describ-text">'
							+'<p class="view-describ-title"></p>'
							+'<small><i class="view-describ-numb"></i></small>'
						+'</div>'
						
						+'<i class="view-describ-close"></i>'
						+'<div class="view-describ-btn">'
							+'<a href="#" class="btn prev"></a>'
							+'<a href="#" class="btn next"></a>'
						+'</div>'
						+'</div>'
					+'</div>'

						+'<div class="waiting">'
							+'<span></span>'
							+'<span></span>'
							+'<span></span>'
							+'<span></span>'
							+'<span></span>'
						+'</div>';
			//加入body中
			_this.body.append(_this.popMask,_this.popBox);
			_this.popBox.html(html);

			_this.popPic = _this.popBox.find(".view-pic > img");
			_this.popTitle = _this.popBox.find(".view-describ-title");
			_this.popQueNum = _this.popBox.find(".view-describ-numb");
			_this.popBtnClose = _this.popBox.find(".view-describ-close");
			_this.popBtnNext = _this.popBox.find(".view-describ-btn > .next");
			_this.popBtnPrev = _this.popBox.find(".view-describ-btn > .prev");
			_this.popBtn = _this.popBox.find(".view-describ-btn");
			_this.popBoxView = _this.popBox.find(".pop-box-view");
			_this.popDscrib = _this.popBox.find(".view-describ");

		},
		getGroupMem:function(){
			var _this = this;
			_this.groupArr = [];//清空数组
			_this.img.filter("[data-group='"+_this.groupName+"']").each(function(index,val){
				_this.groupArr.push({
					"src":$(val).attr("src"),
					"title":$(val).attr("data-title"),
					"id":$(val).attr("data-id"),
					"group":$(val).attr("data-group"),
				})
			})
		},
		setImgId:function(){
			var _this = this;
			_this.img.each(function(index,val){
				$(val).attr({"data-id":index});
			})
		},
		getIndex:function(obj){
			var _this = this;
			$.each(_this.groupArr,function(index,val){
				if(val.id === obj.attr("data-id")){
					_this.index = index+1;
				}
			})
		}
	}

	$.extend({
		lightbox:function(setting){
			new LightBox(setting);
	}})
})(jQuery);