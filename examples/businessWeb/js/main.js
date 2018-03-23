;$(function(){

$("body").append($("<a class='toTop'><i class='fa fa-angle-up'></i></a>"));
(function common(){
	/*return to top postion*/
	var $toTop = $("body>a.toTop");
	$(window).scroll(function(e){
		var top = $(window).scrollTop();
		if(top > 100){
			$toTop.fadeIn();
		}else{
			$toTop.fadeOut();
		}
	})
	$toTop.click(function(e){
		$("html,body").animate({"scrollTop":0},500);
		e.stopPropagation();
		e.preventDefault();
	})
})();


(function banner(){
/*lunbo picture*/
var index =0;
var oList = $("#banner>ul.b-list");
var oListLength = oList.width();
var itemLength = (oListLength%2 === 0) ? oListLength/2 : (oListLength/2+1);
var switchTimer = 8000;
var bTimer = 0;
var index = 0;

$("#banner>ul.b-list>li:first").css({"opacity":1});
$("#banner>ul.b-list>li:last").css({"opacity":0.3});
function setTime(){
	bTimer = setTimeout(function(){
		btnSwitch();	
		setTime();
	},switchTimer)
}
function btnSwitch(){
	if(index === 1){
		oList.css({"left":-itemLength+"px"});
		$("#banner>ul.b-list>li:first").css({"opacity":0.3});
		$("#banner>ul.b-list>li:last").css({"opacity":1});
		$("#banner>div.b-btn a:first").removeClass("active");
		$("#banner>div.b-btn a:last").addClass("active");
		index = index - 1;
		if(index === 0){
			index = 0;
		}
	}
	else if(index === 0){
		oList.css({"left":0+"px"});
		$("#banner>ul.b-list>li:first").css({"opacity":1});
		$("#banner>ul.b-list>li:last").css({"opacity":0.3});
		$("#banner>div.b-btn a:last").removeClass("active");
		$("#banner>div.b-btn a:first").addClass("active");
		index = index + 1;
		if(index === 1){
			index = 1;
		}
	}
}
$("#banner>div.b-btn a:first").click(function(){
	index =0;
	if(! $("#banner>ul.b-list>li").is(":animated")){
		btnSwitch();
	}
})
$("#banner>div.b-btn a:last").click(function(){
	index =1;
	if(! $("#banner>ul.b-list>li").is(":animated")){
		btnSwitch();
	}
})
$("#banner").hover(function(){
	clearTimeout(bTimer);
},function(){
	setTime();
})

setTime();
})();

(function about(){
	var moving = 0;
	var slideTime = 500;
	var tabIndex=0;
	/*slide*/
	$("section.d-show ul.select-menu").click(function(e){
		var $target = $(e.target);
		if(moving === 0){

			if($target.hasClass("active")){
			moving = 1;
			$target.next("p").slideUp(slideTime,function(){
				$target.removeClass("active");
				moving = 0;
			});
		}else if($target.parent().hasClass("active")){
			moving = 1;
			$target.parent().next("p").slideUp(slideTime,function(){
				$target.parent().removeClass("active");
				moving = 0;
			});
		}else{
			if($target.is("a")){
				moving = 1;
				$target.parent().parent().find("a.active").next("p").slideUp(slideTime);
				$target.next("p").slideDown(slideTime,function(){
					$target.parent().parent().find("a").removeClass("active");
					$target.addClass("active");
					moving = 0;

				})
			}
		}
		
	}
		
		e.stopPropagation();
	})

	$("section.list-two ul.tab").click(function(e){
		var $target = $(e.target);

		if(!$target.hasClass("active")){
			$target.parent().parent().find("a.active").removeClass("active");
			$target.addClass("active");

			tabIndex = parseInt($target.attr("index"));
			
			$("section.list-two ul.tab-content li").eq(tabIndex-1).css({"display":"block"}).siblings().css({"display":"none"});

		}

		e.stopPropagation();
	})

})();


var mask = 0;
$("body").append($(" <div class="+"'mask'"+ "><img src='"+" "+ "'alt='mask'></div>"));
(function gallery(){
	var $a = $("section.sort>ul.bread a");
	$a.click(function(e){
		var $target = $(e.target);
		var Aindex = parseInt($target.attr("index")) -1;
		if(!$target.hasClass("active")){
			$target.parent().parent().find("a.active").removeClass("active");
			$target.addClass("active");
		}

		switch (Aindex){
			// case 0:disappear(0,1,2,3,4,5);break;
			// case 1:disappear(2,3);break;
			// case 2:disappear(1,4,5);break;
			// case 3:disappear(4);break;
			// case 4:disappear(2,3,5);break;
			// case 5:disappear(1,2,3,5);break;
			// default:;break;
			case 0:appear(0,1,2,3,4,5);break;
			case 1:appear(2,3);break;
			case 2:appear(1,4,5);break;
			case 3:appear(4);break;
			case 4:appear(2,3,5);break;
			case 5:appear(1,2,3,5);break;
			default:;break;
		}
			


	});


	var $eye = $("section.sort>ul.pictures div.img>span.circle");
	var $img = $("body>div.mask>img");
	$eye.click(function(e){
		var src =$(this).prev("img").attr("src");
		$img.attr({"src":src,}).parent().css({"display":"block"});
		e.stopPropagation();
		mask = 1;
	});
	$("body").click(function(e){
		if(mask === 1){
			mask = 0;
			$img.parent().css({"display":"none"});
		}
		e.stopPropagation();
	})

	/*make picture disappear*/
	var $pictures = $("section.sort>ul.pictures>li");
	// function disappear(num){
	// 	$pictures.css({"display":"inline-block"});
	// 	if(arguments){
	// 		for(var i in arguments){
	// 		if(i >= 0 || i <=5)
	// 		 $pictures.eq(arguments[i]).css({"display":"none"});
	// 		}
	// 	}	
	// }
	function appear(num){
		$pictures.css({"display":"none"});
		if(arguments){
			for(var i in arguments){
			if(i >= 0 || i <=5)
			 $pictures.eq(arguments[i]).fadeIn(700);
			}
		}	
	}
})();

(function contact(){
	var $input = $("section.u-contact input,section.u-contact textarea");

	$input.focus(function(e){
		if($(this).val() === ""){
			$(this).next("label").css({"top":"-1.2rem","font-size":"0.6rem"});
		}
	});
	$input.blur(function(e){
		if($(this).val() === ""){
			$(this).css({"height":"1.3rem"});
			$(this).next("label").css({"top":"0rem","font-size":"0.7rem"});
		}
	});
	$("section.u-contact textarea").keydown(function(e){
		if(e.which === 13){
			var rootFontSize = parseInt($("html").css("font-size"));
			var height = $(this).height();
			$(this).height(height + 1.3* rootFontSize);
		}
	});

})();



});