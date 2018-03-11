$(function(){
	optHover();//绑定hover事件
	addGoods();//增加商品数量功能
	reduceGoods();//减少商品数量功能
	checkBox();//checkbox选择功能
	calSum();//计算最终金额
	removeGoods();//移除商品功能
})

// 增加输入框中的商品数量
function addGoods(){
	$("a.add").click(function(e){
		var $text = $(e.target).prev();
		var $parent = $(e.target).parent();
		var $sum = $parent.next().find("strong");
		if(parseInt($text.val()) >= 1){
			$parent.find(".reduce").removeClass("optDis");//当等于1时，去掉减号的disabled属性
		}
		$text.val(parseInt($text.val())+1); //更新 输入框商品数量
		var price = parseInt($parent.prev().find("span").html().slice(1));
		var sum = price * parseInt($text.val());
		$sum.html("￥" + sum); //更新 商品金额


		calSum();
	});
}
// 减小输入框中的商品数量
function reduceGoods(){
	$("a.reduce").each(function(index,val){
		if(parseInt($(val).next().val()) === 1){
			$(val).addClass("optDis");
		}

	});
	$("a.reduce").click(function(e){
		var $text = $(e.target).next();
		var $parent = $(e.target).parent();
		var $sum = $parent.next().find("strong");
		var num = parseInt($text.val());//获取输入框商品数量
		if(num > 1){
			$text.val(num-1); //更新 输入框商品数量
			var price = parseInt($parent.prev().find("span").html().slice(1));
			var sum = price * parseInt($text.val());
			$sum.html("￥" + sum); //更新 商品金额
			if(parseInt($text.val()) === 1){
				$(e.target).addClass("optDis");//如果当前只有一个商品，则禁掉减操作
			}
		}	
	
		calSum();
	});

}
//输入框加减hover css样式设定
function optHover(){
	$(".shopGoods .scItem_amount a").hover(function(e){
		$this = $(e.target);
		$this.css({"text-decoration":"none"});
		if(!$this.hasClass("optDis")){
			$this.css({"border":"1px solid #ff873e","z-index":"2"});
		}
	},function(e){
		$(e.target).css({
			"border":"1px solid #e5e5e5",
			"z-index":"auto"
		})
	})
}

//计算总的商品总额，更新结算金额
function calSum(){
	var sum = 0;
	var sum_s = '';
	var amount = 0;
	var amount_s = '';
	$(".shopCart_b .goodsCheck").each(function(index,val){
		if($(val).is(':checked')){
			amount_s = $(val).parent().parent().find(".scItem_amount .num").val();
			sum_s = $(val).parent().parent().find(".scItem_sum strong").html().slice(1);
			sum += parseInt(sum_s);
			amount += parseInt(amount_s);
		}

	});
	if(amount === 0){
		$(".shopCart_f .calculate").addClass("calDisa");
	}else{
		$(".shopCart_f .calculate").removeClass("calDisa");
	}

	$(".shopCart_f .TotalPrice strong").html("￥" + sum);
	$(".shopCart_f .selectGood strong").html(amount);


	
	//更新总件数

	
}
// checkbox 响应
function checkBox(){
	var timer = 0;
	//商品列表item选中
	$(".shopGoods label").click(function(e){
		var $this = $(e.target);
		if($this.hasClass("on")){
			$this.removeClass("on");
		}else{
			$this.addClass("on");
		}

		 clearTimeout(timer);
		 timer=setTimeout(function(){
		 	//判断改店铺的所有商品是否都选中
			var $shopGoods = $this.parent().parent().parent();
			var $shopName =$shopGoods.prev();
			var inputLen = $shopGoods.find(":checkbox").length;
			var checkedLen = $shopGoods.find(":checked").length;
			if(inputLen === checkedLen){
				$shopName.find(":checkbox").prop("checked",true).end().find("label").addClass("on");
			}else{
				$shopName.find(":checkbox").prop("checked",false).end().find("label").removeClass("on");
			}

			//判断是否所有商铺都被选中
			if($(".shopCart_b :checkbox").length === $(".shopCart_b :checked").length)
			{
				$(".shopCart_h :checkbox").prop("checked",true);
				$(".shopCart_h label").addClass("on");
			}else{
				$(".shopCart_h :checkbox").prop("checked",false);
				$(".shopCart_h label").removeClass("on");
			}

			// console.log($(".shopCart_b :checkbox").length);
			// console.log($(".shopCart_b :checked").length);
			// console.log($(".shopName :checkbox").length);
			// console.log($(".shopName :checkbox").find(":checked").length);


		 	calSum();
		 },10);          //延时一段时间，才能正确检测$(":checked")

		e.stopPropagation();
	})
	
	//商家对应商品item全选
	$(".shopName label").click(function(e){
		var $this = $(e.target);
		$parent = $this.parent();
		if($this.hasClass("on")){
			$this.removeClass("on");
			$parent.next().find("label").removeClass("on").prev().prop("checked",false);
		}else{
			$this.addClass("on");
			$parent.next().find("label").addClass("on").prev().prop("checked",true);
		}

		clearTimeout(timer);
		timer=setTimeout(function(){
		
		//判断是否所有商铺都被选中
			if($(".shopCart_b :checkbox").length === $(".shopCart_b :checked").length)
			{
				$(".shopCart_h :checkbox").prop("checked",true);
				$(".shopCart_h label").addClass("on");
			}else{
				$(".shopCart_h :checkbox").prop("checked",false);
				$(".shopCart_h label").removeClass("on");
			}
		// console.log($(".shopCart_b :checkbox").length);
		// 	console.log($(".shopCart_b :checked").length);

	    calSum();
		},10);

		e.stopPropagation();
	})
	//页面所有商品全选
	$(".shopCart_h label").click(function(e){
		$this = $(e.target);
		if($this.hasClass("on")){
			$this.removeClass("on");
			$(".shopCart_b label").removeClass("on").prev().prop("checked",false);
		}else{
			$this.addClass("on");
			$(".shopCart_b label").addClass("on").prev().prop("checked",true);
		}

		 calSum();

		e.stopPropagation();
	})

	//商品数量输入框
	$(".shopGoods .num").keyup(function(e){
		var $text = $(e.target);
		if($text.val() === ""){
			$text.val("1");
		}
		$text.val($text.val().replace(/\D|^0/g,""));//输入字符控制

		var $parent = $text.parent();
		var $sum = $parent.next().find("strong");
		var price = parseInt($parent.prev().find("span").html().slice(1));
		var sum = price * parseInt($text.val());
		$sum.html("￥" + sum); //更新 商品金额

		if(parseInt($text.val()) === 1){
				$text.prev().addClass("optDis");//如果当前只有一个商品，则禁掉减操作
		}
		else if(parseInt($text.val()) >= 1){
				$text.prev().removeClass("optDis");
		}

		calSum();
	})
}
function removeGoods(){
	var $shopCart_list;
	var $shopGoods;
	var $shopItem;
	//打开弹窗
	$(".shopCart_b .scItem_opt").click(function(e){
		$(".pop_mask").fadeIn();
		$shopCart_list = $(e.target).parent().parent();
		$shopGoods = $shopCart_list.parent();
		$shopItem = $shopGoods.parent();

	})

	//关闭弹窗
	$(".pop_mask .icon_close").click(function(){
		$(".pop_mask").fadeOut();
	})
	$(".pop_mask .btn_close").click(function(){
		$(".pop_mask").fadeOut();
	})
	$(".pop_mask .btn_sure").click(function(){
		$shopCart_list.remove();
		if($shopGoods.find("ul:visible").length === 0){
			$shopItem.remove();
		}
		$(".pop_mask").fadeOut(200,calSum);//隐藏，回调计算最终金额
	})
	

}