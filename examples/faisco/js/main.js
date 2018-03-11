//问题，屏幕拉伸，会改变布局，内容错乱


$(function(){
	//fullpage
	$('#fullpage').fullpage({
		scrollingSpeed: 600,
		css3: true,
		resize: false,
		anchors: ["page1","page2","page3","page4","page5","page6","page7"],
		verticalCentered: false,
		afterRender: function(){
			//window.location.hash = "#page1";//return to home page
		},
		onLeave:function(index , nextIndex, direction){
			if(index==1||index==2||index==3||index==4||index==5||index==6||index==7){
				$(".e-header,.e-btn,.ocontent,.t-header,.t-btn").css({"top":"60px","opacity":"0"});
					
			}
		},
		afterLoad: function(anchorLink,index){
			if(index == 1){
				$(".ocontent").stop().animate({"top":"0px","opacity":"1"},400);
				$(".dot_nav a").removeClass("on").eq(0).addClass("on").siblings().removeClass("on");
			}
			else if(index ==2){
				

				$(".t-header").stop().animate({"top":"0px","opacity":"1"},400,function(){
					$(".t-btn").stop().animate({"top":"0px","opacity":"1"},400);
				});
				$(".dot_nav a").removeClass("on").eq(1).addClass("on").siblings().removeClass("on");
			
			}
			else if(index ==3){
				$(".dot_nav a").removeClass("on").eq(2).addClass("on").siblings().removeClass("on");
			
			}
			else if(index ==4){
				$(".dot_nav a").removeClass("on").eq(3).addClass("on").siblings().removeClass("on");
			
			}
			else if(index ==5){
				$(".dot_nav a").removeClass("on").eq(4).addClass("on").siblings().removeClass("on");
			
			}
			else if(index ==6){
				$(".dot_nav a").removeClass("on").eq(5).addClass("on").siblings().removeClass("on");
			
			}
			else if(index ==7){
				$(".dot_nav a").removeClass("on").eq(6).addClass("on").siblings().removeClass("on");
			
			}


			if(index==3||index==4||index==5||index==6||index==7){
				$(".e-header").stop().animate({"top":"0px","opacity":"1"},400,function(){
					$(".e-btn").stop().animate({"top":"0px","opacity":"1"},400);
				});

			}
			//stop() 一定要加入进去

		}

	});
	//common dot nav
	$(".dot_nav a").click(function(){
		$(".dot_nav a").removeClass("on")
		$(this).addClass("on");
	});

	(function(){
		var imgSrc = [
			[
				{"src":"img/monitors1.png"},
				{"src":"img/monitors_1_1.png"},
				{"src":"img/monitors_1_2.png"},
				{"src":"img/monitors_1_3.png"},
				{"src":"img/monitors_1_4.png"},
				{"src":"img/monitors_1_5.png"},
				{"src":"img/monitors_1_6.png"},

			],
			[
				{"src":"img/monitors2.png"},
				{"src":"img/monitors_2_1.png"},
				{"src":"img/monitors_2_2.png"},
				{"src":"img/monitors_2_3.png"},
				{"src":"img/monitors_2_4.png"},
				{"src":"img/monitors_2_5.png"},
				{"src":"img/monitors_2_6.png"},

			],
			[
				{"src":"img/monitors3.png"},
				{"src":"img/monitors_3_1.png"},
				{"src":"img/monitors_3_2.png"},
				{"src":"img/monitors_3_3.png"},
				{"src":"img/monitors_3_4.png"},
				{"src":"img/monitors_3_5.png"},
				{"src":"img/monitors_3_6.png"},

			],
			[
				{"src":"img/monitors4.png"},
				{"src":"img/monitors_4_1.png"},
				{"src":"img/monitors_4_2.png"},
				{"src":"img/monitors_4_3.png"},
				{"src":"img/monitors_4_4.png"},
				{"src":"img/monitors_4_5.png"},
				{"src":"img/monitors_4_6.png"},

			]
		];

		$(".three .reg_btn").text("免费使用");

		$(".four .e-header img").attr({"src":imgSrc[1][0].src});
		$(".four .e-header h3").text("营销型网站模板");
		$(".four .e-header h5").text("轻松获取更多订单");
		$(".four .e-show img").each(function(index,val){
			val.src = imgSrc[1][index+1].src;
		});
		$(".four .reg_btn").text("免费下载");


		$(".five .e-header img").attr({"src":imgSrc[2][0].src});
		$(".five .e-header h3").text("在线商城模板");
		$(".five .e-header h5").text("在线交易一站式全搞定");
		$(".five .e-show img").each(function(index,val){
			val.src = imgSrc[2][index+1].src;
		});
		$(".five .reg_btn").text("免费下载");


		$(".six .e-header img").attr({"src":imgSrc[3][0].src});
		$(".six .e-header h3").text("通用型网站模板");
		$(".six .e-header h5").text("只为找到适合你的那一款");
		$(".six .e-show img").each(function(index,val){
			val.src = imgSrc[3][index+1].src;
		});
		$(".six .reg_btn").text("更多免费模板");


		console.log($("body").height());
		console.log($("body").width());

		$(window).resize(function(){
			return false;
		})

	})();
})