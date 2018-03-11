综合
1 doctype 是什么
2 http协议
3 http报文结构
4 从浏览器地址输入url到显示页面的步骤
5 如何进行网站性能优化
6 渐进增强和优雅降级
7 http状态嘛及其含义
CSS

1 浮动会响应其他元素
比如会使text-decoration: none;失效，所以当失效时，注意要清除浮动，clear:both;

2 块级格式上下文（Block format context）BFC
3 清除浮动：
父级：+overflow:hidden
父级：+height;
父级：加空子元素 css属性 clear:both
4 如何水平居中
5 如何垂直居中
6 如何屏幕居中

7 什么是FOUC?如何避免
flash of unstyled content
8 link 和 @import 的区别
9 csshack原理和常用的hack
10 display:none 和visibility:hidden 的区别
11 css sprite 是什么
12 stacking context 层叠上下文

1)请求(客户端->服务端[request]) 
    GET(请求的方式) /newcoder/hello.html(请求的目标资源) HTTP/1.1(请求采用的协议和版本号) 
    Accept: */*(客户端能接收的资源类型) 
    Accept-Language: en-us(客户端接收的语言类型) 
    Connection: Keep-Alive(维护客户端和服务端的连接关系) 
    Host: localhost:8080(连接的目标主机和端口号) 
    Referer: http://localhost/links.asp(告诉服务器我来自于哪里) 
    User-Agent: Mozilla/4.0(客户端版本号的名字) 
    Accept-Encoding: gzip, deflate(客户端能接收的压缩数据的类型) 
    If-Modified-Since: Tue, 11 Jul 2000 18:23:51 GMT(缓存时间)  
    Cookie(客户端暂存服务端的信息) 
    Date: Tue, 11 Jul 2000 18:23:51 GMT(客户端请求服务端的时间)

2)响应(服务端->客户端[response])
    HTTP/1.1(响应采用的协议和版本号) 200(状态码) OK(描述信息)
    Location: http://www.baidu.com(服务端需要客户端访问的页面路径) 
    Server:apache tomcat(服务端的Web服务端名)
    Content-Encoding: gzip(服务端能够发送压缩编码类型) 
    Content-Length: 80(服务端发送的压缩数据的长度) 
    Content-Language: zh-cn(服务端发送的语言类型) 
    Content-Type: text/html; charset=GB2312(服务端发送的类型及采用的编码方式)
    Last-Modified: Tue, 11 Jul 2000 18:23:51 GMT(服务端对该资源最后修改的时间)
    Refresh: 1;url=http://www.it315.org(服务端要求客户端1秒钟后，刷新，然后访问指定的页面路径)
    Content-Disposition: attachment; filename=aaa.zip(服务端要求客户端以下载文件的方式打开该文件)
    Transfer-Encoding: chunked(分块传递数据到客户端）  
    Set-Cookie:SS=Q0=5Lb_nQ; path=/search(服务端发送到客户端的暂存数据)
    Expires: -1//3种(服务端禁止客户端缓存页面数据)
    Cache-Control: no-cache(服务端禁止客户端缓存页面数据)  
    Pragma: no-cache(服务端禁止客户端缓存页面数据)   
    Connection: close(1.0)/(1.1)Keep-Alive(维护客户端和服务端的连接关系)  
    Date: Tue, 11 Jul 2000 18:23:51 GMT(服务端响应客户端的时间)
在服务器响应客户端的时候，带上Access-Control-Allow-Origin头信息，解决跨域的一种方法。



1.CORS
CORS（Corss-Origin Resource Sharing,跨资源共享），基本思想是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应的成功或失败。即给请求附加一个额外的Origin头部，其中包含请求页面的源信息（协议、域名和端口），以便服务器根据这个头部决定是否给予响应。
2.document.domain
将页面的document.domain设置为相同的值，页面间可以互相访问对方的JavaScript对象。
注意：
不能将值设置为URL中不包含的域；
松散的域名不能再设置为紧绷的域名。
3.图像Ping
var img=new Image();
img.onload=img.onerror=function(){
... ...
}
img.src="url?name=value";
请求数据通过查询字符串的形式发送，响应可以是任意内容，通常是像素图或204响应。
图像Ping最常用于跟踪用户点击页面或动态广告曝光次数。
缺点：
只能发送GET请求；
无法访问服务器的响应文本，只能用于浏览器与服务器间的单向通信。
4.Jsonp
var script=document.createElement("script");
script.src="url?callback=handleResponse";
document.body.insertBefore(script,document.body.firstChild);
JSONP由两部分组成：回调函数和数据
回调函数是接收到响应时应该在页面中调用的函数，其名字一般在请求中指定。
数据是传入回调函数中的JSON数据。
优点：
能够直接访问响应文本，可用于浏览器与服务器间的双向通信。
缺点：
JSONP从其他域中加载代码执行，其他域可能不安全；
难以确定JSONP请求是否失败。
5.Comet
Comet可实现服务器向浏览器推送数据。
Comet是实现方式：长轮询和流
短轮询即浏览器定时向服务器发送请求，看有没有数据更新。
长轮询即浏览器向服务器发送一个请求，然后服务器一直保持连接打开，直到有数据可发送。发送完数据后，浏览器关闭连接，随即又向服务器发起一个新请求。其优点是所有浏览器都支持，使用XHR对象和setTimeout()即可实现。
流即浏览器向服务器发送一个请求，而服务器保持连接打开，然后周期性地向浏览器发送数据，页面的整个生命周期内只使用一个HTTP连接。
6.WebSocket
WebSocket可在一个单独的持久连接上提供全双工、双向通信。
WebSocket使用自定义协议，未加密的连接时ws://；加密的链接是wss://。
var webSocket=new WebSocket("ws://");
webSocket.send(message);
webSocket.onmessage=function(event){
var data=event.data;
... ....
}
注意：
必须给WebSocket构造函数传入绝对URL；
WebSocket可以打开任何站点的连接，是否会与某个域中的页面通信，完全取决于服务器；
WebSocket只能发送纯文本数据，对于复杂的数据结构，在发送之前必须进行序列化JSON.stringify(message))。
优点：
在客户端和服务器之间发送非常少的数据，减少字节开销。




1.CORS
CORS（Corss-Origin Resource Sharing,跨资源共享），基本思想是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应的成功或失败。即给请求附加一个额外的Origin头部，其中包含请求页面的源信息（协议、域名和端口），以便服务器根据这个头部决定是否给予响应。
2.document.domain
将页面的document.domain设置为相同的值，页面间可以互相访问对方的JavaScript对象。
注意：
不能将值设置为URL中不包含的域；
松散的域名不能再设置为紧绷的域名。
3.图像Ping
var img=new Image();
img.onload=img.onerror=function(){
... ...
}
img.src="url?name=value";
请求数据通过查询字符串的形式发送，响应可以是任意内容，通常是像素图或204响应。
图像Ping最常用于跟踪用户点击页面或动态广告曝光次数。
缺点：
只能发送GET请求；
无法访问服务器的响应文本，只能用于浏览器与服务器间的单向通信。
4.Jsonp
var script=document.createElement("script");
script.src="url?callback=handleResponse";
document.body.insertBefore(script,document.body.firstChild);
JSONP由两部分组成：回调函数和数据
回调函数是接收到响应时应该在页面中调用的函数，其名字一般在请求中指定。
数据是传入回调函数中的JSON数据。
优点：
能够直接访问响应文本，可用于浏览器与服务器间的双向通信。
缺点：
JSONP从其他域中加载代码执行，其他域可能不安全；
难以确定JSONP请求是否失败。
5.Comet
Comet可实现服务器向浏览器推送数据。
Comet是实现方式：长轮询和流
短轮询即浏览器定时向服务器发送请求，看有没有数据更新。
长轮询即浏览器向服务器发送一个请求，然后服务器一直保持连接打开，直到有数据可发送。发送完数据后，浏览器关闭连接，随即又向服务器发起一个新请求。其优点是所有浏览器都支持，使用XHR对象和setTimeout()即可实现。
流即浏览器向服务器发送一个请求，而服务器保持连接打开，然后周期性地向浏览器发送数据，页面的整个生命周期内只使用一个HTTP连接。
6.WebSocket
WebSocket可在一个单独的持久连接上提供全双工、双向通信。
WebSocket使用自定义协议，未加密的连接时ws://；加密的链接是wss://。
var webSocket=new WebSocket("ws://");
webSocket.send(message);
webSocket.onmessage=function(event){
var data=event.data;
... ....
}
注意：
必须给WebSocket构造函数传入绝对URL；
WebSocket可以打开任何站点的连接，是否会与某个域中的页面通信，完全取决于服务器；
WebSocket只能发送纯文本数据，对于复杂的数据结构，在发送之前必须进行序列化JSON.stringify(message))。
优点：
在客户端和服务器之间发送非常少的数据，减少字节开销。




ajax的事件是： 
ajaxError(callback) 
ajaxSend(callback) 
ajaxStart(callback) 
ajaxStop(callback) 
ajaxSuccess(callback)
ajaxComplete(callback) 



JS中，可以将对象分为“内部对象”、“宿主对象”和“自定义对象”三种。
1，内部对象
js中的内部对象包括Array、Boolean、Date、Function、Global、Math、Number、Object、RegExp、String以及各种错误类对象，包括Error、EvalError、RangeError、ReferenceError、SyntaxError和TypeError。
其中Global和Math这两个对象又被称为“内置对象”，这两个对象在脚本程序初始化时被创建，不必实例化这两个对象。

2.宿主对象

宿主对象就是执行JS脚本的环境提供的对象。对于嵌入到网页中的JS来说，其宿主对象就是浏览器提供的对象，所以又称为浏览器对象，如IE、Firefox等浏览器提供的对象。不同的浏览器提供的宿主对象可能不同，即使提供的对象相同，其实现方式也大相径庭！这会带来浏览器兼容问题，增加开发难度。
浏览器对象有很多，如Window和Documen，Element，form，image，等等。

3.自定义对象

顾名思义，就是开发人员自己定义的对象。JS允许使用自定义对象，使JS应用及功能得到扩充



Ajax的优势
可搜索性 
普通的文本网页会更有利于SEO。文本内容是搜索引擎容易检索的，而繁琐的swf字节码却是搜索引擎不愿触及的。虽然Google等一些大型的搜索引擎可以检索SWF内部的内容，但是仍然有很多麻烦存在。
开放性 
Flash常年以来被Macromedia看的很死。包括Flex、FMS等辅佐技术一直都需要昂贵的安装、维护费用。而JS则没有这样的麻烦。没有人愿意承担法律和版权的风险。
费用 
Flash开发是很昂贵的，因为FlashIDE等环境都是要收费的．而Ajax则不同．虽然有一些便宜的生成swf的工具，但是他们的工能实在无法满足复杂需求。
易用性 
Ajax程序有更好的易用性。由于中间有一层Flashplayer代理层，因此许多辅助功能无法被Flash灵活利用。而且Flash在一些方面有着不好的口碑。比如弹出广告、比如恶意代码。
（awflasher.com个人认为这八成是乱上xx网站造成的）
易于开发 
人们开发复杂的Ajax和Flash应用程序时，都会借助一些高级的开发工具。普遍来说，Ajax的开发包比Flash简便、容易。
Flash的优势 
多媒体处理 
Flash在音频、视频等多媒体领域相比HTML有绝对的优势。现在几乎所有的网站都包含有Flash内容。
兼容性 
兼容性好：由于通过了唯一的FlashPlayer“代理”。人们不必像调试JS那样，在不同的浏览器中调试程序。
矢量图型 
这是Flash最大的优势，同样处在这一领域的SVG、Canvas element以及Direct完全不能与Flash相比。
客户端资源调度 
Flash能够更容易的调用浏览器以外的外部资源。比如摄像头、麦克风等。然而这是普通的HTML无法完成的。但是这也许是一个缺点

1.Ajax的优势：1.可搜索性 2.开放性 3.费用 4.易用性 5.易于开发。
2.Flash的优势：1.多媒体处理 2.兼容性 3.矢量图形 4.客户端资源调度
3.Ajax的劣势：1.它可能破坏浏览器的后退功能   2.使用动态页面更新使得用户难于将某个特定的状态保存到收藏夹中 ，不过这些都有相关方法解决。
4.Flash的劣势：1.二进制格式 2.格式私有 3.flash 文件经常会很大，用户第一次使用的时候需要忍耐较长的等待时间  4.性能问题


不可继承的：display、margin、border、padding、background、height、min-height、max- height、width、min-width、max-width、overflow、position、left、right、top、 bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、 page-bread-before和unicode-bidi。 

所有元素可继承：visibility和cursor。 

内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction。 

块状元素可继承：text-indent和text-align。 

列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。 

表格元素可继承：border-collapse。 




typeof Symbol()    //"symbol"
typeof Number()    //"number"
typeof String()    //"string"
typeof Function()    //"function"
typeof Object()    //"object"
typeof Boolean()    //"boolean"
typeof null    //"object"
typeof undefined    //"undefined"

$("#add_all").click(function(){
		var $select = $("#select1 option");
		$select.appendTo("#select2");
	})
appendTo 方法可以直接把原节点元素添加到新的元素下，而不用增加删除该元素的操作


第一等：代表内联样式，如: style=””，权值为1000。
第二等：代表ID选择器，如：#content，权值为0100。
第三等：代表类，伪类和属性选择器，如.content，权值为0010。
第四等：代表类型选择器和伪元素选择器，如div p，权值为0001。
通配符、子选择器、相邻选择器等的。如 、>、+,权值为0000。 


jquery
$("div").find(".test") 查找所有div的后代，匹配所有的类为test的元素
$("div").filter(".test") 查找所有的div,匹配所有类为test的div元素
$(".btn").click(function(){
	/////
	return false; //这个是阻止默认和冒泡事件
})


可以对元素的margin设置百分数，百分数是相对于父元素的width计算，不管是margin-top/margin-bottom还是margin-left/margin-right。（padding同理）

iframe可用在以下几个场景中：
1：典型系统结构，左侧是功能树，右侧就是一些常见的table或者表单之类的。为了每一个功能，单独分离出来，采用iframe。 
2：ajax上传文件。 
3：加载别的网站内容，例如google广告，网站流量分析。
4： 在上传图片时，不用flash实现无刷新。
5： 跨域访问的时候可以用到iframe，使用iframe请求不同域名下的资源。

在HTML中，引入CSS的方法主要有___行内式____、___内嵌式___、___导入式___、___链接式__4种


正则表达式：
匹配所有的中文： [\u4E00-\u9FA5]
匹配ASCII值从0-127的字符    [x00-x7f]     



















summary:
1 http 协议
2 css页面布局：flex布局，div+span布局
3 图片预加载
4 跨域请求
5 js 内置对象，宿主对象，自定义对象
6 jq框架使用：选择器，dom操作，css操作，事件，动画，ajax
7 html 各种标签
8 盒子模型
9 框架：boostrap,fullpage.js


input checkbox 选中后要一段时间：checked 才开始生效，才能用$(":checked")检测