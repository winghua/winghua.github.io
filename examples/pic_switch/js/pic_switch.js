$(function(){
	var $img = $(".imgList li");
	var $prev = $(".prev");
	var $next = $(".next");
	var animated = false;
	var imgLen = $img.length;
	var timer = 0;
	var autoPause = false;
	var moveSpeed = 800;
	var autoSpeed = 5000;

	var datas = [
		{"z-index":4,"width":"600px","height":"300px","top":"200px","left":"300px","opacity":"1"},
		{"z-index":3,"width":"500px","height":"260px","top":"240px","left":"60px","opacity":"0.6"},
		{"z-index":2,"width":"400px","height":"210px","top":"150px","left":"150px","opacity":"0.4"},
		{"z-index":1,"width":"400px","height":"210px","top":"120px","left":"400px","opacity":"0.3"},
		{"z-index":2,"width":"400px","height":"210px","top":"150px","left":"650px","opacity":"0.4"},
		{"z-index":3,"width":"500px","height":"260px","top":"240px","left":"640px","opacity":"0.6"}
	];

	locate();
	autoMove();

	//当鼠标悬浮到banner上时，自动轮播停止
	$(".banner").hover(function(){
		autoPause = true;
		clearTimeout(timer);
	},function(){
		autoPause = false;
		autoMove();
	})


	function locate(){
	$img.each(function(index,val){
		$(val).css(datas[index]);
	})
}

	//自动轮播
	function autoMove(){
		if(!autoPause){
			timer = setTimeout(function(){
				$(".btn .next").click();
				autoMove();
			},autoSpeed);
		}
	}
	//按键
	$(".btn .next").click(function(){
		if(!animated){
			animated = true;
			var temp = datas.pop();
			datas.unshift(temp);
			$img.each(function(index,val){
			$(val).css({"z-index":datas[index]['z-index']});
			$(val).animate(datas[index],moveSpeed,function(){ 
				if(index === imgLen-1){
					animated = false; 
				}
				});
			});
		}
		
	})
	$(".btn .prev").click(function(){
		if(!animated){
			animated = true;
			var temp = datas.shift();
			datas.push(temp);
			$img.each(function(index,val){
				$(val).css({"z-index":datas[index]['z-index']});
				$(val).animate(datas[index],moveSpeed,function(){
					if(index === imgLen-1){
					animated = false; 
				}
				});
			});
	}
	})
})
