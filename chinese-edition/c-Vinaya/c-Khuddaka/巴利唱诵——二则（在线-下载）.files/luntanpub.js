function _PostNew() //发新帖
{
	open("mybbs_new.aspx?id="+_MYBBS.lunquid);
}

function _GoChatRoom() //聊天室
{
	chatRoom(_MYBBS.lunquid,_MYBBS.lunqusubject);
}

function _GoQQLink() //QQLink
{
	_QQLink("L",_MYBBS.lunquid);
}

function _GoImglib() //到图库
{
	open("/imgl/"+_MYBBS.lunquid);
}

function _GoPainting() //论坛画画
{
	open("/cgi-bin/bbs/sys/lunqu_newpaint.asp?id="+_MYBBS.lunquid);
}

function _GoPostImg() //论坛贴图
{
	open("/cgi-bin/bbs/sys/lunqu_newimg.asp?id="+_MYBBS.lunquid);
}

function _ShowPrime() //精华
{
	if (QueryString.j == "1")
	{
		document.write("<a href='"+_GetUrl({pName:"j",v:0})+"' title='看普通'>"+((self._lanPackage)?_lanPackage.common:"普通")+"</a>");
		return;
	}
	else
	{
		document.write("<a href='"+_GetUrl({pName:"j",v:1})+"' title='看精华'>"+((self._lanPackage)?_lanPackage.prime:"精华")+"</a>");
		return;
	}
}

function _ShowTaxis() //看贴排序
{
	if (!QueryString.type) QueryString.type = 1;
	if (QueryString.type&1) //目前是回贴提前
	{
		document.write("<a href='"+_GetUrl({pName:"type",v:(QueryString.type^1)})+"' title='主帖排序'>"+((self._lanPackage)?_lanPackage.mainTaxis:"主帖排序")+"</a>");
	}
	else 
	{
		document.write("<a href='"+_GetUrl({pName:"type",v:(QueryString.type|1)})+"' title='回贴提前'>"+((self._lanPackage)?_lanPackage.replayTaxis:"回贴提前")+"</a>");
	}
}

function _ShowOldest() //最旧最新
{
	if (QueryString.type&2) //目前是最旧
	{
		document.write("<a href='"+_GetUrl({pName:"type",v:(QueryString.type^2)})+"' title='最新'>"+((self._lanPackage)?_lanPackage.latest:"最新")+"</a>");
	}
	else //最旧
	{
		document.write("<a href='"+_GetUrl({pName:"type",v:(QueryString.type|2)})+"' title='最旧'>"+((self._lanPackage)?_lanPackage.oldest:"最旧")+"</a>");
	}
}

function _GoBig5() //简繁体转化
{
	document.write(	'<a target=_self href=javascript:GBIG5()>'
	,((document.location.port==81)?((self._lanPackage)?_lanPackage.gb:"简体"):((self._lanPackage)?_lanPackage.big5:"繁体"))
	,"</a>");
}


//private function
function GBIG5(){
if (self.location.port==81){
	self.location=(self.location+"").replace(":81","")
}
else
	self.location.port=81;
}

function _GetUrl(o) //o.pName,o.v 把地址中对应的参数换成新值，如果没有就加上
{
	var strSearch = location.search;
	var strL = location.toString();
	if(strSearch) //后面跟有参数
	{
		var myReg = new RegExp(o.pName+"=");
		if (myReg.test(strSearch)) //已经有这样的参数
		{
			myReg = new RegExp("&"+o.pName+"=.*&");
			if (myReg.test(strSearch)) //参数后面还有参数
			{
				strL = strL.replace(myReg,"&"+o.pName+"="+o.v+"&");
				return strL;
			}
			else //参数在最后位置
			{
				myReg = new RegExp(o.pName+"=.*$");
				strL = strL.replace(myReg,o.pName+"="+o.v);
				return strL;
			}
		}
		else return strL+"&"+o.pName+"="+o.v
	}
	else return strL+"?"+o.pName+"="+o.v;
}

/**
 * 构建用户信息
 * param:	o 用户信息对象
 * return:	显示用户信息字符串
 */
function _QQUsrInfo(o)
{
	var strRe = ""
	if (o.face) strRe += o.face+"<br>"
	strRe += _GetUsrOnlineHTML(o.onlinetype)+'<a href="javascript:usrinfo(\''+o.logname+'\')" target="_self">'+o.name+'</a>'
	if (o.otherbz&4)
		strRe +="<a target=_self href=javascript:_sendsms('"+o.logname+"')><img title='VIP用户，发短信给对方'src=/qq/img/dot/icon_sms.gif border=0></a>"
	strRe +="<BR>"
	
	strRe += "　"+(o.xingbie=="f"?"女":"男")

	strRe += ' <a title="查看用户的朋友圈" target=_self href=javascript:_Quan("'+o.logname+'")><<朋友圈>></a>'
	strRe += " <a href='/cgi-bin/myqq/zuji/zuji.aspx?logname="+o.logname+"' target=_blank><<足迹>></a><BR>"
	
	if (o.chenghao) strRe += "头衔："+o.chenghao+"<br>"
	else {
		if (self._MYBBS&&_MYBBS.oid)
			strRe += "<font color=red>未加入部落</font> <a target=_blank href=/cgi-bin/club/groups/join.aspx?oid="+_MYBBS.oid+">立刻加入>></a><br>"
	}
	strRe += '<a title="什么是标签？设置自己的标签" target=_blank href=/cgi-bin/myqq/update_a.aspx#tag>标签'
	if (o.tag) strRe += '</a>：<span class="usr-tag">'+ _ListUsrTags(o.tag)+'</span><br>'
		else strRe += '：设置自己的标签</a><BR>'
		


	if (o.SP) strRe += '声望：'+GetSPChengHao(o.SP)+'<img src="/qq/img/jifen/SP'+o.SP+'.gif"><br>'
	else strRe += "声望：<a target=_blank href=/cgi-bin/club/magic/magic.aspx?did=2001&tid="+o.uid+">???</a><br>"

	if (o.EP) strRe += '经验：'+GetEPChengHao(o.EP)+'<br><img src="/qq/img/jifen/EP'+o.EP+'.gif"><br>'
	else strRe += "经验：<a target=_blank href=/cgi-bin/club/magic/magic.aspx?did=2000&tid="+o.uid+">???</a><br>"

	if (o.QP) strRe += 'QP：'+GetQPChengHao(o.QP)+'<img src="/qq/img/jifen/QP'+o.QP+'.gif"><br>'
	else strRe += "QP：<a target=_blank href=/cgi-bin/club/magic/magic.aspx?did=2002&tid="+o.uid+">???</a><br>"
	
		
	strRe += "<BR><a href='/cgi-bin/sys/link/Home.aspx?logname="+o.logname+"&maintype=quanji' target=_blank>文集:"+o.tieN+"</a> "
	if (o.zixuanN) strRe += "<a href='/cgi-bin/sys/link/Home.aspx?logname="+o.logname+"&maintype=zixuanji' target=_blank>自选集:"+o.zixuanN+"</a> "
	if (o.toupiaoN) strRe += "<a href='/cgi-bin/sys/link/Home.aspx?logname="+o.logname+"&maintype=toupiaoji' target=_blank>投票集:"+o.toupiaoN+"</a>"
	strRe+="<br>"
	if (o.qlogid) strRe += "<a href='/log/"+o.logname+"' target=_blank>QQLog</a> "
	if (o.imglibid) strRe += "<a href='/imgu/"+o.logname+"' target=_blank>图酷</a> "
		
	strRe += "<BR><BR><nobr>注册日期:"+o.regrq+"</nobr><br>"
	strRe += "<nobr>最后登陆:"+o.lastlogin+"</nobr><br>"

	return strRe
}//_QQUsrInfo

function GetEPChengHao(ep)
{
	//从1开始
	var arr = new Array("","初出茅庐","边学边练","略窥门径","半生不熟","熟门熟路","略有小成","大器晚成","出类拔萃","游刃有余","炉火纯青","返璞归真")
	
	return arr[ep]
}

function GetQPChengHao(qp)
{
	var arr = new Array("负债累累","举债度日","小有亏空","无拘无束","省吃俭用","自给自足","略有积蓄","殷实之家","家财万贯")
	
	return arr[qp]
}

function GetSPChengHao(sp)
{
	var arr = new Array("臭名远扬","无恶不作","小有恶名","行为欠检","默默无闻","默默无闻","小有名气","名闻遐迩","石破天惊","如日中天")
	
	return arr[sp+1]
}

/**
 * 功能：返回帖子列表一行（项）
 * @param: o 帖子对象，包含主贴信息，回帖数，最后回帖信息
 * @return: 帖子列表一行的HTML
 */
function _QQTieListItem(o)
{
	var strRe = '<tr><td class="fast10-colDeepBg fast10-postState">'
	strRe += _QQTopicState(o.bz, o.huiN) //帖子状态
	strRe += '</td><td width="64%" class="fast10-colLightBg fast10-postSubject">'

	strRe += '<span tid='+o.id+'></span>' //展开回帖要用到
	if (o.huiN == 0)
		strRe += '<img src=/qq/img/fast/fast2/nofollow.gif>' //没有回复情况下显示的图片
	else
		strRe += '<img class=mainhavehui style="cursor:hand" tid="" onclick="DisTreeNew(this,this.previousSibling.tid,\'v.aspx\')" src=/qq/img/fast/fast2/plus.gif>' //有回复情况

	strRe += _QQTopicInfo(o) //主题信息
	strRe += " "+_QQTopicPageList(o.id, o.huiN, (self._MYBBS&&_MYBBS.viewtiecount)?_MYBBS.viewtiecount:20) //看帖分页列表
	strRe += '</td><td class="fast10-colDeepBg fast10-postAuthor">'
		+_GetUsrLink(o.logname, o.name,o.bz)
		+'</td> <td width="10%" class="fast10-colLightBg fast10-postHuiHit">'+o.huiN+'/'+o.hit+'</td> <td width="17%" class="fast10-colDeepBg fast10-postUpdate"><nobr>'
		
	//if (o.huiN == 0) //最新回复
	if (!o.hrq) //无回复
		strRe += '<a href="v.aspx?id='+o.id+'" title="主题：'+o.subject+'&#10;作者：'+o.name+'">'+o.rq.replace(/:00$/gi, "")+'</a>'+
			'<span class=treetable-pipe>|</span>'+_GetUsrLink(o.logname, o.name,o.bz)	
	else //最新回复
		strRe += '<a href="v.aspx?id='+o.hid+'" title="主题：'+o.hsubject+'&#10;作者：'+o.hname+'">'+o.hrq.replace(/:00$/gi, "")+'</a>'+
			'<span class=treetable-pipe>|</span>'+_GetUsrLink(o.hlogname, o.hname)		
	strRe += '</nobr></td> </tr>'
	return strRe + '<tr style="display:none"><td width="100%" colspan="5" class="fast10-colLightBg"></td></tr>'
	
}//_QQTieListItem

/**
 * 功能：返回帖子列表一行（项），帖子检索的结果
 * @param: o 帖子对象，包含主贴信息，回帖数，最后回帖信息
 * @return: 帖子列表一行的HTML
 */
function _QQSearchTieListItem(o)
{
	var strRe = '<tr><td class="fast10-colDeepBg fast10-postState">'
	strRe += _QQTopicState(o.bz, o.huiN) //帖子状态
	strRe += '</td><td width="64%" class="fast10-colLightBg fast10-postSubject">'

	strRe += _QQTopicInfo(o, "v.aspx") //主题信息
	//strRe += " "+_QQTopicPageList(o.id, o.huiN, (self._MYBBS&&_MYBBS.viewtiecount)?_MYBBS.viewtiecount:20) //看帖分页列表

	strRe += '</td><td class="fast10-colDeepBg fast10-postAuthor"><nobr>'+_GetUsrLink(o.logname, o.name,o.bz)+'</nobr></td>'
	strRe += '<td class="fast10-colLightBg fast10-postAuthor"><nobr>'+o.rq.replace(/:00$/gi, "")+'</nobr></td>' //时间
	strRe += '<td class="fast10-colDeepBg fast10-postAuthor"><span'+(o.l==0?' class="treetable-pipe"':"")+'>'+o.l+'</span>字节</td>' //长度
	strRe += '<td class="fast10-colLightBg fast10-postAuthor">'+o.vote+'/'+o.hit+'</td>'
	strRe += '<td class="fast10-colDeepBg fast10-postAuthor"><nobr>'  //人气 
	if (o.father < 0) //主贴
		strRe += '<a href="v_all.aspx?id='+o.id+'">'+o.huiN+'回帖</a>'
	else //最新回复
		strRe += '<a href="v_all.aspx?id='+o.id+'">看主贴</a>'		
	strRe += '</nobr></td> </tr>'
	return strRe + '<tr style="display:none"><td width="100%" colspan="5" class="fast10-colLightBg"></td></tr>'
	
}//_QQSearchTieListItem

/**
 * 功能：帖子主题信息，包括表情、状态、主题、最新、分页连接
 * @param: o 帖子对象，包含主贴信息，回帖数，最后回帖信息
 * @return: 帖子主题信息html
 */
function _QQTopicInfo(o, vUrl)
{
	if (!vUrl) vUrl = "v_all.aspx"
	var target = _GetStateBZ(o.bz)==3?" target=_blank":""//输出连接target
	//alert("o.bz="+o.bz)
	var strRe = ""
	strRe += _QQ_BQ_HTML(_GetBQBZ(o.bz)) //帖子表情
	if (self._MYBBS && _MYBBS.FenLeiAry) { //帖子分类
		var fenlei = _GetFenleiBZ(o.bz)
		if (_MYBBS.FenLeiAry.length > fenlei) strRe += "<span class=s-tree-fenlei>"+_MYBBS.FenLeiAry[fenlei]+"</span>" //帖子分类
	}
	strRe += ' <a'+target+' class=s-tree-main-subject href='+vUrl+'?j='+(QueryString.j==1?"1":"0")+'&id='+o.id+'>'+o.subject+'</a>' //帖子主题
	//是否blog贴
	if (o.blogid) strRe += ' <a href="/cgi-bin/sys/link/qlog.aspx?lunquid='+o.blogid+'" class="isblogtie">Blog</a>'
	//strRe += ' [<span class=treetable-pipe>'+o.l+'</span>byte]'
	if (o.lunqusubject) strRe += ' <a href="mybbs.aspx?id='+o.lunquid+'"><span class=s-tree-sublunqu>'+o.lunqusubject+'</span></a>' //帖子坐在分论区，如果是当前论区，则没有
	//if (o.lunqusubject) strRe += ' <a href="/cgi-bin/sys/link/luntan.aspx?id='+o.lunquid+'"><span class=s-tree-sublunqu>'+o.lunqusubject+'</span></a>' //帖子坐在分论区，如果是当前论区，则没有

	//保存原先函数
	var tmpW=self._W
	//使用新函数
	self._W=function(s){_tmpHTML+=s}
	
	_tmpHTML=""
	_QQ_new(o.rq,o.id)
	strRe+=_tmpHTML

	//恢复以前的
	self._W=tmpW
				
	return strRe
}//_QQTopicInfo

/**
 * 功能：分页看帖连接
 * @param: id 主贴id， huiN 回帖数，pageCount 每页记录数
 * @return: 分页连接HTML
 */
function _QQTopicPageList(id, huiN, pageCount)
{
	var pages = Math.ceil(huiN/pageCount)
	if (pages < 2) return "";
	var j = '&j='+(QueryString.j==1?"1":"0")
	if (pages > 10) //只取前后5页
	return '[<img src=/qq/img/dot/pagelist.gif> <a href="v_all.aspx?id='+id+'&page=0'+j+'" title="查看该页"><span class=treetable-pagelist>1</span></a> <a title="查看该页" href="v_all.aspx?id='+id+'&page=1'+j+'"><span class=treetable-pagelist>2</span></a> <a title="查看该页" href="v_all.aspx?id='+id+'&page=2'+j+'"><span class=treetable-pagelist>3</span></a> <a href="v_all.aspx?id='+id+'&page=3'+j+'"><span class=treetable-pagelist>4</span></a> <a title="查看该页" href="v_all.aspx?id='+id+'&page=4'+j+'"><span class=treetable-pagelist>5</span></a>...<a href="v_all.aspx?id='+id+'&page=1'+j+'"><span class=treetable-pagelist>'+(pages-5)+'</span></a> <a title="查看该页" href="v_all.aspx?id='+id+'&page=1'+j+'"><span class=treetable-pagelist>'+(pages-4)+'</span></a> <a title="查看该页" href="v_all.aspx?id='+id+'&page=1'+j+'"><span class=treetable-pagelist>'+(pages-3)+'</span></a> <a title="查看该页" href="v_all.aspx?id='+id+'&page=1'+j+'"><span class=treetable-pagelist>'+(pages-2)+'</span></a> <a title="查看该页" href="v_all.aspx?id='+id+'&page=1'+j+'"><span class=treetable-pagelist>'+(pages-1)+'</span></a>  ]'
	var strRe = ""
	for (var i=0; i < pages ; i++)
	{
		strRe += ' <a title="查看该页" href="v_all.aspx?id='+id+'&page='+i+''+j+'"><span class=treetable-pagelist>'+(i+1)+'</span></a>'
	}
	return "[<img src=/qq/img/dot/pagelist.gif> "+strRe.substring(1)+" ]";
}//_QQTopictreetable-pagelist
//判断帖子状态
function _QQTopicState(bzall, huiN)
{
	var bz=_GetStateBZ(bzall)
	if (bz==3) return _GetMYBBSValue("tieState.top1","<img src=/qq/club/images/bbsnew/ztop.gif alt='系统通告'>").replace("none","") //"系统通告"
	if (bz==2) return _GetMYBBSValue("tieState.top2","<img src=/qq/club/images/bbsnew/ztop1.gif alt='论坛置顶'>").replace("none","")  //"论坛置顶"
	if (bz==1) return _GetMYBBSValue("tieState.top3","<img src=/qq/club/images/bbsnew/istop.gif alt='板块置顶'>").replace("none","")  //"板块置顶"
	if (_GetZiXuanBZ(bzall)) return _GetMYBBSValue("tieState.zixuanTie","<img src=/qq/club/images/bbsnew/isbest.gif alt='自选'>").replace("none","")  //自选
	if (_GetJinghuaBZ(bzall)) return _GetMYBBSValue("tieState.jTie","<img src=/qq/club/images/bbsnew/jinghua.gif alt='精选贴'>").replace("none","")  //"精选贴"
	if (_GetProtectBZ(bzall)) return _GetMYBBSValue("tieState.protectTie","<img src=/qq/club/images/bbsnew/baohu.gif alt='内容受保护'>").replace("none","")   //是否需要条件
	if (_GetMagicBZ(bzall)) return _GetMYBBSValue("tieState.magicTie","<img src=/qq/club/images/bbsnew/mofa.gif alt='魔法帖'>").replace("none","")   //是否魔法
	if (_GetFuJianBZ(bzall)) return _GetMYBBSValue("tieState.fTie","<img src=/qq/club/images/bbsnew/fujian.gif alt='有附件'>").replace("none","")   //有附件
	if (_GetReplyBZ(bzall)) return _GetMYBBSValue("tieState.replyTie","<img src=/qq/club/images/bbsnew/lockfolder.gif alt='允许跟贴'>").replace("none","")   //是否允许跟贴
	if (huiN < 10) return _GetMYBBSValue("tieState.cTie","<img src=/qq/club/images/bbsnew/folder.gif alt='一般主题'>").replace("none","")  //"一般主题"
	return _GetMYBBSValue("tieState.hotTie","<img src=/qq/club/images/bbsnew/hotfolder.gif alt='热门主题'>").replace("none","")  //"热门帖子"
}//_QQTopicState

function _GetUsrLink(logname, name,bz){	
	var s
	if (logname=="n")
		s='<span class=niming title="匿名用户">'+name+'</span>'
	else s='<a href=javascript:usrinfo("'+logname+'") target=_self>'+name+'</a>'
	
	if (bz&4) return s+"<span class=zhuantie>转</span>"
	return s

}

//vUrl: 看帖连接
function GetReplays(id,vUrl)
{
	//private function
	this._GetTopiceObj = function (o) //生成贴子对象，o为贴子节点
	{
		var objTopic = new Object();
		objTopic.father =	o.getAttribute("father");
		objTopic.brother =	o.getAttribute("brother");
		objTopic.son =		o.getAttribute("son");
		objTopic.bz =		o.getAttribute("bz");
		objTopic.number =	o.getAttribute("number");
		objTopic.luenqu =	o.getAttribute("luenqu");
		objTopic.rq =		o.getAttribute("rq");
		objTopic.logname =	o.getAttribute("logname");
		objTopic.name =		o.getAttribute("name");
		objTopic.subject =	o.getAttribute("subject");
		objTopic.id =		o.getAttribute("id");
		objTopic.hit =		o.getAttribute("hit");
		objTopic.vote =		o.getAttribute("vote");
		objTopic.uid =		o.getAttribute("uid");
		objTopic.uid =		o.getAttribute("uid");
		objTopic.unionA =	o.getAttribute("unionA");
		objTopic.changdu =	o.getAttribute("length");
		return objTopic;
	}//_GetTopiceObj
	/*----------------//
	Name	: _ListTopic(id)
	Function: 递归按层次显示贴子列表，先显示孩子topic，再显示兄弟topic, Function exits when id=0
	Input	: Topic id
	Output	: Topic list html
	//-----------------*/
	this._ListTopic = function (id)
	{
		//如果为０或者不存在！
		if ((id==0)||(!_ArrTopic[id])) return ""
	
		var strReHtml = "";
		if (_ArrTopic[id].father>0) strReHtml += "<li class=s-tree-hui>";
		else strReHtml += "<li class=s-tree-main>";
		//strReHtml += "<img src=/qq/img/fast/fast2/nofollow.gif>"
		

		//保存原先函数
		var tmpW=self._W
		//使用新函数
		self._W=function(s){_tmpHTML+=s}

		if (!self._MYBBSDisableBiaoQing){
			_tmpHTML=""
			_QQ_BQ((_ArrTopic[id].bz>>8)&0x7f);
			strReHtml+=_tmpHTML
			}
			
		var rq=_ArrTopic[id].rq
		rq=rq.substr(0,rq.length-3).replace("T"," ")
		
		strReHtml+=" <a name='"+_ArrTopic[id].id+"' class=s-tree-hui-subject href="+vUrl+"?j="
			+((QueryString.j)?QueryString.j:0)+"&id="+_ArrTopic[id].id
			+">"+_ArrTopic[id].subject+"</a> "
			+rq
		
		_tmpHTML=""
		_QQ_new(rq,id)
		strReHtml+=_tmpHTML
		
		//恢复以前的
		self._W=tmpW
		
		strReHtml +=" <span class=s-tree-branch><span class='s-tree-name fast10-huiAuthor'>"
		//strReHtml +=" <span class=s-tree-branch><span"
		
		if (_ArrTopic[id].logname=="n"){
			strReHtml +="<span class=niming>"+_ArrTopic[id].name+"</span> "
		}else {
			strReHtml +="<a href='javascript:usrinfo(\""
			+_ArrTopic[id].logname+"\")' target=_self>"
			+_ArrTopic[id].name
			+"</a> "
		}
		strReHtml += "</span>"+(_ArrTopic[id].changdu=="0"?"<span style='color:red'>0</span>字节":_ArrTopic[id].changdu+"字节")
		strReHtml +="</span></li>";
		strReHtml += __this._ListTopicSon(_ArrTopic[id].son); //添加在后面。
		strReHtml = __this._ListTopicBrother(_ArrTopic[id].brother) + strReHtml; //添加在前面。	
		//alert(strReHtml);
		return strReHtml;
	}//_ListTopic
	this._ListTopicSon = function (id)
	{
		var strReHtml = "";
		if (id==0) return strReHtml;
		strReHtml += "<ul>";
		strReHtml += __this._ListTopic(id);
		strReHtml += "</ul>";
		//alert(strReHtml);
		return strReHtml;
	}//_ListTopic
	this._ListTopicBrother = function (id)
	{
		var strReHtml = "";
		if (id==0) return strReHtml;
		strReHtml += __this._ListTopic(id);
		//alert(strReHtml);
		return strReHtml;
	}//_ListTopicBrother

	if (QueryString.j && (QueryString.j==1)) var j = "&j=1";
	else var j = "&j=0";
	xmlDoc = self.xmlDoc
	if (xmlDoc){
		this.manObject; //操作对象，比如回帖列表td
		var _ArrTopic = new Array(); //贴子对象数组
		var __root = xmlDoc.selectSingleNode("root");
		var __this = this
		if (!__root) {return;	} //出错
		//alert(id);
		//parse item into Array
		var _root = __root.firstChild; //切换到第一个节点
		if (!_root) {return;	} //出错

		//找到主贴
		var maintie,t
		while(_root)
		{
			if (_root.nodeName != "bbs") break;
			_ArrTopic[_root.getAttribute("id")]=t= this._GetTopiceObj(_root);
			if (t.father<0) maintie=t
			_root = _root.nextSibling;
		}
		//__this.manObject.innerHTML = "<br>"+__this._ListTopicSon(_ArrTopic[__root.firstChild.getAttribute("id")].son);
		if (!this.manObject) this.manObject = huitreelist
		this.manObject.innerHTML = "<br>"+this._ListTopicSon(maintie.id); //list from main topic
	} else {
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async = true; //异步获取数据
		xmlDoc.load("/cgi-bin/class/BBS/BBSXML.aspx?act=viewall"+j+"&a=0&id="+id);
		//prompt("","/cgi-bin/class/BBS/BBSXML.aspx?act=viewall"+j+"&a=0&id="+id)
		this.manObject; //操作对象，比如回帖列表td
		var __this = this;
		var _ArrTopic = new Array(); //贴子对象数组	
		//xmlDoc.load("BBSXML.xml");
		//xmlDoc.ondataavailable = function()
		xmlDoc.onreadystatechange = function()
		{
			if (xmlDoc.readyState!=4) return;
			var __root = xmlDoc.selectSingleNode("root");
			if (!__root) {	return;	} //出错
			//alert(id);
			//parse item into Array
			var _root = __root.firstChild; //切换到第一个节点
			if (!_root) {	return;	} //出错
			
			//找到主贴
			var maintie,t
			while(_root)
			{
				if (_root.nodeName != "bbs") break;
				_ArrTopic[_root.getAttribute("id")]=t= __this._GetTopiceObj(_root);
				if (t.father<0) maintie=t
				_root = _root.nextSibling;
			}
			//__this.manObject.innerHTML = "<br>"+__this._ListTopicSon(_ArrTopic[__root.firstChild.getAttribute("id")].son);
			__this.manObject.innerHTML = "<br>"+__this._ListTopicSon(maintie.id); //list from main topic
		}//ShowReplays
	} //if
	
	
} //GetReplays

function GetLatestReply(id,vUrl,manobj){ //获得最新评论
	if (QueryString.j && (QueryString.j==1)) var j = "&j=1";
	else var j = "&j=0";
	xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	xmlDoc.async = true; //异步获取数据
	xmlDoc.load("/cgi-bin/class/BBS/BBSXML.aspx?act=viewall"+j+"&a=0&id="+id);
	//xmlDoc.load("http://192.168.0.47/cgi-bin/class/BBS/BBSXML.aspx?act=viewall&id=413373");
	this.manObject = manobj //操作对象，比如回帖列表td
	//this.manObject = rr
	var __this = this;
	var strRe = "", count = 4 //显示数量
	xmlDoc.onreadystatechange = function(){
		if (xmlDoc.readyState!=4) return;
		var root = xmlDoc.selectSingleNode("//root").lastChild
		if (!root) return  
		var i = 0
		while(root){	
			i++
			if (i > count) break
			if ((root.getAttribute("father").indexOf("-")==-1) && (root.getAttribute("id")!=id) ) strRe += '<li><a href="'+(vUrl?vUrl:"v.aspx")+'?id='+root.getAttribute("id")+'" title="'+root.getAttribute("subject")+'">'+root.getAttribute("subject").getLeftN(15)+'</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href=javascript:usrinfo("'+root.getAttribute("logname")+'") title="点击查看 '+root.getAttribute("name")+' 的个人信息" target=_self>'+root.getAttribute("name").getLeftN(6)+'</a> 发表于：'+root.getAttribute("rq")+'</li>'
			root = root.previousSibling
		}
		if (!strRe) return
		if (i>count) strRe += '<a href="javascript:;" onclick="DisTreeHui(this,huitreelist,'+id+',null,\'>>点击展开全部评论\',\'>>点击收起全部评论\')" target="_self">>>点击展开全部评论</a> <a href="/cgi-bin/bbs/sys2/v_all.aspx?id='+id+'">【查看全部评论】</a><br><div id=huitreelist style="display: none"></div>'
		__this.manObject.innerHTML = "<dl style='margin: 0px;'>"+strRe+"</dl>"
	}//ShowReplays
} //GetLatestReply
function GetLatestTB(id,manobj){ //获得最新引用
	var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	xmlDoc.async = true; //异步获取数据
	xmlDoc.load("/cgi-bin/class/BBS/BBSXML.aspx?act=TrackBackList&tid="+id);
	//xmlDoc.load("http://192.168.0.47/cgi-bin/class/BBS/BBSXML.aspx?act=viewall&id=413373");
	this.manObject = manobj //操作对象，比如回帖列表td
	//this.manObject = rr
	var __this = this;
	var strRe = "", count = 4 //显示数量
	xmlDoc.onreadystatechange = function(){
		if (xmlDoc.readyState!=4) return;
		var root = xmlDoc.selectSingleNode("//root").lastChild
		if (!root) return  
		var i = 0
		while(root){	
			i++
			if (i > count) break
			strRe += '<li><a href="'+root.getAttribute("url")+'" title="'+root.getAttribute("title")+'">'+root.getAttribute("title").getLeftN(15)+'</a> 来自：'+root.getAttribute("blog_name")+' '+root.getAttribute("rq")+'</li>'
			root = root.previousSibling
		}
		if (!strRe) return
		if (i>count) strRe += '<a href="javascript:_TrackBack('+id+')" target=_self>>>更多引用</a><br><div id=huitreelist style="display: none"></div>'
		__this.manObject.innerHTML = "<dl style='margin: 0px;'>"+strRe+"</dl>"
	}//ShowReplays
} //GetLatestTB

function DisTreeNew(theImg,id,vUrl){
  var e=_FindParentTag(theImg,"TR");
  if (e==null) return;
  e = e.nextSibling;
  var fname=_GetUrlFileName(theImg.src);
  if (fname=="plus.gif"){
      e.style.display="block"
      theImg.src="/qq/img/fast/fast2/nofollow.gif"

	 if (!self.objReplay) objReplay= new Object();

	  if (objReplay[id]) return;
	  objReplay[id] = true;
	  if (!vUrl) vUrl = "view.asp";
	  var replaysHtmlObj = new GetReplays(id,vUrl);
	  e.firstChild.innerHTML = "<br/><center>数据载入中...</center><br/>";
	  replaysHtmlObj.manObject = e.firstChild; //赋值操作对象
  }else{
      e.style.display="none"
      theImg.src="/qq/img/fast/fast2/plus.gif"
  }
}

function DisTreeHui(objSelf,o,id,sonid,closedtext,openedtext,vUrl){ 
	if (o.style.display == "none")
	{
		o.style.display = "block"
		objSelf.innerText = openedtext?openedtext:"收起回帖树"
	}
	else
	{
		o.style.display = "none"
		objSelf.innerText = closedtext?closedtext:"回帖树"
	}
	if (!self.objReplay) objReplay= new Object();
	if (objReplay[id])
	{	
		if (sonid) setTimeout("location.hash = " + sonid, 100)
		return;
	}
	objReplay[id] = true;
	if (!vUrl) vUrl = "v.aspx";
	var replaysHtmlObj = new GetReplays(id,vUrl);
	if (!self.xmlDoc) o.innerHTML = "<br/><center>数据载入中...</center><br/>";
	replaysHtmlObj.manObject = o; //赋值操作对象
	if (sonid) setTimeout("location.hash = " + sonid, 200)
}

function DisAll(d, vUrl){
 if (!vUrl) vUrl = "view.asp"
 var e=document.all.tags("IMG")
 for (var i=e.length-1;i>=0;i--){
  if (e[i].className=="mainhavehui") {
   if (_GetUrlFileName(e[i].src)=="plus.gif")
      {if (d==1) DisTreeNew(e[i],e[i].previousSibling.tid, vUrl)}
   else {if (d==0) DisTreeNew(e[i],e[i].tid, vUrl)}
  }
}//for
}

function _GetLocationAndMenu(lastlunquid, needlink)
{
	//var strRe = _GetBoardLink(_lunquAry[0]); //第一个连接
	if (_lunquAry.length==1) //只有根论区
		if (needlink) return "<span class=location>"+_GetBoardLink2(_lunquAry[0], _GetHomeUrl)+"</span>";
		else return "<span class=location>"+_lunquAry[0][2]+"</span>" 
	var strHeadLocation = "<span class=location>"+_GetBoardLink(0, _GetHomeUrl);
	if (lastlunquid==_lunquAry[0][0]) return strHeadLocation+ "</span>";
	var position = _GetPosition(lastlunquid); //当前位置

	if (needlink) var strRe = _GetBoardLink2(_lunquAry[position]);
	else var strRe = _lunquAry[position][2]; 

	var curDeapth = _lunquAry[position][1]; //当前层次
	for (var i=position-1; i > 0; i--)
	{
		if (_lunquAry[i][1] < curDeapth) //找到父层次
		{
			curDeapth = _lunquAry[i][1]; //赋值当前层次
			strRe = _GetBoardLink(i,_lunquAry[i][3]=="Z"?_GetListUrl:_GetBoardUrl) + "<span class=locationArrow>&gt;</span>" + strRe; //添加位置
		}
	}//for
	return strHeadLocation + "<span class=locationArrow>&gt;</span>" + strRe +"</span>"; //添加第一位置
}//_GetLocationAndMenu

function _GetBoardLink(i, fGetUrl)
{
	if (!fGetUrl) fGetUrl = _GetListUrl;
	return '<a target=_self href="'+fGetUrl(_lunquAry[i][0])+'" onmouseover="_ShowTabMenu(_GetBoardMenu(_lunquAry['+i+']))" onmouseout="_HideMenu()">'+_lunquAry[i][2]+'</a>';
}//_GetBoardLink

function _GetBoardLink2(arr, fGetUrl)  //whitout downlist menu
{
	if (!fGetUrl) fGetUrl = _GetListUrl;
	return '<a target=_self href="'+fGetUrl(arr[0])+'">'+arr[2]+'</a>';
}//_GetBoardLink2

function _GetListUrl(lunquid) {
return "mybbs.aspx?id=0x"+lunquid.toString(16);
}
function _GetHomeUrl(lunquid) {
return "mybbs_index.aspx?id=0x"+lunquid.toString(16);
}
function _GetBoardUrl(lunquid) {
return "mybbs_index.aspx?id=0x"+lunquid.toString(16);
}

function _GetPosition(lunquid)
{
	for (var i=0; i < _lunquAry.length; i++)
	{
		if (_lunquAry[i][0] == lunquid) return i;
	}//for
}//_GetPosition

function _GetLastChild(arr) //取得最后一个孩子的位置
{
	var p = _GetPosition(arr[0]);
	for (var i=p+1; i < _lunquAry.length; i++)
	{
		if (_lunquAry[i][1] == _lunquAry[p][1]) //说明和自己同层次
		{
			return --i; //回到最后一个孩子
		}
	}//for
	return i-1;
}//_GetLastChild

function _GetBoardMenu(arr) //得到对应论区的menu，p为最后一个孩子的位置
{
	if (arr[0]==_lunquAry[0][0]) //第一个
	{
		var p = _lunquAry.length-1;
		var p1 = 0;
	}
	else
	{
		var p = _GetLastChild(arr);
		var p1 = _GetPosition(arr[0]);
	}		
	var strRe = "";
	for (var i=p; i>p1; i--)
		strRe = '<div class="boardmenu'+(_lunquAry[i][1]-_lunquAry[p1][1])+'"><nobr>'+_GetBoardLink2(_lunquAry[i],_lunquAry[i][3]=="Z"?_GetListUrl:_GetBoardUrl)+'</nobr></div>' + strRe;
	return "<div class=boardmenu>"+strRe+"</div>";
}//_GetBoardMenu

//获得各类标志
function _GetStateBZ(bz)	{ 	return (bz>>26)&3	} //置顶状态
function _GetJinghuaBZ(bz)	{ 	return bz&1			} //精华
function _GetBQBZ(bz)		{ 	return (bz>>8)&0x7f } //表情
function _GetFenleiBZ(bz)	{ 	return (bz>>16)&0xf } //分类
function _GetFuJianBZ(bz)	{ 	return (bz>>3)&1	} //是否有附件
function _GetZiXuanBZ(bz)	{ 	return (bz>>6)&1	} //是否自选
function _GetHotTopicBZ(bz)	{ 	return (bz>>7)&1	} //热门话题
function _GetReplyBZ(bz)	{ 	return (bz>>24)&1	} //是否允许跟贴
function _GetProtectBZ(bz)	{ 	return (bz>>29)&1	} //是否要条件(内容受保护)
function _GetMagicBZ(bz)	{ 	return (bz>>30)&1	} //是否魔法

//输出论区状态
function _ShowLunQuState(o){ //输出论区状态
	if (o.daynumber)
		var str = _GetMYBBSValue("lunquState.hasnew",'<img height="15" alt="" src="/qq/img/fast/fast9/fav_add.gif" width="15" border="0">').replace(/none/gi, "")
	else 
		var str = _GetMYBBSValue("lunquState.nonew",'<img height="15" alt="" src="/qq/img/fast/fast9/fav_add.gif" width="15" border="0">').replace(/none/gi, "")
	_W(str)
}//_ShowLunQuState

//输出默认模式的帖子状态标志
function _ShowDefaultTieState(bzall){
	var bz=_GetStateBZ(bzall)
	if (bz==3) _W( _GetMYBBSValue("tieState.top1","<img src=/qq/club/images/bbsnew/ztop.gif alt='系统通告'>").replace("none","") ) //"系统通告"
	if (bz==2) _W(  _GetMYBBSValue("tieState.top2","<img src=/qq/club/images/bbsnew/ztop1.gif alt='论坛置顶'>").replace("none","") )  //"论坛置顶"
	if (bz==1) _W(  _GetMYBBSValue("tieState.top3","<img src=/qq/club/images/bbsnew/istop.gif alt='板块置顶'>").replace("none","") )  //"板块置顶"
	if (_GetJinghuaBZ(bzall)) _W(  _GetMYBBSValue("tieState.jTie","<img src=/qq/club/images/bbsnew/jinghua.gif alt='精选贴'>").replace("none","") )  //"精选贴"
	//接下来的默认值需要改变
	if (_GetFuJianBZ(bzall)) _W(  _GetMYBBSValue("tieState.fTie","<img src=/qq/club/images/bbsnew/fujian.gif alt='有附件'>").replace("none","") )  //有附件
	if (_GetHotTopicBZ(bzall)) _W(  _GetMYBBSValue("tieState.hotTopic","<img src=/qq/club/images/bbsnew/hotfolder.gif alt='热门话题'>").replace("none","") )  //热门话题
	if (_GetZiXuanBZ(bzall)) _W(  _GetMYBBSValue("tieState.zixuanTie","<img src=/qq/club/images/bbsnew/isbest.gif alt='自选'>").replace("none","") )  //自选
	if (_GetReplyBZ(bzall)) _W(  _GetMYBBSValue("tieState.replyTie","<img src=/qq/club/images/bbsnew/lockfolder.gif alt='允许跟贴'>").replace("none","") )  //是否允许跟贴
	if (_GetProtectBZ(bzall)) _W(  _GetMYBBSValue("tieState.protectTie","<img src=/qq/club/images/bbsnew/baohu.gif alt='内容受保护'>").replace("none","") )  //是否需要条件
	if (_GetMagicBZ(bzall)) _W(  _GetMYBBSValue("tieState.magicTie","<img src=/qq/club/images/bbsnew/mofa.gif alt='魔法帖'>").replace("none","") )  //是否魔法
	//_W( _GetMYBBSValue("tieState.cTie","<img src=/qq/club/images/bbsnew/folder.gif alt='一般主题'>") )  //最后默认输出
	_QQ_FenLei(_GetFenleiBZ(bzall)) //分类
	_QQ_BQ(_GetBQBZ(bzall))   //表情
}//_ShowDefaultTieState

//获得帖子状态图例数据
function __GetTieState(){
	var s1 = _GetMYBBSValue("tieState.cTie",'<img border="0" src="/qq/club/images/bbsnew/folder.gif" align=absmiddle>') //开放主题
	var s2 = _GetMYBBSValue("tieState.hotTie",'<IMG src="/qq/club/images/bbsnew/hotfolder.gif" border=0 align=absmiddle>') //热门帖子
	var s3 = _GetMYBBSValue("tieState.jTie",'<IMG src="/qq/club/images/bbsnew/jinghua.gif" border=0 align=absmiddle>') //精华贴
	var s4 = _GetMYBBSValue("tieState.top3",'<IMG src="/qq/club/images/bbsnew/istop.gif" align=absmiddle>') //置顶 
	var s5 = _GetMYBBSValue("tieState.top2",'<img border="0" src="/qq/club/images/bbsnew/ztop1.gif" align=absmiddle>') //总置顶 
	var s6 = _GetMYBBSValue("tieState.top1",'<img border="0" src="/qq/club/images/bbsnew/ztop.gif" align=absmiddle>') //系统公告

	var s7 = _GetMYBBSValue("tieState.fTie",'<img border="0" src="/qq/club/images/bbsnew/fujian.gif" align=absmiddle>') //附件
	var s8 = _GetMYBBSValue("tieState.hotTopic",'<img border="0" src="/qq/club/images/bbsnew/hotfolder.gif" align=absmiddle>') //热门话题
	var s9 = _GetMYBBSValue("tieState.zixuanTie",'<img border="0" src="/qq/club/images/bbsnew/isbest.gif" align=absmiddle>') //自选
	var s10 = _GetMYBBSValue("tieState.replyTie",'<img border="0" src="/qq/club/images/bbsnew/lockfolder.gif" align=absmiddle>') //是否允许跟贴
	var s11 = _GetMYBBSValue("tieState.protectTie",'<img border="0" src="/qq/club/images/bbsnew/baohu.gif" align=absmiddle>') //是否需要条件
	var s12 = _GetMYBBSValue("tieState.magicTie",'<img border="0" src="/qq/club/images/bbsnew/mofa.gif" align=absmiddle>') //是否魔法
	
	//return '<center>'+s1+'开放主题&nbsp; '+s2+'热门帖子&nbsp; '+s3+'精华贴&nbsp; '+s4+'置顶&nbsp; '+s5+'总置顶&nbsp; '+s6+'系统公告&nbsp; '+s7+'附件&nbsp; '+s8+'热门话题&nbsp; '+s9+'自选&nbsp; '+s10+'锁定&nbsp; '+s11+'受保护&nbsp; '+s12+'魔法帖</center>'
	//return '<center>'+s1+'开放主题&nbsp; '+s3+'精华贴&nbsp; '+s4+'置顶&nbsp; '+s5+'总置顶&nbsp; '+s6+'系统公告&nbsp; '+s7+'附件&nbsp; '+s8+'热门话题&nbsp; '+s9+'自选&nbsp; '+s10+'锁定&nbsp; '+s11+'受保护&nbsp; '+s12+'魔法帖</center>'
	if (s1=="none") s1 = ""
	else s1 += '开放主题&nbsp; '
	
	if (s2=="none") s2 = ""
	else s2 += '热门帖子&nbsp; '

	if (s3=="none") s3 = ""
	else s3 += '精华贴&nbsp; '

	if (s4=="none") s4 = ""
	else s4 += '置顶&nbsp; '

	if (s5=="none") s5 = ""
	else s5 += '总置顶&nbsp; '

	if (s6=="none") s6 = ""
	else s6 += '系统公告&nbsp; '

	if (s7=="none") s7 = ""
	else s7 += '附件&nbsp; '

	if (s8=="none") s8 = ""
	else s8 += '热门话题&nbsp; '

	if (s9=="none") s9 = ""
	else s9 += '自选&nbsp; '

	if (s10=="none") s10 = ""
	else s10 += '锁定&nbsp; '

	if (s11=="none") s11 = ""
	else s11 += '受保护&nbsp; '

	if (s12=="none") s12 = ""
	else s12 += '魔法帖&nbsp; '
	
	return '<center>'+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+'</center>'
}//__GetTieState

//获得默认模式帖子状态图例数据
function __GetTieState2(){
	var s1 = _GetMYBBSValue("tieState.cTie",'<img border="0" src="/qq/club/images/bbsnew/folder.gif" align=absmiddle>') //开放主题
	var s2 = _GetMYBBSValue("tieState.hotTie",'<IMG src="/qq/club/images/bbsnew/hotfolder.gif" border=0 align=absmiddle>') //热门帖子
	var s3 = _GetMYBBSValue("tieState.jTie",'<IMG src="/qq/club/images/bbsnew/jinghua.gif" border=0 align=absmiddle>') //精华贴
	var s4 = _GetMYBBSValue("tieState.top3",'<IMG src="/qq/club/images/bbsnew/istop.gif" align=absmiddle>') //置顶 
	var s5 = _GetMYBBSValue("tieState.top2",'<img border="0" src="/qq/club/images/bbsnew/ztop1.gif" align=absmiddle>') //总置顶 
	var s6 = _GetMYBBSValue("tieState.top1",'<img border="0" src="/qq/club/images/bbsnew/ztop.gif" align=absmiddle>') //系统公告

	var s7 = _GetMYBBSValue("tieState.fTie",'<img border="0" src="/qq/club/images/bbsnew/fujian.gif" align=absmiddle>') //附件
	var s8 = _GetMYBBSValue("tieState.hotTopic",'<img border="0" src="/qq/club/images/bbsnew/hotfolder.gif" align=absmiddle>') //热门话题
	var s9 = _GetMYBBSValue("tieState.zixuanTie",'<img border="0" src="/qq/club/images/bbsnew/isbest.gif" align=absmiddle>') //自选
	var s10 = _GetMYBBSValue("tieState.replyTie",'<img border="0" src="/qq/club/images/bbsnew/lockfolder.gif" align=absmiddle>') //是否允许跟贴
	var s11 = _GetMYBBSValue("tieState.protectTie",'<img border="0" src="/qq/club/images/bbsnew/baohu.gif" align=absmiddle>') //是否需要条件
	var s12 = _GetMYBBSValue("tieState.magicTie",'<img border="0" src="/qq/club/images/bbsnew/mofa.gif" align=absmiddle>') //是否魔法

	if (s1=="none") s1 = ""
	else s1 += '开放主题&nbsp; '
	
	if (s2=="none") s2 = ""
	else s2 += '热门帖子&nbsp; '

	if (s3=="none") s3 = ""
	else s3 += '精华贴&nbsp; '

	if (s4=="none") s4 = ""
	else s4 += '置顶&nbsp; '

	if (s5=="none") s5 = ""
	else s5 += '总置顶&nbsp; '

	if (s6=="none") s6 = ""
	else s6 += '系统公告&nbsp; '

	if (s7=="none") s7 = ""
	else s7 += '附件&nbsp; '

	if (s8=="none") s8 = ""
	else s8 += '热门话题&nbsp; '

	if (s9=="none") s9 = ""
	else s9 += '自选&nbsp; '

	if (s10=="none") s10 = ""
	else s10 += '锁定&nbsp; '

	if (s11=="none") s11 = ""
	else s11 += '受保护&nbsp; '

	if (s12=="none") s12 = ""
	else s12 += '魔法帖&nbsp; '
	
	return '<center>'+s4+s5+s6+s3+s7+s8+s9+s10+s11+s12+'</center>'
}//__GetTieState2

//输出帖子状态
function _ShowTieState(){
	if (_GetMYBBSValue("tieState.hide",false)) return
	_W(__GetTieState())
}//_ShowTieState

//输出默认模式帖子状态
function _ShowDefaultTieStateGraph(){
	if (_GetMYBBSValue("tieState.hide",false)) return
	_W('<table width=100% class="default-table default-tiestate"><tr><td>'+__GetTieState2()+'</td></tr></table>')
}//_ShowDefaultTieState

//获得友情连接数据
function __GetTextLink(){
	var strtextlink = "";
	if (self._MYBBS && _MYBBS.textlink){
		for (var i=0; i < _MYBBS.textlink.length ; i++)
		{
			strtextlink += '<a href="'+_MYBBS.textlink[i][0]+'" title="'+_MYBBS.textlink[i][2]+'" target=_blank>'+_MYBBS.textlink[i][1]+'</a> '
		}//for
	}
	return strtextlink
}

//获得友情连接数据
function __GetLogoLink(){
	var strLogoLink = "";
	if (self._MYBBS && _MYBBS.logolink){
		for (var i=0; i < _MYBBS.logolink.length ; i++)
		{
			strLogoLink += '<a href="'+_MYBBS.logolink[i][0]+'" title="'+_MYBBS.logolink[i][2]+'" target=_blank><img alt="'+_MYBBS.logolink[i][2]+'" src="'+_MYBBS.logolink[i][1]+'" border=0></a> '
		}//for
	}
	return strLogoLink
}


//输出友情连接
function _ShowSheQuLink(){ //社区模式的友情连接
	var strLogoLink = __GetLogoLink()
	var strtextlink = __GetTextLink()
	
	if (strLogoLink) _W(strLogoLink)
	if (strtextlink) _W("<hr size=1 noshade>"+strtextlink)
}//_ShowSheQuLink

//输出默认模式友情连接
function _ShowDefaultLink(){ //输出默认模式友情连接
	if (!self._MYBBS || !_MYBBS.showlink) return
	var strLogoLink = __GetLogoLink()
	var strtextlink = __GetTextLink()
	var s = ""	
	if (strLogoLink) s += strLogoLink
	if (strtextlink) s += "<hr size=1 noshade>"+strtextlink
	_W('<table width=100% class="default-table default-link"><tr><td> 友情连接 </td></tr><tr><td>'+s+'</td></tr></table>')
}//_ShowDefaultLink

//下拉菜单主题分类列表
function _luntanfenlei(){
var strFenlei = '<select class="select" name=f><option value="" selected=on>';
if (self._MYBBS)
{
	if (_MYBBS.FenLeiAry){
		for (var p in _MYBBS.FenLeiAry)
		{
			strFenlei += "<option value='"+p+"'>"+_MYBBS.FenLeiAry[p]+"</option>";
		}
	}
}
strFenlei += "</select>";
//alert(strFenlei)
return(strFenlei);
}

function _fast10_validFastHui(theForm) //回帖验证
{
if(theForm.subject.value.length == 0) 
{
alert("主题必须填写")
theForm.subject.focus()
return false
}
if (self._MYBBS && _MYBBS.targetNew) theForm.autogo.value = "refreshopener"
return true
}

//看贴
function _View(id,j,target){
  if (j!=1) j=0;
  var link="v.aspx?j="+j+"&id="+id;
  if (target==null) location=link
  	else window.open(link,target)
}

function _DisOnlineUsr(oDom)
{
	var rootNodes=oDom.XMLDocument.childNodes.item(1).childNodes
	var s="<table style='border-collapse:collapse;' width='100%'>",logname;
	var guoke = niming = huiyuan = col = 0;
	for (var i=0;i<rootNodes.length;i++)
	{
	   	switch (logname=rootNodes.item(i).getAttribute("logname"))
	   	{
	   		case "n":
	   			guoke++;
	   			addOnline("<img src='/qq/img/fast/fast9/guoke.gif' border='0'>　客人");
	   			break;
	   		case "":
	   			niming++;
	   			addOnline("<img src='/qq/img/fast/fast9/yinshen.gif' border='0'>　隐身会员");
	   			break
	   		default:
	   			huiyuan++;
	   			var strImg = "";
	   			strImg = "/qq/img/fast/fast9/huiyuan.gif";
	   			addOnline("<img src='"+strImg+"' border='0'>　<a target=_self href=javascript:usrinfo('"
	   				+logname+"')>"+rootNodes.item(i).getAttribute("name")+"</a> ");
	   	}
	 }
	if(col != 0)
	{
		s += "<td colspan="+ parseInt(6 - col) + "></td></tr></table>";
	}
	else{
		s += "</table>";
	}
	span_onlineInfo.innerText = "总在线"+rootNodes.length+"人，其中 "+huiyuan+" 位注册会员、 "+guoke+" 位客人与 "+niming+" 位隐身会员";
	oDom.insertAdjacentHTML("beforebegin",s+"</table>")

	function addOnline(strText)
	{
		col++;
		switch(col)
		{
			case 1:
				s += "<tr><td width='170'>"+strText+"</td>";
				break;
			case 6:
				s += "<td width='170'>"+strText+"</td></tr>";
				col = 0;
				break;
			default:
				s+= "<td width='170'>"+strText+"</td>";
		}
	}
}

function _Fast11_ValidLogin(theForm){
 if (theForm.logname.value=="") return false;
 if (theForm.passwd.value=="") return false;
 if (QueryString.autogo) theForm.autogo.value=QueryString.autogo
 return true

}

function _SetGoogleADStyle(){ //设置Google广告风格
	if (!self._MYBBS) return
	if (!_MYBBS.bbsid) return
	var strStyle = ""
	var border, bg, link
	if (_MYBBS.css){ //使用系统风格
		if (_MYBBS.css == "self") 
			if (_MYBBS.basestyle) strStyle = _MYBBS.basestyle
		else {		
			strStyle = _MYBBS.css
		}
	} else if (_MYBBS.defaultcss) { //使用自定义风格，当前版面
		strStyle = _MYBBS.defaultcss
	}
	switch (strStyle)
	{
		case "fast10_zzhx":
		case "fast10_zzhx_small":
			border = "E4E8EF"
			bg = "EFFAF9"
			link = "00626E"
			break
		case "fast10_hasl":
		case "fast10_hasl_small":
			border = "888888"
			bg = "aaaaaa"
			link = "A42C01"
			break
		case "fast10_lshy":
		case "fast10_lshy_small":
			border = "6687BA"
			bg = "E4E8EF"
			link = "00626E"
			break
		case "fast10_yzsg":
		case "fast10_yzsg_small":
			border = "EFEFEF"
			bg = "ffffff"
			link = "B2B3B5"
			break
		case "fast10_qqzy":
		case "fast10_qqzy_small":
			border = "84BA34"
			bg = "FBFFF7"
			link = "006600"
			break
		case "fast10_lssl":
		case "fast10_lssl_small":
			border = "009999"
			bg = "E8F7F7"
			link = "016D01"
			break
		case "fast10_hfjr":
		case "fast10_hfjr_small":
			border = "FC8EA4"
			bg = "FFECEF"
			link = "B20000"
			break
		case "fast10_xcfd":
		case "fast10_xcfd_small":
			border = "FF6600"
			bg = "ffffff"
			link = "B20000"
			break
		case "fast10_zsmh":
		case "fast10_zsmh_small":
			border = "D9C4F4"
			bg = "F9F4F9"
			link = "816D5B"
			break
		case "fast10_smnl":
		case "fast10_smnl_small":
			border = "A67025"
			bg = "ffffff"
			link = "D62913"
			break
		default:
			border = "6687BA"
			bg = "ffffff"
			link = "00626E"
			break
	
	}
	google_color_border=border
	google_color_bg =bg
	google_color_link =link
}//_SetGoogleADStyle

function _SloginInfo(a){ //判断登陆

if (a==null) return
switch (a.bz) {
case "NotLogin": //not login
	if (window.qqgreet) qqgreet.innerHTML="<span class=usrname>"+a.name+"</span> 欢迎您！&nbsp;&nbsp;"
	loginForm.logname.value=a.logname
	if (a.haveExpress) _ExpressTiXing(false)
	break;
case "UnkownUID"://no name
      	if (window.qqgreet) qqgreet.innerHTML="欢迎您新朋友！&nbsp;请马上注册&nbsp;"
	break;
case "AutoLogin"://auto login
	if (window.qqgreet)qqgreet.innerHTML="<span class=usrname>"+a.name+"</span> 欢迎您！&nbsp;您已经自动登陆了&nbsp;<a href=/cgi-bin/myqq/ target=_blank>[我的QQ]</a>"
	loginForm.style.display="none";
	if (a.haveExpress) _ExpressTiXing(true)
	break;      
case "NewUID"://new friend
	if (window.qqgreet)qqgreet.innerHTML="欢迎您新朋友！&nbsp;请马上注册&nbsp;"
    	break;
case "Logined": //login
	if (window.qqgreet)qqgreet.innerHTML="<span class=usrname>"+a.name+"</span> 欢迎您！&nbsp;您已经登陆了&nbsp;<a href=/cgi-bin/myqq/ target=_blank>[我的QQ]</a>"
	loginForm.style.display="none";
	if (a.haveExpress) _ExpressTiXing(true)
}//switch
}

function _ExpressTiXing(flag){
	if (flag) {
		newin("/qq/myqq/express/index.html",null,682,470);
	} else {
		newin("/qq/myqq/express/express.html",null,682,470);
	}
}

function _QQBBSFeedBack(){
	open('/cgi-bin/sys/bbsadmin/maintance/bbsfeedback.aspx?id=0x'+_GetMYBBSValue("lunquid",0).toString(16))
}//_QQBBSFeedBack

function _GetDaohangMenuA(name){ //导航菜单上的每一个连接
	if (/.+_linkset$/gi.test(name)) return "<script>_QQmylink('"+name.replace(/_linkset$/gi,"")+"')</"+"script>"
	switch (name)
	{
	case "login" : return '<a target=_self href=javascript:Login("/qq/myqq/putintomenu.htm") title="登陆后发贴不用填写密码">登陆</a>/<a href="javascript:_JREG()" target=_self>注册</a>'
	case "myqq"  : return '<a href=/cgi-bin/myqq/ onmouseover=_ShowTabMenu(_menuUsrinfo) onmouseout=_HideMenu() target=_blank>我的QQ</a>'
	case "style"  : return '<a onmouseover=_ShowTabMenu(_menuStyle) onmouseout=_HideMenu() href=# target=_self>自选风格</a>'
	case "tag"  : return '<a onmouseover=_ShowTabMenu(_ListAryTag(3)) onmouseout=_HideMenu() href=# target=_self>标签</a>'
	case "map"  : return '<a href="/cgi-bin/" onmouseover=_ShowTabMenu(_menuQQSY) onmouseout=_HideMenu() target=_blank>QQ地图</a>'
	case "sys"  : return '<a href="javascript:_GoSys()" target="_self">系统界面</a>'
	case "admin"  : return '<a href="javascript:_GoBBSAdmin()" onmouseover=_ShowTabMenu(_menuBBSAdmin) onmouseout=_HideMenu() target="_self">斑竹管理</a>'
	case "buluoqun"  : return _GetBuLuoMenu()
	case "big5"  : return '<SCRIPT>_GoBig5()<'+'/SCRIPT>'
	case "paiming": return '<a href="javascript:_GoPaiMing()" target="_self">排名</a>'
	case "shoucang":return '<a onmouseover=_ShowTabMenu(_menubm) onmouseout=_HideMenu() href="javascript:_bmmybbs()" title="收藏'+_GetMybbsHome()+'" target="_self"><b style="color:Red">收藏</b></a>'
	default : return "默认"
	}
}//_GetDaohangMenuA


function _GetBuLuoMenu(){
_menuBuoLuo='<nobr><a href="javascript:_GoBuluoQun()" target="_self">部落群</a></nobr>'
	var oid=_GetMYBBSValue("oid")
	var s
	if (oid){
		s=' target=_blank href=/cgi-bin/club/groups/join.aspx?oid='+oid+'><b>加入部落</b></a>'
		_menuBuoLuo+='<BR><nobr><a'+s+'</nobr>'
		
	}else{
		s= ' title="申请一个部落并和当前论坛绑顶" target=_blank href=/cgi-bin/club/groups/register.aspx?lunquid='+_GetMYBBSValue("lunquid")+'><b>绑顶部落</b></a>'
		_menuBuoLuo+='<BR><nobr><a'+s+'</nobr>'
	}
	return "<a onmouseover=_ShowTabMenu(_menuBuoLuo) onmouseout=_HideMenu()"+s
}

function _GoBuluoQun(){
if (!self._MYBBS) return
if (_MYBBS.fenlei)
	open('/cgi-bin/club/clublist.aspx?id=0x'+_MYBBS.fenlei.toString(16))
else
	open('/cgi-bin/club/')
}

function _GoPaiMing(){
if (!self._MYBBS) open('http://www.5ilog.com/cgi-bin/club/100mybbs.aspx?id=0')
else
open('/cgi-bin/sys/bbsadmin/info/info.aspx?id=0x'+_MYBBS.lunquid.toString(16))
}
function _GoSys(){
if (!self._MYBBS) return
open('/cgi-bin/sys/link/sysluntan.aspx?id=0x'+_MYBBS.lunquid.toString(16))
}

function _GoBBSAdmin(type){
if (!self._MYBBS) return
var id=(_MYBBS.rootid?_MYBBS.rootid:_MYBBS.lunquid).toString(16)
if (!type) open('/cgi-bin/sys/bbsadmin/?id=0x'+id)

if (_MYBBS.sublunquid) id=_MYBBS.sublunquid.toString(16)
switch(type){
	case "BMGG":open('/cgi-bin/sys/bbsadmin/gonggao.aspx?id=0x'+id);break
	case "TZGL":open('/cgi-bin/sys/bbsadmin/frame.aspx?act=tieziadmin&id=0x'+id);break
	case "BZRM":open('/cgi-bin/sys/bbsadmin/fubanzhu.aspx?id=0x'+id);break
	case "QXGL":open('/cgi-bin/sys/bbsadmin/quan.aspx?id=0x'+id);break
	default:
}

}

function _bmmybbs(){
bookmarkit(_GetMybbsHome(),_GetMYBBSValue("lunqusubject"))
}
function _copymybbslink(){
window.clipboardData.setData("Text",_GetMybbsHome());
alert('现在可以使用键盘 ctrl+v 将该连接复制到其他地方')
}