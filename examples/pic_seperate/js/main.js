$(function(){
	var	$oWrap = $("#wrapper");
	preloadPic("img/0.jpg",function(opt){
		var imgH = opt.height;
		var imgW = opt.width;
		var cNum = 5;
		var rNum = 5;
		var boxW = Math.ceil(imgW/cNum);
		var boxH = Math.ceil(imgH/rNum);
		var borderL = 2;
		var transitionTime = 2000;


		$oWrap.width(imgW).height(imgH);

		for(var i=0;i<rNum;i++)
		  for(var j=0;j<cNum;j++)
		  {
		  	$('<li><div class="box small"></div></li>').width(boxW).height(boxH).css({
		  		"top":Math.ceil(Math.random()*(imgH-boxH-borderL))+'px',
		  		"left":Math.ceil(Math.random()*(imgW-boxW-borderL))+'px',
		  	}).find('.box').css({
		  		"background-image":'url(img/'+(i*cNum+j)+'.jpg)'
		  	}).end().appendTo($oWrap);
		  }

		var bPosT = 0;
		var bPosL = 0;  
		var status = "more";
		var animated = false; //cannot click if animating
		/* drag */
		var p_oldPoint = {left:"",top:""};
		var m_oldPoint = {x:"",y:""};
		var $li = $("#wrapper li");
		var transitionFlag = false;
		var moveFlag = false;
		var distanceX = 0;  //if distance > 10 choose drag function <10 choose other function that make the pciture bigger
		
		$("#wrapper>li>div.box").mousedown(function(e){
			$("#wrapper li").css({"transition":"none"});
			moveFlag = true;
			distanceX = 0;
			var $this = $(this).parent();
			p_oldPoint.left = $this.position().left;
			p_oldPoint.top = $this.position().top;
			m_oldPoint.x = e.pageX;
			m_oldPoint.y = e.pageY;
		});
		$("#wrapper>li>div.box").mousemove(function(e){
			var $this = $(this).parent();
			if(moveFlag && status == "more"){
				var offsetX = e.pageX - m_oldPoint.x;
				var offsetY = e.pageY - m_oldPoint.y;
				m_oldPoint.x = e.pageX;
				m_oldPoint.y = e.pageY;
				p_oldPoint.left += offsetX;
				p_oldPoint.top += offsetY;
				$this.css({left:p_oldPoint.left,top:p_oldPoint.top});
				distanceX  +=  Math.abs(offsetX);
			}
		});


		$("#wrapper>li>div.box").mouseup(function(e){
			/*drag*/
			$("#wrapper li").css({"transition":"all 2s"});
		 	moveFlag = false;

		 	if(distanceX < 10){
		 		if(status == "more" && animated == false){
				animated = true;
				var eSrc = $(this).css("background-image");
				$("#wrapper div").each(function(index,val){
					$(val).removeClass("small").css({
					"background-image":eSrc,
					"background-size":"auto",
					"backgroundPositionX":-bPosL +"px",
					"backgroundPositionY":-bPosT +"px",
					"border":"none",
					"border-radius":"0"
					}).parent().css({
						"top":bPosT +"px",
						"left":bPosL +"px"
					});
					bPosL += boxW;
					if(bPosL >= imgW){
						bPosL = 0;
						bPosT += boxH;
					}
				});

				bPosT = 0;
				bPosL = 0;
				

				$(this).stop().animate({"opacity":"1"},transitionTime,function(){
					animated = false;
					status = "one";
				})
			}
			else if(status == "one" && animated == false){
				animated = true;
				$("#wrapper li").each(function(index,val){
					$(val).css({
						"top":Math.ceil(Math.random()*(imgH-boxH-borderL))+'px',
		  				"left":Math.ceil(Math.random()*(imgW-boxW-borderL))+'px',
					}).find('.box').addClass("small").css({
		  				"background-image":'url(img/'+index+'.jpg)',
		  				"border":"2px solid white",
						"border-radius":"5px",
						"background-size":"cover"
		  			})
				})
				$(this).stop().animate({"opacity":"1"},transitionTime,function(){
					animated = false;
					status = "more";
				})
			}
		 	}
			
		});

	});
});


function preloadPic(src,callback){
      var image = new Image();
      if(!!window.ActiveXObject){
        //兼容IE
        image.onreadystatechange = function(){
          if(this.readyState == "complete"){
            callback({'height':image.height,'width':image.width});
          }
        };
      }else{
        image.onload = function(){
            callback({'height':image.height,'width':image.width});
        };
      }
      image.src = src;
}
