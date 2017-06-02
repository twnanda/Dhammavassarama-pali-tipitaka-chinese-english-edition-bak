
//增加连接图片
function _AddLinkImg(theButton){
var t=showModalDialog("/qq/sys/getlinkimg.htm",null,"dialogHeight:300px")
if (t!=null){
	theButton.form.text.value += "\r\n"+t
	theButton.form.btnpreview.click();
	}
}

function _AddTie(theButton){
var t=showModalDialog("/qq/sys/gettie.htm",null,"dialogHeight:300px")
if (t!=null){
	theButton.form.text.value += "\r\n"+t
	theButton.form.btnpreview.click();
	}
}
//得到文件扩展名
function GetFileExt(filename){
  var i=filename.lastIndexOf(".")
  if (i>=0)
  	return filename.substring(i+1).toLowerCase();
  return ""
}

//是否图片文件
function IsImg(filename){
switch(GetFileExt(filename)){
	case "jpg":
	case "gif":
	case "png":
	case "bmp":
	case "tif":
		return true
	default:
		return false
	}
		
}

function writeupload(){
if (document.all)
	document.write(w_preview());
else{
  if (navigator.userAgent.indexOf("Mozilla/4")>=0)
    document.write("<BR>上传图片：",w_upload(0));
    files[0]="";
}
}

var files=new Array();
var autopreview=false;

function preview()
{ var form=event.srcElement.form;
  if (!(self.previewtab))
  {
  previewbefore.insertAdjacentHTML("BeforeBegin",
	"<BR><center><B>预览</b><HR><p id=previewsub class=s-v-subject></p><table class=s-v-main-tab><tr><td id=previewtab class=s-v-text></td></tr></table></center>");
  }

  var t=_GetHTML(form.text)
  
  previewtab.innerHTML=t;
  if (self.previewsub)  {
  	t=previewsub;
  	t.innerText=form.subject.value;
  	}
  	else t=previewtab;
  	
  if (!autopreview) t.scrollIntoView()
}

function GetPreViewHTML(theForm){
	return _GetHTML(theForm.text)
}

function _ReturnHTML(w,html,theForm){
	if (theForm==null) return false;
	theForm.text.value=html
	theForm.sx.checked=true
	theForm.btnpreview.click();
	return true
}

function set_autopreview()
{var t=event.srcElement;
 autopreview=!autopreview;
 if (autopreview)
  {
   t.value="取消实时";
   t.form.btnpreview.click();
   with (t.form){subject.onkeyup=subject.onchange=text.onchange=text.onkeyup=preview;}
  }
 else
 {
  t.value="实时预览";
  with (t.form){subject.onkeyup=subject.onchange=text.onchange=text.onkeyup=null}
 }
}

function changeimg(t)
{
var i=t.name.substr(4);//remove "file"
var form=t.form;
 form.encoding="multipart/form-data";

 if (t.value=="") return;
var reg=new RegExp("[\\\\\\/]([^\\\\\\/]+)$","");
if (reg.test(t.value)){
 var tt=RegExp.$1;
 for (var j=0;j<tt.length;j++)
    if ((tt.charAt(j)==" ")||(tt.charCodeAt(j)>255)){
     alert("文件名中不能包含中文或者空格！\n\n请先在本地将文件名改成英文\n(注意目录可以用中文)");
     t.focus();
     return;
     }
}
if (GetFileExt(t.value)=="bmp"){
     alert("不能上传bmp图片，请先保存为jpg格式！");
     t.focus();
     return;
}

 t=t.value;


var text=form.text;

 
 if (files[i]=="")
  {
    if (IsImg(t)){
        files[i]=t;
    	text.value+="<img src=\""+t+"\">";
    	}
  }
 else
  {
    if (files[i]==t) return;

    var reg=new RegExp("(<img\\s+([^<>]+\\s+)*src=\")"
  	+files[i].replace(new RegExp("\\\\","g"),"\\\\")+"\">","i");
   
    if (IsImg(t)){
    	text.value=text.value.replace(reg,"$1"+t+"\">");
    	files[i]=t;
    	}
    else{
    	text.value=text.value.replace(reg,"");
    	files[i]="";
    }
    
  }
 if (document.all) form.btnpreview.click();
}

/*
function add_img(bu)
{var i;
 files[i=files.length]="";
 if (i==0){
 	files_add.insertAdjacentHTML("BeforeEnd",
 	"上传目录：<input class=inputtext type=text name=dir size=15>(保持空使用系统默认目录)<BR><font color=red size=-1>注意一次上传总文件大小不能超过<b>10M</b>。</font><BR>");
	if (bu) bu.value="再"+bu.value;
	}
 files_add.insertAdjacentHTML("BeforeEnd",w_upload(i));
}
function w_upload(i){
 return("<input size=5 name=file"+i+" type=file onblur=changeimg(this)>");
}*/

function _AddFile(bu){
var i;
 files[i=files.length]="";
 if (i==0){
 	files_add.insertAdjacentHTML("BeforeEnd",
 	"<BR><font color=red size=-1>现在贴图请使用论坛上的<b>［贴图］/[回贴图]</b>连接，这里只上传一般文件！</font><BR>上传目录：<input class=inputtext type=text name=dir size=15><font size=-1>(保持空使用系统默认目录)<BR>注意一次上传总文件大小不能超过<b>10M</b></font><BR>");
	bu.value="再"+bu.value;
	}
 files_add.insertAdjacentHTML("BeforeEnd",_w_uploadFile(i));
  //if (document.location.hostname.toLowerCase()=="bj1.qq.com.cn")
 //	bu.form.action="http://bj.qq.com.cn/cgi-bin/class/BBS/NewBBS.aspx"

}

function _HaveFile(theForm){
 if ((theForm.file)&&(theForm.file.value)) return true
 if ((theForm.file0)&&(theForm.file0.value)) return true
 for(var i=1;;i++){
 	if (theForm["file"+i]==null) return false
 	if (theForm["file"+i].value) return true
 }
}

function _GetUpLoadLink(id,main){
if (!_isQQ()) return ""
var mydoc = new ActiveXObject("MSXML.DOMDocument")
mydoc.async = false
var link="/cgi-bin/class/BBSAdmin/LunTanInfoXML.aspx?act=GetUpLoadLink&id="+id+"&main="+main
if (!mydoc.load(link)){
	alert("网络忙，请稍候再试！")
	return
	}

var root=mydoc.childNodes.item(1)
if (root.nodeName=="error"){
	alert(root.text)
	if (root.getAttribute("errcode")=="notLogin") Login()
	return
}
return root.text
}


function _w_uploadFile(i){
	return "<input class=inputtext size=5 name=file"+i+" type=file>"
}

function _TextEMImgClick(){
var e=window.event.srcElement
if (e.tagName=="IMG"){
	document.all.textemimgbtn.form.text.value
		+="<img src=/qq/img/em/"+e.t+".gif>"
}
}


function _DisTextEMImg(theBtn){
 if (textemimg.innerHTML){ 
 	textemimg.innerHTML="";
 	theBtn.value=theBtn.value.substr(0,theBtn.value.length-2)
 	return
 	}
var s="<BR>";
 for (var i=0;i<43;i++) {
 	s+="<img t="+i+" src=/qq/img/em/"+i+".gif>"
 	if ((i==11)||(i==23)||(i==32)) s+="<BR>"
 	}
 textemimg.innerHTML=s
 textemimg.onclick=_TextEMImgClick
 theBtn.value+="<<"
}

function GetQQPCHTML(){
return "只有符合下面条件的用户可观看：<BR>最小EP:<input type=text name=ep size=6>最小SP:<input type=text name=sp size=6>最小QP:<input type=text name=qp size=6>"
	+"<input name=orgInput type=button value='必须是组织成员/选择组织' onclick=\"_SelOrg('document.all.org.value','document.all.orgSpan.innerHTML')\"><input type=hidden name=org><br><span id=orgSpan></span><HR>"
	+"观看者是否需要付费：<select name=feetype><option value=''>免费<option value='author'>费用将给本贴作者<option value='luntan'>费用将给论坛</select>"
	+"观看费用：<input type=text name=fee size=6>(费用必须大于100QP)<BR>"
	+"受保护正文：(受保护正文不能超过1000字)<BR><textarea name=stext cols=80 rows=15></textarea>"
	+"<BR><font color=red size=-1>注意：只有附件和受保护正文是受保护的，帖子正文是公开的，<BR>可以输入受保护内容的说明。</font><HR>"
}

function _QQPC(theForm){
 if (theForm.security.checked){
 	if (_qqpc.innerHTML=="") _qqpc.innerHTML=GetQQPCHTML()
 	else _qqpc.style.display="block"
 }
 else _qqpc.style.display="none"
}

function _DisTrackBack(theCheck){
 if (theCheck.checked){
 	theCheck.parentElement.insertAdjacentHTML("afterEnd","<input type=text name=trackbackurl size=40>")
 } 	
 else if (theCheck.form.trackbackurl) theCheck.form.trackbackurl.outerHTML=""
}
function _getliburl(theForm){
var lunquid=0;
	if (self._lunquid){
		lunquid=_lunquid
	}else if (theForm.main && (theForm.main.value=="1")){
		lunquid=theForm.id.value
	}

	if (lunquid>0x100000) return "L"+lunquid
	return ""
}
function _appendImg(o,v){
	o.form.text.value+=v
}
function _huifufunc(c){
var t="以下内容只有回复后才能观看，以上部分公开"
if (c.checked){
	if (c.form.text.value.indexOf(t)>=0) return
	c.form.text.value+="\r\n"+t+"\r\n"
}
}
function w_preview(){
return ('<input class=inputbutton type=button onchangeValue=_appendImg type=buuton value="选择/上传图片" onclick=_SelImg2({o:this,ltype:\'link\',liburl:_getliburl(this.form),isnothit:false})> <input title="QQ html编辑器 创造多彩眩目帖" type=button class=inputbutton value="QQ Page" onclick="_QQPage2({o:this.form.text,ltype:\'link\',liburl:_getliburl(this.form)})">'
        +'<input id=btnpreview type=button class=inputbutton value="预览" onclick=preview()> <input onclick="_huifufunc(this)" type=checkbox name=reply value=1>回复后才能观看<img src=/qq/img/dot/new2.gif>'
	+'<BR><input type=button id=textemimgbtn class=inputbutton value="贴内表情" onclick=_DisTextEMImg(this)>'
	+'<input title="贴网上的图片和连接" type=button class=inputbutton value="加连接/图片" onclick=_AddLinkImg(this)>'
	+'<input title="引用QQ论坛中的帖子" type=button class=inputbutton value="引用旧帖" onclick=_AddTie(this)>'
	+' <input type=button class=inputbutton value="增加附件" onclick=_AddFile(this)><span id=textemimg></span><span id=files_add></span>'
	+"<div id=previewbefore></div>"
	+"<span class=qqprotected><input class=inputcheckbox type=checkbox name=security value=1 onclick='_QQPC(this.form)'>内容受保护</span> <span><input class=inputcheckbox type=checkbox onclick='_DisTrackBack(this)'><a target=_blank title='什么是引用地址(TrackBack Ping URL)' href=/qq/help/luntan2.html#trackback>引用地址(TrackBack Ping URL)</a></span>"
	+"<div id=_qqpc></div>"
	);
}

function w_onlyPreview(){
return ('<input id=btnpreview type=button class=inputbutton value="预览" onclick=preview()><input type=button class=inputbutton value="实时预览" onclick=set_autopreview()>'
	+"<div id=previewbefore></div>");
}

function _Check_hui_form(theForm)
{
with(theForm){
if (theForm.logname!=null){
if ((logname.value.length!=0)&&(passwd.value.length==0)){
	if (!confirm("只输入注册名，将匿名发贴！！！\n(该注册ID可以使用中文,并将用灰色显示为昵称)\n\n如果你已经注册了，请输入注册ID和口令\n如果已经登录了，则什么都不用输入\n\n强烈建议您先注册，再发贴\n\n确信匿名发贴吗？")){
	passwd.focus();
	return false;
	}
}
}

if (subject.value.length==0){
	alert("Subject 必须填写！");
	subject.focus();
	return false;
}
if ((subject.value==subject.defaultValue)&&(text.value.length==0)){
	alert("你什么都没写啊！？");
	subject.focus();
	return false;
}
if (subject.value.substr(0,5)=="Re：Re"){
	alert("请用自己的标题！\n\nRe不能超过两个！");
	subject.focus();
	return false;
}
if ((theForm.security)&&(security.checked)){
	if ((ep.value=="")&&(sp.value=="")&&(qp.value=="")&&(org.value=="")){
		if ((feetype.value=="")||(fee.value=="")){
			alert("内容收保护帖子,不允许没有查看条件且不收费!")
			ep.focus()
			return false
		}
	}
	if ((stext.value=="")&&(!_isUploadFile(theForm))){
		alert("内容收保护帖子，不允许没有受保护正文且无附件！")
		stext.focus()
		return false
	}
	if (feetype.value!=""){
		var t=parseInt(fee.value)
		if (isNaN(t)||(t<10)){
			alert("费用不能小于10！")
			fee.focus()
			return false
		}
	}
	
}
}//with theForm
if ( (theForm.keyword)&&(!theForm.keyword.ischeck)&&(theForm.text.value)){
	if (self._getTagAryFromText){
		var a=_getTagAryFromText(theForm.text.value)
		if (a.length>0) {
			if (theForm.keyword.value){
				var t=theForm.keyword.value.split(/\s+/g)
				var s=""
				for(var i=0;i<a.length;i++){
					if (!_isInArry(t,a[i]))
						s+=" "+a[i]
				}
				if (s=="") return true
				theForm.keyword.value=t.join(" ")+s
			}else	
				theForm.keyword.value=a.join(" ")
			if (confirm("系统已经从正文中自动提取了标签！\r\n\r\n您还需要再调整标签吗？")){
				theForm.keyword.focus()
				theForm.keyword.ischeck=true
				return false
			}
		}
	}
	
}

return true;
}//_Check_hui_form




function _valid_hui_form(theForm){ 
  if(!_Check_hui_form(theForm)) return false;
  if (/ (src|href)="[a-z,A-Z]:\\[^>"]+"/i.test(theForm.text.value)) var o=_GetHotQQObject("uploadfile","安装QM.NET后,配合QQPage贴图更快捷！更傻瓜！\r\n立刻去安装QM.NET？")
  if (o){
  	if (o.AutoSetFiles(theForm.text.value)>0){
  		o.AddForm("act","addxml")
 		o.AutoSetForm(theForm)
 		if (o.Post(theForm.action)){
	  		//alert("发带图贴成功！")
			if (theForm.autogo && theForm.autogo.value)
			{
				location = theForm.autogo.value.replace("NEWID",o.ResponseText().match(/newid='(\d+)'/)[1]);
			}
	  		return false
	  	}
  		return false;
  	}
  }

 return true
}

//是否有文件
function _isUploadFile(theForm){
 for (var i=0;i<files.length;i++)
  if (theForm["file"+i].value) return true;
 return false;
}

//ie4 hui form

function _show_hui_form(vid)
{
var f=hui_form;
var subject=A[vid][2];
   _show_id(f);
   if (f.id.value!=vid)
    {   
	f.id.value=vid;
	f.subject.value=(subject.substr(0,2)=="Re")?"":"Re："+subject;
	ahuiid.href="lunqu_newadv.asp?id="+vid;
	f.text.value="";
    }
      if (_logged) {f.subject.focus();}
    else f.logname.focus();
   _dis_all_swapbutton(true,eval("hui_swapbutton"+vid));
}

function _hide_hui_form(vid)
{
   _hide_id(hui_form);
   _dis_all_swapbutton(false,eval("hui_swapbutton"+vid));
}

function _w_biaoqing(a){
var s="";
var t="/qq/img/bbs/";
if (_localbiaoqing) t="c:"+t;

for(var i=0;i<a.length;i++)
    s+="<input class=inputradio TYPE=RADIO NAME=type VALUE="+a[i]
    	+"><img SRC="+t+a[i]+".gif ALT='"+_AryBiaoQingText[a[i]-1]+"'> ";

return(s);
}
function _disBQ(t){
	t.nextSibling.innerHTML=_get_biaoqing()
}
function _biaoqing_select(){
 if (window._huibiaoqing) return _get_biaoqing()
  else
	return "<span class=s-selbq onclick='_disBQ(this)'>点此选择帖子表情>></span><span></span>"
}

var AryBiaoQing=new Array(
	new Array(1,18,13,16,28,55,66,57,54,58,56),
	new Array(8,20,35,24,25,39,26,23,48,65,51,44),
	new Array(11,30,40,33,47,41,10,45,27,32,49,14),
	new Array(42,21,36,15,50,19,43,53,46,52,22),
	new Array(38,37,34,5,2,4,3,12,31,9,6,7,17),
	new Array(59,60,61,62,63,64)
);

var _AryBiaoQingText=new Array('长篇大论','提问','请看','出主意','打招呼','真棒','真差','笑脸'
,'当头棒喝','愤怒','伤心','注意','诗词','研究一下','请多包涵','图片','连接','资料','小虎牙'
,'抿嘴儿笑','吐舌头','小眼镜','害羞了','惊喜','哈哈','哇！','瞎说','音乐','','流泪','和平'
,'不屑一顾','目瞪口呆','灵感','高兴','眨眼','心动','礼物','呵呵','大哭','呸','无奈','鬼脸'
,'真酷','冒火','晕了','大眼瞪小眼','动心','喋喋不休','摆谱','恶魔','弱智','狞笑','锤炼','飞天'
,'瞎吹','天使','不对','狂哭','雀跃','狂怒','疑问','暴笑','晕','亲嘴','干杯')

function _get_biaoqingOption(){
  var s="";
  for (var i=0;i<_AryBiaoQingText.length;i++)
	s+="<option value="+(i+1)+">"+_AryBiaoQingText[i];
  return s
}
function _GetBQText(n){
 if (self._QQ_selfBiaoQingText) return (_QQ_selfBiaoQingText[n-1])?_QQ_selfBiaoQingText[n-1]:""
 return _AryBiaoQingText[n-1]?_AryBiaoQingText[n-1]:""
}
function _get_biaoqing(){
var s="<br><B>表情图标：</b><font size=-1>(鼠标放在图标上可以看到说明，千万不要表错情呦:) <BR>　　<font color=blue>现在mybbs自定义表情也可在[斑竹管理/参数设置]中定义表情文字描述！</font> )</font><BR>"
	+"<input class=inputradio TYPE=RADIO NAME=type VALUE=0>无 ";
if (self._QQ_selfBiaoQingDir){
	//自定义表情
	var t=_Get_selfBiaoQingHome()
	s+="<BR>"
	for(i=1;i<=_QQ_selfBiaoQingN;i++){
    		s+="<input class=inputradio TYPE=RADIO NAME=type VALUE="
    			+i+"><img SRC="+t+i+".gif title='"+_GetBQText(i)+"'> ";
    		if ((i%10)==0) s+="<BR>"
	}
}
else{
	s+=_w_biaoqing(AryBiaoQing[0])+"<BR>　";
	s+=_w_biaoqing(AryBiaoQing[1])+"<BR>";
	s+=_w_biaoqing(AryBiaoQing[2])+"<BR>　";
	s+=_w_biaoqing(AryBiaoQing[3])+"<BR>";
	s+=_w_biaoqing(AryBiaoQing[4])+"<BR>　";
	s+=_w_biaoqing(AryBiaoQing[5])+"<BR>";
}
return(s);
}

function _w_hui_form(idi,show,hui_id,subject)
{subject=(subject.substr(0,2)=="Re")?"":"Re："+subject;
document.write('<FORM enctype="multipart/form-data" id='+idi+' style="display:'+((show)?"block":"none")+'" class=s-v-hui-form ACTION=/cgi-bin/class/BBS/NewBBS.aspx METHOD=POST  onsubmit="return _valid_hui_form(this)">'
,"<center><B>贴回帖</b> <a title='可以输入关键字、贴图、预览等高级上贴' id=ahuiid href=/cgi-bin/bbs/sys/nview_huiimg.asp?id="+hui_id+">回贴图</A></center><BR>"
,(t[7]&0x1000000)?"<span class=s-nothui>注意：该贴只允许作者回贴！</span>":""
,'<P><B>标题：</B><BR><INPUT class=inputtext TYPE=text NAME=subject  value="',subject,'" SIZE=70  MAXLENGTH=50><BR>'
,"",_biaoqing_select()
,"<br><B>正文：</b>"
,"　<span title='如果不是你自己写的，一定有选上呦'><input class=inputcheckbox type=checkbox name=zhuan value=1>转贴</span>"
,"　<span title='只有全部是html才能选此项' class=s-f-html><INPUT class=inputcheckbox TYPE=checkbox NAME=sx VALUE=1>HTML格式</span>"
,'　<INPUT class=inputcheckbox TYPE=checkbox NAME=mail VALUE=1>有回帖Email通知我　<INPUT class=inputcheckbox TYPE=checkbox NAME=hui VALUE=1>不允许别人跟贴<BR>'
,"<TEXTAREA onkeydown=_ctrl_enter_submit() NAME=text ROWS=5 COLS=70 getDefaultValue=_GetHTML onchangeValue=_ReturnHTML2></TEXTAREA><BR>"
,w_preview()
,'<INPUT TYPE=hidden NAME=id value=',hui_id,'>'
,'<P title="输入你的注册ID，如果登录了可以不用输入"><font color=red>*</font>注册ID：<INPUT class=inputtext TYPE=text NAME=logname MAXLENGTH=20>'
,'<P title="输入你的口令">　口令 ：<INPUT class=inputtext TYPE=password NAME=passwd MAXLENGTH=20>'
,'　　如果还没有注册，请先【<A HREF=/qq/sys/register/new.htm target=_blank>注册</A>】'
,'<HR></div>'
,'<Center>'
,' <INPUT title="写好了就可以点这里上贴了:)" onclick="return _DisableNextClick(this)" TYPE=submit class=inputbutton VALUE=贴帖>'
,' <INPUT title="如果写乱了，点这里可以清除" TYPE=reset class=inputbutton VALUE="重写">'
,'</Center><input type=hidden name=view value="/cgi-bin/bbs/ie4/view.asp"></FORM>'
);
}


function _PreViewImg(t){
	if (t.previousSibling.value!="") t.nextSibling.innerHTML='<img height=75 src="'+t.previousSibling.value+'">'
}

function _SelLib(w,libid,cengci,str){
	w.imglib.innerText=str.replace(/　/g,"")
	w.document.all.libid.value=libid
	w.document.all.cengciid.value=cengci
}