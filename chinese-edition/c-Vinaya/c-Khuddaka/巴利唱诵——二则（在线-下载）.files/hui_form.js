
//��������ͼƬ
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
//�õ��ļ���չ��
function GetFileExt(filename){
  var i=filename.lastIndexOf(".")
  if (i>=0)
  	return filename.substring(i+1).toLowerCase();
  return ""
}

//�Ƿ�ͼƬ�ļ�
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
    document.write("<BR>�ϴ�ͼƬ��",w_upload(0));
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
	"<BR><center><B>Ԥ��</b><HR><p id=previewsub class=s-v-subject></p><table class=s-v-main-tab><tr><td id=previewtab class=s-v-text></td></tr></table></center>");
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
   t.value="ȡ��ʵʱ";
   t.form.btnpreview.click();
   with (t.form){subject.onkeyup=subject.onchange=text.onchange=text.onkeyup=preview;}
  }
 else
 {
  t.value="ʵʱԤ��";
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
     alert("�ļ����в��ܰ������Ļ��߿ո�\n\n�����ڱ��ؽ��ļ����ĳ�Ӣ��\n(ע��Ŀ¼����������)");
     t.focus();
     return;
     }
}
if (GetFileExt(t.value)=="bmp"){
     alert("�����ϴ�bmpͼƬ�����ȱ���Ϊjpg��ʽ��");
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
 	"�ϴ�Ŀ¼��<input class=inputtext type=text name=dir size=15>(���ֿ�ʹ��ϵͳĬ��Ŀ¼)<BR><font color=red size=-1>ע��һ���ϴ����ļ���С���ܳ���<b>10M</b>��</font><BR>");
	if (bu) bu.value="��"+bu.value;
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
 	"<BR><font color=red size=-1>������ͼ��ʹ����̳�ϵ�<b>����ͼ��/[����ͼ]</b>���ӣ�����ֻ�ϴ�һ���ļ���</font><BR>�ϴ�Ŀ¼��<input class=inputtext type=text name=dir size=15><font size=-1>(���ֿ�ʹ��ϵͳĬ��Ŀ¼)<BR>ע��һ���ϴ����ļ���С���ܳ���<b>10M</b></font><BR>");
	bu.value="��"+bu.value;
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
	alert("����æ�����Ժ����ԣ�")
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
return "ֻ�з��������������û��ɹۿ���<BR>��СEP:<input type=text name=ep size=6>��СSP:<input type=text name=sp size=6>��СQP:<input type=text name=qp size=6>"
	+"<input name=orgInput type=button value='��������֯��Ա/ѡ����֯' onclick=\"_SelOrg('document.all.org.value','document.all.orgSpan.innerHTML')\"><input type=hidden name=org><br><span id=orgSpan></span><HR>"
	+"�ۿ����Ƿ���Ҫ���ѣ�<select name=feetype><option value=''>���<option value='author'>���ý�����������<option value='luntan'>���ý�����̳</select>"
	+"�ۿ����ã�<input type=text name=fee size=6>(���ñ������100QP)<BR>"
	+"�ܱ������ģ�(�ܱ������Ĳ��ܳ���1000��)<BR><textarea name=stext cols=80 rows=15></textarea>"
	+"<BR><font color=red size=-1>ע�⣺ֻ�и������ܱ����������ܱ����ģ����������ǹ����ģ�<BR>���������ܱ������ݵ�˵����</font><HR>"
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
var t="��������ֻ�лظ�����ܹۿ������ϲ��ֹ���"
if (c.checked){
	if (c.form.text.value.indexOf(t)>=0) return
	c.form.text.value+="\r\n"+t+"\r\n"
}
}
function w_preview(){
return ('<input class=inputbutton type=button onchangeValue=_appendImg type=buuton value="ѡ��/�ϴ�ͼƬ" onclick=_SelImg2({o:this,ltype:\'link\',liburl:_getliburl(this.form),isnothit:false})> <input title="QQ html�༭�� ������ѣĿ��" type=button class=inputbutton value="QQ Page" onclick="_QQPage2({o:this.form.text,ltype:\'link\',liburl:_getliburl(this.form)})">'
        +'<input id=btnpreview type=button class=inputbutton value="Ԥ��" onclick=preview()> <input onclick="_huifufunc(this)" type=checkbox name=reply value=1>�ظ�����ܹۿ�<img src=/qq/img/dot/new2.gif>'
	+'<BR><input type=button id=textemimgbtn class=inputbutton value="���ڱ���" onclick=_DisTextEMImg(this)>'
	+'<input title="�����ϵ�ͼƬ������" type=button class=inputbutton value="������/ͼƬ" onclick=_AddLinkImg(this)>'
	+'<input title="����QQ��̳�е�����" type=button class=inputbutton value="���þ���" onclick=_AddTie(this)>'
	+' <input type=button class=inputbutton value="���Ӹ���" onclick=_AddFile(this)><span id=textemimg></span><span id=files_add></span>'
	+"<div id=previewbefore></div>"
	+"<span class=qqprotected><input class=inputcheckbox type=checkbox name=security value=1 onclick='_QQPC(this.form)'>�����ܱ���</span> <span><input class=inputcheckbox type=checkbox onclick='_DisTrackBack(this)'><a target=_blank title='ʲô�����õ�ַ(TrackBack Ping URL)' href=/qq/help/luntan2.html#trackback>���õ�ַ(TrackBack Ping URL)</a></span>"
	+"<div id=_qqpc></div>"
	);
}

function w_onlyPreview(){
return ('<input id=btnpreview type=button class=inputbutton value="Ԥ��" onclick=preview()><input type=button class=inputbutton value="ʵʱԤ��" onclick=set_autopreview()>'
	+"<div id=previewbefore></div>");
}

function _Check_hui_form(theForm)
{
with(theForm){
if (theForm.logname!=null){
if ((logname.value.length!=0)&&(passwd.value.length==0)){
	if (!confirm("ֻ����ע����������������������\n(��ע��ID����ʹ������,�����û�ɫ��ʾΪ�ǳ�)\n\n������Ѿ�ע���ˣ�������ע��ID�Ϳ���\n����Ѿ���¼�ˣ���ʲô����������\n\nǿ�ҽ�������ע�ᣬ�ٷ���\n\nȷ������������")){
	passwd.focus();
	return false;
	}
}
}

if (subject.value.length==0){
	alert("Subject ������д��");
	subject.focus();
	return false;
}
if ((subject.value==subject.defaultValue)&&(text.value.length==0)){
	alert("��ʲô��ûд������");
	subject.focus();
	return false;
}
if (subject.value.substr(0,5)=="Re��Re"){
	alert("�����Լ��ı��⣡\n\nRe���ܳ���������");
	subject.focus();
	return false;
}
if ((theForm.security)&&(security.checked)){
	if ((ep.value=="")&&(sp.value=="")&&(qp.value=="")&&(org.value=="")){
		if ((feetype.value=="")||(fee.value=="")){
			alert("�����ձ�������,������û�в鿴�����Ҳ��շ�!")
			ep.focus()
			return false
		}
	}
	if ((stext.value=="")&&(!_isUploadFile(theForm))){
		alert("�����ձ������ӣ�������û���ܱ����������޸�����")
		stext.focus()
		return false
	}
	if (feetype.value!=""){
		var t=parseInt(fee.value)
		if (isNaN(t)||(t<10)){
			alert("���ò���С��10��")
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
			if (confirm("ϵͳ�Ѿ����������Զ���ȡ�˱�ǩ��\r\n\r\n������Ҫ�ٵ�����ǩ��")){
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
  if (/ (src|href)="[a-z,A-Z]:\\[^>"]+"/i.test(theForm.text.value)) var o=_GetHotQQObject("uploadfile","��װQM.NET��,���QQPage��ͼ����ݣ���ɵ�ϣ�\r\n����ȥ��װQM.NET��")
  if (o){
  	if (o.AutoSetFiles(theForm.text.value)>0){
  		o.AddForm("act","addxml")
 		o.AutoSetForm(theForm)
 		if (o.Post(theForm.action)){
	  		//alert("����ͼ���ɹ���")
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

//�Ƿ����ļ�
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
	f.subject.value=(subject.substr(0,2)=="Re")?"":"Re��"+subject;
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
	return "<span class=s-selbq onclick='_disBQ(this)'>���ѡ�����ӱ���>></span><span></span>"
}

var AryBiaoQing=new Array(
	new Array(1,18,13,16,28,55,66,57,54,58,56),
	new Array(8,20,35,24,25,39,26,23,48,65,51,44),
	new Array(11,30,40,33,47,41,10,45,27,32,49,14),
	new Array(42,21,36,15,50,19,43,53,46,52,22),
	new Array(38,37,34,5,2,4,3,12,31,9,6,7,17),
	new Array(59,60,61,62,63,64)
);

var _AryBiaoQingText=new Array('��ƪ����','����','�뿴','������','���к�','���','���','Ц��'
,'��ͷ����','��ŭ','����','ע��','ʫ��','�о�һ��','������','ͼƬ','����','����','С����'
,'�����Ц','����ͷ','С�۾�','������','��ϲ','����','�ۣ�','Ϲ˵','����','','����','��ƽ'
,'��мһ��','Ŀ�ɿڴ�','���','����','գ��','�Ķ�','����','�Ǻ�','���','��','����','����'
,'���','ð��','����','���۵�С��','����','�ੲ���','����','��ħ','����','��Ц','����','����'
,'Ϲ��','��ʹ','����','���','ȸԾ','��ŭ','����','��Ц','��','����','�ɱ�')

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
var s="<br><B>����ͼ�꣺</b><font size=-1>(������ͼ���Ͽ��Կ���˵����ǧ��Ҫ�������:) <BR>����<font color=blue>����mybbs�Զ������Ҳ����[�������/��������]�ж����������������</font> )</font><BR>"
	+"<input class=inputradio TYPE=RADIO NAME=type VALUE=0>�� ";
if (self._QQ_selfBiaoQingDir){
	//�Զ������
	var t=_Get_selfBiaoQingHome()
	s+="<BR>"
	for(i=1;i<=_QQ_selfBiaoQingN;i++){
    		s+="<input class=inputradio TYPE=RADIO NAME=type VALUE="
    			+i+"><img SRC="+t+i+".gif title='"+_GetBQText(i)+"'> ";
    		if ((i%10)==0) s+="<BR>"
	}
}
else{
	s+=_w_biaoqing(AryBiaoQing[0])+"<BR>��";
	s+=_w_biaoqing(AryBiaoQing[1])+"<BR>";
	s+=_w_biaoqing(AryBiaoQing[2])+"<BR>��";
	s+=_w_biaoqing(AryBiaoQing[3])+"<BR>";
	s+=_w_biaoqing(AryBiaoQing[4])+"<BR>��";
	s+=_w_biaoqing(AryBiaoQing[5])+"<BR>";
}
return(s);
}

function _w_hui_form(idi,show,hui_id,subject)
{subject=(subject.substr(0,2)=="Re")?"":"Re��"+subject;
document.write('<FORM enctype="multipart/form-data" id='+idi+' style="display:'+((show)?"block":"none")+'" class=s-v-hui-form ACTION=/cgi-bin/class/BBS/NewBBS.aspx METHOD=POST  onsubmit="return _valid_hui_form(this)">'
,"<center><B>������</b> <a title='��������ؼ��֡���ͼ��Ԥ���ȸ߼�����' id=ahuiid href=/cgi-bin/bbs/sys/nview_huiimg.asp?id="+hui_id+">����ͼ</A></center><BR>"
,(t[7]&0x1000000)?"<span class=s-nothui>ע�⣺����ֻ�������߻�����</span>":""
,'<P><B>���⣺</B><BR><INPUT class=inputtext TYPE=text NAME=subject  value="',subject,'" SIZE=70  MAXLENGTH=50><BR>'
,"",_biaoqing_select()
,"<br><B>���ģ�</b>"
,"��<span title='����������Լ�д�ģ�һ����ѡ����'><input class=inputcheckbox type=checkbox name=zhuan value=1>ת��</span>"
,"��<span title='ֻ��ȫ����html����ѡ����' class=s-f-html><INPUT class=inputcheckbox TYPE=checkbox NAME=sx VALUE=1>HTML��ʽ</span>"
,'��<INPUT class=inputcheckbox TYPE=checkbox NAME=mail VALUE=1>�л���Email֪ͨ�ҡ�<INPUT class=inputcheckbox TYPE=checkbox NAME=hui VALUE=1>��������˸���<BR>'
,"<TEXTAREA onkeydown=_ctrl_enter_submit() NAME=text ROWS=5 COLS=70 getDefaultValue=_GetHTML onchangeValue=_ReturnHTML2></TEXTAREA><BR>"
,w_preview()
,'<INPUT TYPE=hidden NAME=id value=',hui_id,'>'
,'<P title="�������ע��ID�������¼�˿��Բ�������"><font color=red>*</font>ע��ID��<INPUT class=inputtext TYPE=text NAME=logname MAXLENGTH=20>'
,'<P title="������Ŀ���">������ ��<INPUT class=inputtext TYPE=password NAME=passwd MAXLENGTH=20>'
,'���������û��ע�ᣬ���ȡ�<A HREF=/qq/sys/register/new.htm target=_blank>ע��</A>��'
,'<HR></div>'
,'<Center>'
,' <INPUT title="д���˾Ϳ��Ե�����������:)" onclick="return _DisableNextClick(this)" TYPE=submit class=inputbutton VALUE=����>'
,' <INPUT title="���д���ˣ�������������" TYPE=reset class=inputbutton VALUE="��д">'
,'</Center><input type=hidden name=view value="/cgi-bin/bbs/ie4/view.asp"></FORM>'
);
}


function _PreViewImg(t){
	if (t.previousSibling.value!="") t.nextSibling.innerHTML='<img height=75 src="'+t.previousSibling.value+'">'
}

function _SelLib(w,libid,cengci,str){
	w.imglib.innerText=str.replace(/��/g,"")
	w.document.all.libid.value=libid
	w.document.all.cengciid.value=cengci
}