
;(function($,window,document,undefined){
	var obj = function(ele,opt){
		this.$element = ele,
		this.defaults = {
			src:"img/comic1_sm.jpg",
		}
		this.options = $.extend({},this.defaults,opt);
	}

	obj.prototype = {
		//methons
		init:function(){

			var _this=this;
			this.loadDom();
			this.zoomIn();

		},

		loadDom:function(){
			var _this = this;
			var html = '<img class="i-test" src="'+this.options.src+'" alt="test">';
			this.$element.append(html);

			this.imgDom = this.$element.find(".i-test");
			this.imgDom.css({"width":"200px","height":"100px","diplay":"inline-block"});

		},

		zoomIn:function(){
			var _this =this;
			this.imgDom.click(function(e){
				var $body = $("body");
				var pop = '<div class="b-pop"><img class="m-pop" src="' + _this.options.src+ '"></div>';
				$body.append(pop);

				var img_pop = $(".m-pop");
				img_pop.css({"width":"600px","height":"350px","position":"absolute","top":"50%","left":"50%","transform":"translate(-50%,-50%)","z-index":"1001"});

				e.stopPropagation();

			});

			$("body").click(function(){
				if($(this).find(".b-pop")){
					$(this).find(".b-pop").remove();
				}
			})



		},
	}

	$.fn.CodeVerify = function(opt){
		var object = new obj(this,opt);
		object.init();
	}

})(jQuery,window,document);