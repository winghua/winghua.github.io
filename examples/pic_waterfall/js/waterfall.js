window.onload=function(){
	waterfall();
	var json = {'data' : [{'src':'images/21.jpg'},{'src':'images/22.jpg'},{'src':'images/23.jpg'},{'src':'images/24.jpg'},]};
	window.onscroll = function(){

		if(checkScrollAction)
		{
			var oMainBox = document.getElementById('main');
			for(var i = 0; i < json.data.length;i++)
			{
				var newBox = document.createElement('div');
				newBox.className = 'box';
				oMainBox.appendChild(newBox);
				var newPic = document.createElement('div');
				newPic.className = 'pic';
				newBox.appendChild(newPic);
				var newImg = document.createElement('img');
				newImg.style.width = '200px';
				newImg.src = json.data[i].src;
				newPic.appendChild(newImg);
			}

			waterfall();
		}
	}
}

function waterfall(){
	var winW = document.documentElement.clientWidth,
		oMainBox = document.getElementById('main'),
		oBoxs = getByClass(oMainBox,'box'),
		cols = Math.floor((winW / oBoxs[0].offsetWidth)),
		arry = [];

		oMainBox.style.cssText= 'width:' + oBoxs[0].offsetWidth * cols + 'px' + '; margin:0 auto;position:relative';

		for(var i = 0; i < oBoxs.length;i++)
		{
			if(i < cols)
			{
				arry.push(oBoxs[i].offsetHeight);
			}
			else
			{
				var minH = Math.min.apply(null,arry),
					index = getIndexOfAttr(arry,minH),
					leftW = index * oBoxs[0].offsetWidth;

				oBoxs[i].style.position='absolute';
				oBoxs[i].style.left = leftW +'px';
				oBoxs[i].style.top = minH + 'px';

				arry[index] += oBoxs[i].offsetHeight;
			}

		}


}

function getIndexOfAttr(arry,attr)
{
	for(var i = 0; i < arry.length;i++)
	{
		if(arry[i] == attr)
			return i;
	}
}
function getByClass(oParent,classname)
{
	var oparent = oParent || document,
		ochild = oparent.getElementsByTagName('*'),
		targets = [];

	for(var i = 0; i < ochild.length;i++)
	{
		if(ochild[i].className == classname)
			targets.push(ochild[i]);
	}

	return targets;
}
function checkScrollAction()
{
	var oMainBox = document.getElementById('main'),
		oBoxs = getByClass(oMainBox,'box'),
		height = oBoxs[oBoxs.length-1].offsetTop + Math.floor((oBoxs[oBoxs.length-1].offsetHeight/2)),
		targetH = document.documentElement.clientHeight + document.documentElement.scrollTop;
		
		return (height < targetH) ?true:false;
}