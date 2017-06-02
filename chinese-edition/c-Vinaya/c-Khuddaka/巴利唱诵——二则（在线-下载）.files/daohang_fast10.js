var _menuUsrinfo="<a href=/cgi-bin/myqq/?go=JBXX target=_blank>修改资料/签名</a><br><a href=/cgi-bin/myqq/?go=face target=_blank>修改头像</a><br><a href=/cgi-bin/myqq/?go=passwd target=_blank>修改口令</a><br><a href=/cgi-bin/myqq/?go=pyq target=_blank>我的朋友圈</a><br><a href=/cgi-bin/myqq/?go=onlineset target=_blank>在线设置</a><br><a href=javascript:_express() target=_self>发快信</a><br><a href=javascript:express_admin() target=_self>快信入口</a><br><a href=javascript:_GetRiLi() target=_blank>日历记事</a><BR><a target=_blank href=/cgi-bin/myqq/?go=zuji>我的足迹</a><img src=/qq/img/dot/new2.gif></font>"
var _menuHelp="<font size=2><a href=/cgi-bin/bbs/help/luntan.html  target=_blank>论坛使用帮助</a><BR><a href=/cgi-bin/bbs/help/myqq.html  target=_blank>用户帮助</a><BR><a href=/cgi-bin/bbs/help/mybbs.html  target=_blank>斑竹帮助</a>"
var _menuStyle="<div style='cursor:hand'>"
 +"<div onclick=_ChangeCss('fast10_apple')>苹果树下<img src=/qq/img/dot/new2.gif></div>"
 +"<div onclick=_ChangeCss('fast10_xxxk')>夏夜星空<img src=/qq/img/dot/new2.gif></div>"
 +"<div onclick=_ChangeCss('fast10_xxkui')>向日葵<img src=/qq/img/dot/new2.gif></div>"
 +"<div onclick=_ChangeCss('fast10_lsmh')>绿色梦幻</div>"
 +"<div onclick=_ChangeCss('fast10_zzhx')>最终幻想</div>"
 +"<div onclick=_ChangeCss('fast10_hasl')>黑暗森林</div>"
 +"<div onclick=_ClearCssCookie()>恢复默认</div>"
 +"<div><span onclick=_ChangeCss('fast10_lshy_small')>蓝色海洋</span> <span onclick=_ChangeCss('fast10_lshy')>宽</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_smnl_small')>树木年轮</span> <span onclick=_ChangeCss('fast10_smnl')>宽</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_lssl_small')>绿色森林</span> <span onclick=_ChangeCss('fast10_lssl')>宽</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_zsmh_small')>紫色梦幻</span> <span onclick=_ChangeCss('fast10_zsmh')>宽</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_hfjr_small')>红粉佳人</span> <span onclick=_ChangeCss('fast10_hfjr')>宽</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_qqzy_small')>青青子衿</span> <span onclick=_ChangeCss('fast10_qqzy')>宽</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_xcfd_small')>香橙粉黛</span> <span onclick=_ChangeCss('fast10_xcfd')>宽</span></div>"
 +"<div><span onclick=_ChangeCss('fast10_yzsg_small')>银装素裹</span> <span onclick=_ChangeCss('fast10_yzsg')>宽</span></div>"
+'<a href="javascript:_GoSys()" target="_self">系统界面</a>'


var _menuBBSAdmin = '<a href="javascript:_GoBBSAdmin(\'BMGG\')" target=_self>版面公告</a>'
+ '<br><a href="javascript:_GoBBSAdmin(\'TZGL\')" target=_self>帖子管理</a>'
+ '<br><a href="javascript:_GoBBSAdmin(\'BZRM\')" target=_self>斑竹任免</a>'
+ '<br><a href="javascript:_GoBBSAdmin(\'QXGL\')" target=_self>权限管理</a>'


var _menuQQSY = '<a href="http://www.5ilog.com/cgi-bin/" target=_blank>地图</a>'
+ '<br><a href="http://www.5ilog.com/cgi-bin/club/" target=_blank>部落</a>'
+ '<br><a href="http://www.5ilog.com/cgi-bin/home/" target=_blank>家园</a>'
+ '<br><a href="http://www.5ilog.com/cgi-bin/imglib/" target=_blank>图片秀</a>'
+ '<br><a href="http://www.5ilog.com/cgi-bin/club/tag.aspx" target=_blank>网摘</a>'
+ '<br><a href="http://www.5ilog.com/qq/qqspace/xuanchuan.htm" target=_blank>QM.NET</a>'
+ '<br><a href="http://www.5ilog.com/qq/mz/" target=_blank>藏书阁</a>'
+ '<br><a href="http://www.5ilog.com/cgi-bin/club/luntanframe.aspx" target=_blank>公共论坛</a>'
+ '<br><a href="http://www.5ilog.com/cgi-bin/club/magic/" target=_blank>道具店</a><img src=/qq/img/dot/new2.gif>'

+ '<br><a href="http://u.7town.com/main2/index.html?uid=16764&a=&b=&c=&d=&e=&f=" target=_blank>手机图铃</a>'

var _menubm="<nobr><a href='javascript:_bmmybbs()' target=_self>收藏本站"+_GetMybbsHome()+"</a></nobr><BR><nobr><a target=_self href=javascript:_copymybbslink()>复制本站连接到粘贴板,请只使用该连接进行站外连接</a></nobr><BR><nobr><a target=_self href='javascript:_QQLink(\"L\",_GetMYBBSValue(\"lunquid\"),_GetMYBBSValue(\"lunqusubject\"))'>加入QQ驿站网摘</a></nobr>"

function _writeDaoHang(){ //输出导航条
var dataary = _GetMYBBSValue("daohangmenu",false)
var str = ""
if (!dataary){ //默认
	str = '<nobr>&nbsp;<a target=_self href=javascript:Login("/qq/myqq/putintomenu.htm") title="登陆后发贴不用填写密码">登陆</a>/<a href="javascript:_JREG()" target=_self>注册</a> | <a href=/cgi-bin/myqq/ onmouseover=_ShowTabMenu(_menuUsrinfo) onmouseout=_HideMenu() target=_blank>我的家园</a> | <a onmouseover=_ShowTabMenu(_menuStyle) onmouseout=_HideMenu() href=# target=_self>自选风格</a> | <a onmouseover=_ShowTabMenu(_ListAryTag(3)) onmouseout=_HideMenu() href=# target=_self><b>标签</b></a> | <a href="/cgi-bin/" onmouseover=_ShowTabMenu(_menuQQSY) onmouseout=_HideMenu() target=_blank>地图</a> | <a href="javascript:_GoBBSAdmin()" onmouseover=_ShowTabMenu(_menuBBSAdmin) onmouseout=_HideMenu() target="_self">斑竹管理</a> | '
+_GetBuLuoMenu()+' | <a href="javascript:_GoPaiMing()" target="_self">排名</a> | <a onmouseover=_ShowTabMenu(_menubm) onmouseout=_HideMenu() href="javascript:_bmmybbs()" title="收藏'+_GetMybbsHome()+'" target="_self"><b style="color:Red">收藏</b></a>' // |  <SCRIPT>_GoBig5()<'+'/SCRIPT>
+'<span id=LinksetContainer></span></nobr>'
} else {//设定了导航菜单
	str += "<nobr>&nbsp;"
	for (var p in dataary){
		//if (p == "style") continue
		str += _GetDaohangMenuA(p) + " | "
	}
	str = str.replace(/\s\|\s$/gi,"") + "<span id=LinksetContainer></span></nobr>"
} //if
document.write('<table  width="100%" class=fast10-tablewidth cellpadding="0" cellspacing="0" height="31">'
    ,'<tr><td  height="8" class="fast10-headToolBg1" colspan="2"></td></tr><tr>'
    ,'<td  height="22" class="fast10-headToolBg2 fast10-borderColor fast10-headTool"><TABLE width=100% cellspacing=0 cellpadding=0> <TR> 	<TD>'+str+'</TD> 	<TD align=right><nobr><a href=/qq/help/ target=_blank>帮助</a>/<a href="javascript:_QQBBSFeedBack()" target=_self>反馈</a> | <a href="/cgi-bin/club/groups/register.aspx" target=_blank>申请MyBBS</a> | <a href="/bbs/luntandz" target=_blank>论坛演示</a>&nbsp;</nobr></TD> </TR> </TABLE></td></tr></table>')
}


