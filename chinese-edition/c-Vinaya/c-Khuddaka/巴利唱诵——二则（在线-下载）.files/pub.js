function _syspop(){
if (location=="http://www.5ilog.com/cgi-bin/home/") return false
if (location.host.charAt(0)=="1") return false
if (_popNot0()) return false

//var r=Math.random()
//if (new Date()<new Date(2006,1,26)) r=0.1;
/*if (!_GetCookie("adunion114902")){
	if ((document.referrer)&& (document.referrer.indexOf("5ilog")<0)){
		open("http://www.5ilog.com/cgi-bin/home/")
		window.focus()
		_resetpopN()
		return true
	}
}*/
	//if (r<0.5){
	//	document.write('<script src="http://online.265.com/cn/1/106525.php"><'+'/script>')
	//}else if (r<0.66){
	//	document.write('<'+'script src="http://online.265.com/cn/1/84795.php"><'+'/script>')
	//}else
	//	document.write('<'+'script src="http://online.265.com/cn/1/103412.php"><'+'/script>')

/*if (!_GetCookie("G2")) { 
	_SetCookies("G2=1","H12")
	window.showModelessDialog('http://bbs.51vip.net/mm.asp?get=348556',null,'scroll:0;status:0;help:0;resizable:0;dialogWidth:0px;dialogHeight:0px');
	_resetpopN()
	return
}*/
if ((document.referrer)&& (document.referrer.indexOf("5ilog")<0)){
if (!_GetCookie("G2")) { 
		_SetCookies("G2=1","D1")
		pop_id=107;
		document.write('<script src=http://www.bestip.cn/popup1.js><'+'/script>')
		_resetpopN()
		return true
	}
}
return 

if (self==top) { 
	if (_GetCookie("QQcnXad")) _ClearCookie("QQcnXad")
	if (!_GetCookie("G1")) { 
		_SetCookies("G1=1","D1")
		cnXad_url="http://pp.cnxad.com"
		document.write('<script src="http://pp.cnxad.com/createads_pop.aspx?userid=7847&typeid=11&p=sp2&sn=3e80852abcb4c886b8736685dffc3cfb"><'+'/script>')
		_resetpopN()
		return true
	}
}
}

function _popNot0(){
	var n=parseInt(_GetCookie("ggn"))
	if (isNaN(n)||(n<=0)) return false
	n--
	_SetCookies("ggn="+n)
	return true
}
function _resetpopN(){
	var n=10
	//if ((document.referrer)&& (document.referrer.indexOf("5ilog")<0)) n=1
	_SetCookies("ggn="+n)
}
function _popSTART(){}
function _popEND(){}

function _GetRiLi(){
	newin('/cgi-bin/myqq/home/host/rili.html',null,510,400)
}
function _sendsms(logname){
	open("/cgi-bin/myqq/sms/send.aspx?tologname="+logname)
}
function _Quan(logname){
	open('/cgi-bin/myqq/friends/quan.aspx?act=dispqxml&logname='+logname)
}
function okgem(){}

function _GetMybbsHome(){
var bbsname=_GetMYBBSValue("bbsname","")
if (!bbsname){
	var reg=/^\/cgi\-bin\/mybbs\/\w\/(\w+)\/?/i
	var a=document.location.pathname.match(reg)
	if (!a){
		try{a=parent.document.location.pathname.match(reg)}catch(e){}
	}
	if (a) bbsname=a[1]
} 
if (bbsname) return "http://"+bbsname+".5imybbs.com"
return ""
}

function _DelHost(o,v){
var r=new RegExp("http:\\/\\/"+location.host.replace(".","\\."),"gi")
o.value=v.replace(r,"")
}

//liburl	libid=,lunquid=,uid=
//ltype		link,��̬ͼƬ���ӣ�����Ϊ��̬
//o		���ض���
//isappend	�Ƿ�׷��
function _SelImg2(o){
if(!_checkIE5()) return;
if(o.ltype==null)o.ltype=""
if(o.liburl==null)o.liburl=""
_GetPopUpValue2({v:"document.all."+o.o.uniqueID,
		url:"/qq/sys/sel/selimg.html?ltype="+o.ltype+"&liburl="+o.liburl
		,w:600,h:500,isnothit:o.isnothit==false?false:true,isappend:o.isappend,top:o.top,left:o.left});
}


function _CopyLink(){
	var s
	if ((QueryString.id)&&(!_StartWith(document.location+"","http://www.5ilog.com/cgi-bin/bbs/club/"))){
		s="http://www.5ilog.com/cgi-bin/sys/link/view.aspx/"+QueryString.id+".htm";
	}else
		s=document.location+"";
		
	s+="\r\n"+(document.title? document.title:"����QQ��վ�ĺ���")
		
	window.clipboardData.setData("Text",s);  	
  	alert('���ڿ���ʹ�ü��� ctrl+v ��������ͨ�����칤�߷�������')
}

function _PopGG(url,key,expire){
if (_GetCookie(key)) return

_SetCookies(key+"=1",expire)
window.showModalDialog('http://www.5ilog.com/qq/gg/pop.htm?url='+escape(url),''
	,'scroll:0;status:0;help:0;resizable:0;dialogWidth:0px;dialogHeight:0px');
}


function _ShowLunTanTags(tags){ //�г���ǩ
	if (!tags) return

	var strRe = "<span class='usr-tag'>"
	strRe += _ListLunTanTags(tags)
	_W(strRe+"</span>")
}//_ShowTags
function _ListLunTanTags(tags){ //�г���ǩ
	if (!tags) return ""
	var aryTag = tags.split(/\s+/gi)
	var strRe = ""	
	for (var i=0; i<aryTag.length; i++){
		strRe += '<a target=_blank href="http://www.5ilog.com/cgi-bin/club/luntantag.aspx/'+aryTag[i].replace(/\.+$/,"")+'.htm">'+aryTag[i]+'</a> '
	}//for
	return strRe
}//_ListTags

function _ShowUsrTags(tags){ //�г���ǩ
	if (!tags) {_W('<a target=_blank href=http://www.5ilog.com/cgi-bin/club/tag.aspx>ʲô�Ǳ�ǩ��</a> <a target=_blank href=/cgi-bin/myqq/update_a.aspx#tag>�����Լ��ı�ǩ</a>')
		return
	}
	
	
	var strRe = "<span class='usr-tag'>"
	strRe += _ListUsrTags(tags)
	_W(strRe+"</span>")
}//_ShowTags
function _ListUsrTags(tags){ //�г���ǩ
	if (!tags) return ""
	var aryTag = tags.split(/\s+/gi)
	var strRe = ""	
	for (var i=0; i<aryTag.length; i++){
		strRe += '<a target=_blank href="http://www.5ilog.com/cgi-bin/home/search.aspx/'+aryTag[i].replace(/\.+$/,"")+'.htm">'+aryTag[i]+'</a> '
	}//for
	return strRe
}//_ListTags


function _SelBlogToLunqu(of){ //blog��������̳��ѡ������id��ofΪForm����
	_GetPopUpValue("document.all."+of.uniqueID+".id.value",'/cgi-bin/sys/bbsadmin/fastSel/selBlogToLunqu.aspx',470,320)
}//_SelBBSTag
function _CommentImg(oA){ //ͼƬ����
	(_ImgPingLunTR.style.display == "block")?_ImgPingLunTR.style.display = "none":_ImgPingLunTR.style.display = "block"
	_ImgPingLunIframe.document.location = oA.url
}//_CommentImg
function _ViewLog(id,j){ //�鿴QQLog����
	open('/cgi-bin/bbs/club/v_log.aspx?lunquid=s&id='+id+'&j='+j)
}//_ViewLog
function _ViewBBSTag(tags,id){ //�鿴���±�ǩ
	tags=tags.replace(/\.+$/,"")
	if (!id) id=0
	else{
		if ((self.logsearchform)&&(logsearchform.k)){
		//�Ƿ����log form
			logsearchform.k.value=tags
			logsearchform.submit()
			return
		}
	}
	if (id==0)
		open('http://www.5ilog.com/cgi-bin/bbs/club/mybbs_tags.aspx/'+tags+".htm")
	else
		open('http://www.5ilog.com/cgi-bin/bbs/club/mybbs_tags.aspx?id=0x'+parseInt(id).toString(16)+'&k='+tags)
}//_ViewBBSTag

function _SelTag(of){ //��ӱ�ǩ����Ҫ�ṩ����id��tags
	_GetPopUpValue("document.all."+of.uniqueID+".value",'/cgi-bin/sys/bbsadmin/fastSel/selTag.aspx',500,400)
}//_SelBBSTag


function _SelBBSTag(of,id){ //��ӱ�ǩ����Ҫ�ṩ����id��tags
	_GetPopUpValue("document.all."+of.uniqueID+".keyword.value",'/cgi-bin/sys/bbsadmin/fastSel/selTag.aspx?id='+id,500,400)
}//_SelBBSTag
function _AddTag(id,tags){ //��ӱ�ǩ����Ҫ�ṩ����id��tags
	if (!tags) return
	open('/cgi-bin/class/BBSAdmin/SetLunQu.aspx?act=AddTag&id='+id+'&keyword='+tags)
}//_AddTag
function _ShowTags(tags){ //�г���ǩ
	if (!tags) return ""
	var strRe = "<span class='s-v-key-tishi'>��ǩ(tag)��</span><span class='s-v-keyword'>"
	strRe += _ListTags(tags)
	_W(strRe+"</span>")
}//_ShowTags
function _ListTags(tags,id){ //�г���ǩ
	if (!tags) return ""
	var aryTag = tags.split(/\s+/gi)
	var strRe = ""	
	var lunquid = _GetMYBBSValue("lunquid",0)
	if (id) lunquid = id
	//if (!lunquid && QueryString.id) lunquid = QueryString.id
	for (var i=0; i<aryTag.length; i++){
		strRe += '<a target=_self href="javascript:_ViewBBSTag(\''+aryTag[i]+"',"+lunquid+')">'+aryTag[i]+'</a> '
		if (parseInt(lunquid)!=0)	strRe+= '<a target=_blank style="font-size: 0.85em;" href="http://www.5ilog.com/cgi-bin/bbs/club/mybbs_tags.aspx/'+aryTag[i]+'.htm">��վ</a>&nbsp;&nbsp;'
	}//for
	return strRe
}//_ListTags
function _ListAryTag(intFlag){ //�г�_QQluntanKeyAry��intFlag���������λ1�������ᣬλ2�����Ƿ���Ҫվ�����ӡ�
	//if ((QueryString.k)&&(self.logsearchform)) logsearchform.k.value=unescape(QueryString.k);
	var lunquid = _GetMYBBSValue("lunquid",0)
	var tail="<a href='/cgi-bin/sys/bbsadmin/tag/mantag.aspx?id="+lunquid+"' target=_blank>�����ǩ</a>"
	if (!self._QQluntanKeyAry) return tail
	if (_QQluntanKeyAry.length==0) return tail
	var strRe = ""
	var ary = _QQluntanKeyAry
	var linker = "&nbsp;"
	if (!intFlag) intFlag = 0
	if (intFlag&1) linker = "<br>" //����
	var needhotqqlink = intFlag&2 
	for (var i=0; i < ary.length; i++){
		strRe += '<a href="javascript:_ViewBBSTag(\''+ary[i]+'\','+lunquid+')" target=_self>'+ary[i]+'</a>'
		if (needhotqqlink) {
			strRe += ' <a style="font-size: 0.85em;" href="javascript:_ViewBBSTag(\''+ary[i]+'\',0)" target=_self>��վ</a>'
			strRe += " <a target=_blank href='http://www.5ilog.com/cgi-bin/club/luntantag.aspx/"+ary[i]+".htm' title='"+_QQluntanKeyAry.otherN[i]+"����̳/blog���øñ�ǩ'>"+_QQluntanKeyAry.otherN[i]+"</a>"
		}
		strRe+=linker
	}//for
	return strRe +=tail
}//_ListAryTag 
function _GetMYBBSValue(value, defaultvalue){ //���_MYBBS��ֵ, valueΪ�������������Ƕ༶����tieState.top1��defaultvalue ΪĬ��ֵ��
	if (self["_"+value]) return self["_"+value] //��Ҫ��lunquid��ʱ������
	if (!self["_MYBBS"]) return defaultvalue
	var arrV = value.split(".")
	if (!_MYBBS[arrV[0]]) return defaultvalue
	if (arrV.length == 1) return _MYBBS[arrV[0]]
	if (!_MYBBS[arrV[0]][arrV[1]]) return defaultvalue
	if (arrV.length == 2) return _MYBBS[arrV[0]][arrV[1]]
	return "��һ���"
}//_GetMYBBSValue
function _BeginWrite(){ 
	_OriginalWriter = document.write
	_StrGotten = "" //�ռ����ַ���
	document.write = function (s){_StrGotten += s}
	return _OriginalWriter
}
function _EndWrite(){
	//alert(_StrGotten)
	if (self._OriginalWriter) {
		document.write = _OriginalWriter
		_OriginalWriter = null //��Ҫ��
		return _StrGotten
	}
	return null
}
function _IsBeginWrite(){if (self._OriginalWriter) return true; return false;}



function _SetMYBBSDisableHTMLWrite(){
_SetMYBBSObj({CSSDisabled:true,FuDongDiseabled:true,ChipDisabled:true,targetDisabled:true})
}

//����_MYBBS����
function _SetMYBBS(name,v){
 if (!self._MYBBS) _MYBBS=new Object()
 _MYBBS[name]=v
}
function _SetMYBBSObj(o){
 if (!self._MYBBS) _MYBBS=o;
 else{
 	for(var n in o) _MYBBS[n]=o[n]
 }
}


function _ZiXuan(id, j){newin('/cgi-bin/sys/bbs/zixuan.asp?'+(j==1?"j=1":"j=0")+'&id='+id)} //��ѡ
function _Package(id){newin('/cgi-bin/sys/bbs/mail.asp?id='+id)} //���
function _SetMagic(type, tid){open('/cgi-bin/club/magic/magic.aspx?targetType='+type+'&tid='+tid)} //�ͷ�ħ��
function _GetFenLei(v,v1){
_GetPopUpValue(v,'/cgi-bin/bbs/htm/selbbsfenlei.html',500,400,v1)
}

function _PopChatRoom(lunquid, strName, strDesc){var a = _GetHotQQObject("Com.MessagePipe","",0.992);a.WebRoom2QMNet(lunquid, strName, strDesc);}//���������ң�2004,12.31 by holin
var chatRoom=_PopChatRoom

function _SendXXZ(imgurl){window.open("http://tlt.7town.com/ZComImgDIY/step2.asp?imageUrl="
	+escape(imgurl)+"&uid=16764&a=&b=&c=&d=&e=&f=")} //���������յ��ֻ���imgurl�����յ�ַ
	
function _SendImg(id){window.open("/cgi-bin/bbs/imgadmin/viewimg_sendimg.aspx?id="+id);}
function _TBPost(id){window.open("/cgi-bin/sys/bbsadmin/qlog/tbPost.aspx?id="+id);} //�������ۣ�2004.10.21 by holin
function _Report(type, subject, body) {newin('/qq/myqq/express/report.html?type=' + type + (body?"&body=" + body:"")+"&url=" + escape(location),null,640,500);} //Report

//o	����ͼƬurl����
//space �ռ���������� type=1&root=&path=
function _SelImgUrl(o,space,isAbsoluteLink)
{
if(!_checkIE5()) return;
_GetPopUpValue("document.all."+o.uniqueID,
		"/qq/sys/netspace/?"+(space?"&"+space:"")+(isAbsoluteLink?"&isAbsoluteLink=1":"")
		,620,523);
}

function _CheckDotNET(v){
var s=window.navigator.userAgent.match(new RegExp("\\.NET CLR (\\d+\\.\\d+)"))
if (s){
	if ((!v)||(s[1]>=v)) return true
}
return false
}
function _GetQMVer(){
 var s=window.navigator.userAgent.match(new RegExp("QM\\.NET (\\d+\\.\\d+)","i"))
 return (s)? s[1]*1000:0
}
function _CheckQMVer(v){
return (_GetQMVer()>=v*1000)
}
function _CheckQMLatestVer(){ //����Ƿ�Ϊ���°汾
return (_GetQMVer()>=0.997*1000)
}
function _DownLoadQM(){
  window.open("/qq/qqspace/xuanchuan.htm")
}
function _PromPtDownLoadQM(s){
  if (confirm(s?s:"�ù�����Ҫ��װQM.NET������ȥ���ذ�װ��")) _DownLoadQM();
}
function _GetHotQQObject(classname,noQMMsg,v){
if ((v)&&(!_CheckQMVer(v))){
	_PromPtDownLoadQM(noQMMsg)
	return
}
var o
try{ 
	o= new ActiveXObject("HotQQ."+classname)
}
catch (e)
{
	alert(e.message);_PromPtDownLoadQM(noQMMsg);return;
}
o.document=document
return o
}

function _SelLM(reValue,reDesc,a) //select one luntan
{
	if (!reDesc) reDesc=null;
	_GetPopUpValue(reValue,"/cgi-bin/sys/bbsadmin/fastSel/selMyLM.aspx"+((a)?a:""),360,250,reDesc);
}//_SelLuntan

function _SelLMs(reValue,reDesc) //select mulluntan
{
	_SelLM(reValue,reDesc,"?multiple=true")
}//_SelLuntans

function _SelLuntan(reValue,reDesc,a) //select one luntan
{
	if (!reDesc) reDesc=null;
	_GetPopUpValue(reValue,"/cgi-bin/sys/bbsadmin/fastSel/selMyLuntan.aspx"+((a)?a:""),360,250,reDesc);
}//_SelLuntan

function _SelLuntans(reValue,reDesc) //select mulluntan
{
	_SelLuntan(reValue,reDesc,"?multiple=true")
}//_SelLuntans

function _SelUser(reValue,reDesc,a) //select one usr
{
	if (!reDesc) reDesc=null;
	_GetPopUpValue(reValue,"/cgi-bin/sys/bbsadmin/fastSel/selFriends.aspx"+((a)?a:""),490,300,reDesc);
}//_Selusr

function _SelUsers(reValue,reDesc) //select mulusr
{
	_SelUser(reValue,reDesc,"?multiple=true")
}//_Selusrs

//a����˵��multiply = falseʱ���ܶ�ѡ
//onlyorg = true ʱֻ��ѡ����
//�޸��� ����  2004/10/28
function _SelOrg(reValue,reDesc,a) //select orgs
{
	if (!reDesc) reDesc=null;
	_GetPopUpValue(reValue,"/cgi-bin/sys/bbsadmin/fastSel/setGroups.aspx"+((a)?a:""),520,400,reDesc);
}//_SelOrg

function _SelOrgOne(reValue,reDesc) //select one org
{
	_SelOrg(reValue,reDesc,"?multiple=false")
}//_SelOrg

function _QQUsrOrg(id)
{
	window.open("/cgi-bin/club/groups/orginfo.aspx?oid="+id);
}
String.prototype.getLeftN = function(n){
	if (this.length <= n) return this
	return this.slice(0,n)+".."
}
String.prototype.trim = function()
{
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
function _ctrl_enter_submit(){
if(!(event.ctrlKey && event.keyCode==13)) return
var ee=event.srcElement.form.elements
for (var i=0;i<ee.length;i++)
	if (ee[i].type=="submit") {ee[i].click();return}
}

function _GetUsrOnlineHTML(o){
if ((o != "F")&&(o!='')) return "<a target=_blank href=/qq/qqspace/xuanchuan.htm><img border=0 title='QM����' src=/qq/img/usr/o.gif></a>"
return "" //"<img border=0 title='����' src=/qq/img/usr/f.gif>"
}
function _GoFile(filename){
 if (filename.charAt(0)=="/") location.pathname=filename;
 var i=location.pathname.lastIndexOf("/")
 location.pathname=location.pathname.substring(0,i+1)+filename
}
function _BlankString(){return ""}

function _TrackBack(id){
 newin("/cgi-bin/sys/bbs/trackback.aspx?id="+id,null,700,500);
}
function _REG(id)
{
	var goLink="/qq/sys/register/new.htm";
	if (id)
	{
		if (isNaN(parseInt(id)))
			goLink += "?fromtype="+id;
		else
			goLink += "?fromtype=L"+id;
	}
	else
	{
	if (self._REGFromType)
		goLink += "?fromtype="+_REGFromType;
		else{
			var t="";
			if (self._lunquid) t=self._lunquid;
			else if ((self.opener)&&(opener._lunquid)) 
				t=opener._lunquid;
		
			if (t!="") 
				goLink +="?fromtype=L"+t;
			else
			{
				if (self._uid) t=self._uid;
				else if ((self.opener)&&(opener._uid)) t=opener._uid;
				else if (parent && parent.QQHomeMenu && (parent.QQHomeMenu._uid)) t=parent.QQHomeMenu._uid
				if (t!="") goLink +="?fromtype=U"+t;
			}
		}
	}//if id
	window.open(goLink);
}//_REG

function _JREG(id)
{
	var goLink="/cgi-bin/myqq/register/fastReg.aspx";
	if (id)
	{
		if (isNaN(parseInt(id)))
			goLink += "?fromtype="+id;
		else
			goLink += "?fromtype=L"+id;
	}
	else
	{
		var t="";
		if (self._MYBBS) t=self._MYBBS.lunquid;
		else if ((self.opener)&&(opener._MYBBS)) t=opener._MYBBS.lunquid;
		
		if (t!="") 
			goLink +="?fromtype=L"+t;
		else
		{
			if (self._uid) t=self._uid;
			else if ((self.opener)&&(opener._uid)) t=opener._uid;
			if (t!="")
				goLink +="?fromtype=U"+t
			else //t="" ���ļ����
			{
				if (_GetUrlFileName(location.toString()).substr(0,5).toUpperCase()=="MYBBS")
				{if (QueryString.id)  goLink +="?fromtype=L"+QueryString.id;}
			}
		}
	}//if id
	newin(goLink,null,500,306);
}//_REG

function _GetRenZhengHTML()
{
	var n = Math.ceil(Math.random()*2147483647);
	return "<input type=hidden name=pass1 value="+n+"><img style='margin-bottom:-3px;' src=/cgi-bin/class/sys/RenZheng.aspx?id="+n+">";
}//_GetRenZhengHTML

function _SelUsr(plogname,pname){
 _GetPopUpValue(plogname,'/cgi-bin/usr/selusr.aspx',400,500,pname)
}

function _GetQQMagic(){
if (self._QQMagiced) return
if (document.all._QQM){
	_W("<script src=/qq/js/qqdhtml.js><"+"/script>")
	_QQMagiced = true
	window.attachEvent("onload", new Function("_QQMagic();"))
}
}
//�鿴�ܱ�������
function _ViewAuth(id){
newin('/cgi-bin/class/BBS/ProtectedContent.aspx?id='+id,null,700,500)
}
//�������Ӹ���
function _BBSLinks(links){
if (!links){ return "";}
links=links.split("|");
var QQSpaceStr='/cgi-bin/class/QQSpace/QQSpace.aspx'
for (var s="",i=0,j=links.length;i<j;i++){
	if (_StartWith(links[i],QQSpaceStr)){
		var t=links[i].substr(QQSpaceStr.length+1)
		s+=' <img src='+QQSpaceStr+'?act=QQSpaceStatusImg&uid='+t.substr(0,t.indexOf("/"))+">"
		}
  	s+='<a href="'+links[i]+'">'+_GetUrlFileName(links[i])+'</a> '; 
  	}
return s;
}

//����flash�鿴��
function _SWF(src,width,height,styleStr){
return '<object style="'+((styleStr)?styleStr:"border:1 solid black")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0"'
	+' width="'+width+'" height="'+height+'">'
	+'<param name=movie value="'+src+'"><param name=quality value=high>'
	+((styleStr)?"<param name=\"scale\" value=\"noscale\" /><param name=\"wmode\" value=\"transparent\">":"")
	+'<embed scale="noscale" src="'+src+'" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash"'
	+' width="'+width+'" height="'+height+'"></embed></object>'
}

//����Ԫ��
function _TiaoDong(){
	for (var i=0;i<_TiaoDongAry.length;i++){
		
		_TiaoDongAry[i].style.left=(parseInt(_TiaoDongAry[i].style.left)==-1)?1:-1
		}
}
function _AddTiaoDong(o){
 if (!IsIE5()) return
 if (self._TiaoDongAry==null) {
 	_TiaoDongAry=new Array();
 	_TiaoDongAry[0]=o
 	o.style.position="relative"
 	setInterval("_TiaoDong()",100)
 	}
 else
 	_TiaoDongAry[_TiaoDongAry.length]=o
 
}

function _GetHomeHost(homeid){
return "w"+homeid+".5ilog.com"
}
//
function _GoUnion(id,j){
var src='/cgi-bin/sys/link/union.aspx?id='+id
if (j==1) src+="&j=1"
	window.open(src)
}

//css�л�
function _GetCssPath(css){
if (css) {
	if (css.indexOf(".")<0)//������ . ��ʹ��ϵͳ
		return "/cgi-bin/bbs/css/"+css+".css"

	return css
	}
//���ṩʹ��Ĭ��
if (self._MYBBS) {
	//�Ӱ����Ѿ��ı�Ĭ����
	if (_MYBBS.css) return _GetCssPath(_MYBBS.css)
	
	//ʹ��Ĭ�ϵ�
	if (_MYBBS.defaultcss) return _GetCssPath(_MYBBS.defaultcss)
	
	//ʹ���Զ����
	if (_MYBBS.dingHome) return _MYBBS.dingHome+"css.css"
	
	return _GetMyBBSDingUrl(_MYBBS.bbsname)+"css.css"
}
return "css.css"
}



//�������
function _SetCss(){
if (!self._MyBBSDisableCSS)
_W("<LINK id=_QQCss REL=stylesheet TYPE=text/css HREF="+_GetCssPath(_GetCookie("css"))+" />")
}

function _SetCss2(){
if (!self._MyBBSDisableCSS&&!document.all._QQCss2)
_W("<LINK id=_QQCss2 REL=stylesheet TYPE=text/css HREF="+_GetCssPath(_GetCookie("css"))+" />")
}

//�л�Css
function _ChangeCss(css){
 if (document.all._QQCss) document.all._QQCss.href=_GetCssPath(css);
 if (document.all._QQCss2) document.all._QQCss2.href=_GetCssPath(css); 
_SetCssCookie(css)
}

//����cookie
function _SetCssCookie(css){
if (css==null) {
	css=QueryString.CSS
	if (css==null) {
		_ClearCssCookie()
		return
	}
}

_SetCookies("css="+css,"3")
}


//���css cookie
function _ClearCssCookie(){
  var s="css=;expires=Mon, 28 Dec 1998 23:59:59 UTC;path=/" //+GetCurrentFullPath(location.pathname);
  if (_EndWith(document.domain.toLowerCase(),"5ilog.com")) s+=";domain=5ilog.com"
  document.cookie=s
  
  //��ΪĬ�Ϸ��
  if (document.all._QQCss) document.all._QQCss.href="css.html";
  if (document.all._QQCss2) document.all._QQCss2.href=_GetCssPath();
}

//����
function _QQ_FenLei(n){
if (window._QQ_FenLeiAry==null) return
if (_QQ_FenLeiAry[n])_W("<span class=s-tree-fenlei>"+_QQ_FenLeiAry[n]+"</span>")
}
function _QQ_FenLeiC(){}

function _QQ_FenLeiOption(){
if (window._QQ_FenLeiAry==null) return
for (var s="",i=0;i<_QQ_FenLeiAry.length;i++) 
	if (_QQ_FenLeiAry[i]) s+="<option value="+i+">"+_QQ_FenLeiAry[i];
_W("<option>"+s)
}

//�������Ҫ�������� �������target=_blank
function _QQ_target(){
 var f=_GetUrlFileName()
 if (_StartWith(f,"mybbs_new")) return
 if (_StartWith(f,"mybbs")||_StartWith(f,"dis")||_StartWith(f,"latest")||_StartWith(f,"search")){
 	var oDiv=document.createElement("BASE");
	oDiv.target="_blank"
	document.all.tags('HEAD')[0].appendChild(oDiv);
 }
}

//����
var __Today=new Date();
__Today=new Date(__Today.getFullYear(),__Today.getMonth(),__Today.getDate())

function _DayDiff(d){
d=d.split(/[\/\-\s]/g)
return (__Today-new Date(d[0],d[1]-1,d[2]))/86400000
}

//4�� new
function _QQ_new(d){
  var n=_DayDiff(d);
  if ((n>=0)&&(n<4)) _W("<img src=/qq/img/t1"+n+".gif width=35 height=16>")
}

//ˢ��new
function _QQ_new2(id){
  if (_isNew(id)) _W('<img width=28 height=11 src=/qq/img/dot/new2.gif>')
}

//����
function _QQ_BQ(n){ _W(_QQ_BQ_HTML(n)) }

function _QQ_BQ_HTML(n){
if ((n==0)||(n>66)) return ""
return '<img src="'+
	(_localbiaoqing?"file:///c:":"")+"/qq/img/bbs/"
	+n+'.gif">'
}

function _QQ_selfBiaoQing(n){_W(_QQ_selfBiaoQing_HTML(n))}
function _QQ_selfBiaoQing_HTML(n){
if ((n==0)||(n>_QQ_selfBiaoQingN)) return ""
return "<img src="+_Get_selfBiaoQingHome()+n+'.gif>'
}

function _Get_selfBiaoQingHome(){
//return _localbiaoqing?"file:///c:/qq/img/mybbs/"+_bbsname+"/":_QQ_selfBiaoQingDir
return _QQ_selfBiaoQingDir
}

//��ʾ������
function _disOnlineUsr(a){
   if (a==null) return
   var guoke=niming=0;
   for(var i=0;i<a.length-2;i+=2){
   	switch (a[i+1]){
   		case "n":
   			guoke++;
   			break;
   		case "":
   			niming++
   			break
   		default:
   			document.write("<a target=_self href=javascript:usrinfo('"
   				,a[i+1],"')>"
   				,a[i],"</a> ")
   	}//switch
   }//for
   if (guoke>0) document.write("����",guoke,"��")
   if (niming>0) document.write("����",niming,"��")
}

function _DisOnlineUsrXML(xml){
var rootNodes=xml.XMLDocument.childNodes.item(1).childNodes
var s="",logname;
var guoke=niming=0;
for (var i=0;i<rootNodes.length;i++){
   	switch (logname=rootNodes.item(i).getAttribute("logname")){
   		case "n":
   			guoke++;
   			break;
   		case "":
   			niming++
   			break
   		default:
   			s+="<a target=_self href=javascript:usrinfo('"
   				+logname+"')>"+rootNodes.item(i).getAttribute("name")+"</a> "
   	}//switch
 }
   if (guoke>0) s+=" ����"+guoke+"��"
   if (niming>0) s+=" ����"+niming+"��"
xml.insertAdjacentHTML("beforebegin",s)
}

//�õ����ID
function _getLID(){
	var lid=parseInt(_GetCookie("lid"));
	if (isNaN(lid)) return -1;
	return lid
}

var _QQ_LID=_QQ_MaxID=_getLID()
function _isNew(id){
	id=parseInt(id)
	if (id>_QQ_LID){
		if (id>_QQ_MaxID) {
			//��������
			_SetCookies("lid="+id,1)
			_QQ_MaxID=id
			}
		return true
	}
	return false
}

//������
function _W(s){document.write(s)}


//��β��/
function GetCurrentFullPath(s){
	if (s==null)
		s=location+"";
	var i=s.indexOf("?")
	if (i>=0) s=s.substring(0,i)
	var i=s.lastIndexOf("/")
        if (i<0) return s;
	return s.substring(0,i+1)
}


function _QQPage(o,isAbsoluteLink,isNoLocal,space,base){
   if(!_checkIE5()) return
   open('/qq/sys/qqpage/qqpage2.htm?SetValue=document.all.'+o.uniqueID
   	+(isAbsoluteLink?"&isAbsoluteLink=1":"")+(isNoLocal?"&isNoLocal=1":"")
   	+(space?"&space="+escape(space):"")+(base?"&base="+base:"")
   	  ,'_blank',"status=0,menubar=0,resizable=1,scrollbars=0,width=700,height=550")
	/*var str = 'document.all.'+o.uniqueID
   	+(isAbsoluteLink?"&isAbsoluteLink=1":"")+(isNoLocal?"&isNoLocal=1":"")
   	+(space?"&space="+escape(space):"")+(base?"&base="+base:"")
	_GetPopUpValue(str, '/qq/sys/qqpage/qqpage2.htm')*/
}

//o		���ض���
//liburl	ѡ��ͼ�� Lnnn,Innn,''
//ltype		ͼƬ�������� link,full,null
//base		����base
function _QQPage2(o){
   if(!_checkIE5()) return
   open('/qq/sys/qqpage/qqpage2.htm?SetValue=document.all.'+o.o.uniqueID
   	+(o.liburl?"&liburl="+o.liburl:"")+(o.ltype?"&ltype="+o.ltype:"")
   	+(o.base?"&base="+o.base:"")
   	  ,'_blank',"status=0,menubar=0,resizable=1,scrollbars=0,width=700,height=550")
}

//�õ������HTML��������ı���ת���س���
function _GetHTML(o){
  var reg=new RegExp("\\r\\n|[\\n\\r]","g");
  var reg1=new RegExp("  ","g");
  //�õ��Ƿ�HTML�ı�־��Ϊtext��name + _html
  var sx=o.form.sx?o.form.sx:o.form[o.name+"_html"]
  
  if (sx==null) 
  	return o.value.replace(reg,"<BR>").replace(reg1,"��");
  
  if (sx.length) sx=sx[1];
  if (!sx.checked)
  	return o.value.replace(reg,"<BR>").replace(reg1,"��");
  return o.value
}
function _ReturnHTML2(o,v){
  o.value=v;
  var sx=o.form.sx?o.form.sx:o.form[o.name+"_html"]
  if (sx){
  	if (sx.length) sx=sx[1];
  	sx.checked=true
  }
}

//theInput ������value����
//value��Ϊ��ʼhtml
//
function _qqpage(theInput,value){
   if(!_checkIE5()) return
   
   var w=open('/qq/sys/qqpage/qqpage.htm','_blank'
    	,"status=0,menubar=0,resizable=1,scrollbars=0,width=600,height=500")

    w.fromText=value
    w.fromWhere=theInput
}
//ȱʡ�Ľ����ط��봫��object��value
function __ReturnHTML(w,html,theInput){
	if (theInput==null) return false
	theInput.value=html
	return true
}

function _checkIE5(){
if (IsIE5())return true
alert("������IE5����߰汾���������ʹ�øù��ܣ�");
return false
}
function _checkIE4(){
if (!document.all) {alert("������IE4����߰汾���������ʹ�øù��ܣ�");return false}
return true
}
function _checkIE6(){
   var s=window.navigator.userAgent
   return (s.indexOf("IE 6")>=0)||s.indexOf("IE 7")>=0
}
function _checkIE55(){
if (!IsIE5())return false
var t=window.navigator.userAgent.match(new RegExp("IE (\\d+\\.\\d+)"))
return (t)?((t[1]*1000)>=5500):false
}
function IsIE5(){
   var s=window.navigator.userAgent
   if ((s.indexOf("IE 5") < 1) && (s.indexOf("IE 6") < 1) && (s.indexOf("IE 7") < 1)) return false
   return true
}

//mylink
function _mylink(sn){
var o=window["_link_"+sn]
if (o==null) return

switch (o.linktype){
	case "menu":
		o.menuHTML=_mylinkHTML(o)
		if (o.fudong)
			_QQFuDong("<div class=qq-fudongmenu onmouseout=_HideMenu() onmouseover=_ShowTabMenu(_link_"
			+sn+".menuHTML)><a href=# onclick='return false'>"+o[1]+"</a></div>",o.top,o.left);
		else
		document.write("<a class=qq-menu onmouseout=_HideMenu() onmouseover=_ShowTabMenu(_link_"
			+sn+".menuHTML) href=# onclick='return false'>"+o[1]+"</a>")
		break;
	default:
		var s="";
		for (var i=0;i<o.length;i+=2)
			s+="<option value='"+o[i]+"'>"+o[i+1]
		s="<select onchange=_mylinkgo(this,'"+o.target+"')>"+s+"</select>"
		if (o.fudong)
			_QQFuDong(s,o.top,o.left);
		else document.write(s);
	
}//switch
}

//QQmylink
function _QQmylink(sn){
	var o=_GetMYBBSValue("linkset."+sn,false)
	if (!o) return
	if (o.target) o.dataArr.target = o.target
	if (o.putindaohang){ //�ŵ���������
		o.menuHTML=_mylinkHTML(o.dataArr)
		if (self["LinksetContainer"]) LinksetContainer.insertAdjacentHTML("beforeend","&nbsp;|&nbsp;<a class=qq-menu onmouseout=_HideMenu() onmouseover=_ShowTabMenu(_MYBBS.linkset[\""+sn+"\"].menuHTML) href=# onclick='return false'>"+o.dataArr[1]+"</a>")
		return
	} //if
	switch (o.showtype){
		case "menu":
			o.menuHTML=_mylinkHTML(o.dataArr)			
			if (o.fudong)
				_QQFuDong("<div class=qq-fudongmenu onmouseout=_HideMenu() onmouseover=_ShowTabMenu(_MYBBS.linkset[\""
				+sn+"\"].menuHTML)><a href=# onclick='return false'>"+o.dataArr[1]+"</a></div>",o.fudong.top,o.fudong.left);
			else
			document.write("<a class=qq-menu onmouseout=_HideMenu() onmouseover=_ShowTabMenu(_MYBBS.linkset[\""
				+sn+"\"].menuHTML) href=# onclick='return false'>"+o.dataArr[1]+"</a>")
			break;
		case "onelink": //��������
			document.write(_mylinkHTML2(o.dataArr))
			break;
		default:
			var s="";
			for (var i=0;i<o.dataArr.length;i+=2)
				s+="<option value='"+o.dataArr[i]+"'>"+o.dataArr[i+1]
			s="<select class='qqmylinksel linkset"+sn+"' onchange=_mylinkgo(this,'"+o.target+"')>"+s+"</select>"
			if (o.fudong)
				_QQFuDong(s,o.fudong.top,o.fudong.left);
			else document.write(s);
		
	}//switch
}//_QQmylink

function tt(){alert(_MYBBS.linkset["newlinkset2"].menuHTML)}

//���ز˵���html����
function _mylinkHTML(o){
var a="<nobr><a"
if (o.target!="default"){
	if (o.target) a+=" target='"+o.target+"'"
		else a+=" target=_blank"
}
a+=" href='"

var s="";
for (var i=2;i<o.length;i+=2)
	s+=a+o[i]+"'>"+o[i+1]+"</a></nobr><br>";
return s
}

function _mylinkHTML2(o){ //mylink onelink
var a="<a"
if (o.target!="default"){
	if (o.target) a+=" target='"+o.target+"'"
		else a+=" target=_blank"
}
a+=" href='"

var s="";
s+=a+o[2]+"'>"+o[3]+"</a>";
return s
}//_mylinkHTML2


function _mylinkgo(the,win){
if (the.value=="") return
switch (win){
	case "_top":top.location=the.value;break;
	case "_self":location=the.value;break;
	default:window.open(the.value);break;
}
}

//���ϵ�uidת�����µ�CID
function _UID2CID(){
 if (_GetCookie("CID")) return
 var uid=_GetCookie("uid")
 if (uid){
 	document.cookie="uid=;expires=Mon, 28 Dec 1998 23:59:59 UTC;path=/cgi-bin"
 	document.cookie="uid=;expires=Mon, 28 Dec 1998 23:59:59 UTC;path=/"
 	document.cookie="uuid=;expires=Mon, 28 Dec 1998 23:59:59 UTC;path=/cgi-bin"
 	_SetCookies("CID="+uid,"3")
 }
}
_UID2CID()

//����cookies
/*
  c	cookiesֵ��
  expire
  	null	�޹���
  	Dnnn	������
  	Hnnn	����Сʱ
  	nnn	������
  path	Ĭ��Ϊ/
*/
function _SetCookies(value,expire,path){
var s=value;
if (expire){
	var d = new Date()
	switch((expire+"").charAt(0)){
		case "D":
			d.setHours(24*expire.substr(1))
			break;
		case "H":
			d.setMinutes(60*expire.substr(1))
			break
		default:
			d.setDate(32*expire)
	}
	s+=";expires="+d.toGMTString()
}

document.cookie=s+_GetCookiesDomain()+";path="+_GetCookiesPath(path)
}

//���cookie
function _ClearCookie(key,path,domain){
  var s=key+"=;expires=Mon, 28 Dec 1998 23:59:59 UTC"
  document.cookie=s+_GetCookiesDomain()+";path="+_GetCookiesPath(path)
}


//�õ�cookies��domain
function _GetCookiesDomain(domain){
if (domain) return ";domain="+domain
if (_EndWith(document.domain.toLowerCase(),"5ilog.com")) return ";domain=5ilog.com"
return ""
}

//�õ�cookies��path
function _GetCookiesPath(path){
if (path==null) return "/"
switch (path){
	case "currentpath":return GetCurrentFullPath(location.pathname)
}
return path
}


//�Ѿ�����
/*
function _setcookies(s){
  var d=new Date();
  d.setMonth(12);
document.cookie=s+";expires="+d.toGMTString()+";path=/";
}*/

function _GetCookie(c){
var t=document.cookie.split(";");
for (var i=t.length-1;i>=0;i--) {
	var tt=t[i].split("=");
	if (((tt[0].charAt(0)==" ")?tt[0].substring(1):tt[0])==c)
		return (tt[1])
 }
return null;
}

//��������
function getcookies(c){
return _GetCookie(c)
}
function setcookie_bz(n){
  if (n<10) return n.toString();
  if (n<36) return String.fromCharCode(n-10+"A".charCodeAt(0));
  return String.fromCharCode(n-36+"a".charCodeAt(0));
}

function setcookie_number(n){
  return setcookie_bz(parseInt(n/60))+setcookie_bz(n%60)
}


function getcookie_bz(s){
  var n=s.charCodeAt(0);
  if (n>="0".charCodeAt(0)&&n<="9".charCodeAt(0)) return n-"0".charCodeAt(0);
  if (n>="A".charCodeAt(0)&&n<="Z".charCodeAt(0)) return n+10-"A".charCodeAt(0);
  if (n>="a".charCodeAt(0)&&n<="|".charCodeAt(0)) return n+36-"a".charCodeAt(0);
  return NaN;
}

function getcookie_number(s){
  return getcookie_bz(s.charAt(0))*60+getcookie_bz(s.charAt(1))
}

function _get_self_conf(){
var self_conf=_GetCookie("QC");
if (self_conf==null) return;

var n=getcookie_bz(self_conf.charAt(0));
if (!isNaN(n))
{
	_hui_form_zhan=((n&1)!=0);
	_left_zhan=((n&2)!=0);
	_localcss=((n&4)!=0);
	_treeorder=((n&8)!=0);    //1 is default & true
	_latestorder=((n&16)==0); //0 is default & true
	_biaoqing=((n&32)==0);
}
n=getcookie_number(self_conf.substr(1,2));
if (!isNaN(n)) _maxsublength=n;

n=getcookie_number(self_conf.substr(3,2));
if (!isNaN(n)) _latestcount=n;

n=getcookie_number(self_conf.substr(5,2));
if (!isNaN(n)) _discount=n;

n=getcookie_bz(self_conf.charAt(7));
if (!isNaN(n)){
	_shangfu=((n&1)==0); //0 is default & true
	_chatAudio=((n&2)==0);
	_localbiaoqing=((n&4)!=0); //0 is default & false
	_huibiaoqing=((n&8)!=0);
}

n=getcookie_number(self_conf.substr(8,2));
if (!isNaN(n)) _frameheight=((n>=1)&&(n<=100))?n:100;

}

var
_logged=(_GetCookie("uuid")!=null);

var 
_hui_form_zhan=true,
_left_zhan=false,
_localcss=false;
_treeorder=true;
_latestorder=true;
_biaoqing=true;
_shangfu=true;
_chatAudio=false;
_localbiaoqing=false;
_huibiaoqing=false;

var
_maxsublength=30,
_discount=30,
_latestcount=15;
_frameheight=100;

_get_self_conf();

function newin(s,t,w,h,status){
window.open(s,(t)?t:"_blank","status="+(status?1:0)+",scrollbars=yes,menubar=0,resizable=1,width="+((w)?w:400)+",height="+((h)?h:300))
}


function init_QueryString(){
 var s1;
var s=document.location.search.substring(1);
 QueryString=new Object(s);
 s=s.split("&");
 for (var i=0,l=s.length;i<l;i++){
	s1=s[i].split("=");
	if (s1.length>1)
		QueryString[s1[0]]=unescape(s1[1]);
 }//for
}
var QueryString;
init_QueryString();
var jinghua=(QueryString.j=="1")?1:0;



//����
function _View(id,j,target){
  if (j!=1) j=0;
  var link="/cgi-bin/sys/link/view.aspx?j="+j+"&id="+id;
  if (target==null) location=link
  	else window.open(link,target)
}

//����̳
function _ViewLunTan(id,target){
  var link="/cgi-bin/sys/link/luntan.aspx?&id="+id;
  if (target==null) location=link
  	else window.open(link,target)
}



//�ļ�
function _WenJi(isNewWin,isMenuHidden,id,lognames,zixuan,sort){
  var link="/cgi-bin/sys/bbs/bbs_f.asp?type=search"
  if (isMenuHidden) link +="&menuhidden=1"
  var s="id="+id
  if (lognames) s +="&logname="+lognames
  if (zixuan=="1") s +="&z=1"
  if (sort=="1") s +="&o=1"
  link += "&s="+escape(s)

  if (isNewWin)  window.open(link)
    else location=link
}

function _MyJiFen(){
 newin("/cgi-bin/club/jifen/my_jifen.aspx","",450,170);
}

function _Vote(id,jinghua){
 if (jinghua==null)jinghua="1"
 newin("/cgi-bin/usr/vote.aspx?id="+id+"&j="+jinghua,null,400,500);
}

function _TuiJian(id){
 newin("/cgi-bin/club/tuijian.aspx?id="+id,null,750,600);
}

function _DisVote(id,jinghua){
 if (jinghua==null)jinghua="1"
 newin("/cgi-bin/sys/bbs/vote.asp?act=list&id="+id+"&j="+jinghua);
}

function _BBSAdmin(id,jinghua){
 window.open("/cgi-bin/bbs/admin/nview_update.asp?id="+id+(jinghua?"&j=1":""));
}

function delbulletin(id,lunquid){
if (confirm("ɾ����"+id+"���ӣ�"))
 newin("/cgi-bin/class/BBS/Admin.aspx?act=delete&autogo=autoclose&id="+id+(lunquid?"&lunquid="+lunquid:""));
}
function _AdminLunquSpace(subject,body){
newin("/qq/about/tmp/shenqingshoufei.htm?subject="+subject,null,600,500);
}
function _AdminUsrSpace(subject,body){
_AdminLunquSpace(subject,body)
}
function _AdminLunquBaoliu(subject,body){
_express('flyingheart',subject,body)
}


function _express(tologname,subject,body,fromlogname){
var link=""
if (tologname) link+="tologname="+tologname

if (subject) link+="&subject=" + subject
if (body) link+="&body=" + body
if (fromlogname) link+="&logname=" + fromlogname

newin("/qq/myqq/express/send.html?"+link,null,640,520);
}

function _ViewExpress(){newin("/qq/myqq/express/index.html",null,682,445);}

function express_admin(){newin("/qq/myqq/express/index.html",null,682,445);}

function usrinfo(s,id){
  if ((s=="?")&&(id)) newin("/cgi-bin/club/magic/magic.aspx?did=210&tid="+id,null,600,250)
  else window.open("/cgi-bin/sys/link/Home.aspx?logname="+s+"&maintype=JBXX");
}

function Login(autogo){
  if (autogo) autogo="?autogo="+autogo; else autogo=""
  newin('/qq/myqq/autolog.htm'+autogo,'_blank',333,220)
}

function ViewImg(id){
  window.open("/cgi-bin/sys/link/viewimg.aspx?id="+id);
}

function _Magic(tType,tid){
  newin("/cgi-bin/club/magic/magic.aspx?targetType="+tType+"&tid="+tid,null,600,430);
}

function AddFriend(uid){
  newin("/cgi-bin/class/Friends/Friends.aspx?act=add&uid="+uid);
}
function _AddFriend(logname){
  newin("/cgi-bin/class/Friends/Friends.aspx?act=addbylogname&lognames="+logname);
}



//����������򷵻أ������װ��������
function ToArray(a){
  if (a.length==null)
     return new Array(a)
  else
     return a
}

//ѡ������checkbox
function _selAllCheckBox(theCheckBox){
if (theCheckBox==null) return
var ids=ToArray(theCheckBox);
for (var i=0,l=ids.length;i<l;i++)
        ids[i].checked=true;
}

//��ѡ������checkbox
function _unselAllCheckBox(theCheckBox){
if (theCheckBox==null) return
var ids=ToArray(theCheckBox);
for (var i=0,l=ids.length;i<l;i++)
        ids[i].checked=false;
}

//ѡ���෴checkbox
function _selFanCheckBox(theCheckBox){
if (theCheckBox==null) return
var ids=ToArray(theCheckBox);
for (var i=0,l=ids.length;i<l;i++)
        ids[i].checked=!ids[i].checked;
}

//����Ƿ�ѡ����
function _checkSelCheckBox(theCheckBox){
if (theCheckBox==null) return
var ids=ToArray(theCheckBox);
for (var i=0,l=ids.length;i<l;i++)
        if (ids[i].checked) return true;

return false
}

//�ַ�����ʼ
function _EndWith(s,s1){
  if (s1.length>s) return false;
  return (s.substr(s.length-s1.length).toLowerCase()==s1.toLowerCase())
}

//�ַ�������
function _StartWith(s,s1){
  return (s.substr(0,s1.length).toLowerCase()==s1.toLowerCase())
}

//�õ�url���ļ���
function _GetUrlFileName(url){
  if (url==null) url=location.pathname;
  var i=url.lastIndexOf("/")
  if (i>=0) url=url.substr(i+1)
  i=url.indexOf("?")
  if (i>=0) url=url.substring(0,i-1)
  return url
}

//�ҵ���һ��parent
function _FindParentTag(e,tagname){
for(e=e.parentElement;e.tagName!="BODY";e=e.parentElement)
	if (e.tagName==tagname) return e;
return null
}

function _Face(logname,faceStr,homeid){
if (faceStr == "") return ""
switch(faceStr.charAt(0)){
	case "S":
               return "<img border=0 src=http://"+_GetHomeHost(homeid)+ _GetHomeUrl(logname) + "/sys/i." + faceStr.substr(1) + ">"
        case "F":
               return "<a target=_blank href=" + _GetHomeUrl(logname) + faceStr.substr(1) + "><img border=0 src=http://"+_GetHomeHost(homeid)+ _GetHomeUrl(logname) + "/sys/s" + faceStr.substr(1) + ".jpg></a>"
        case "J":
                return "<img border=0 src=/qq/img/face/" + faceStr + ".jpg>"
	default:
                return "<img border=0 src=/qq/img/face/" + faceStr + ".gif>"
}//switch
}//face

function _GetHomeUrl(logname){
	var i=logname.indexOf("@")
	if (i>=0){
		var d=logname.substr(i+1)
		logname=logname.substr(0,i)
		return "/u/oo/"+d.charAt(0)+"/"+d+"/"+logname.charAt(0)+"/"+logname.charAt(1)+"/"+logname
	}
	return "/u/"+logname.charAt(0)+"/"+logname
}

function _GetMyBBSDingUrl(bbsname){
	if (bbsname.charAt(0)=="~"){ 
	        var i = bbsname.indexOf("@")
        	if (i >= 0){
            		var d=bbsname.substr(i + 1)
            		bbsname = bbsname.substr(1, i - 1)
            		return "/cgi-bin/log/oo/"+d.charAt(0)+"/"+d
            			+"/"+bbsname.charAt(0)+"/"+bbsname.charAt(1)+"/"+bbsname+"/"
            	}else
            		return "/cgi-bin/log/"+bbsname.charAt(1)+"/"+bbsname.charAt(2)+"/"+bbsname.substring(1)+"/"
	}
	return "/cgi-bin/mybbs/"+bbsname.charAt(0)+"/"+bbsname+"/"
}

//�õ�root����
function GetRootLunQu(id){
if (id>0x70000000) return id
return _IsMyBBS(id)? id&0x7fffff00 : id&0xff000
}

function _IsMyBBS(id){
return ((id>0x40000000)&&(id<0x50000000))
}

function _DisableNextClick(btn){
 btn.disabled=true
 if (btn.form.onsubmit) 
 	if (!btn.form.onsubmit()) {
 	 	btn.disabled=false
 		return false
	}
 
 btn.value='�����ĵȴ�...'
 btn.form.submit()
}

//����ղ�
function bookmarkit(url,title){
window.external.addFavorite(url?url:document.location,title?title:document.title)
}


//�˵�

//����menu
function _HideMenu() {
if (document.all._menuDiV)
 	if (!_menuDiV.contains(window.event.toElement))
 		_menuDiV.style.display="none"
}

//��ʾһ�����˵�
//tabCSSClass		����ṩ��ʹ�ø����ǲ˵�table
function _ShowTabMenu(menuContentHTML,shadowColor,shadowSize,tabCSSClass,align){
_ShowMenu("<table id=_subMenU cellspacing=1 cellpadding=3 class="+(tabCSSClass?tabCSSClass:"menutab")+"><tr><td nowrap align=left class=menutd>" 
		+ menuContentHTML + "</td></tr></table>",align);

_DropShadow(_subMenU,shadowColor?shadowColor:"#999999", shadowSize?shadowSize:3)
}

//menuContentHTML		�˵�����
//align		���뷽ʽ��Ĭ����right
function _ShowMenu(menuContentHTML,align) {
var vSrc = window.event.srcElement;
var topMar = 0;
var leftMar = -2;
var space = 1;

var h = vSrc.offsetHeight;
var w = vSrc.offsetWidth;
var l = vSrc.offsetLeft + leftMar+1;
var t = vSrc.offsetTop + topMar + h + space-4;
var vParent = vSrc.offsetParent;

while (vParent.tagName.toUpperCase() != "BODY"){
		l += vParent.offsetLeft;
		t += vParent.offsetTop;
		vParent = vParent.offsetParent;
}

if (document.all._menuDiV==null)
	document.body.insertAdjacentHTML("afterbegin",
		"<div id=_menuDiV style='Z-INDEX: 2; width=1px;height:1px;display:none;POSITION: absolute;'></div>")
		
_menuDiV.innerHTML = menuContentHTML;
_menuDiV.style.top = t;
_menuDiV.style.left =align?l-w:l;
_menuDiV.style.display = "block";
_menuDiV.onmouseout=_HideMenu
}

function _DropShadow(el, color, size){
for (var i=size; i>0; i--){
	var rect = document.createElement('div');
	var rs = rect.style
	rs.position = 'absolute';
	rs.left = (el.style.posLeft + i) + 'px';
	rs.top = (el.style.posTop + i) + 'px';
	rs.width = el.offsetWidth + 'px';
	rs.height = el.offsetHeight + 'px';
	rs.zIndex = el.style.zIndex - i;
	rs.backgroundColor = color;
	var opacity = 1 - i / (i + 1);
	rs.filter = 'alpha(opacity=' + (100 * opacity) + ')';
	el.insertAdjacentElement('afterEnd', rect);
}//for
}


/*����Ԫ��
html	������html����
top	��
left	��
strCss �Զ����css
*/
function _QQFuDong(html,top,left,strCss){
if (self._QQFuDongAry==null) self._QQFuDongAry=new Array();
var n=_QQFuDongAry.length;
if (!(document.body)) return;
if (strCss){
	if(!document.all.tableFuDong){ //��û�л�׼�ı��
		document.body.insertAdjacentHTML("afterbegin",
	"<table cellspacing=0 cellpadding=0><tr><td height=0 id=tableFuDong></td></tr></table>")
	}
	document.all.tableFuDong.insertAdjacentHTML("afterbegin",
	"<dl id=_QQFuDong"+n
	+" style='"+strCss+";width=1px;height:1px;POSITION: absolute;'><nobr>"
	+html+"</nobr></dl>")
}
else{
document.body.insertAdjacentHTML("afterbegin",
	"<dl id=_QQFuDong"+n
	+" style='left:"+left+";top:"+top+";width=1px;height:1px;POSITION: absolute;'><nobr>"
	+html+"</nobr></dl>")
}
_QQFuDongAry[n]=new Object()
_QQFuDongAry[n].x=0;
_QQFuDongAry[n].y=0;
_QQFuDongAry[n].fudongObject=document.all["_QQFuDong"+n];

window.setInterval("_QQFuDongMove("+n+")",10)
}

function _QQFuDongMove(i) { 
var percent;
var XY=_QQFuDongAry[i]
diffY = document.body.scrollTop;
if(diffY != XY.y)  {
	percent = .1 * (diffY - XY.y);      
 	percent =(percent > 0)?Math.ceil(percent):Math.floor(percent);  
 		
 	XY.fudongObject.style.pixelTop += percent;
	XY.y += percent;
}

diffX = document.body.scrollLeft; 
if(diffX != XY.x) {
 	percent = .05 * (diffX - XY.x);
 	percent =(percent > 0) ?Math.ceil(percent):Math.floor(percent); 
 	
 	XY.fudongObject.style.pixelLeft += percent;
	XY.x +=  percent;
 }
}//_QQFuDongMove


/*����Ԫ��
*/
function _QQChip(html,speed,vmin,vmax,vr){
if (!(document.body)) return;

if (self._QQChipAry==null) self._QQChipAry=new Array();

var n=_QQChipAry.length;
document.body.insertAdjacentHTML("afterbegin",
	"<dl id=_QQChip"+n
	+" onmouseover='_QQChipAry["+n+"].stop=true' onmouseout='_QQChipAry["+n+"].stop=false' style='Z-INDEX: 2;left: 10px; top: 10px;POSITION: absolute;'>"
	+html+"</dl>")

_QQChipAry[n]=new _QQChipObject(n,100,100)


window.setInterval("_QQChipMove("+n+")",speed?speed:120)
}

//����object
function _QQChipObject(n,width,height,vmin,vmax,vr){
 this.chipObject=document.all["_QQChip"+n];
 
 this.vmin=vmin=vmin?vmin:2
 this.vmax=vmax=vmax?vmax:5
 this.vr=vr=vr?vr:2
 
 this.vx=vmin+vmax*Math.random();
 this.vy=vmin+vmax*Math.random();
 this.w=width;
 this.h=height;
 this.xx=10;
 this.yy=10;
 this.stop=false
}

//�ƶ� 
function _QQChipMove(i){
with (_QQChipAry[i]){

if (stop) return

var pageX=window.document.body.scrollLeft;
var pageW=window.document.body.offsetWidth;
var pageY=window.document.body.scrollTop;
var pageH=window.document.body.offsetHeight;

 xx+=vx;
 yy+=vy;
 
 vx+=vr*(Math.random()-0.5);
 vy+=vr*(Math.random()-0.5);
 if(vx>(vmax+vmin))  vx=(vmax+vmin)*2-vx;
 if(vx<(-vmax-vmin)) vx=(-vmax-vmin)*2-vx;
 if(vy>(vmax+vmin))  vy=(vmax+vmin)*2-vy;
 if(vy<(-vmax-vmin)) vy=(-vmax-vmin)*2-vy;
 if(xx<=pageX){
  xx=pageX;
  vx=vmin+vmax*Math.random();
 }
 if(xx>=pageX+pageW-w){
  xx=pageX+pageW-w;
  vx=-vmin-vmax*Math.random();
 }
 if(yy<=pageY){
  yy=pageY;
  vy=vmin+vmax*Math.random();
 }
 if(yy>=pageY+pageH-h){
  yy=pageY+pageH-h;
  vy=-vmin-vmax*Math.random();
 }

  chipObject.style.pixelLeft=xx
  chipObject.style.pixelTop =yy
  
}//with
}

function _isQQ(){
 return location.host.toLowerCase().indexOf("5ilog.com")>=0
}


//v	����ʱ���浽�ı���	���ƣ�theform.input.value
//url	�򿪵�ҳ��
//w,h   ���ڵĿ�Ⱥ͸߶�
function _GetPopUpValue(v,url,w,h){
if (url.indexOf("?")>=0) url+="&"
	else url+="?"
 url+="SetValue="+v
 for (var i=4;i<arguments.length;i++){
  	url+="&SetValue"+(i-3)+"="+arguments[i]
  }
 _CreatePopUpDiv({url:url,w:w,h:h})
 //newin(url,null,w,h)
}

//���ڵ��λ�õ�����
//ָ��top,leftλ�õ�
//isappend�Ƿ����ֵ��Ĭ���Ǹ�д
//url
//v
//isnothit
function _GetPopUpValue2(o){
if (o.url.indexOf("?")>=0) o.url+="&"
	else o.url+="?"
 o.url+="SetValue="+o.v

if (o.isappend) o.url+="&isappend=1"

if (o.ary) 
 for (var i=0;i<o.ary.length;i++){
  	o.url+="&SetValue"+(i+1)+"="+o.ary[i]
  }
  
_CreatePopUpDiv(o)
 //newin(url,null,w,h)
}
//w,h
//isnothit	true���̶�λ�ã�������ݵ�ǵط�
//top,left	����̶������ṩ�ĵ���λ��
function _CreatePopUpDiv(o){ //����frame
	if (self._QQPopUpDivDataObj && _QQPopUpDivDataObj._hasQQPopUpDiv) _CloseQQPopUpDiv() //����Ѿ����˴�������ص�
	if (!o.w) o.w = 400
	if (!o.h) o.h = 300

	var po = null
	if ( (!o.isnothit) && event) po = _QQGetAbsPosition(event.srcElement)
	if (po)	{
		 o.top = po.top
		 o.left = po.left
		if (o.top<0) o.top = 0
		if (o.left<0) o.left = 0
	}else{
		 if (o.top==null) o.top = 100
		 if (o.left==null) o.left = 100
	}
	var styleOver = 'this.style.border="1px solid";this.style.borderColor="#eee #aaa #aaa #eee"'
	var styleOut = 'this.style.border="1px solid #0099FC"'
	var style = 'style="border: 1px solid; border-color: #0099FC; padding-top: 18px; width: '
		+o.w+'; height: '+o.h+'; z-index: 99; position: absolute; left: '+o.left+'; top: '+o.top+'"'
	var str = '<div id=_QQPopUpDiv '+style+'>'
			+ '<div ondblclick="_QQPouUpDivDBLClick()" style="position: absolute; top: 0px; background: #0099FC; text-align: right; border-bottom: #0073C8 solid 1px; padding:1px; height: 18px; width: 100%; cursor: move; color: white; font-size: 12px;"><span style="position: absolute; left: 5px; top: 0px;" id="_QQPopUpDivLoading">Loading...</span>'
			+ '<span style="cursor: default; display: none;" id=_QQPopUpDivIconMax><span style="border:1px solid #0099FC" onmouseover=\''+styleOver+'\' onmouseout=\''+styleOut+'\'><img width=10 height=10 src="/qq/img/windowicon/minisize.gif" alt="��С��" onclick="_QQPouUpDivMinimize()"></span><span style="border:1px solid #0099FC" onmouseover=\''+styleOver+'\' onmouseout=\''+styleOut+'\'><img width=10 height=10 src="/qq/img/windowicon/originsize.gif" alt="��ԭ" onclick="_QQPouUpDivToOrigin()"></span><span style="border:1px solid #0099FC" onmouseover=\''+styleOver+'\' onmouseout=\''+styleOut+'\'><img width=10 height=10 src="/qq/img/windowicon/close.gif" alt="�ر�" onclick="_CloseQQPopUpDiv()"></span></span>'
			+ '<span style="cursor: default" id=_QQPopUpDivIconOrigin><span style="border:1px solid #0099FC" onmouseover=\''+styleOver+'\' onmouseout=\''+styleOut+'\'><img width=10 height=10 src="/qq/img/windowicon/minisize.gif" alt="��С��" onclick="_QQPouUpDivMinimize()"></span><span style="border:1px solid #0099FC" onmouseover=\''+styleOver+'\' onmouseout=\''+styleOut+'\'><img width=10 height=10 src="/qq/img/windowicon/fullsize.gif" alt="���" onclick="_QQPouUpDivMaximize()"></span><span style="border:1px solid #0099FC" onmouseover=\''+styleOver+'\' onmouseout=\''+styleOut+'\'><img width=10 height=10 src="/qq/img/windowicon/close.gif" alt="�ر�" onclick="_CloseQQPopUpDiv()"></span></span>'
			+ '<span style="cursor: default; display: none;" id=_QQPopUpDivIconMini><span style="border:1px solid #0099FC" onmouseover=\''+styleOver+'\' onmouseout=\''+styleOut+'\'><img width=10 height=10 src="/qq/img/windowicon/originsize.gif" alt="��ԭ" onclick="_QQPouUpDivToOrigin()"></span><span style="border:1px solid #0099FC" onmouseover=\''+styleOver+'\' onmouseout=\''+styleOut+'\'><img width=10 height=10 src="/qq/img/windowicon/fullsize.gif" alt="���" onclick="_QQPouUpDivMaximize()"></span><span style="border:1px solid #0099FC" onmouseover=\''+styleOver+'\' onmouseout=\''+styleOut+'\'><img width=10 height=10 src="/qq/img/windowicon/close.gif" alt="�ر�" onclick="_CloseQQPopUpDiv()"></span></span>'
			+ '</div><span style="width: 100%; height: 100%;" id=_QQPopUpIFrameSpan><iframe name=_QQPopUpIFrame onload="_QQPopUpDivLoading.innerText=_QQPopUpIFrame.document.title;" style="width: 100%; height: 100%;" src="'
			+o.url+'" frameborder=0 scroll=auto></iframe></span>'
			+ '</div>'
			+ '<div id="_QQPopUpResizer" style="z-index:100; position: absolute; top: '
			+(o.top+o.h)+'px; left: '+(o.left+o.w-12)+'px; cursor: nw-resize;" title="�϶��ı䴰�ڴ�С" onmousedown="_QQPopUpDivDataObj._needHideQQPopUpDiv=false;_QQPopUpDivDataObj._miniQQPopUpDiv=false" onmouseup="setTimeout(\'_QQPopUpDivDataObj._needHideQQPopUpDiv=true;_QQPopUpDivDataObj._miniQQPopUpDiv=true\',10)"><img src=/qq/img/windowicon/move.gif border=0></div>'
	
	document.body.insertAdjacentHTML("afterbegin", str)
	if (parent._QQPopUpDivDataObj)
		if (parent._QQPopUpDivDataObj._hasQQPopUpDiv) parent._QQPouUpDivMaximize() //���������
	_QQPopUpDivDataObj = new Object() //����ȫ�ֶ��󱣴���Ϣ��
	if (!_QQPopUpDivDataObj._hasAttached)
		setTimeout('_QQPopUpDivDataObj._hasAttached = true; document.body.attachEvent("onclick", function(){if (self._QQPopUpDiv && (!_QQPopUpDiv.contains(event.srcElement))) _QQPouUpDivMinimize()})', 1000)
	setTimeout("_QQPopUpDivDataObj._hasQQPopUpDiv = true;_QQPopUpDivDataObj._miniQQPopUpDiv = true;_QQPopUpDivDataObj._needHideQQPopUpDiv=true;", 10)
	setTimeout("moveobj_QQPopUpDiv = new _QQMovePopUp(_QQPopUpDiv)", 100)
	setTimeout("moveobj_QQPopUpResizer = new _QQMoveResizer(_QQPopUpResizer);", 100)
	setTimeout("_SetQQPopUpResizerPos();", 100)
}//_CreatePopUpWin

function _QQPouUpDivMinimize(){
	if (!_QQPopUpDivDataObj._miniQQPopUpDiv) return //������½�PopUpDiv������С������
	var oDiv = self._QQPopUpDiv
	_QQPopUpIFrameSpan.style.display = "none" //����iframe
	_QQPopUpResizer.style.display = "none" //����_QQPopUpResizer
	_QQPopUpDivShowIcon(1)
	if ( (_QQPopUpDivDataObj.state != 3) && (_QQPopUpDivDataObj.state != 1) ) _QQPopUpDivSetOriginData() //���õ�ǰԭʼ��Ϣ
	_QQPopUpDivDataObj.state = 1
	var w=200,h=19
	oDiv.style.width = w
	oDiv.style.height = h
	oDiv.style.top = document.body.scrollTop
	oDiv.style.left = 0
	_SetQQPopUpResizerPos()
}//_QQPouUpDivMinimize

function _QQPouUpDivToOrigin(){
	var oDiv = self._QQPopUpDiv
	_QQPopUpDivShowIcon(2)
	if (self._QQPopUpDivDataObj) _QQPopUpDivDataObj.state = 2
	_QQPopUpIFrameSpan.style.display = "" //��ʾiframe	
	_QQPopUpResizer.style.display = "block" //��ʾ_QQPopUpResizer	
	oDiv.style.top = _QQPopUpDivDataObj.OriginData.top
	oDiv.style.left = _QQPopUpDivDataObj.OriginData.left
	oDiv.style.width = _QQPopUpDivDataObj.OriginData.width
	oDiv.style.height = _QQPopUpDivDataObj.OriginData.height
	_SetQQPopUpResizerPos()
}//_QQPouUpDivMinimize

function _QQPouUpDivMaximize(){
	var oDiv = self._QQPopUpDiv
	_QQPopUpDivShowIcon(3)
	//alert(_QQPopUpDivDataObj.state)
	if ( _QQPopUpDivDataObj.state != 1 ) _QQPopUpDivSetOriginData() //���õ�ǰԭʼ��Ϣ
	_QQPopUpDivDataObj.state = 3
	oDiv.style.top = 20 + document.body.scrollTop
	oDiv.style.left = 10
	oDiv.style.width = "96%"
	oDiv.style.height = "90%"
	_QQPopUpIFrameSpan.style.display = "" //��ʾiframe	
	//_QQPopUpIFrameSpan.style.marginTop = "18px" //����iframeĬ�϶���
	_QQPopUpResizer.style.display = "block" //��ʾ_QQPopUpResizer
	_SetQQPopUpResizerPos()
}//_QQPouUpDivMinimize

function _QQPouUpDivDBLClick(){ //˫��������
	if ( _QQPopUpDivDataObj.state != 3 ) _QQPouUpDivMaximize()
	else _QQPouUpDivToOrigin()
}//_QQPouUpDivDBLClick()

function _QQPopUpDivShowIcon(n){ //��ʾ�˵�icon
	_QQPopUpDivIconMax.style.display = "none"
	_QQPopUpDivIconOrigin.style.display = "none"
	_QQPopUpDivIconMini.style.display = "none"
	switch (n)
	{
		case 1:_QQPopUpDivIconMini.style.display = "block"
		break
		case 2:_QQPopUpDivIconOrigin.style.display = "block"
		break
		case 3:_QQPopUpDivIconMax.style.display = "block"
		break
		default:
		break
	}	
}//_QQPopUpDivShowIcon

function _QQPopUpDivSetOriginData(){ //���û�ԭ״̬����Ϣ
	if (!_QQPopUpDivDataObj.OriginData) _QQPopUpDivDataObj.OriginData = new Object()
	_QQPopUpDivDataObj.OriginData.top = _QQGetAbsPosition(_QQPopUpDiv).top
	_QQPopUpDivDataObj.OriginData.left = _QQGetAbsPosition(_QQPopUpDiv).left
	_QQPopUpDivDataObj.OriginData.width = _QQPopUpDiv.offsetWidth
	_QQPopUpDivDataObj.OriginData.height = _QQPopUpDiv.offsetHeight
}//_QQPopUpDivSetOriginData

function _CloseQQPopUpDiv(){//�ر�PopUpDiv
	if (!_QQPopUpDivDataObj._hasQQPopUpDiv) return
	if (!_QQPopUpDivDataObj._needHideQQPopUpDiv) return
	var oDiv = self._QQPopUpDiv
	var oDiv2 = self._QQPopUpResizer
	//if (!oDiv) oDiv = parent._QQPopUpDiv
	if (!oDiv) return
	if (!oDiv2) return
	oDiv.outerHTML = ""
	oDiv2.outerHTML = ""
	_QQPopUpDivDataObj._hasQQPopUpDiv = false
}

function _SetQQPopUpResizerPos(){//����QQPopUpResizerλ��
	_QQPopUpResizer.style.top=_QQGetAbsPosition(_QQPopUpDiv).top+_QQPopUpDiv.offsetHeight-12
	_QQPopUpResizer.style.left=_QQGetAbsPosition(_QQPopUpDiv).left+_QQPopUpDiv.offsetWidth-12
}//_SetQQPopUpResizerPos

//���ص�ǰֵ
function _GetCurPopValue(name){
  if (QueryString.SetValue==null){
  	alert("SetValueû�����ã�")
  	return 
  	}
  if (self==top){
	var s="window.opener."+QueryString.SetValue
  }else{
	var s="window.parent."+QueryString.SetValue
  }
  var o=eval(s)
  if (typeof(o)=="object"){
  	//����Ƕ����ṩ����ID
  	//����getDefaultValue����������ΪID
  	var func=o.getDefaultValue
  	
  	if (func) return eval("window.parent."+func+"("+s+",'"+(name?name:"")+"')")
  	
  	//û���ṩ������ֱ�ӻ������
  	if (name) return o[name]
  	//Ĭ��Ϊvalue
  	return o.value
  }else{
  	//����ֱ�ӷ���ֵ
  	return s
  }
}

//����ֵ
function _PopValue(v){
  if (QueryString.SetValue==null){
  	alert("SetValueû�����ã�")
  	return 
  	}
  if (self==top){
	var ss="window.opener."
  }else{
	var ss="window.parent."
  }
  //������ֱֻ�ӷ�ֵ 
  var v2="";
  for (var i=1;i<arguments.length;i++){
  	v2=(arguments[i]+"") //.replace(/\\/g,"\\\\").replace(/'/g,"\\'")
  	//prompt("testest",ss+QueryString["SetValue"+i]+"=v")
	eval(ss+QueryString["SetValue"+i]+"=v2")
  }

  var s=ss+QueryString.SetValue
  var o=eval(s)
  if (typeof(o)=="object"){
  	//����Ƕ����ṩ����ID
  	//����onchangeValue��������һ������ΪID���ڶ���Ϊֵ
  	var func=o.onchangeValue
  	//if (func) alert(ss+func+"("+s+",v)")
	if (func) eval(ss+func+"("+s+",v)")
	else {
		if (QueryString.isappend)
			o.value += v;
		else	o.value = v;
	}
  }else{
  	//����ֱ�ӽ�ֵ����
  	if (QueryString.isappend)
  		eval(s+"+=v");
  	else eval(s+"=v")
  }
  if (self==top){
	window.close()
  }else{
	parent._CloseQQPopUpDiv()
  }
}

//��ҳ
function _PopNextPage(url){
if (url.indexOf("?")>=0) url+="&"
	else url+="?"

 url+="SetValue="+QueryString.SetValue;
 for(var i=1;QueryString["SetValue"+i]!=null;i++)
 	url+="&SetValue"+i+"="+QueryString["SetValue"+i]
 
 location=url

}

//��·��
function _GetShortPath(sPath)
{
	return sPath.replace(/^http:\/\/www\d*\.5ilog\.com/gi,"");		
}//_QQ_ReturnPath

function _CheckEmail(s)
{
var reg=new RegExp("^(\\w|\\-|\\.)+\\w@(\\w|\\-)+(\\.(\\w|\\-)+)*\\.[A-Za-z]{2,}$");
return(reg.test(s));
}

//QQ�ղ�
function _QQLink(type,id,title,othercanshu)
{
	var link = "/cgi-bin/myqq/link/addFavor.aspx?ltype="+type+"&rid="+id;
	if (title)
		link += "&subject="+title;
	else
	{
		if (document.title)
			link += "&subject="+document.title;
		else if (parent)
			link += "&subject="+parent.document.title;
	}
	if (othercanshu) link += "&othercanshu="+escape(othercanshu);
	newin(link,null,400,400,1);
}//_QQLink
function _QQBookmark()
{
	newin("/cgi-bin/myqq/link/showLink.aspx",null,400,600,1);
}
function _QQMoveDiv (divID){
	if (!divID) return null
	var _this = this
	_this.objForMove = divID //�ƶ�����
	this.mousedown = function(){		
		_this.objForMove.setCapture()
		_this.needMove = true
		_this.currentX = (event.x - _this.objForMove.style.pixelLeft) //���浱ǰλ��
		_this.currentY = (event.y - _this.objForMove.style.pixelTop) //���浱ǰλ��
		_this.currentEventX = event.x //���浱ǰλ��
		_this.currentEventY = event.y //���浱ǰλ��
	}//mousedown
	this.mouseup = function(){
		_this.needMove = false
		_this.objForMove.releaseCapture()
	}//mouseup
	this.mousemove = function(){
		if (!_this.needMove) return
		_this.objForMove.style.left=event.x-_this.currentX
		_this.objForMove.style.top=event.y-_this.currentY
	}//mousemove
	//divID.attachEvent("onmousedown",function(){alert("mousedown")})
	divID.attachEvent("onmousedown",this.mousedown)
	divID.attachEvent("onmouseup",this.mouseup)
	divID.attachEvent("onmousemove",this.mousemove)
}//_QQMoveDiv

function _QQMoveResizer (divID){ //�̳���_QQMoveDiv
	_QQMoveDiv.call(this,divID)
	var _this = this
	divID.detachEvent("onmouseup",this.mouseup)
	this.mouseup = function(){
		_this.needMove = false
		_QQPopUpDiv.style.pixelWidth += (event.x-_this.currentEventX)
		_QQPopUpDiv.style.pixelHeight += (event.y-_this.currentEventY)
		_this.objForMove.releaseCapture()
	}//mousemove
	divID.attachEvent("onmouseup",this.mouseup)
}//_QQMoveResizer

function _QQMovePopUp (divID){//�̳���_QQMoveDiv
	_QQMoveDiv.call(this,divID)
	var _this = this
	divID.detachEvent("onmousemove",this.mousemove)
	this.mousemove = function(){
		if (!_this.needMove) return
		_this.objForMove.style.left=event.x-_this.currentX
		_this.objForMove.style.top=event.y-_this.currentY
		_SetQQPopUpResizerPos()
	}//mousemove
	divID.attachEvent("onmousemove",this.mousemove)
}//_QQMovePopUp

function _QQGetAbsPosition(o){ //��ö�����ҳ���еľ���λ��
	var vParent = o
	var l=0,t=0
	while (vParent.tagName.toUpperCase() != "BODY"){
		l += vParent.offsetLeft;
		t += vParent.offsetTop;
		vParent = vParent.offsetParent;
	}
	return {left:l,top:t}
}//_QQGetAbsPosition

function _ATiao(){
	var o=window.event.srcElement
	o.style.position='relative';
	o.style.top='2px'
	o.attachEvent("onmouseout",_ATiaoRestore)
	
}
function _ATiaoRestore(){
var o=window.event.fromElement
o.style.top='0px'
o.detachEvent("onmouseout",_ATiaoRestore)
}


function _GetRQ(s){
var a=s.split(/[\-\/]/g)
if (a.length==3) 
	this.rq=new Date(a[0],a[1]-1,a[2])
else this.rq=new Date()

this.Week=function (){switch(this.rq.getDay()){case 0:return "������";case 1:return "����һ";case 2:return "���ڶ�";case 3:return "������";case 4:return "������";case 5:return "������";case 6:return "������"}}
this.Weeken=function (){switch(this.rq.getDay()){case 0:return "Sunday";case 1:return "Monday";case 2:return "Tuesday";case 3:return "Wednesday";case 4:return "Thursday";case 5:return "Friday";case 6:return "Saturday"}}
this.Month=function (){return this.rq.getMonth()+1}
this.toString=function(){return this.rq.getFullYear()+"-"+(this.rq.getMonth()+1)+"-"+this.rq.getDate()}
return this
}
if (location.host.charAt(0)!="1"){
	//document.domain="5ilog.com"
	//if (top!=self)
	//	try{var t=top.location.href}catch(e){top.location=location}
}