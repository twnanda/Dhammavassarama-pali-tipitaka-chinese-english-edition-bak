<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0037)http://www.shijian.org/frm_login.aspx -->
<HTML lang=gb2312 
xmlns="http://www.w3.org/1999/xhtml"><HEAD><TITLE>iwms Login</TITLE>
<META http-equiv=content-type content=text/html;charset=gb2312>
<META content="noindex, nofollow" name=robots>
<STYLE type=text/css>.lobtn {
	BORDER-TOP-WIDTH: 0px; BORDER-LEFT-WIDTH: 0px; BACKGROUND: url(/style/wangqi/1x1.gif); BORDER-BOTTOM-WIDTH: 0px; COLOR: #fff; BORDER-RIGHT-WIDTH: 0px
}
.loinp {
	BORDER-RIGHT: #486591 0px solid; BORDER-TOP: #486591 0px solid; BACKGROUND: url(/style/wangqi/loginbg.gif) repeat-x left top; BORDER-LEFT: #486591 0px solid; BORDER-BOTTOM: #486591 0px solid; HEIGHT: 13px
}
</STYLE>

<SCRIPT type=text/javascript>
function DispLogin()
{
	var o = parent.document.getElementById("news_login");
	if (o){
		var s = document.body.innerHTML;
		s = s.replace(/\t/,"");
		o.innerHTML= s;
	}else{
//		alert(document.body.innerHTML);
	}
}
</SCRIPT>

<META content="MSHTML 6.00.2800.1106" name=GENERATOR></HEAD>
<BODY onload=DispLogin();>
<DIV 
style="PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; MARGIN: 0px; PADDING-TOP: 0px">
<FORM id=loginForm action=/login.aspx method=post>
<UL 
style="PADDING-LEFT: 10px; MARGIN: 0px; LINE-HEIGHT: 24px; LIST-STYLE-TYPE: none; TEXT-ALIGN: left">会员名： 
  <INPUT class=loinp maxLength=25 size=12 name=memberName> 密&nbsp;码： <INPUT 
  class=loinp type=password maxLength=25 size=12 name=memberPass> <INPUT class=lobtn onclick="return checkForm();" type=submit value=登陆> <INPUT class=lobtn onclick="window.location='/memberreg.aspx'" type=button value=注册> 
<INPUT class=lobtn onclick="window.location='/memberLostpass.aspx'" type=button value=忘记密码>
  <SCRIPT src="frm_login.files/clientDate.js" type=text/javascript></SCRIPT>
   </UL></FORM></DIV></BODY></HTML>
