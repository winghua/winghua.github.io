�ۺ�
1 doctype ��ʲô
2 httpЭ��
3 http���Ľṹ
4 ���������ַ����url����ʾҳ��Ĳ���
5 ��ν�����վ�����Ż�
6 ������ǿ�����Ž���
7 http״̬�Ｐ�京��
CSS

1 ��������Ӧ����Ԫ��
�����ʹtext-decoration: none;ʧЧ�����Ե�ʧЧʱ��ע��Ҫ���������clear:both;

2 �鼶��ʽ�����ģ�Block format context��BFC
3 ���������
������+overflow:hidden
������+height;
�������ӿ���Ԫ�� css���� clear:both
4 ���ˮƽ����
5 ��δ�ֱ����
6 �����Ļ����

7 ʲô��FOUC?��α���
flash of unstyled content
8 link �� @import ������
9 csshackԭ��ͳ��õ�hack
10 display:none ��visibility:hidden ������
11 css sprite ��ʲô
12 stacking context ���������

1)����(�ͻ���->�����[request]) 
    GET(����ķ�ʽ) /newcoder/hello.html(�����Ŀ����Դ) HTTP/1.1(������õ�Э��Ͱ汾��) 
    Accept: */*(�ͻ����ܽ��յ���Դ����) 
    Accept-Language: en-us(�ͻ��˽��յ���������) 
    Connection: Keep-Alive(ά���ͻ��˺ͷ���˵����ӹ�ϵ) 
    Host: localhost:8080(���ӵ�Ŀ�������Ͷ˿ں�) 
    Referer: http://localhost/links.asp(���߷�����������������) 
    User-Agent: Mozilla/4.0(�ͻ��˰汾�ŵ�����) 
    Accept-Encoding: gzip, deflate(�ͻ����ܽ��յ�ѹ�����ݵ�����) 
    If-Modified-Since: Tue, 11 Jul 2000 18:23:51 GMT(����ʱ��)  
    Cookie(�ͻ����ݴ����˵���Ϣ) 
    Date: Tue, 11 Jul 2000 18:23:51 GMT(�ͻ����������˵�ʱ��)

2)��Ӧ(�����->�ͻ���[response])
    HTTP/1.1(��Ӧ���õ�Э��Ͱ汾��) 200(״̬��) OK(������Ϣ)
    Location: http://www.baidu.com(�������Ҫ�ͻ��˷��ʵ�ҳ��·��) 
    Server:apache tomcat(����˵�Web�������)
    Content-Encoding: gzip(������ܹ�����ѹ����������) 
    Content-Length: 80(����˷��͵�ѹ�����ݵĳ���) 
    Content-Language: zh-cn(����˷��͵���������) 
    Content-Type: text/html; charset=GB2312(����˷��͵����ͼ����õı��뷽ʽ)
    Last-Modified: Tue, 11 Jul 2000 18:23:51 GMT(����˶Ը���Դ����޸ĵ�ʱ��)
    Refresh: 1;url=http://www.it315.org(�����Ҫ��ͻ���1���Ӻ�ˢ�£�Ȼ�����ָ����ҳ��·��)
    Content-Disposition: attachment; filename=aaa.zip(�����Ҫ��ͻ����������ļ��ķ�ʽ�򿪸��ļ�)
    Transfer-Encoding: chunked(�ֿ鴫�����ݵ��ͻ��ˣ�  
    Set-Cookie:SS=Q0=5Lb_nQ; path=/search(����˷��͵��ͻ��˵��ݴ�����)
    Expires: -1//3��(����˽�ֹ�ͻ��˻���ҳ������)
    Cache-Control: no-cache(����˽�ֹ�ͻ��˻���ҳ������)  
    Pragma: no-cache(����˽�ֹ�ͻ��˻���ҳ������)   
    Connection: close(1.0)/(1.1)Keep-Alive(ά���ͻ��˺ͷ���˵����ӹ�ϵ)  
    Date: Tue, 11 Jul 2000 18:23:51 GMT(�������Ӧ�ͻ��˵�ʱ��)
�ڷ�������Ӧ�ͻ��˵�ʱ�򣬴���Access-Control-Allow-Originͷ��Ϣ����������һ�ַ�����



1.CORS
CORS��Corss-Origin Resource Sharing,����Դ����������˼����ʹ���Զ����HTTPͷ�������������������й�ͨ���Ӷ������������Ӧ�ĳɹ���ʧ�ܡ��������󸽼�һ�������Originͷ�������а�������ҳ���Դ��Ϣ��Э�顢�����Ͷ˿ڣ����Ա�������������ͷ�������Ƿ������Ӧ��
2.document.domain
��ҳ���document.domain����Ϊ��ͬ��ֵ��ҳ�����Ի�����ʶԷ���JavaScript����
ע�⣺
���ܽ�ֵ����ΪURL�в���������
��ɢ����������������Ϊ������������
3.ͼ��Ping
var img=new Image();
img.onload=img.onerror=function(){
... ...
}
img.src="url?name=value";
��������ͨ����ѯ�ַ�������ʽ���ͣ���Ӧ�������������ݣ�ͨ��������ͼ��204��Ӧ��
ͼ��Ping����ڸ����û����ҳ���̬����ع������
ȱ�㣺
ֻ�ܷ���GET����
�޷����ʷ���������Ӧ�ı���ֻ��������������������ĵ���ͨ�š�
4.Jsonp
var script=document.createElement("script");
script.src="url?callback=handleResponse";
document.body.insertBefore(script,document.body.firstChild);
JSONP����������ɣ��ص�����������
�ص������ǽ��յ���ӦʱӦ����ҳ���е��õĺ�����������һ����������ָ����
�����Ǵ���ص������е�JSON���ݡ�
�ŵ㣺
�ܹ�ֱ�ӷ�����Ӧ�ı������������������������˫��ͨ�š�
ȱ�㣺
JSONP���������м��ش���ִ�У���������ܲ���ȫ��
����ȷ��JSONP�����Ƿ�ʧ�ܡ�
5.Comet
Comet��ʵ�ַ�������������������ݡ�
Comet��ʵ�ַ�ʽ������ѯ����
����ѯ���������ʱ��������������󣬿���û�����ݸ��¡�
����ѯ������������������һ������Ȼ�������һֱ�������Ӵ򿪣�ֱ�������ݿɷ��͡����������ݺ�������ر����ӣ��漴�������������һ�����������ŵ��������������֧�֣�ʹ��XHR�����setTimeout()����ʵ�֡�
��������������������һ�����󣬶��������������Ӵ򿪣�Ȼ�������Ե���������������ݣ�ҳ�����������������ֻʹ��һ��HTTP���ӡ�
6.WebSocket
WebSocket����һ�������ĳ־��������ṩȫ˫����˫��ͨ�š�
WebSocketʹ���Զ���Э�飬δ���ܵ�����ʱws://�����ܵ�������wss://��
var webSocket=new WebSocket("ws://");
webSocket.send(message);
webSocket.onmessage=function(event){
var data=event.data;
... ....
}
ע�⣺
�����WebSocket���캯���������URL��
WebSocket���Դ��κ�վ������ӣ��Ƿ����ĳ�����е�ҳ��ͨ�ţ���ȫȡ���ڷ�������
WebSocketֻ�ܷ��ʹ��ı����ݣ����ڸ��ӵ����ݽṹ���ڷ���֮ǰ����������л�JSON.stringify(message))��
�ŵ㣺
�ڿͻ��˺ͷ�����֮�䷢�ͷǳ��ٵ����ݣ������ֽڿ�����




1.CORS
CORS��Corss-Origin Resource Sharing,����Դ����������˼����ʹ���Զ����HTTPͷ�������������������й�ͨ���Ӷ������������Ӧ�ĳɹ���ʧ�ܡ��������󸽼�һ�������Originͷ�������а�������ҳ���Դ��Ϣ��Э�顢�����Ͷ˿ڣ����Ա�������������ͷ�������Ƿ������Ӧ��
2.document.domain
��ҳ���document.domain����Ϊ��ͬ��ֵ��ҳ�����Ի�����ʶԷ���JavaScript����
ע�⣺
���ܽ�ֵ����ΪURL�в���������
��ɢ����������������Ϊ������������
3.ͼ��Ping
var img=new Image();
img.onload=img.onerror=function(){
... ...
}
img.src="url?name=value";
��������ͨ����ѯ�ַ�������ʽ���ͣ���Ӧ�������������ݣ�ͨ��������ͼ��204��Ӧ��
ͼ��Ping����ڸ����û����ҳ���̬����ع������
ȱ�㣺
ֻ�ܷ���GET����
�޷����ʷ���������Ӧ�ı���ֻ��������������������ĵ���ͨ�š�
4.Jsonp
var script=document.createElement("script");
script.src="url?callback=handleResponse";
document.body.insertBefore(script,document.body.firstChild);
JSONP����������ɣ��ص�����������
�ص������ǽ��յ���ӦʱӦ����ҳ���е��õĺ�����������һ����������ָ����
�����Ǵ���ص������е�JSON���ݡ�
�ŵ㣺
�ܹ�ֱ�ӷ�����Ӧ�ı������������������������˫��ͨ�š�
ȱ�㣺
JSONP���������м��ش���ִ�У���������ܲ���ȫ��
����ȷ��JSONP�����Ƿ�ʧ�ܡ�
5.Comet
Comet��ʵ�ַ�������������������ݡ�
Comet��ʵ�ַ�ʽ������ѯ����
����ѯ���������ʱ��������������󣬿���û�����ݸ��¡�
����ѯ������������������һ������Ȼ�������һֱ�������Ӵ򿪣�ֱ�������ݿɷ��͡����������ݺ�������ر����ӣ��漴�������������һ�����������ŵ��������������֧�֣�ʹ��XHR�����setTimeout()����ʵ�֡�
��������������������һ�����󣬶��������������Ӵ򿪣�Ȼ�������Ե���������������ݣ�ҳ�����������������ֻʹ��һ��HTTP���ӡ�
6.WebSocket
WebSocket����һ�������ĳ־��������ṩȫ˫����˫��ͨ�š�
WebSocketʹ���Զ���Э�飬δ���ܵ�����ʱws://�����ܵ�������wss://��
var webSocket=new WebSocket("ws://");
webSocket.send(message);
webSocket.onmessage=function(event){
var data=event.data;
... ....
}
ע�⣺
�����WebSocket���캯���������URL��
WebSocket���Դ��κ�վ������ӣ��Ƿ����ĳ�����е�ҳ��ͨ�ţ���ȫȡ���ڷ�������
WebSocketֻ�ܷ��ʹ��ı����ݣ����ڸ��ӵ����ݽṹ���ڷ���֮ǰ����������л�JSON.stringify(message))��
�ŵ㣺
�ڿͻ��˺ͷ�����֮�䷢�ͷǳ��ٵ����ݣ������ֽڿ�����




ajax���¼��ǣ� 
ajaxError(callback) 
ajaxSend(callback) 
ajaxStart(callback) 
ajaxStop(callback) 
ajaxSuccess(callback)
ajaxComplete(callback) 



JS�У����Խ������Ϊ���ڲ����󡱡����������󡱺͡��Զ���������֡�
1���ڲ�����
js�е��ڲ��������Array��Boolean��Date��Function��Global��Math��Number��Object��RegExp��String�Լ����ִ�������󣬰���Error��EvalError��RangeError��ReferenceError��SyntaxError��TypeError��
����Global��Math�����������ֱ���Ϊ�����ö��󡱣������������ڽű������ʼ��ʱ������������ʵ��������������

2.��������

�����������ִ��JS�ű��Ļ����ṩ�Ķ��󡣶���Ƕ�뵽��ҳ�е�JS��˵���������������������ṩ�Ķ��������ֳ�Ϊ�����������IE��Firefox��������ṩ�Ķ��󡣲�ͬ��������ṩ������������ܲ�ͬ����ʹ�ṩ�Ķ�����ͬ����ʵ�ַ�ʽҲ���ྶͥ��������������������⣬���ӿ����Ѷȡ�
����������кܶ࣬��Window��Documen��Element��form��image���ȵȡ�

3.�Զ������

����˼�壬���ǿ�����Ա�Լ�����Ķ���JS����ʹ���Զ������ʹJSӦ�ü����ܵõ�����



Ajax������
�������� 
��ͨ���ı���ҳ���������SEO���ı������������������׼����ģ���������swf�ֽ���ȴ���������治Ը�����ġ���ȻGoogle��һЩ���͵�����������Լ���SWF�ڲ������ݣ�������Ȼ�кܶ��鷳���ڡ�
������ 
Flash����������Macromedia���ĺ���������Flex��FMS�ȸ�������һֱ����Ҫ����İ�װ��ά�����á���JS��û���������鷳��û����Ը��е����ɺͰ�Ȩ�ķ��ա�
���� 
Flash�����Ǻܰ���ģ���ΪFlashIDE�Ȼ�������Ҫ�շѵģ���Ajax��ͬ����Ȼ��һЩ���˵�����swf�Ĺ��ߣ��������ǵĹ���ʵ���޷����㸴������
������ 
Ajax�����и��õ������ԡ������м���һ��Flashplayer����㣬�����ศ�������޷���Flash������á�����Flash��һЩ�������Ų��õĿڱ������絯����桢���������롣
��awflasher.com������Ϊ��˳�������xx��վ��ɵģ�
���ڿ��� 
���ǿ������ӵ�Ajax��FlashӦ�ó���ʱ���������һЩ�߼��Ŀ������ߡ��ձ���˵��Ajax�Ŀ�������Flash��㡢���ס�
Flash������ 
��ý�崦�� 
Flash����Ƶ����Ƶ�ȶ�ý���������HTML�о��Ե����ơ����ڼ������е���վ��������Flash���ݡ�
������ 
�����Ժã�����ͨ����Ψһ��FlashPlayer�����������ǲ��������JS�������ڲ�ͬ��������е��Գ���
ʸ��ͼ�� 
����Flash�������ƣ�ͬ��������һ�����SVG��Canvas element�Լ�Direct��ȫ������Flash��ȡ�
�ͻ�����Դ���� 
Flash�ܹ������׵ĵ��������������ⲿ��Դ����������ͷ����˷�ȡ�Ȼ��������ͨ��HTML�޷���ɵġ�������Ҳ����һ��ȱ��

1.Ajax�����ƣ�1.�������� 2.������ 3.���� 4.������ 5.���ڿ�����
2.Flash�����ƣ�1.��ý�崦�� 2.������ 3.ʸ��ͼ�� 4.�ͻ�����Դ����
3.Ajax�����ƣ�1.�������ƻ�������ĺ��˹���   2.ʹ�ö�̬ҳ�����ʹ���û����ڽ�ĳ���ض���״̬���浽�ղؼ��� ��������Щ������ط��������
4.Flash�����ƣ�1.�����Ƹ�ʽ 2.��ʽ˽�� 3.flash �ļ�������ܴ��û���һ��ʹ�õ�ʱ����Ҫ���ͽϳ��ĵȴ�ʱ��  4.��������


���ɼ̳еģ�display��margin��border��padding��background��height��min-height��max- height��width��min-width��max-width��overflow��position��left��right��top�� bottom��z-index��float��clear��table-layout��vertical-align��page-break-after�� page-bread-before��unicode-bidi�� 

����Ԫ�ؿɼ̳У�visibility��cursor�� 

����Ԫ�ؿɼ̳У�letter-spacing��word-spacing��white-space��line-height��color��font�� font-family��font-size��font-style��font-variant��font-weight��text- decoration��text-transform��direction�� 

��״Ԫ�ؿɼ̳У�text-indent��text-align�� 

�б�Ԫ�ؿɼ̳У�list-style��list-style-type��list-style-position��list-style-image�� 

���Ԫ�ؿɼ̳У�border-collapse�� 




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
appendTo ��������ֱ�Ӱ�ԭ�ڵ�Ԫ����ӵ��µ�Ԫ���£�����������ɾ����Ԫ�صĲ���


��һ�ȣ�����������ʽ����: style=������ȨֵΪ1000��
�ڶ��ȣ�����IDѡ�������磺#content��ȨֵΪ0100��
�����ȣ������࣬α�������ѡ��������.content��ȨֵΪ0010��
���ĵȣ���������ѡ������αԪ��ѡ��������div p��ȨֵΪ0001��
ͨ�������ѡ����������ѡ�����ȵġ��� ��>��+,ȨֵΪ0000�� 


jquery
$("div").find(".test") ��������div�ĺ����ƥ�����е���Ϊtest��Ԫ��
$("div").filter(".test") �������е�div,ƥ��������Ϊtest��divԪ��
$(".btn").click(function(){
	/////
	return false; //�������ֹĬ�Ϻ�ð���¼�
})


���Զ�Ԫ�ص�margin���ðٷ������ٷ���������ڸ�Ԫ�ص�width���㣬������margin-top/margin-bottom����margin-left/margin-right����paddingͬ��

iframe���������¼��������У�
1������ϵͳ�ṹ������ǹ��������Ҳ����һЩ������table���߱�֮��ġ�Ϊ��ÿһ�����ܣ������������������iframe�� 
2��ajax�ϴ��ļ��� 
3�����ر����վ���ݣ�����google��棬��վ����������
4�� ���ϴ�ͼƬʱ������flashʵ����ˢ�¡�
5�� ������ʵ�ʱ������õ�iframe��ʹ��iframe����ͬ�����µ���Դ��

��HTML�У�����CSS�ķ�����Ҫ��___����ʽ____��___��Ƕʽ___��___����ʽ___��___����ʽ__4��


������ʽ��
ƥ�����е����ģ� [\u4E00-\u9FA5]
ƥ��ASCIIֵ��0-127���ַ�    [x00-x7f]     



















summary:
1 http Э��
2 cssҳ�沼�֣�flex���֣�div+span����
3 ͼƬԤ����
4 ��������
5 js ���ö������������Զ������
6 jq���ʹ�ã�ѡ������dom������css�������¼���������ajax
7 html ���ֱ�ǩ
8 ����ģ��
9 ��ܣ�boostrap,fullpage.js


input checkbox ѡ�к�Ҫһ��ʱ�䣺checked �ſ�ʼ��Ч��������$(":checked")���