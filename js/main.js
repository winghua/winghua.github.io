;$(function(){
	var $bannerImg = $("section.banner img");
	var $bannerLi = $("section.banner>ul>li");
	var $bannerIcon = $("section.banner>ul>li>i");
	var $bannerP = $("section.banner>ul p");
	var imgWidth = 0;
	var imgHeight = 0;

	bannerBegin();

	var $container = $("#isotope-works-items");
	var $sort = $("section.sort ul.bread a");
	$container.imagesLoaded(function(){
		$(this).isotope({
			itemSelector:".works-item",
			});
	});
	$sort.click(function(e){
		var $this = $(e.target);
		var attr ="";
		// change color of a ;
		if(!$this.hasClass("active")){
			$this.parent().parent().find("a.active").removeClass("active");
			$this.addClass("active");
		}

		attr = $this.attr("data-filter");
		$container.isotope({ filter: attr });

		e.preventDefault();
		e.stopPropagation();
	});


	$(window).resize(function(){
		bannerResize();
		$container.isotope('reLayout');
	});

	function bannerBegin(){
		imgWidth = $bannerImg.width();
		imgHeight = $bannerImg.height();
		$bannerP.css({"font-size":imgWidth*0.025});
		$bannerIcon.css({"font-size":imgWidth*0.08});
		$bannerLi.eq(0).css({"opacity":"0","top":(imgHeight*0.13),"left":"-20px"}).animate({"opacity":"1","left":(imgWidth*0.18)},700);
		$bannerLi.eq(1).css({"opacity":"0","top":"-20px","left":(imgWidth*0.50)}).animate({"opacity":"1","top":(imgHeight*0.26)},700);
		$bannerLi.eq(2).css({"opacity":"0","top":(imgHeight+20),"left":(imgWidth*0.67)}).animate({"opacity":"1","top":(imgHeight*0.65)},700);
		$bannerLi.eq(3).css({"opacity":"0","top":(imgHeight*0.34),"left":(imgWidth+20)}).animate({"opacity":"1","left":(imgWidth*0.80)},700);
	}
	function bannerResize(){
		imgWidth = $bannerImg.width();
		imgHeight = $bannerImg.height();
		$bannerP.css({"font-size":imgWidth*0.025});
		$bannerIcon.css({"font-size":imgWidth*0.08});
		$bannerLi.eq(0).css({"top":(imgHeight*0.13),"left":(imgWidth*0.18)});
		$bannerLi.eq(1).css({"top":(imgHeight*0.26),"left":(imgWidth*0.50)});
		$bannerLi.eq(2).css({"top":(imgHeight*0.65),"left":(imgWidth*0.67)});
		$bannerLi.eq(3).css({"top":(imgHeight*0.34),"left":(imgWidth*0.80)});		
	}
		
});