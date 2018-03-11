$(document).ready(function(){
			$("#search-input-txt").focus(function(){
				$("#show-list").css("display","block");
			}).blur(function(){
				$("#show-list").css("display","none");
			})

			$("#select-box").click(function(e){
				e.stopPropagation();
				$("#tab").css("display","block");
				$(".arrow-sm").css("background-position","-307.6px -465px");

			})
			$(document).click(function(){
				$("#tab").css("display","none");
				$(".arrow-sm").css("background-position","-338px -465px");
			})

			$("#tab li").each(function(index,value){
				$(value).click(function(e){
					e.stopPropagation();
					$("#tab").css("display","none");
					$(".arrow-sm").css("background-position","-338px -465px");
					 $("#select-txt").html($(this).children("a").html());
				})
			})

			$(function(){

			},1000)
			function moveOn(){

			}
	
			// $(function(){
			// 	var timer2;
			// 	timer2=setInterval(function(){
			// 		var timer;
			// 		var top = $("#move").css("top");
			// 		top = parseInt(top);
			// 		var count=0;	

			// 		if(top == -19)
			// 		{
			// 			$("#move").css("top","0px");
			// 		}


			// 		timer = setInterval(function(){
									
			// 		if(count == -19)
			// 		{
			// 			//$("#move").css("top","0px");
			// 			count=0;
			// 			clearInterval(timer);
			// 		}
			// 		else
			// 		{
			// 			count++;
			// 			top = top -1 +"px";
			// 			$("#move").css("top",top);
			// 		}

			// 		},20);
					
			// 	},2000);

			// });

			$('#arrow').click(function(){
				var classname = $(this).attr("class");
				classname = classname.slice(classname.indexOf(" ")+1);
				if(classname == "arrow-show")
				{
					
					$(".side-nav").animate({"left":"-50px"},600,function(){
						$("#arrow").attr({"class":"arrow-common arrow-hide"});
					});
				}
				else
				{
					
					$(".side-nav").animate({"left":"0px"},600,function(){
						$("#arrow").attr({"class":"arrow-common arrow-show"});
					});
				}
			})
		});
	
		function animate(objs,offset){
			var top = parseInt(objs.css("top")) + offset;
			var targetTop = top + "px";

			objs.animate({'top':targetTop},300,function(){
				if(top <= offset*2)
				{
					objs.css("top","0px");
				}
			})
		}
		function play(){
			setTimeout(function(){
				animate($("#move"),-19);
				animate($("#header-calender-container"),-16);
				play();
				console.log("play");
			},3000);
		}
		play();