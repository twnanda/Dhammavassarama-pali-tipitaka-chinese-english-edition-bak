//由系统决定输出何类广告
function _WQQGG(adtype,source,channel){
	if ((source == "auto") || (source == null)){
		//授权论区始终用自身的
		//if (self._MYBBS&&_MYBBS.isprivate) source="self"
		//else 
			if (Math.random()<0.8) source = "google"
	}
	
	//source="self"
	//内部google始终是test
	if ((source=="google")&&(document.domain=="192.168.0.47"))
		source="googletest"

	switch(source){
	case "google":
		//if (Math.random()<0.9){
		//	_SetGoogleGG(adtype,channel)
			//_W('<script src="http://pagead2.googlesyndication.com/pagead/show_ads.js"><'+'/script> ')
		//	_W('<script src="/qq/js/show_ads.js"><'+'/script> ')
		//}else{
			_SetBaiDuGG(adtype,channel)
			_W(baiduCproIFrame())
		//}
		break
	case "googletest":
		//输出测试广告
		_SetGoogleGG(adtype,channel)
		_W("<iframe scrolling=no frameborder=0 width="+google_ad_width
			+" height="+google_ad_height+" src=/qq/gg/demo.htm></iframe>")
		break
	default:
		var r=0.2
		//if (adtype=="_QQSelf") r=0.5
		
		if (Math.random()<r){
			_SetBaiDuGG(adtype,channel)
			_W(baiduCproIFrame())
		}else{
			switch (adtype){
			case "_QQPhoto":
			case "_QQMobile":
				_W('<div id="'+adtype+'"></div>')
				break
			case "_QQSelf":
				_W('<div id="_QQSelf" style="width: 125; height: 125"></div>')
				break
			case "_QQBanner":
				_W('<div id="_QQBanner" style="height: 90"></div>')
				break	
			case "_QQBannerSmall":
				_W(_GetRandGG())
				break
			}//switch
		}
	}//switch
}//_WQQGG

//去掉了logo高度设定  height=76
function _WGGHead(source){
	return	
	
	if (self._QQPrivateLunTan)return
	if ((source == "auto") || (source == null)){
		if (Math.random()<0.1) source = "google"
	}
	if (source == "google"){
		_PrePareGoogleGG("_QQBannerSmall",_GetChannel("_QQBannerSmall"))
	}
}

function _WGGTail(){
	//mybbs不输出头广告
	if (_StartWith(_GetUrlFileName(),"mybbs")) return 
	
	if ((Math.random()<0.5)||(_GetChannel("")=="1331112635")){
		_strBannerHead = _GetRandGG() //显示站方logo广告
		_notQQTuijian = true
	}
	else{
		_strBannerHead = _GetBoluoTuijian() //显示bbs推荐帖
		_notQQTuijian = false
	}
	//	b=true
	//} //if
	
	//插入body前面
	window.attachEvent("onload", new Function("document.body.insertAdjacentHTML('afterBegin',_GetMyBBSHeadGG(_strBannerHead));_GGautohidden()"))
	
	//目前不输出google
	return 
	
	//私有论坛只输出自己广告
	if (self._QQPrivateLunTan)return
	if (Math.random()<0.9) {//输出google广告
		//if (Math.random()<0.95) 
		_PrePareGoogleGG("_QQMobile",_GetChannel("_QQMobile"))
		//else _PrePareGoogleGG("_QQSelf",_GetChannel("_QQSelf"))
	}
}//_WGGTail

function _justFuDong(){
	return
	//私有论坛只输出自己广告
	if (self._QQPrivateLunTan)return
	//if (Math.random()<0.95) {//输出google广告
		_PrePareGoogleGG("_QQMobile",_GetChannel("_QQMobile"))
	//}
}

function _WGGFudongTail(){
//_strBannerFuDong = _GetGoogleGGHTML()
//if (_strBannerFuDong){//显示google广告
//	setTimeout("_FuDongGG(_GetADHtml_Google_fudong(_strBannerFuDong), 125, 125)",3000)
	//window.attachEvent("onload", new Function("_FuDongGG(_GetADHtml_Google_fudong(_strBannerFuDong), 125, 125)"))
//}else{//显示站方logo广告
	var r=Math.random()
	if (r<0.1) {
		setTimeout("_FuDongGG(_GetGuangGaoHTML('_QQSelf2','fudong'), 125, 125)"
			+";_SetCookies('gg="+n+"')",2500)
		return
	}
	
	r=Math.random()
	
	var n=_GetCookie("gg")
	n=n?n:0;
	n++;
	//if (n>5){
	//}
	//if (self._DenyChengRen) 
	//r=r*0.9 //使用健康广告
	
	if (r<0.3){
	//baidu 0.6
		setTimeout("_SetBaiDuGG('_QQSelf');_FuDongGG(_GetADHtml_Google_fudong(baiduCproIFrame()), 125, 125)"
			+";_SetCookies('gg="+n+"')",250)
	}else if (r<0.6){
		setTimeout("_SetBaiDuGG('_QQ120x90');_FuDongGG(_GetADHtml_Google_fudong(baiduCproIFrame()), 120, 90)"
			+";_SetCookies('gg="+n+"')",250)
	
		//Window.attachEvent("onload", new Function(
		//	"if (!self._f){_f=true;_SetBaiDuGG('_QQSelf');_FuDongGG(_GetADHtml_Google_fudong(baiduCproIFrame()), 125, 125)}"))
	//}else if (r<0.995){
	// 	setTimeout("_FuDongGG(_GetADHtml_Google_fudong(_SetNarrowGG()), 125, 125)"
	// 		,3000)
	//}else if (r<0.75){
		//手机0.1
	//	setTimeout("_FuDongGG(_GetGuangGaoHTML('_QQMobile','fudong'),144,144)",2500)
	//}else if (r<0.5){
		//114 0.15
	//	setTimeout("_FuDongGG(_GetADHtml_Google_fudong('<div style=\"margin-bottom:-18px;overflow:hidden;width:181px;height:70px\"><iframe vspace=-20 marginwidth=0 marginheight=0 frameborder=0 scrolling=no width=540 height=90 src=http://union.114.com.cn/price/showprice?unionid=sliang732&style=a&number=3&color=1BDE3FF004E7EFFFFFF61AEDD1></iframe></div>'),180,70)"
	//		+";_SetCookies('gg="+n+"')",2500)
	}else {
		// 0.2	self baidu search
		setTimeout("_FuDongGG(_GetGuangGaoHTML('_QQSelf','fudong'), 125, 125)"
			+";_SetCookies('gg="+n+"')",2500)
	//}else{
		//cgogo 0.1
	//	setTimeout("_FuDongGG(_GetADHtml_Google_fudong('<iframe id=cgogoadframe marginwidth=0 marginheight=0 allowTransparency=true frameborder=0 scrolling=no  width=160 height=70 src=http://wwwad.cgogo.cc/adbs/wwwad/cgogoad.jsp?cgogoUserId=sliang732&cgogoSize=-1&width=160&height=70&tableBgColor=%239F5F9F&tdBgColor=%23FFFFFF></iframe>'),160,70)"
	//		+";_SetCookies('gg="+n+"')",2500)
	}
//} //if	
}//_WGGFudongTail
function _SetNarrowGG(){
	if (Math.random()<0.1)
		return _SetWide();
	return _SetNarrow()
}
function _SetWide(){
var tixa_wadRowCount=1; 
var tixa_wadColumnCount=1; 
var tixa_wadHeight=125; 
var tixa_wadWidth=125; 
var tixa_wadBorderColor='336699'; 
var tixa_wadBgColor='F7F3F7'; 
var tixa_wadTitleColor='0000ff'; 
var tixa_wadDescColor='000540'; 
var tixa_adType='text'; 

var narrowad_clientUrl = document.location.href;

var para = 'wid='+3366+
	   '&cid='+15930+
	   '&rc='+tixa_wadRowCount+
	   '&cc='+tixa_wadColumnCount+
	   '&h='+tixa_wadHeight+
	   '&w='+tixa_wadWidth+
	   '&bdc='+tixa_wadBorderColor+
	   '&bgc='+tixa_wadBgColor+
	   '&tc='+tixa_wadTitleColor+
	   '&dc='+tixa_wadDescColor+
	   '&uri='+escape(narrowad_clientUrl);

var linkValue = 'http://union.narrowad.com/proxy/wadshower.jsp?'+para;
var docSrc='<iframe id=nadmouseframe name=nadmouseframe marginwidth=0 marginheight=0 frameborder=0 scrolling=no src="'+linkValue+'" width="'+tixa_wadWidth+'" height="'+tixa_wadHeight+'"></iframe>';
return docSrc
}

function _SetNarrow(){

var tixa_nadInIframe=true; 
var tixa_nadRowCount=1; 
var tixa_nadColumnCount=1; 
var tixa_nadHeight=125; 
var tixa_nadWidth=125; 
var tixa_nadBorderColor='9178E7'; 
var tixa_nadBgColor='F0ECFF';  
var tixa_nadTitleColor='0000ff'; 
var tixa_nadDescColor='000000'; 
var tixa_adType='text'; 

var narrowad_clientUrl = document.location.href;
var para = 'wid='+3366+
	   '&cid='+15930+
	   '&rc='+tixa_nadRowCount+
	   '&cc='+tixa_nadColumnCount+
	   '&h='+tixa_nadHeight+
	   '&w='+tixa_nadWidth+
	   '&bdc='+tixa_nadBorderColor+
	   '&bgc='+tixa_nadBgColor+
	   '&tc='+tixa_nadTitleColor+
	   '&dc='+tixa_nadDescColor+
	   '&uri='+escape(narrowad_clientUrl);

var linkValue = 'http://union.narrowad.com/proxy/nadshower.jsp?'+para;
var docSrc='<iframe id=nadmouseframe name=nadmouseframe marginwidth=0 marginheight=0 frameborder=0 scrolling=no src="'+linkValue+'" width="'+tixa_nadWidth+'" height="'+tixa_nadHeight+'"></iframe>';
return docSrc
}

function _TXT(imgsrc,wenzi,width,height){
var s=imgsrc.substr(0,imgsrc.length-4).split("|");
var d=s[0]?s[0]:"left";
if (d=="rand"){
		switch (parseInt(Math.random()*8)){
			case 0:d="down";break;
			case 1:d="right";break;
			case 2:	case 3:
				d="left";break;
			default:d="up";break;
		}
	}
	
var delay=s[1]?s[1]:"200"
return "<MARQUEE style='cursor:hand;font-size:9pt;border:1 solid black' DIRECTION="+d
	+" width="+width+" height="+height+"px SCROLLDELAY="+delay
	+" onmouseover='this.stop()' onmouseout='this.start()'>"
	+wenzi+"</marquee>"
}


function _GetGG(i){
	var w=(i.width)?i.width:_GG_defaultWidth;
	var h=(i.height)?i.height:_GG_defaultHeight
	var src=(i.imgsrc.charAt(0)=="/")?i.imgsrc:_GG_defaultImgBase+i.imgsrc
	
	var s="<a target=_blank href=/cgi-bin/class/sys/GuangGao.aspx?l="+i.link+"&s="+i.imgsrc+">"

	switch (src.substr(src.length-3)){
		case "swf":
			return _SWF(src,w,h)
		case "txt":
			//文本通知
			s+=_TXT(i.imgsrc,i.wenzi,w,h)
			break
		case "raw":
			//直接输出代码
			return i.link;
		default:
			s+="<img border=0 width="+w+" height="+h
				+((i.wenzi)?" alt='"+i.wenzi+"'":"")
				+" src="+src+">"
	}
	return s+"</a>"
}

function _GetRandGG(){
var quan=0;
for (var i in _GGAry) quan +=_GGAry[i].quan

var r=Math.floor(Math.random()*quan);

quan=0;
for (var o in _GGAry){
	var i=_GGAry[o]
	quan+=i.quan
	if (quan>r) return _GetGG(i)
}//for
}//_WGG

//找到第一个parent
function _FindParentTag(e,tagname){
for(e=e.parentElement;e.tagName!="BODY";e=e.parentElement)
	if (e.tagName==tagname) return e;
return null
}


function _GetMyBBSHeadGG(s){
return "<table margin=0 width='768' border='0' align='center' cellpadding='0' cellspacing='0'>"
	+"<tr><td colspan='2'><table width='98%' border='0' align='center' cellpadding='0' cellspacing='0'>"
	+"<tr><td style='font-size:12px;'><marquee scrollamount='3' onmouseover=this.stop() onmouseout=this.start()>"
	+_QQTonggao()+"</marquee></td></tr></table>"
	+"</td><td width=30><a onmouseover='_qqgg.style.display=_qqgg.style.display==\"none\"?\"block\":\"none\"' target=_blank href=http://www.5ilog.com><img border=0 src=/qq/logo/minilogotrans.gif></a></td></tr>"
	+"<tr id=_qqgg><td style='FILTER: revealTrans(Duration=1,Transition=1);height:76;width:177;' align=center valign=middle>"
	+"<a href='http://www.5ilog.com/'  href3='' target=_blank>"
	+"<IMG onload=_StartTransLogo() id=_QQ_usrlogoimg src='/qq/logo/logo.gif' border=0></a></td>"
	+"<td width='477'> <TABLE border=1 borderColor=#000000 cellPadding=0 cellSpacing=0 style='BORDER-COLLAPSE: collapse'>"
	+"<TBODY><TR><TD align=center>"+s+"</TD></TR></TBODY>"
	+"</TABLE></td><td width='114'><table width='90%' border='0' cellspacing='0' cellpadding='0'>"
	+"<tr><td height='15'  style='font-size:12px;'> 　· <a href='http://www.5ilog.com' target=_blank>首页</a></td></tr><tr><td height='15'  style='font-size:12px;'> 　· <a href='javascript:Login()' target=_self>登陆</a>/<a target=_self href='javascript:_REG()'>注册</a></td></tr><tr><td height='15'  style='font-size:12px;'>　· <a href='javascript:_QQBookmark()' target=_self>加入网摘</a></td></tr><tr><td height='15'  style='font-size:12px;'> 　· <a href=/qq/help/  target=_blank>帮助</a>/<a href=/cgi-bin/bbs/help/feedback.html  target=_blank>反馈</a></td></tr></table></td>"
	+"</tr><tr><td heigth=5 colspan='3'>　</td></tr></table>"
}
//transLogo Begin
//change mybbs logo src
function _QQ_MyBBSLogo(src,lunquid){
var o=document.all._QQ_usrlogoimg
	if (o){
		var oA = _FindParentTag(o,"A");
		oA.href = oA.href3 = "/cgi-bin/sys/bbsadmin/index.aspx?id="+lunquid+"&right=jbsz";
		if (src) o.src = src;
	}
}//_QQ_MyBBSLogo

function _QQ_tranLogo() {	

	var arrLogoHref = new Array(
		"http://www.5ilog.com"
		,"http://www.5ilog.com/cgi-bin/club/"
		,"http://www.5ilog.com/cgi-bin/home/"
		,"http://book.5ilog.com"
	);

	var oo = _FindParentTag(_QQ_usrlogoimg,"A");
	var o = _FindParentTag(oo,"TD");
	o.filters.item(0).Transition = Math.ceil(Math.random()*24);
	o.filters.item(0).Apply();
	if (_QQ_usrlogoimg.style.display!='none') {
		_QQ_usrlogoimg.style.display='none';
				
		_isStart++;
		if (_isStart >= arrLogoHref.length) _isStart = 0;
		
		document.all["_QQ_logoimg"+_isStart].style.display='block';
		oo.href = arrLogoHref[_isStart];

	}
	else {
		document.all["_QQ_logoimg"+_isStart].style.display='none';		
		_QQ_usrlogoimg.style.display='block';
		if (oo.href3) {oo.href = oo.href3}
		else if (self._lunquid) 
		{
			if (_lunquid>0x40000000){
			oo.href3 =  oo.href = "/cgi-bin/sys/bbsadmin/index.aspx?id="+_lunquid+"&right=jbsz";
			_QQ_usrlogoimg.src = "/qq/img/banner/selflogo.gif"
			}
		}
	}
	
	o.filters.item(0).Play(1.5);
	//alert(true);
	setTimeout("_QQ_tranLogo()",5000);
}
var _isStart = -1;
function _StartTransLogo(){
if (_isStart>=0) return //已经开始
	
	var arrLogo = new Array(
		"/qq/logo/logo.gif"
		,"/qq/img/mybbs/mybbslogo.gif"
		,"/qq/friends/img/friendslogo.gif"
		,"/qq/mz/img/mzlogo.gif"
	);
	var s=""
	for (var i=0;i<arrLogo.length;i++){
		s+="<img border=0 style='display:none' src="+arrLogo[i]+" id=_QQ_logoimg"+i+">"
	}

	_QQ_usrlogoimg.insertAdjacentHTML("afterend",s)
	setTimeout("_QQ_tranLogo()",3000);
	_isStart = 0;
	
}//_StartTransLogo



function _GGautohidden(){
if (self._MYBBS&&_MYBBS.logo)
	_QQ_MyBBSLogo(_MYBBS.logo,_MYBBS.lunquid)
_StartTransLogo()
var s=_GetUrlFileName()
if ((_StartWith(s,"dis")||_StartWith(s,"mybbs"))&&_notQQTuijian) window.setTimeout("_qqgg.style.display='none'",60000);
}

function _WGG(){
	_W(_GetMyBBSHeadGG(_GetRandGG()))
	if (Math.random()<0.5)
	{
		var strC = _GetGuangGaoHTML("_QQSelf","fudong") //显示站方logo广告
	}
	else
	{	
		var strC = _GetGuangGaoHTML("_QQMobile","fudong") //手机图片
	}
	_FuDongGG(strC, 128, 90)
	//document.write('<script>_QQFuDong("<div id=_QQMobile_fudong></div>","","","top: 300px; right: 10px;")</'+'script>');
	//window.setInterval(strF,300000);
	
	_GGautohidden()
}//WGG

function _GetChannel(adtype){
var s=_GetUrlFileName()

//图库图片
if (_StartWith(s,"disimg")||_StartWith(s,"viewimg")) return "1331112635"
s=document.location.pathname

//用户QQlog
if (
	(s.indexOf("/cgi-bin/bbs/log")>=0)||
	(s.indexOf("/cgi-bin/log/")>=0)||
	(s.indexOf("/cgi-bin/bbs/club/v_log.aspx")>=0)
) return "8322388851"

switch (adtype){
	case "_QQBannerSmall": return "2194131007"	//mybbs顶部banner
	case "_QQMobile" : return "8926875562"		//mybbs浮动
	case "_QQSelf": return "6489166027"		//mybbs浮动文字
}
}


function _GetBoluoTuijian(){//得到部落推荐帖子列表
	if (!self._QQBBSAry) return ""
	var strRe = "<table width=486 celpadding=0 cellspacing=1>"
	var strStyle = " style='font-size: 12px'"
	var intR = Math.floor(Math.random()*(_QQBBSAry.length-6))
	if (intR < 0) intR = 0
	for (var i=1; i<_QQBBSAry.length ; i++){
		if (i>6) break //只显示3行
		if (i%2 == 0) strRe += "<td width=50% style='height: 10px;'>"
		else strRe += "<tr><td width=50% style='height: 10px;'>"
		strRe += '[<a href="http://www.5ilog.com/cgi-bin/sys/link/luntan.aspx?id='+_QQBBSAry[i+intR][2]+'" title="'+_QQBBSAry[i+intR][3]+'" target=_blank><span'+strStyle+'>'+_QQBBSAry[i+intR][3].getLeftN(5)+'</span></a>]'
		strRe += ' <a href="http://www.5ilog.com/cgi-bin/bbs/club/v.aspx?id='+_QQBBSAry[i+intR][0]+'" title="'+_QQBBSAry[i+intR][1]+'" target=_blank><span'+strStyle+'>'+_QQBBSAry[i+intR][1].getLeftN(12)+'</span></a>'
		if (i%2 == 0) strRe += "</td></tr>"
		else strRe += "</td>"
	}//for
	return strRe + "<tr><td colspan=2 align=right style='height: 10px;'><a href='http://www.5ilog.com/cgi-bin/club/' target=_blank><span"
		+strStyle+">QQ部落</span></a> <a href='http://www.5ilog.com/qq/club/files/org_help6.htm' target=_blank><span"
		+strStyle+">申请推荐</span></a> <a href='http://www.5ilog.com/cgi-bin/club/clublist.aspx?id=0x"
		+_QQBBSAry.buluofenlei.toString(16)+"' target=_blank><span"+strStyle+">"
		+_BoluoID2Name(_QQBBSAry.buluofenlei)+" 更多...</span></a></td></tr></table>"
}//_GetBoluoTuijian

function _GetBoluoTuijian2(){//得到部落推荐帖子列表，宽型
	if (!self._QQBBSAry) return ""
	var strRe = "<table width=100% celpadding=0 cellspacing=1>"
	var strStyle = " style='font-size: 12px'"
	var intR = Math.floor(Math.random()*(_QQBBSAry.length-6))
	if (intR < 0) intR = 0
	for (var i=1; i<_QQBBSAry.length ; i++){
		if (i>6) break //只显示3行
		if (i%2 == 0) strRe += "<td width=50% style='height: 10px;'>"
		else strRe += "<tr><td width=50% style='height: 10px;'>"
		strRe += '[<a href="/cgi-bin/sys/link/luntan.aspx?id='+_QQBBSAry[i+intR][2]+'" title="'+_QQBBSAry[i+intR][3]+'" target=_blank><span'+strStyle+'>'+_QQBBSAry[i+intR][3].getLeftN(8)+'</span></a>]'
		strRe += ' <a href="/cgi-bin/bbs/club/v.aspx?id='+_QQBBSAry[i+intR][0]+'" title="'+_QQBBSAry[i+intR][1]+'" target=_blank><span'+strStyle+'>'+_QQBBSAry[i+intR][1].getLeftN(16)+'</span></a>'
		if (i%2 == 0) strRe += "</td></tr>"
		else strRe += "</td>"
	}//for
	return strRe + "</tr></table>"
	//return strRe + "<tr><td colspan=2 align=right style='height: 10px;'><a href='/cgi-bin/club/' target=_blank><span"+strStyle+">QQ部落</span></a> <a href='/qq/club/files/org_help6.htm' target=_blank><span"+strStyle+">申请推荐</span></a> <a href='/cgi-bin/club/clublist.aspx?id=0x"+_QQBBSAry.buluofenlei.toString(16)+"' target=_blank><span"+strStyle+">"+_BoluoID2Name(_QQBBSAry.buluofenlei)+" 更多...</span></a></td></tr></table>"
}//_GetBoluoTuijian

function _BoluoID2Name(id){
	id = id&0x7f000000
	switch (id)
	{
	case 0x41000000 : return "娱乐动漫"
	case 0x42000000 : return "博客杂谈"
	case 0x43000000 : return "人文艺术"
	case 0x44000000 : return "生活消费"
	case 0x45000000 : return "城市交友"
	case 0x46000000 : return "科技财富"
	default : return "部落群" 
	}
}


//设置google广告类型
function _SetBaiDuGG(adtype,channel){
arrBaiduCproConfig=new Array();
arrBaiduCproConfig['uid'] = 116574;
arrBaiduCproConfig['n'] = 'sliang732cpr';
switch (adtype){
	case "_QQBanner":
arrBaiduCproConfig['tm'] =22;
arrBaiduCproConfig['cm'] =72;
arrBaiduCproConfig['um'] =22;
arrBaiduCproConfig['w'] =728;
arrBaiduCproConfig['h'] =90;
arrBaiduCproConfig['wn'] =4;
arrBaiduCproConfig['hn'] =1;
arrBaiduCproConfig['ta'] ='right';
arrBaiduCproConfig['tl'] ='bottom';
arrBaiduCproConfig['bu'] =0;
arrBaiduCproConfig['bd'] ='#798DBF';
arrBaiduCproConfig['bg'] ='#FFFFFF';
arrBaiduCproConfig['tt'] ='#0000ff';
arrBaiduCproConfig['ct'] ='#444444';
arrBaiduCproConfig['url'] ='#008000';
arrBaiduCproConfig['bdl'] ='#FFFFFF';
arrBaiduCproConfig['rad'] =1;
		break
	case "_QQSelf":
	case "_QQMobile":
		arrBaiduCproConfig['tm'] =30;
		arrBaiduCproConfig['cm'] =32;
		arrBaiduCproConfig['um'] =24;
		arrBaiduCproConfig['w'] =125;
		arrBaiduCproConfig['h'] =125;
		arrBaiduCproConfig['wn'] =1;
		arrBaiduCproConfig['hn'] =1;
		arrBaiduCproConfig['ta'] ='left';
		arrBaiduCproConfig['tl'] ='bottom';
		arrBaiduCproConfig['bu'] =1;
		arrBaiduCproConfig['bd'] ='#798DBF';
		arrBaiduCproConfig['bg'] ='#FFFFFF';
		arrBaiduCproConfig['tt'] ='#0000ff';
		arrBaiduCproConfig['ct'] ='#444444';
		arrBaiduCproConfig['url'] ='#008000';
		arrBaiduCproConfig['bdl'] ='#FFFFFF';
		arrBaiduCproConfig['rad'] =1;
		break
	case "_QQ120x90":
		arrBaiduCproConfig['tm'] =14;
		arrBaiduCproConfig['cm'] =0;
		arrBaiduCproConfig['um'] =0;
		arrBaiduCproConfig['w'] =120;
		arrBaiduCproConfig['h'] =90;
		arrBaiduCproConfig['wn'] =1;
		arrBaiduCproConfig['hn'] =3;
		arrBaiduCproConfig['ta'] ='left';
		arrBaiduCproConfig['tl'] ='bottom';
		arrBaiduCproConfig['bu'] =1;
		arrBaiduCproConfig['bd'] ='#798DBF';
		arrBaiduCproConfig['bg'] ='#FFFFFF';
		arrBaiduCproConfig['tt'] ='#0000ff';
		arrBaiduCproConfig['ct'] ='#444444';
		arrBaiduCproConfig['url'] ='#008000';
		arrBaiduCproConfig['bdl'] ='#FFFFFF';
		arrBaiduCproConfig['rad'] =1;
		break
	case "_QQBannerSmall":
arrBaiduCproConfig['tm'] =30;
arrBaiduCproConfig['cm'] =34;
arrBaiduCproConfig['um'] =28;
arrBaiduCproConfig['w'] =468;
arrBaiduCproConfig['h'] =60;
arrBaiduCproConfig['wn'] =2;
arrBaiduCproConfig['hn'] =1;
arrBaiduCproConfig['ta'] ='right';
arrBaiduCproConfig['tl'] ='bottom';
arrBaiduCproConfig['bu'] =0;
arrBaiduCproConfig['bd'] ='#798DBF';
arrBaiduCproConfig['bg'] ='#FFFFFF';
arrBaiduCproConfig['tt'] ='#0000ff';
arrBaiduCproConfig['ct'] ='#444444';
arrBaiduCproConfig['url'] ='#008000';
arrBaiduCproConfig['bdl'] ='#FFFFFF';
arrBaiduCproConfig['rad'] =1;
		break
	case "_QQSelf120":
	case "_QQ120x600":
arrBaiduCproConfig['tm'] =30;
arrBaiduCproConfig['cm'] =64;
arrBaiduCproConfig['um'] =24;
arrBaiduCproConfig['w'] =120;
arrBaiduCproConfig['h'] =600;
arrBaiduCproConfig['wn'] =1;
arrBaiduCproConfig['hn'] =4;
arrBaiduCproConfig['ta'] ='left';
arrBaiduCproConfig['tl'] ='bottom';
arrBaiduCproConfig['bu'] =1;
arrBaiduCproConfig['bd'] ='#798DBF';
arrBaiduCproConfig['bg'] ='#FFFFFF';
arrBaiduCproConfig['tt'] ='#0000ff';
arrBaiduCproConfig['ct'] ='#444444';
arrBaiduCproConfig['url'] ='#008000';
arrBaiduCproConfig['bdl'] ='#FFFFFF';
arrBaiduCproConfig['rad'] =1;
		break	
	case "_QQ300x250":
arrBaiduCproConfig['tm'] =40;
arrBaiduCproConfig['cm'] =90;
arrBaiduCproConfig['um'] =40;
arrBaiduCproConfig['w'] =300;
arrBaiduCproConfig['h'] =250;
arrBaiduCproConfig['wn'] =1;
arrBaiduCproConfig['hn'] =3;
arrBaiduCproConfig['ta'] ='center';
arrBaiduCproConfig['tl'] ='bottom';
arrBaiduCproConfig['bu'] =1;
arrBaiduCproConfig['bd'] ='#798DBF';
arrBaiduCproConfig['bg'] ='#FFFFFF';
arrBaiduCproConfig['tt'] ='#0000ff';
arrBaiduCproConfig['ct'] ='#444444';
arrBaiduCproConfig['url'] ='#008000';
arrBaiduCproConfig['bdl'] ='#FFFFFF';
arrBaiduCproConfig['rad'] =1;
		break	
	case "_QQ160x600":
arrBaiduCproConfig['tm'] =40;
arrBaiduCproConfig['cm'] =90;
arrBaiduCproConfig['um'] =24;
arrBaiduCproConfig['w'] =160;
arrBaiduCproConfig['h'] =600;
arrBaiduCproConfig['wn'] =1;
arrBaiduCproConfig['hn'] =4;
arrBaiduCproConfig['ta'] ='left';
arrBaiduCproConfig['tl'] ='bottom';
arrBaiduCproConfig['bu'] =1;
arrBaiduCproConfig['bd'] ='#798DBF';
arrBaiduCproConfig['bg'] ='#FFFFFF';
arrBaiduCproConfig['tt'] ='#0000ff';
arrBaiduCproConfig['ct'] ='#444444';
arrBaiduCproConfig['url'] ='#008000';
arrBaiduCproConfig['bdl'] ='#FFFFFF';
arrBaiduCproConfig['rad'] =1;
		break	
	}
	_SetBaiduStyle()
}//_SetGoogleGG


//
function _SetBaiduStyle(){

if (self.google_color_border) arrBaiduCproConfig['bd'] ='#'+google_color_border;
if (self.google_color_bg) arrBaiduCproConfig['bg'] ='#'+google_color_bg;
if (self.google_color_link) arrBaiduCproConfig['tt'] ='#'+google_color_link;
}
//设置google广告类型
function _SetGoogleGG(adtype,channel){
	google_ad_client = "pub-5168919282565582";	
	google_ad_channel =_GetGoogleChannel(channel);
	google_alternate_ad_url =(document.domain=="192.168.0.47"?"http://192.168.0.47":"http://w0.5ilog.com")
			+"/qq/img/banner/defaultGG.htm?adtype="+adtype;
	//google_page_url = document.location;
	google_ad_type = "text_image";
	switch (adtype)
	{
	case "_QQBanner":
		google_ad_width = 728
		google_ad_height = 90
		google_ad_format = "728x90_as"
		break
	case "_QQSelf":
		google_ad_width = 128
		google_ad_height = 90
		google_ad_format = "120x90_0ads_al"
		break
	case "_QQMobile":
		google_ad_width = 128
		google_ad_height = 128
		google_ad_format = "125x125_as"
		break
	case "_QQBannerSmall":
		google_ad_width = 468
		google_ad_height = 60
		google_ad_format = "468x60_as"
		break
	case "_QQSelf120":
		google_ad_width = 120
		google_ad_height = 600
		google_ad_format = "120x600_as"
		break	
	case "_QQ300x250":
		google_ad_width = 300
		google_ad_height = 250
		google_ad_format = "300x250_as"
		//google_ad_type = "image";
		break	
	case "_QQ120x600":
		google_ad_width = 120
		google_ad_height = 600
		google_ad_format = "120x600_as"
		//google_ad_type = "image";
		break	
	case "_QQ120x240":
		google_ad_width = 120
		google_ad_height = 240
		google_ad_format = "120x240_as"
		//google_ad_type = "image";
		break
	case "_QQ160x600":
		google_ad_width = 160
		google_ad_height = 600
		google_ad_format = "160x600_as"
		//google_ad_type = "image";
		break	
	}
}//_SetGoogleGG

//准备google广告
function _PrePareGoogleGG(adtype,channel){
	_SetGoogleGG(adtype,channel)
	_BeginWrite()('<script type="text/javascript" src="/qq/js/show_ads.js"><'+'/script> ')
	//http://pagead2.googlesyndication.com/pagead
}//_PrepareGoogleGG

//返回上一个准备的google广告
//没有准备过则返回 null
function _GetGoogleGGHTML(){
	return _EndWrite()
}


//自动替换页面内所有QQ广告
//使用数组输出广告,subid: 次级id，用来控制类型广告的不同输出方式。
function _SetGuangGao(ADType, subid){
	//alert(11);
	if (subid){ 
		if (!document.all[ADType+"_"+subid]) return;
		var arrAD = ToArray(document.all[ADType+"_"+subid]);
	}
	else{
		if (!document.all[ADType]) return;
		var arrAD = ToArray(document.all[ADType]);
	}

	for (var i=0; i < arrAD.length ; i++)
	{
		arrAD[i].innerHTML = _GetGuangGaoHTML(ADType, subid)
	}
}

//返回广告的HTML代码
function _GetGuangGaoHTML(ADType, subid){
var oNodes=_GetQQADNodes(ADType)
var node = ( _StartWith(ADType.toUpperCase(),"_QQSELF") || ("_QQBANNER" == ADType.toUpperCase()))
	?oNodes.GetNextQQADNode():oNodes.GetNextADNode();
if (!node) return ""
if (subid){
	if (self["_GetADHtml"+ADType+"_"+subid])
		return self["_GetADHtml"+ADType+"_"+subid](node);
	else
		return self["_GetADHtml"+ADType](node);
}

return self["_GetADHtml"+ADType](node);

}


//返回广告节点对象，保证同一个页面不输出重复的
//使用全局变量_QQADNotesAry记录
function _GetQQADNodes(ADType){
	if (!self._QQADNotesAry) _QQADNotesAry=new Object()
	if (!_QQADNotesAry[ADType]) _QQADNotesAry[ADType]=new _QQADNodes(ADType);
	return _QQADNotesAry[ADType]
}

//广告接点对象
function _QQADNodes(ADType){
	this.Ary=self[ADType+"Ary"];
	this._usedNumber = 0;
	this.arrUsedNodes = new Array();
	

	//获得下个节点
	this.GetNextADNode=function (){
	
		//定位到的数组
		var nodeCount = this.Ary.length-1;
		if (nodeCount == 0) 
		{
			return null;
		}
		var i = Math.floor(Math.random()*(nodeCount));
        if( this._usedNumber >= nodeCount)
		{
            //已经超过了
            this._usedNumber += 1;
            return this.ToObject(this.Ary[i+1]);
        }
		this._usedNumber ++;

        //肯定有没用过的
        while(true){
            if(!this.arrUsedNodes[i])
			{
                //没有使用
                this.arrUsedNodes[i] = true;
				//alert(i);
				return this.ToObject(this.Ary[i+1]);
            }//if

            if(i == 0){
                //已经到0了则用最大值
                i = nodeCount - 1;
            }else{
				//'如果使用过了往前搜索
                i -= 1;
            }
        }//while
	
		return this.ToObject(this.Ary[i+1])
	}

	//获得站方下个节点
	this.GetNextQQADNode = function () //站方广告
	{
		if (!this.Ary) return null
		var nodeCount = this.Ary.length-1;		
		var i = 0;
		while (i<15)
		{
			i++;
			var intRandom = this.GetRandomInt();
			if (nodeCount <= this.arrUsedNodes.length)
			{ 
				//alert("over");
				return this.ToObject(this.Ary[intRandom]); //已经全部用完
			}
			if (!this.IsNodeUsed(intRandom))
			{
				this.arrUsedNodes.push(intRandom);
				return this.ToObject(this.Ary[intRandom]);
			}			
		}
		return this.ToObject(this.Ary[intRandom]);
	}
	this.IsNodeUsed = function (intR)
	{		
		for (var i=0; i < this.arrUsedNodes.length ; i++)
		{
			if (this.arrUsedNodes[i] == intR) return true;
		}		
		return false;
	}
	this.GetRandomInt = function ()	{
		var totalquan = 0;
		var defaultQuan=this.Ary.DefaultQuan?this.Ary.DefaultQuan:100
		for(var i=0;i<this.Ary.length;i++){
			var t=this.Ary[i].quan
			this.Ary[i].quan=t?t:defaultQuan;
			totalquan += this.Ary[i].quan
		}
		var r=Math.ceil(Math.random()*totalquan);
		var quan = 0;
		for (i=1; i < this.Ary.length ; i++ )
		{
			quan += this.Ary[i].quan;
			if (quan > r) return i;
		}
		return i-1;
	}//GetRandomInt
	
	//将数组转换成属性方式
	this.ToObject=function (ary){
		//alert(ary);
		var o=new Object()
		var a=this.Ary[0]
		for (var i=a.length-1;i>=0;i--){
			//从第一个数组取名字
			o[a[i]]=ary[i]
		}
		return o
	}
}
function _GetADHtml_QQSelf2(node){
	var w=(node.width)?node.width:128;
	var h=(node.height)?node.height:80;
	var src=node.url
	
	var s='<div style="width='+w+'px;height='+h+'px;border:1px solid blue;background-color:#E2EEFC"><a style="color:blue;font-size:9pt;font-weight:bold" target=_blank href='+node.link
		+">"+node.title+"</a><BR><span style='font-size:9pt;'>"
	return s+(node.wenzi?node.wenzi:"")+"</span></div>"
}

function _GetADHtml_QQSelf2_fudong(node){
	return _GetADHtml_QQSelf2(node)+"<br>"+_GetCloseSwitch();
}

function _GetADHtml_QQPhoto(node)
{
	//alert(node.xml);
	var maxSize = 128;
	var h = node.height;
	var w = node.width;
	var strSize = 'height="'+h+'" width="'+w+'"';
	if ((h>maxSize) || (w>maxSize))
	{
		if (h>w) strSize='height="'+maxSize+'"';
		else strSize='width="'+maxSize+'"';
	}
	return '<a target="_blank" href="/cgi-bin/sys/link/Home.aspx?logname='+node.logname+'&maintype=DangAn"><img src="'+node.url+'" '+strSize+' title="点击查看'+node.name+'的交友档案" border="0"/></a><br/><a href="javascript:usrinfo(\''+node.logname+'\')" target="_self">'+node.name+'</a>　<a href="/cgi-bin/home/searchForm.aspx" target="_blank" style="font-size: 0.8em">更多..</a>';
}

function _GetADHtml_QQSelf(node){
	//alert(node.xml);
	var w=(node.width)?node.width:128;
	var h=(node.height)?node.height:90;
	//var src=(node.url.charAt(0)=="/")?node.url:"/qq/img/banner/"+node.url;
	var src=node.url
	
	///cgi-bin/class/sys/GuangGao.aspx?l=+"&s="+src
	var s="<a target=_blank href="+node.link+">"
	switch (src.substr(src.length-3)){
		case "swf":
			return _SWF(src,w,h)
		case "txt":
			//文本通知
			s+=_TXT(src,node.wenzi,w,h)
			break
		case "raw":
			//直接内容
			return node.link
		default:
			s+="<img border=0 width="+w+" height="+h
				+((node.wenzi)?" alt='"+node.wenzi+"'":"")
				+" src="+src+">"
	}
	return s+"</a>";
}

_GetADHtml_QQBanner=_GetADHtml_QQSelf

function _GetADHtml_Google_fudong(s){return s + "<br>" + _GetCloseSwitch()}

function _GetADHtml_QQSelf_fudong(node)
{
	//alert(node.xml);
	var w=(node.width)?node.width:128;
	var h=(node.height)?node.height:90;
	//var src=(node.url.charAt(0)=="/")?node.url:"/qq/img/banner/"+node.url;
	var src=node.url
	
	var s="<a target=_blank href=/cgi-bin/class/sys/GuangGao.aspx?l="+node.link+"&s="+src+">"
	switch (src.substr(src.length-3)){
		case "swf":
			return _SWF(src,w,h)+"<br/>"+_GetCloseSwitch()
		case "txt":
			//文本通知
			s+=_TXT(src,node.wenzi,w,h)
			break
		case "raw":
			return node.link+"<br/>"+_GetCloseSwitch();
		default:
			s+="<img border=0 width="+w+" height="+h
				+((node.wenzi)?" alt='"+node.wenzi+"'":"")
				+" src="+src+">"
	}
	return s+"</a><br/>"+_GetCloseSwitch();
}

function _GetCloseSwitch() //获得关闭开关
{
	return '<a href="#" onclick="_QQCloseGG(this); return false;" target="_self" style="font-size:9pt"><span style="font-size:9pt">关闭</span></a>'
}

function _GetADHtml_QQMobile(node)
{
	//alert(node.xml);
	var maxSize = 128;
	var h = parseInt(node.height);
	var w = parseInt(node.width);
	/*var strSize = 'height="'+h+'" width="'+w+'"';
	if ((h>maxSize) || (w>maxSize))
	{
		if (h>w) strSize='height="'+maxSize+'"';
		else strSize='width="'+maxSize+'"';
	}*/
	if ((h>maxSize) || (w>maxSize))
	{
		if (h>w)
		{
			w = Math.ceil(w*maxSize/h);
			h = maxSize;
		}
		else 
		{
			h = Math.ceil(h*maxSize/w);
			w = maxSize;
		}
	}
	return _QQImgTeXiao(1,"bkType=1&bkDir=18&bkH=16,4,4,4",node.url,w,h,node.width+"x"+node.height,"javascript:ViewImg("+node.id+")", "_self")+'<a href="javascript:_SendImg('+node.id+')" target="_self"><img src="/qq/img/dot/icon_sms.gif" align=absmiddle border="0"></a>　<a href="/cgi-bin/club/clublist.aspx?id=0x44b00000" target="_blank" style="font-size:9pt">更多..</a>';
	//return '<img src="'+node.url+'" '+strSize+'/><br/><a href="javascript:_SendImg('+node.id+')" target="_self"><img src="/qq/img/dot/icon_sms.gif" border="0"></a>';
}

function _GetADHtml_QQMobile_fudong(node)
{
	//alert(node.xml);
	var maxSize = 128;
	var h = parseInt(node.height);
	var w = parseInt(node.width);
	/*var strSize = 'height="'+h+'" width="'+w+'"';
	if ((h>maxSize) || (w>maxSize))
	{
		if (h>w) strSize='height="'+maxSize+'"';
		else strSize='width="'+maxSize+'"';
	}*/
	if ((h>maxSize) || (w>maxSize))
	{
		if (h>w)
		{
			w = Math.ceil(w*maxSize/h);
			h = maxSize;
		}
		else 
		{
			h = Math.ceil(h*maxSize/w);
			w = maxSize;
		}
	}
	return _QQImgTeXiao(1,"bkType=1&bkDir=18&bkH=16,4,4,4",node.url,w,h,node.width+"x"+node.height,"javascript:_SendImg("+node.id+")", "_self")+'<a href="javascript:_SendImg('+node.id+')" target="_self"><img src="/qq/img/dot/icon_sms.gif" align=absmiddle border="0"></a>　<a href="/cgi-bin/club/clublist.aspx?id=0x44b00000" target="_blank"><span style="font-size:9pt">更多</span></a>　'+_GetCloseSwitch("_QQMobile_fudong");
	//return '<img src="'+node.url+'" '+strSize+'/><br/><a href="javascript:_SendImg('+node.id+')" target="_self"><img src="/qq/img/dot/icon_sms.gif" border="0"></a>';
}

/**
 * Tools
 */
//生成flash查看框
function _SWF(src,width,height,styleStr)
{
return '<object style="'+((styleStr)?styleStr:"border:1 solid black")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0"'
	+' width="'+width+'" height="'+height+'">'
	+'<param name=movie value="'+src+'"><param name=quality value=high>'
	+((styleStr)?"<param name=\"scale\" value=\"noscale\" /><param name=\"wmode\" value=\"transparent\">":"")
	+'<embed scale="noscale" src="'+src+'" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash"'
	+' width="'+width+'" height="'+height+'"></embed></object>';
}

function _TXT(imgsrc,wenzi,width,height){
var s=imgsrc.substr(0,imgsrc.length-4).split("|");
var d=s[0]?s[0]:"left";
if (d=="rand"){
		switch (parseInt(Math.random()*8)){
			case 0:d="down";break;
			case 1:d="right";break;
			case 2:	case 3:
				d="left";break;
			default:d="up";break;
		}
	}
	
var delay=s[1]?s[1]:"200"
return "<MARQUEE style='cursor:hand;font-size:9pt;border:1 solid black' DIRECTION="+d
	+" width="+width+" height="+height+"px SCROLLDELAY="+delay
	+" onmouseover='this.stop()' onmouseout='this.start()'>"
	+wenzi+"</marquee>"
}

function _QQCloseGG(o)
{
	 o.parentNode.style.display = "none";
}//_QQCloseGG

function _FuDongGG(s, w, h){
var r=Math.random()
	if (r<0.975){
		w = w - 128
		h = h - 90
		if (screen.height>600) _QQFuDong(s,"","","top: "+(420-h)+"px; right: 10px;");
		else _QQFuDong(s,"","","top: "+(240-w)+"px; right: 10px;");
	}else if (r<0.98){
		_QQFuDong(s,"70%","0px")
	}else {
		_QQChip(s)
		//if (r<0.955) 
		//	setTimeout("_FuDongGG(_GetADHtml_Google_fudong(_SetNarrowGG()), 125, 125)"
	 	//	,3000)
	}
}


function _GetGoogleChannel(channel){
 if (!channel) return ""
  
 //转换
 switch(channel){
 case "clubv":return "8501428881"	//部落看贴
 case "mybbs-fast12": return "3089300027"//社区内嵌
 case "pubbbs" 	:return "3196789054" //公共论坛  
 case "club"	:return "9021137184" //QQ部落
 case "usr-jbxx":return "9575922760" //用户基本信息
 case "usr-jyda":return "4372213030" //用户交友档案
 case "qqhome"  :return "3420050663" //QQHome
 case "book"	:return "6148534740" //藏书  
 case "book-shici":return "6102484837" //藏书诗词  
  
 case "imglib"	:return "8809697922" //图片秀  
 case "help"	:return "2587520775" //QQ帮助
 case "danmei" 	:return "6955196858" //耽美  
 case "yueju" 	:return "1304305130" //越剧  
 case "qqlogzhuanlan"	:return "2253917549"	//qqlog专栏作者帖子浏览
 case "jiaoyou"	:return"7881951915"	//交友
 case "tag"	:return "5399009422"	//tag
 case "buluoqun":return "9672317555"	//部落群
 case "clubtuijian"	:return "5045815441"	//部落推荐帖子
 case "300x250"	:	return "7371945151"
 case "pubbbs-1"	:return "0862127646" //公共论坛竖条
 case "clubview-1"	:return "4498589116" //club看贴竖条
 
 //  "6897819807"  用户QQlog  
 // "6516220427"  用户图片库  
 default:return channel		//默认直接是数字
 }//switch
 
}//_GetGoogleChannel
document.write('<script src="http://www.5ilog.com/qq/js/baiduui.js"><'+'/script>')