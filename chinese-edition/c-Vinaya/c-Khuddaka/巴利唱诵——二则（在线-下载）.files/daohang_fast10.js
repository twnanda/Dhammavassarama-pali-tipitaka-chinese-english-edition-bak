var _menuUsrinfo="<a href=/cgi-bin/myqq/?go=JBXX target=_blank>�޸�����/ǩ��</a><br><a href=/cgi-bin/myqq/?go=face target=_blank>�޸�ͷ��</a><br><a href=/cgi-bin/myqq/?go=passwd target=_blank>�޸Ŀ���</a><br><a href=/cgi-bin/myqq/?go=pyq target=_blank>�ҵ�����Ȧ</a><br><a href=/cgi-bin/myqq/?go=onlineset target=_blank>��������</a><br><a href=javascript:_express() target=_self>������</a><br><a href=javascript:express_admin() target=_self>�������</a><br><a href=javascript:_GetRiLi() target=_blank>��������</a><BR><a target=_blank href=/cgi-bin/myqq/?go=zuji>�ҵ��㼣</a><img src=/qq/img/dot/new2.gif></font>"
var _menuHelp="<font size=2><a href=/cgi-bin/bbs/help/luntan.html  target=_blank>��̳ʹ�ð���</a><BR><a href=/cgi-bin/bbs/help/myqq.html  target=_blank>�û�����</a><BR><a href=/cgi-bin/bbs/help/mybbs.html  target=_blank>�������</a>"
var _menuStyle="<div style='cursor:hand'>"
 +"<div onclick=_ChangeCss('fast10_apple')>ƻ������<img src=/qq/img/dot/new2.gif></div>"
 +"<div onclick=_ChangeCss('fast10_xxxk')>��ҹ�ǿ�<img src=/qq/img/dot/new2.gif></div>"
 +"<div onclick=_ChangeCss('fast10_xxkui')>���տ�<img src=/qq/img/dot/new2.gif></div>"
 +"<div onclick=_ChangeCss('fast10_lsmh')>��ɫ�λ�</div>"
 +"<div onclick=_ChangeCss('fast10_zzhx')>���ջ���</div>"
 +"<div onclick=_ChangeCss('fast10_hasl')>�ڰ�ɭ��</div>"
 +"<div onclick=_ClearCssCookie()>�ָ�Ĭ��</div>"
 +"<div><span onclick=_ChangeCss('fast10_lshy_small')>��ɫ����</span> <span onclick=_ChangeCss('fast10_lshy')>��</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_smnl_small')>��ľ����</span> <span onclick=_ChangeCss('fast10_smnl')>��</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_lssl_small')>��ɫɭ��</span> <span onclick=_ChangeCss('fast10_lssl')>��</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_zsmh_small')>��ɫ�λ�</span> <span onclick=_ChangeCss('fast10_zsmh')>��</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_hfjr_small')>��ۼ���</span> <span onclick=_ChangeCss('fast10_hfjr')>��</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_qqzy_small')>��������</span> <span onclick=_ChangeCss('fast10_qqzy')>��</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_xcfd_small')>��ȷ���</span> <span onclick=_ChangeCss('fast10_xcfd')>��</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_yzsg_small')>��װ�ع�</span> <span onclick=_ChangeCss('fast10_yzsg')>��</span></div>"
+'<a href="javascript:_GoSys()" target="_self">ϵͳ����</a>'


var _menuBBSAdmin = '<a href="javascript:_GoBBSAdmin(\'BMGG\')" target=_self>���湫��</a>'
+ '<br><a href="javascript:_GoBBSAdmin(\'TZGL\')" target=_self>���ӹ���</a>'
+ '<br><a href="javascript:_GoBBSAdmin(\'BZRM\')" target=_self>��������</a>'
+ '<br><a href="javascript:_GoBBSAdmin(\'QXGL\')" target=_self>Ȩ�޹���</a>'


var _menuQQSY = '<a href="http://www.5ilog.com/cgi-bin/" target=_blank>��ͼ</a>'
+ '<br><a href="http://www.5ilog.com/cgi-bin/club/" target=_blank>����</a>'
+ '<br><a href="http://www.5ilog.com/cgi-bin/home/" target=_blank>��԰</a>'
+ '<br><a href="http://www.5ilog.com/cgi-bin/imglib/" target=_blank>ͼƬ��</a>'
+ '<br><a href="http://www.5ilog.com/cgi-bin/club/tag.aspx" target=_blank>��ժ</a>'
+ '<br><a href="http://www.5ilog.com/qq/qqspace/xuanchuan.htm" target=_blank>QM.NET</a>'
+ '<br><a href="http://www.5ilog.com/qq/mz/" target=_blank>�����</a>'
+ '<br><a href="http://www.5ilog.com/cgi-bin/club/luntanframe.aspx" target=_blank>������̳</a>'
+ '<br><a href="http://www.5ilog.com/cgi-bin/club/magic/" target=_blank>���ߵ�</a><img src=/qq/img/dot/new2.gif>'

+ '<br><a href="http://u.7town.com/main2/index.html?uid=16764&a=&b=&c=&d=&e=&f=" target=_blank>�ֻ�ͼ��</a>'

var _menubm="<nobr><a href='javascript:_bmmybbs()' target=_self>�ղر�վ"+_GetMybbsHome()+"</a></nobr><BR><nobr><a target=_self href=javascript:_copymybbslink()>���Ʊ�վ���ӵ�ճ����,��ֻʹ�ø����ӽ���վ������</a></nobr><BR><nobr><a target=_self href='javascript:_QQLink(\"L\",_GetMYBBSValue(\"lunquid\"),_GetMYBBSValue(\"lunqusubject\"))'>����QQ��վ��ժ</a></nobr>"

function _writeDaoHang(){ //���������
var dataary = _GetMYBBSValue("daohangmenu",false)
var str = ""
if (!dataary){ //Ĭ��
	str = '<nobr>&nbsp;<a target=_self href=javascript:Login("/qq/myqq/putintomenu.htm") title="��½����������д����">��½</a>/<a href="javascript:_JREG()" target=_self>ע��</a> | <a href=/cgi-bin/myqq/ onmouseover=_ShowTabMenu(_menuUsrinfo) onmouseout=_HideMenu() target=_blank>�ҵļ�԰</a> | <a onmouseover=_ShowTabMenu(_menuStyle) onmouseout=_HideMenu() href=# target=_self>��ѡ���</a> | <a onmouseover=_ShowTabMenu(_ListAryTag(3)) onmouseout=_HideMenu() href=# target=_self><b>��ǩ</b></a> | <a href="/cgi-bin/" onmouseover=_ShowTabMenu(_menuQQSY) onmouseout=_HideMenu() target=_blank>��ͼ</a> | <a href="javascript:_GoBBSAdmin()" onmouseover=_ShowTabMenu(_menuBBSAdmin) onmouseout=_HideMenu() target="_self">�������</a> | '
+_GetBuLuoMenu()+' | <a href="javascript:_GoPaiMing()" target="_self">����</a> | <a onmouseover=_ShowTabMenu(_menubm) onmouseout=_HideMenu() href="javascript:_bmmybbs()" title="�ղ�'+_GetMybbsHome()+'" target="_self"><b style="color:Red">�ղ�</b></a>' // |  <SCRIPT>_GoBig5()<'+'/SCRIPT>
+'<span id=LinksetContainer></span></nobr>'
} else {//�趨�˵����˵�
	str += "<nobr>&nbsp;"
	for (var p in dataary){
		//if (p == "style") continue
		str += _GetDaohangMenuA(p) + " | "
	}
	str = str.replace(/\s\|\s$/gi,"") + "<span id=LinksetContainer></span></nobr>"
} //if
document.write('<table  width="100%" class=fast10-tablewidth cellpadding="0" cellspacing="0" height="31">'
    ,'<tr><td  height="8" class="fast10-headToolBg1" colspan="2"></td></tr><tr>'
    ,'<td  height="22" class="fast10-headToolBg2 fast10-borderColor fast10-headTool"><TABLE width=100% cellspacing=0 cellpadding=0> <TR> 	<TD>'+str+'</TD> 	<TD align=right><nobr><a href=/qq/help/ target=_blank>����</a>/<a href="javascript:_QQBBSFeedBack()" target=_self>����</a> | <a href="/cgi-bin/club/groups/register.aspx" target=_blank>����MyBBS</a> | <a href="/bbs/luntandz" target=_blank>��̳��ʾ</a>&nbsp;</nobr></TD> </TR> </TABLE></td></tr></table>')
}


