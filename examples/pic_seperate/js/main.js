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
		  	$('<li><div class="box"></div></li>').width(boxW).height(boxH).css({
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
		$("#wrapper").click(function(e){
			if(status == "more" && animated == false){
				animated = true;
				var eSrc = $(e.target).css("background-image");
				$("#wrapper div").each(function(index,val){
					$(val).css({
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
					}).find('.box').css({
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
			
			
		})

	})
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