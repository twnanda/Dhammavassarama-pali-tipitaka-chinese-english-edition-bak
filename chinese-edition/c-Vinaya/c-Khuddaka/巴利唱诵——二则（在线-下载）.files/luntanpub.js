function _PostNew() //������
{
	open("mybbs_new.aspx?id="+_MYBBS.lunquid);
}

function _GoChatRoom() //������
{
	chatRoom(_MYBBS.lunquid,_MYBBS.lunqusubject);
}

function _GoQQLink() //QQLink
{
	_QQLink("L",_MYBBS.lunquid);
}

function _GoImglib() //��ͼ��
{
	open("/imgl/"+_MYBBS.lunquid);
}

function _GoPainting() //��̳����
{
	open("/cgi-bin/bbs/sys/lunqu_newpaint.asp?id="+_MYBBS.lunquid);
}

function _GoPostImg() //��̳��ͼ
{
	open("/cgi-bin/bbs/sys/lunqu_newimg.asp?id="+_MYBBS.lunquid);
}

function _ShowPrime() //����
{
	if (QueryString.j == "1")
	{
		document.write("<a href='"+_GetUrl({pName:"j",v:0})+"' title='����ͨ'>"+((self._lanPackage)?_lanPackage.common:"��ͨ")+"</a>");
		return;
	}
	else
	{
		document.write("<a href='"+_GetUrl({pName:"j",v:1})+"' title='������'>"+((self._lanPackage)?_lanPackage.prime:"����")+"</a>");
		return;
	}
}

function _ShowTaxis() //��������
{
	if (!QueryString.type) QueryString.type = 1;
	if (QueryString.type&1) //Ŀǰ�ǻ�����ǰ
	{
		document.write("<a href='"+_GetUrl({pName:"type",v:(QueryString.type^1)})+"' title='��������'>"+((self._lanPackage)?_lanPackage.mainTaxis:"��������")+"</a>");
	}
	else 
	{
		document.write("<a href='"+_GetUrl({pName:"type",v:(QueryString.type|1)})+"' title='������ǰ'>"+((self._lanPackage)?_lanPackage.replayTaxis:"������ǰ")+"</a>");
	}
}

function _ShowOldest() //�������
{
	if (QueryString.type&2) //Ŀǰ�����
	{
		document.write("<a href='"+_GetUrl({pName:"type",v:(QueryString.type^2)})+"' title='����'>"+((self._lanPackage)?_lanPackage.latest:"����")+"</a>");
	}
	else //���
	{
		document.write("<a href='"+_GetUrl({pName:"type",v:(QueryString.type|2)})+"' title='���'>"+((self._lanPackage)?_lanPackage.oldest:"���")+"</a>");
	}
}

function _GoBig5() //����ת��
{
	document.write(	'<a target=_self href=javascript:GBIG5()>'
	,((document.location.port==81)?((self._lanPackage)?_lanPackage.gb:"����"):((self._lanPackage)?_lanPackage.big5:"����"))
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

function _GetUrl(o) //o.pName,o.v �ѵ�ַ�ж�Ӧ�Ĳ���������ֵ�����û�оͼ���
{
	var strSearch = location.search;
	var strL = location.toString();
	if(strSearch) //������в���
	{
		var myReg = new RegExp(o.pName+"=");
		if (myReg.test(strSearch)) //�Ѿ��������Ĳ���
		{
			myReg = new RegExp("&"+o.pName+"=.*&");
			if (myReg.test(strSearch)) //�������滹�в���
			{
				strL = strL.replace(myReg,"&"+o.pName+"="+o.v+"&");
				return strL;
			}
			else //���������λ��
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
 * �����û���Ϣ
 * param:	o �û���Ϣ����
 * return:	��ʾ�û���Ϣ�ַ���
 */
function _QQUsrInfo(o)
{
	var strRe = ""
	if (o.face) strRe += o.face+"<br>"
	strRe += _GetUsrOnlineHTML(o.onlinetype)+'<a href="javascript:usrinfo(\''+o.logname+'\')" target="_self">'+o.name+'</a>'
	if (o.otherbz&4)
		strRe +="<a target=_self href=javascript:_sendsms('"+o.logname+"')><img title='VIP�û��������Ÿ��Է�'src=/qq/img/dot/icon_sms.gif border=0></a>"
	strRe +="<BR>"
	
	strRe += "��"+(o.xingbie=="f"?"Ů":"��")

	strRe += ' <a title="�鿴�û�������Ȧ" target=_self href=javascript:_Quan("'+o.logname+'")><<����Ȧ>></a>'
	strRe += " <a href='/cgi-bin/myqq/zuji/zuji.aspx?logname="+o.logname+"' target=_blank><<�㼣>></a><BR>"
	
	if (o.chenghao) strRe += "ͷ�Σ�"+o.chenghao+"<br>"
	else {
		if (self._MYBBS&&_MYBBS.oid)
			strRe += "<font color=red>δ���벿��</font> <a target=_blank href=/cgi-bin/club/groups/join.aspx?oid="+_MYBBS.oid+">���̼���>></a><br>"
	}
	strRe += '<a title="ʲô�Ǳ�ǩ�������Լ��ı�ǩ" target=_blank href=/cgi-bin/myqq/update_a.aspx#tag>��ǩ'
	if (o.tag) strRe += '</a>��<span class="usr-tag">'+ _ListUsrTags(o.tag)+'</span><br>'
		else strRe += '�������Լ��ı�ǩ</a><BR>'
		


	if (o.SP) strRe += '������'+GetSPChengHao(o.SP)+'<img src="/qq/img/jifen/SP'+o.SP+'.gif"><br>'
	else strRe += "������<a target=_blank href=/cgi-bin/club/magic/magic.aspx?did=2001&tid="+o.uid+">???</a><br>"

	if (o.EP) strRe += '���飺'+GetEPChengHao(o.EP)+'<br><img src="/qq/img/jifen/EP'+o.EP+'.gif"><br>'
	else strRe += "���飺<a target=_blank href=/cgi-bin/club/magic/magic.aspx?did=2000&tid="+o.uid+">???</a><br>"

	if (o.QP) strRe += 'QP��'+GetQPChengHao(o.QP)+'<img src="/qq/img/jifen/QP'+o.QP+'.gif"><br>'
	else strRe += "QP��<a target=_blank href=/cgi-bin/club/magic/magic.aspx?did=2002&tid="+o.uid+">???</a><br>"
	
		
	strRe += "<BR><a href='/cgi-bin/sys/link/Home.aspx?logname="+o.logname+"&maintype=quanji' target=_blank>�ļ�:"+o.tieN+"</a> "
	if (o.zixuanN) strRe += "<a href='/cgi-bin/sys/link/Home.aspx?logname="+o.logname+"&maintype=zixuanji' target=_blank>��ѡ��:"+o.zixuanN+"</a> "
	if (o.toupiaoN) strRe += "<a href='/cgi-bin/sys/link/Home.aspx?logname="+o.logname+"&maintype=toupiaoji' target=_blank>ͶƱ��:"+o.toupiaoN+"</a>"
	strRe+="<br>"
	if (o.qlogid) strRe += "<a href='/log/"+o.logname+"' target=_blank>QQLog</a> "
	if (o.imglibid) strRe += "<a href='/imgu/"+o.logname+"' target=_blank>ͼ��</a> "
		
	strRe += "<BR><BR><nobr>ע������:"+o.regrq+"</nobr><br>"
	strRe += "<nobr>����½:"+o.lastlogin+"</nobr><br>"

	return strRe
}//_QQUsrInfo

function GetEPChengHao(ep)
{
	//��1��ʼ
	var arr = new Array("","����é®","��ѧ����","�Կ��ž�","��������","������·","����С��","�������","�������","��������","¯����","��豹���")
	
	return arr[ep]
}

function GetQPChengHao(qp)
{
	var arr = new Array("��ծ����","��ծ����","С�п���","�޾�����","ʡ�Լ���","�Ը�����","���л���","��ʵ֮��","�Ҳ����")
	
	return arr[qp]
}

function GetSPChengHao(sp)
{
	var arr = new Array("����Զ��","�޶���","С�ж���","��ΪǷ��","ĬĬ����","ĬĬ����","С������","��������","ʯ���쾪","��������")
	
	return arr[sp+1]
}

/**
 * ���ܣ����������б�һ�У��
 * @param: o ���Ӷ��󣬰���������Ϣ������������������Ϣ
 * @return: �����б�һ�е�HTML
 */
function _QQTieListItem(o)
{
	var strRe = '<tr><td class="fast10-colDeepBg fast10-postState">'
	strRe += _QQTopicState(o.bz, o.huiN) //����״̬
	strRe += '</td><td width="64%" class="fast10-colLightBg fast10-postSubject">'

	strRe += '<span tid='+o.id+'></span>' //չ������Ҫ�õ�
	if (o.huiN == 0)
		strRe += '<img src=/qq/img/fast/fast2/nofollow.gif>' //û�лظ��������ʾ��ͼƬ
	else
		strRe += '<img class=mainhavehui style="cursor:hand" tid="" onclick="DisTreeNew(this,this.previousSibling.tid,\'v.aspx\')" src=/qq/img/fast/fast2/plus.gif>' //�лظ����

	strRe += _QQTopicInfo(o) //������Ϣ
	strRe += " "+_QQTopicPageList(o.id, o.huiN, (self._MYBBS&&_MYBBS.viewtiecount)?_MYBBS.viewtiecount:20) //������ҳ�б�
	strRe += '</td><td class="fast10-colDeepBg fast10-postAuthor">'
		+_GetUsrLink(o.logname, o.name,o.bz)
		+'</td> <td width="10%" class="fast10-colLightBg fast10-postHuiHit">'+o.huiN+'/'+o.hit+'</td> <td width="17%" class="fast10-colDeepBg fast10-postUpdate"><nobr>'
		
	//if (o.huiN == 0) //���»ظ�
	if (!o.hrq) //�޻ظ�
		strRe += '<a href="v.aspx?id='+o.id+'" title="���⣺'+o.subject+'&#10;���ߣ�'+o.name+'">'+o.rq.replace(/:00$/gi, "")+'</a>'+
			'<span class=treetable-pipe>|</span>'+_GetUsrLink(o.logname, o.name,o.bz)	
	else //���»ظ�
		strRe += '<a href="v.aspx?id='+o.hid+'" title="���⣺'+o.hsubject+'&#10;���ߣ�'+o.hname+'">'+o.hrq.replace(/:00$/gi, "")+'</a>'+
			'<span class=treetable-pipe>|</span>'+_GetUsrLink(o.hlogname, o.hname)		
	strRe += '</nobr></td> </tr>'
	return strRe + '<tr style="display:none"><td width="100%" colspan="5" class="fast10-colLightBg"></td></tr>'
	
}//_QQTieListItem

/**
 * ���ܣ����������б�һ�У�������Ӽ����Ľ��
 * @param: o ���Ӷ��󣬰���������Ϣ������������������Ϣ
 * @return: �����б�һ�е�HTML
 */
function _QQSearchTieListItem(o)
{
	var strRe = '<tr><td class="fast10-colDeepBg fast10-postState">'
	strRe += _QQTopicState(o.bz, o.huiN) //����״̬
	strRe += '</td><td width="64%" class="fast10-colLightBg fast10-postSubject">'

	strRe += _QQTopicInfo(o, "v.aspx") //������Ϣ
	//strRe += " "+_QQTopicPageList(o.id, o.huiN, (self._MYBBS&&_MYBBS.viewtiecount)?_MYBBS.viewtiecount:20) //������ҳ�б�

	strRe += '</td><td class="fast10-colDeepBg fast10-postAuthor"><nobr>'+_GetUsrLink(o.logname, o.name,o.bz)+'</nobr></td>'
	strRe += '<td class="fast10-colLightBg fast10-postAuthor"><nobr>'+o.rq.replace(/:00$/gi, "")+'</nobr></td>' //ʱ��
	strRe += '<td class="fast10-colDeepBg fast10-postAuthor"><span'+(o.l==0?' class="treetable-pipe"':"")+'>'+o.l+'</span>�ֽ�</td>' //����
	strRe += '<td class="fast10-colLightBg fast10-postAuthor">'+o.vote+'/'+o.hit+'</td>'
	strRe += '<td class="fast10-colDeepBg fast10-postAuthor"><nobr>'  //���� 
	if (o.father < 0) //����
		strRe += '<a href="v_all.aspx?id='+o.id+'">'+o.huiN+'����</a>'
	else //���»ظ�
		strRe += '<a href="v_all.aspx?id='+o.id+'">������</a>'		
	strRe += '</nobr></td> </tr>'
	return strRe + '<tr style="display:none"><td width="100%" colspan="5" class="fast10-colLightBg"></td></tr>'
	
}//_QQSearchTieListItem

/**
 * ���ܣ�����������Ϣ���������顢״̬�����⡢���¡���ҳ����
 * @param: o ���Ӷ��󣬰���������Ϣ������������������Ϣ
 * @return: ����������Ϣhtml
 */
function _QQTopicInfo(o, vUrl)
{
	if (!vUrl) vUrl = "v_all.aspx"
	var target = _GetStateBZ(o.bz)==3?" target=_blank":""//�������target
	//alert("o.bz="+o.bz)
	var strRe = ""
	strRe += _QQ_BQ_HTML(_GetBQBZ(o.bz)) //���ӱ���
	if (self._MYBBS && _MYBBS.FenLeiAry) { //���ӷ���
		var fenlei = _GetFenleiBZ(o.bz)
		if (_MYBBS.FenLeiAry.length > fenlei) strRe += "<span class=s-tree-fenlei>"+_MYBBS.FenLeiAry[fenlei]+"</span>" //���ӷ���
	}
	strRe += ' <a'+target+' class=s-tree-main-subject href='+vUrl+'?j='+(QueryString.j==1?"1":"0")+'&id='+o.id+'>'+o.subject+'</a>' //��������
	//�Ƿ�blog��
	if (o.blogid) strRe += ' <a href="/cgi-bin/sys/link/qlog.aspx?lunquid='+o.blogid+'" class="isblogtie">Blog</a>'
	//strRe += ' [<span class=treetable-pipe>'+o.l+'</span>byte]'
	if (o.lunqusubject) strRe += ' <a href="mybbs.aspx?id='+o.lunquid+'"><span class=s-tree-sublunqu>'+o.lunqusubject+'</span></a>' //�������ڷ�����������ǵ�ǰ��������û��
	//if (o.lunqusubject) strRe += ' <a href="/cgi-bin/sys/link/luntan.aspx?id='+o.lunquid+'"><span class=s-tree-sublunqu>'+o.lunqusubject+'</span></a>' //�������ڷ�����������ǵ�ǰ��������û��

	//����ԭ�Ⱥ���
	var tmpW=self._W
	//ʹ���º���
	self._W=function(s){_tmpHTML+=s}
	
	_tmpHTML=""
	_QQ_new(o.rq,o.id)
	strRe+=_tmpHTML

	//�ָ���ǰ��
	self._W=tmpW
				
	return strRe
}//_QQTopicInfo

/**
 * ���ܣ���ҳ��������
 * @param: id ����id�� huiN ��������pageCount ÿҳ��¼��
 * @return: ��ҳ����HTML
 */
function _QQTopicPageList(id, huiN, pageCount)
{
	var pages = Math.ceil(huiN/pageCount)
	if (pages < 2) return "";
	var j = '&j='+(QueryString.j==1?"1":"0")
	if (pages > 10) //ֻȡǰ��5ҳ
	return '[<img src=/qq/img/dot/pagelist.gif> <a href="v_all.aspx?id='+id+'&page=0'+j+'" title="�鿴��ҳ"><span class=treetable-pagelist>1</span></a> <a title="�鿴��ҳ" href="v_all.aspx?id='+id+'&page=1'+j+'"><span class=treetable-pagelist>2</span></a> <a title="�鿴��ҳ" href="v_all.aspx?id='+id+'&page=2'+j+'"><span class=treetable-pagelist>3</span></a> <a href="v_all.aspx?id='+id+'&page=3'+j+'"><span class=treetable-pagelist>4</span></a> <a title="�鿴��ҳ" href="v_all.aspx?id='+id+'&page=4'+j+'"><span class=treetable-pagelist>5</span></a>...<a href="v_all.aspx?id='+id+'&page=1'+j+'"><span class=treetable-pagelist>'+(pages-5)+'</span></a> <a title="�鿴��ҳ" href="v_all.aspx?id='+id+'&page=1'+j+'"><span class=treetable-pagelist>'+(pages-4)+'</span></a> <a title="�鿴��ҳ" href="v_all.aspx?id='+id+'&page=1'+j+'"><span class=treetable-pagelist>'+(pages-3)+'</span></a> <a title="�鿴��ҳ" href="v_all.aspx?id='+id+'&page=1'+j+'"><span class=treetable-pagelist>'+(pages-2)+'</span></a> <a title="�鿴��ҳ" href="v_all.aspx?id='+id+'&page=1'+j+'"><span class=treetable-pagelist>'+(pages-1)+'</span></a>  ]'
	var strRe = ""
	for (var i=0; i < pages ; i++)
	{
		strRe += ' <a title="�鿴��ҳ" href="v_all.aspx?id='+id+'&page='+i+''+j+'"><span class=treetable-pagelist>'+(i+1)+'</span></a>'
	}
	return "[<img src=/qq/img/dot/pagelist.gif> "+strRe.substring(1)+" ]";
}//_QQTopictreetable-pagelist
//�ж�����״̬
function _QQTopicState(bzall, huiN)
{
	var bz=_GetStateBZ(bzall)
	if (bz==3) return _GetMYBBSValue("tieState.top1","<img src=/qq/club/images/bbsnew/ztop.gif alt='ϵͳͨ��'>").replace("none","") //"ϵͳͨ��"
	if (bz==2) return _GetMYBBSValue("tieState.top2","<img src=/qq/club/images/bbsnew/ztop1.gif alt='��̳�ö�'>").replace("none","")  //"��̳�ö�"
	if (bz==1) return _GetMYBBSValue("tieState.top3","<img src=/qq/club/images/bbsnew/istop.gif alt='����ö�'>").replace("none","")  //"����ö�"
	if (_GetZiXuanBZ(bzall)) return _GetMYBBSValue("tieState.zixuanTie","<img src=/qq/club/images/bbsnew/isbest.gif alt='��ѡ'>").replace("none","")  //��ѡ
	if (_GetJinghuaBZ(bzall)) return _GetMYBBSValue("tieState.jTie","<img src=/qq/club/images/bbsnew/jinghua.gif alt='��ѡ��'>").replace("none","")  //"��ѡ��"
	if (_GetProtectBZ(bzall)) return _GetMYBBSValue("tieState.protectTie","<img src=/qq/club/images/bbsnew/baohu.gif alt='�����ܱ���'>").replace("none","")   //�Ƿ���Ҫ����
	if (_GetMagicBZ(bzall)) return _GetMYBBSValue("tieState.magicTie","<img src=/qq/club/images/bbsnew/mofa.gif alt='ħ����'>").replace("none","")   //�Ƿ�ħ��
	if (_GetFuJianBZ(bzall)) return _GetMYBBSValue("tieState.fTie","<img src=/qq/club/images/bbsnew/fujian.gif alt='�и���'>").replace("none","")   //�и���
	if (_GetReplyBZ(bzall)) return _GetMYBBSValue("tieState.replyTie","<img src=/qq/club/images/bbsnew/lockfolder.gif alt='�������'>").replace("none","")   //�Ƿ��������
	if (huiN < 10) return _GetMYBBSValue("tieState.cTie","<img src=/qq/club/images/bbsnew/folder.gif alt='һ������'>").replace("none","")  //"һ������"
	return _GetMYBBSValue("tieState.hotTie","<img src=/qq/club/images/bbsnew/hotfolder.gif alt='��������'>").replace("none","")  //"��������"
}//_QQTopicState

function _GetUsrLink(logname, name,bz){	
	var s
	if (logname=="n")
		s='<span class=niming title="�����û�">'+name+'</span>'
	else s='<a href=javascript:usrinfo("'+logname+'") target=_self>'+name+'</a>'
	
	if (bz&4) return s+"<span class=zhuantie>ת</span>"
	return s

}

//vUrl: ��������
function GetReplays(id,vUrl)
{
	//private function
	this._GetTopiceObj = function (o) //�������Ӷ���oΪ���ӽڵ�
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
	Function: �ݹ鰴�����ʾ�����б�����ʾ����topic������ʾ�ֵ�topic, Function exits when id=0
	Input	: Topic id
	Output	: Topic list html
	//-----------------*/
	this._ListTopic = function (id)
	{
		//���Ϊ�����߲����ڣ�
		if ((id==0)||(!_ArrTopic[id])) return ""
	
		var strReHtml = "";
		if (_ArrTopic[id].father>0) strReHtml += "<li class=s-tree-hui>";
		else strReHtml += "<li class=s-tree-main>";
		//strReHtml += "<img src=/qq/img/fast/fast2/nofollow.gif>"
		

		//����ԭ�Ⱥ���
		var tmpW=self._W
		//ʹ���º���
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
		
		//�ָ���ǰ��
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
		strReHtml += "</span>"+(_ArrTopic[id].changdu=="0"?"<span style='color:red'>0</span>�ֽ�":_ArrTopic[id].changdu+"�ֽ�")
		strReHtml +="</span></li>";
		strReHtml += __this._ListTopicSon(_ArrTopic[id].son); //����ں��档
		strReHtml = __this._ListTopicBrother(_ArrTopic[id].brother) + strReHtml; //�����ǰ�档	
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
		this.manObject; //�������󣬱�������б�td
		var _ArrTopic = new Array(); //���Ӷ�������
		var __root = xmlDoc.selectSingleNode("root");
		var __this = this
		if (!__root) {return;	} //����
		//alert(id);
		//parse item into Array
		var _root = __root.firstChild; //�л�����һ���ڵ�
		if (!_root) {return;	} //����

		//�ҵ�����
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
		xmlDoc.async = true; //�첽��ȡ����
		xmlDoc.load("/cgi-bin/class/BBS/BBSXML.aspx?act=viewall"+j+"&a=0&id="+id);
		//prompt("","/cgi-bin/class/BBS/BBSXML.aspx?act=viewall"+j+"&a=0&id="+id)
		this.manObject; //�������󣬱�������б�td
		var __this = this;
		var _ArrTopic = new Array(); //���Ӷ�������	
		//xmlDoc.load("BBSXML.xml");
		//xmlDoc.ondataavailable = function()
		xmlDoc.onreadystatechange = function()
		{
			if (xmlDoc.readyState!=4) return;
			var __root = xmlDoc.selectSingleNode("root");
			if (!__root) {	return;	} //����
			//alert(id);
			//parse item into Array
			var _root = __root.firstChild; //�л�����һ���ڵ�
			if (!_root) {	return;	} //����
			
			//�ҵ�����
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

function GetLatestReply(id,vUrl,manobj){ //�����������
	if (QueryString.j && (QueryString.j==1)) var j = "&j=1";
	else var j = "&j=0";
	xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	xmlDoc.async = true; //�첽��ȡ����
	xmlDoc.load("/cgi-bin/class/BBS/BBSXML.aspx?act=viewall"+j+"&a=0&id="+id);
	//xmlDoc.load("http://192.168.0.47/cgi-bin/class/BBS/BBSXML.aspx?act=viewall&id=413373");
	this.manObject = manobj //�������󣬱�������б�td
	//this.manObject = rr
	var __this = this;
	var strRe = "", count = 4 //��ʾ����
	xmlDoc.onreadystatechange = function(){
		if (xmlDoc.readyState!=4) return;
		var root = xmlDoc.selectSingleNode("//root").lastChild
		if (!root) return  
		var i = 0
		while(root){	
			i++
			if (i > count) break
			if ((root.getAttribute("father").indexOf("-")==-1) && (root.getAttribute("id")!=id) ) strRe += '<li><a href="'+(vUrl?vUrl:"v.aspx")+'?id='+root.getAttribute("id")+'" title="'+root.getAttribute("subject")+'">'+root.getAttribute("subject").getLeftN(15)+'</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href=javascript:usrinfo("'+root.getAttribute("logname")+'") title="����鿴 '+root.getAttribute("name")+' �ĸ�����Ϣ" target=_self>'+root.getAttribute("name").getLeftN(6)+'</a> �����ڣ�'+root.getAttribute("rq")+'</li>'
			root = root.previousSibling
		}
		if (!strRe) return
		if (i>count) strRe += '<a href="javascript:;" onclick="DisTreeHui(this,huitreelist,'+id+',null,\'>>���չ��ȫ������\',\'>>�������ȫ������\')" target="_self">>>���չ��ȫ������</a> <a href="/cgi-bin/bbs/sys2/v_all.aspx?id='+id+'">���鿴ȫ�����ۡ�</a><br><div id=huitreelist style="display: none"></div>'
		__this.manObject.innerHTML = "<dl style='margin: 0px;'>"+strRe+"</dl>"
	}//ShowReplays
} //GetLatestReply
function GetLatestTB(id,manobj){ //�����������
	var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	xmlDoc.async = true; //�첽��ȡ����
	xmlDoc.load("/cgi-bin/class/BBS/BBSXML.aspx?act=TrackBackList&tid="+id);
	//xmlDoc.load("http://192.168.0.47/cgi-bin/class/BBS/BBSXML.aspx?act=viewall&id=413373");
	this.manObject = manobj //�������󣬱�������б�td
	//this.manObject = rr
	var __this = this;
	var strRe = "", count = 4 //��ʾ����
	xmlDoc.onreadystatechange = function(){
		if (xmlDoc.readyState!=4) return;
		var root = xmlDoc.selectSingleNode("//root").lastChild
		if (!root) return  
		var i = 0
		while(root){	
			i++
			if (i > count) break
			strRe += '<li><a href="'+root.getAttribute("url")+'" title="'+root.getAttribute("title")+'">'+root.getAttribute("title").getLeftN(15)+'</a> ���ԣ�'+root.getAttribute("blog_name")+' '+root.getAttribute("rq")+'</li>'
			root = root.previousSibling
		}
		if (!strRe) return
		if (i>count) strRe += '<a href="javascript:_TrackBack('+id+')" target=_self>>>��������</a><br><div id=huitreelist style="display: none"></div>'
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
	  e.firstChild.innerHTML = "<br/><center>����������...</center><br/>";
	  replaysHtmlObj.manObject = e.firstChild; //��ֵ��������
  }else{
      e.style.display="none"
      theImg.src="/qq/img/fast/fast2/plus.gif"
  }
}

function DisTreeHui(objSelf,o,id,sonid,closedtext,openedtext,vUrl){ 
	if (o.style.display == "none")
	{
		o.style.display = "block"
		objSelf.innerText = openedtext?openedtext:"���������"
	}
	else
	{
		o.style.display = "none"
		objSelf.innerText = closedtext?closedtext:"������"
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
	if (!self.xmlDoc) o.innerHTML = "<br/><center>����������...</center><br/>";
	replaysHtmlObj.manObject = o; //��ֵ��������
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
	//var strRe = _GetBoardLink(_lunquAry[0]); //��һ������
	if (_lunquAry.length==1) //ֻ�и�����
		if (needlink) return "<span class=location>"+_GetBoardLink2(_lunquAry[0], _GetHomeUrl)+"</span>";
		else return "<span class=location>"+_lunquAry[0][2]+"</span>" 
	var strHeadLocation = "<span class=location>"+_GetBoardLink(0, _GetHomeUrl);
	if (lastlunquid==_lunquAry[0][0]) return strHeadLocation+ "</span>";
	var position = _GetPosition(lastlunquid); //��ǰλ��

	if (needlink) var strRe = _GetBoardLink2(_lunquAry[position]);
	else var strRe = _lunquAry[position][2]; 

	var curDeapth = _lunquAry[position][1]; //��ǰ���
	for (var i=position-1; i > 0; i--)
	{
		if (_lunquAry[i][1] < curDeapth) //�ҵ������
		{
			curDeapth = _lunquAry[i][1]; //��ֵ��ǰ���
			strRe = _GetBoardLink(i,_lunquAry[i][3]=="Z"?_GetListUrl:_GetBoardUrl) + "<span class=locationArrow>&gt;</span>" + strRe; //���λ��
		}
	}//for
	return strHeadLocation + "<span class=locationArrow>&gt;</span>" + strRe +"</span>"; //��ӵ�һλ��
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

function _GetLastChild(arr) //ȡ�����һ�����ӵ�λ��
{
	var p = _GetPosition(arr[0]);
	for (var i=p+1; i < _lunquAry.length; i++)
	{
		if (_lunquAry[i][1] == _lunquAry[p][1]) //˵�����Լ�ͬ���
		{
			return --i; //�ص����һ������
		}
	}//for
	return i-1;
}//_GetLastChild

function _GetBoardMenu(arr) //�õ���Ӧ������menu��pΪ���һ�����ӵ�λ��
{
	if (arr[0]==_lunquAry[0][0]) //��һ��
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

//��ø����־
function _GetStateBZ(bz)	{ 	return (bz>>26)&3	} //�ö�״̬
function _GetJinghuaBZ(bz)	{ 	return bz&1			} //����
function _GetBQBZ(bz)		{ 	return (bz>>8)&0x7f } //����
function _GetFenleiBZ(bz)	{ 	return (bz>>16)&0xf } //����
function _GetFuJianBZ(bz)	{ 	return (bz>>3)&1	} //�Ƿ��и���
function _GetZiXuanBZ(bz)	{ 	return (bz>>6)&1	} //�Ƿ���ѡ
function _GetHotTopicBZ(bz)	{ 	return (bz>>7)&1	} //���Ż���
function _GetReplyBZ(bz)	{ 	return (bz>>24)&1	} //�Ƿ��������
function _GetProtectBZ(bz)	{ 	return (bz>>29)&1	} //�Ƿ�Ҫ����(�����ܱ���)
function _GetMagicBZ(bz)	{ 	return (bz>>30)&1	} //�Ƿ�ħ��

//�������״̬
function _ShowLunQuState(o){ //�������״̬
	if (o.daynumber)
		var str = _GetMYBBSValue("lunquState.hasnew",'<img height="15" alt="" src="/qq/img/fast/fast9/fav_add.gif" width="15" border="0">').replace(/none/gi, "")
	else 
		var str = _GetMYBBSValue("lunquState.nonew",'<img height="15" alt="" src="/qq/img/fast/fast9/fav_add.gif" width="15" border="0">').replace(/none/gi, "")
	_W(str)
}//_ShowLunQuState

//���Ĭ��ģʽ������״̬��־
function _ShowDefaultTieState(bzall){
	var bz=_GetStateBZ(bzall)
	if (bz==3) _W( _GetMYBBSValue("tieState.top1","<img src=/qq/club/images/bbsnew/ztop.gif alt='ϵͳͨ��'>").replace("none","") ) //"ϵͳͨ��"
	if (bz==2) _W(  _GetMYBBSValue("tieState.top2","<img src=/qq/club/images/bbsnew/ztop1.gif alt='��̳�ö�'>").replace("none","") )  //"��̳�ö�"
	if (bz==1) _W(  _GetMYBBSValue("tieState.top3","<img src=/qq/club/images/bbsnew/istop.gif alt='����ö�'>").replace("none","") )  //"����ö�"
	if (_GetJinghuaBZ(bzall)) _W(  _GetMYBBSValue("tieState.jTie","<img src=/qq/club/images/bbsnew/jinghua.gif alt='��ѡ��'>").replace("none","") )  //"��ѡ��"
	//��������Ĭ��ֵ��Ҫ�ı�
	if (_GetFuJianBZ(bzall)) _W(  _GetMYBBSValue("tieState.fTie","<img src=/qq/club/images/bbsnew/fujian.gif alt='�и���'>").replace("none","") )  //�и���
	if (_GetHotTopicBZ(bzall)) _W(  _GetMYBBSValue("tieState.hotTopic","<img src=/qq/club/images/bbsnew/hotfolder.gif alt='���Ż���'>").replace("none","") )  //���Ż���
	if (_GetZiXuanBZ(bzall)) _W(  _GetMYBBSValue("tieState.zixuanTie","<img src=/qq/club/images/bbsnew/isbest.gif alt='��ѡ'>").replace("none","") )  //��ѡ
	if (_GetReplyBZ(bzall)) _W(  _GetMYBBSValue("tieState.replyTie","<img src=/qq/club/images/bbsnew/lockfolder.gif alt='�������'>").replace("none","") )  //�Ƿ��������
	if (_GetProtectBZ(bzall)) _W(  _GetMYBBSValue("tieState.protectTie","<img src=/qq/club/images/bbsnew/baohu.gif alt='�����ܱ���'>").replace("none","") )  //�Ƿ���Ҫ����
	if (_GetMagicBZ(bzall)) _W(  _GetMYBBSValue("tieState.magicTie","<img src=/qq/club/images/bbsnew/mofa.gif alt='ħ����'>").replace("none","") )  //�Ƿ�ħ��
	//_W( _GetMYBBSValue("tieState.cTie","<img src=/qq/club/images/bbsnew/folder.gif alt='һ������'>") )  //���Ĭ�����
	_QQ_FenLei(_GetFenleiBZ(bzall)) //����
	_QQ_BQ(_GetBQBZ(bzall))   //����
}//_ShowDefaultTieState

//�������״̬ͼ������
function __GetTieState(){
	var s1 = _GetMYBBSValue("tieState.cTie",'<img border="0" src="/qq/club/images/bbsnew/folder.gif" align=absmiddle>') //��������
	var s2 = _GetMYBBSValue("tieState.hotTie",'<IMG src="/qq/club/images/bbsnew/hotfolder.gif" border=0 align=absmiddle>') //��������
	var s3 = _GetMYBBSValue("tieState.jTie",'<IMG src="/qq/club/images/bbsnew/jinghua.gif" border=0 align=absmiddle>') //������
	var s4 = _GetMYBBSValue("tieState.top3",'<IMG src="/qq/club/images/bbsnew/istop.gif" align=absmiddle>') //�ö� 
	var s5 = _GetMYBBSValue("tieState.top2",'<img border="0" src="/qq/club/images/bbsnew/ztop1.gif" align=absmiddle>') //���ö� 
	var s6 = _GetMYBBSValue("tieState.top1",'<img border="0" src="/qq/club/images/bbsnew/ztop.gif" align=absmiddle>') //ϵͳ����

	var s7 = _GetMYBBSValue("tieState.fTie",'<img border="0" src="/qq/club/images/bbsnew/fujian.gif" align=absmiddle>') //����
	var s8 = _GetMYBBSValue("tieState.hotTopic",'<img border="0" src="/qq/club/images/bbsnew/hotfolder.gif" align=absmiddle>') //���Ż���
	var s9 = _GetMYBBSValue("tieState.zixuanTie",'<img border="0" src="/qq/club/images/bbsnew/isbest.gif" align=absmiddle>') //��ѡ
	var s10 = _GetMYBBSValue("tieState.replyTie",'<img border="0" src="/qq/club/images/bbsnew/lockfolder.gif" align=absmiddle>') //�Ƿ��������
	var s11 = _GetMYBBSValue("tieState.protectTie",'<img border="0" src="/qq/club/images/bbsnew/baohu.gif" align=absmiddle>') //�Ƿ���Ҫ����
	var s12 = _GetMYBBSValue("tieState.magicTie",'<img border="0" src="/qq/club/images/bbsnew/mofa.gif" align=absmiddle>') //�Ƿ�ħ��
	
	//return '<center>'+s1+'��������&nbsp; '+s2+'��������&nbsp; '+s3+'������&nbsp; '+s4+'�ö�&nbsp; '+s5+'���ö�&nbsp; '+s6+'ϵͳ����&nbsp; '+s7+'����&nbsp; '+s8+'���Ż���&nbsp; '+s9+'��ѡ&nbsp; '+s10+'����&nbsp; '+s11+'�ܱ���&nbsp; '+s12+'ħ����</center>'
	//return '<center>'+s1+'��������&nbsp; '+s3+'������&nbsp; '+s4+'�ö�&nbsp; '+s5+'���ö�&nbsp; '+s6+'ϵͳ����&nbsp; '+s7+'����&nbsp; '+s8+'���Ż���&nbsp; '+s9+'��ѡ&nbsp; '+s10+'����&nbsp; '+s11+'�ܱ���&nbsp; '+s12+'ħ����</center>'
	if (s1=="none") s1 = ""
	else s1 += '��������&nbsp; '
	
	if (s2=="none") s2 = ""
	else s2 += '��������&nbsp; '

	if (s3=="none") s3 = ""
	else s3 += '������&nbsp; '

	if (s4=="none") s4 = ""
	else s4 += '�ö�&nbsp; '

	if (s5=="none") s5 = ""
	else s5 += '���ö�&nbsp; '

	if (s6=="none") s6 = ""
	else s6 += 'ϵͳ����&nbsp; '

	if (s7=="none") s7 = ""
	else s7 += '����&nbsp; '

	if (s8=="none") s8 = ""
	else s8 += '���Ż���&nbsp; '

	if (s9=="none") s9 = ""
	else s9 += '��ѡ&nbsp; '

	if (s10=="none") s10 = ""
	else s10 += '����&nbsp; '

	if (s11=="none") s11 = ""
	else s11 += '�ܱ���&nbsp; '

	if (s12=="none") s12 = ""
	else s12 += 'ħ����&nbsp; '
	
	return '<center>'+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+'</center>'
}//__GetTieState

//���Ĭ��ģʽ����״̬ͼ������
function __GetTieState2(){
	var s1 = _GetMYBBSValue("tieState.cTie",'<img border="0" src="/qq/club/images/bbsnew/folder.gif" align=absmiddle>') //��������
	var s2 = _GetMYBBSValue("tieState.hotTie",'<IMG src="/qq/club/images/bbsnew/hotfolder.gif" border=0 align=absmiddle>') //��������
	var s3 = _GetMYBBSValue("tieState.jTie",'<IMG src="/qq/club/images/bbsnew/jinghua.gif" border=0 align=absmiddle>') //������
	var s4 = _GetMYBBSValue("tieState.top3",'<IMG src="/qq/club/images/bbsnew/istop.gif" align=absmiddle>') //�ö� 
	var s5 = _GetMYBBSValue("tieState.top2",'<img border="0" src="/qq/club/images/bbsnew/ztop1.gif" align=absmiddle>') //���ö� 
	var s6 = _GetMYBBSValue("tieState.top1",'<img border="0" src="/qq/club/images/bbsnew/ztop.gif" align=absmiddle>') //ϵͳ����

	var s7 = _GetMYBBSValue("tieState.fTie",'<img border="0" src="/qq/club/images/bbsnew/fujian.gif" align=absmiddle>') //����
	var s8 = _GetMYBBSValue("tieState.hotTopic",'<img border="0" src="/qq/club/images/bbsnew/hotfolder.gif" align=absmiddle>') //���Ż���
	var s9 = _GetMYBBSValue("tieState.zixuanTie",'<img border="0" src="/qq/club/images/bbsnew/isbest.gif" align=absmiddle>') //��ѡ
	var s10 = _GetMYBBSValue("tieState.replyTie",'<img border="0" src="/qq/club/images/bbsnew/lockfolder.gif" align=absmiddle>') //�Ƿ��������
	var s11 = _GetMYBBSValue("tieState.protectTie",'<img border="0" src="/qq/club/images/bbsnew/baohu.gif" align=absmiddle>') //�Ƿ���Ҫ����
	var s12 = _GetMYBBSValue("tieState.magicTie",'<img border="0" src="/qq/club/images/bbsnew/mofa.gif" align=absmiddle>') //�Ƿ�ħ��

	if (s1=="none") s1 = ""
	else s1 += '��������&nbsp; '
	
	if (s2=="none") s2 = ""
	else s2 += '��������&nbsp; '

	if (s3=="none") s3 = ""
	else s3 += '������&nbsp; '

	if (s4=="none") s4 = ""
	else s4 += '�ö�&nbsp; '

	if (s5=="none") s5 = ""
	else s5 += '���ö�&nbsp; '

	if (s6=="none") s6 = ""
	else s6 += 'ϵͳ����&nbsp; '

	if (s7=="none") s7 = ""
	else s7 += '����&nbsp; '

	if (s8=="none") s8 = ""
	else s8 += '���Ż���&nbsp; '

	if (s9=="none") s9 = ""
	else s9 += '��ѡ&nbsp; '

	if (s10=="none") s10 = ""
	else s10 += '����&nbsp; '

	if (s11=="none") s11 = ""
	else s11 += '�ܱ���&nbsp; '

	if (s12=="none") s12 = ""
	else s12 += 'ħ����&nbsp; '
	
	return '<center>'+s4+s5+s6+s3+s7+s8+s9+s10+s11+s12+'</center>'
}//__GetTieState2

//�������״̬
function _ShowTieState(){
	if (_GetMYBBSValue("tieState.hide",false)) return
	_W(__GetTieState())
}//_ShowTieState

//���Ĭ��ģʽ����״̬
function _ShowDefaultTieStateGraph(){
	if (_GetMYBBSValue("tieState.hide",false)) return
	_W('<table width=100% class="default-table default-tiestate"><tr><td>'+__GetTieState2()+'</td></tr></table>')
}//_ShowDefaultTieState

//���������������
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

//���������������
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


//�����������
function _ShowSheQuLink(){ //����ģʽ����������
	var strLogoLink = __GetLogoLink()
	var strtextlink = __GetTextLink()
	
	if (strLogoLink) _W(strLogoLink)
	if (strtextlink) _W("<hr size=1 noshade>"+strtextlink)
}//_ShowSheQuLink

//���Ĭ��ģʽ��������
function _ShowDefaultLink(){ //���Ĭ��ģʽ��������
	if (!self._MYBBS || !_MYBBS.showlink) return
	var strLogoLink = __GetLogoLink()
	var strtextlink = __GetTextLink()
	var s = ""	
	if (strLogoLink) s += strLogoLink
	if (strtextlink) s += "<hr size=1 noshade>"+strtextlink
	_W('<table width=100% class="default-table default-link"><tr><td> �������� </td></tr><tr><td>'+s+'</td></tr></table>')
}//_ShowDefaultLink

//�����˵���������б�
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

function _fast10_validFastHui(theForm) //������֤
{
if(theForm.subject.value.length == 0) 
{
alert("���������д")
theForm.subject.focus()
return false
}
if (self._MYBBS && _MYBBS.targetNew) theForm.autogo.value = "refreshopener"
return true
}

//����
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
	   			addOnline("<img src='/qq/img/fast/fast9/guoke.gif' border='0'>������");
	   			break;
	   		case "":
	   			niming++;
	   			addOnline("<img src='/qq/img/fast/fast9/yinshen.gif' border='0'>�������Ա");
	   			break
	   		default:
	   			huiyuan++;
	   			var strImg = "";
	   			strImg = "/qq/img/fast/fast9/huiyuan.gif";
	   			addOnline("<img src='"+strImg+"' border='0'>��<a target=_self href=javascript:usrinfo('"
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
	span_onlineInfo.innerText = "������"+rootNodes.length+"�ˣ����� "+huiyuan+" λע���Ա�� "+guoke+" λ������ "+niming+" λ�����Ա";
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

function _SetGoogleADStyle(){ //����Google�����
	if (!self._MYBBS) return
	if (!_MYBBS.bbsid) return
	var strStyle = ""
	var border, bg, link
	if (_MYBBS.css){ //ʹ��ϵͳ���
		if (_MYBBS.css == "self") 
			if (_MYBBS.basestyle) strStyle = _MYBBS.basestyle
		else {		
			strStyle = _MYBBS.css
		}
	} else if (_MYBBS.defaultcss) { //ʹ���Զ����񣬵�ǰ����
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

function _SloginInfo(a){ //�жϵ�½

if (a==null) return
switch (a.bz) {
case "NotLogin": //not login
	if (window.qqgreet) qqgreet.innerHTML="<span class=usrname>"+a.name+"</span> ��ӭ����&nbsp;&nbsp;"
	loginForm.logname.value=a.logname
	if (a.haveExpress) _ExpressTiXing(false)
	break;
case "UnkownUID"://no name
      	if (window.qqgreet) qqgreet.innerHTML="��ӭ�������ѣ�&nbsp;������ע��&nbsp;"
	break;
case "AutoLogin"://auto login
	if (window.qqgreet)qqgreet.innerHTML="<span class=usrname>"+a.name+"</span> ��ӭ����&nbsp;���Ѿ��Զ���½��&nbsp;<a href=/cgi-bin/myqq/ target=_blank>[�ҵ�QQ]</a>"
	loginForm.style.display="none";
	if (a.haveExpress) _ExpressTiXing(true)
	break;      
case "NewUID"://new friend
	if (window.qqgreet)qqgreet.innerHTML="��ӭ�������ѣ�&nbsp;������ע��&nbsp;"
    	break;
case "Logined": //login
	if (window.qqgreet)qqgreet.innerHTML="<span class=usrname>"+a.name+"</span> ��ӭ����&nbsp;���Ѿ���½��&nbsp;<a href=/cgi-bin/myqq/ target=_blank>[�ҵ�QQ]</a>"
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

function _GetDaohangMenuA(name){ //�����˵��ϵ�ÿһ������
	if (/.+_linkset$/gi.test(name)) return "<script>_QQmylink('"+name.replace(/_linkset$/gi,"")+"')</"+"script>"
	switch (name)
	{
	case "login" : return '<a target=_self href=javascript:Login("/qq/myqq/putintomenu.htm") title="��½����������д����">��½</a>/<a href="javascript:_JREG()" target=_self>ע��</a>'
	case "myqq"  : return '<a href=/cgi-bin/myqq/ onmouseover=_ShowTabMenu(_menuUsrinfo) onmouseout=_HideMenu() target=_blank>�ҵ�QQ</a>'
	case "style"  : return '<a onmouseover=_ShowTabMenu(_menuStyle) onmouseout=_HideMenu() href=# target=_self>��ѡ���</a>'
	case "tag"  : return '<a onmouseover=_ShowTabMenu(_ListAryTag(3)) onmouseout=_HideMenu() href=# target=_self>��ǩ</a>'
	case "map"  : return '<a href="/cgi-bin/" onmouseover=_ShowTabMenu(_menuQQSY) onmouseout=_HideMenu() target=_blank>QQ��ͼ</a>'
	case "sys"  : return '<a href="javascript:_GoSys()" target="_self">ϵͳ����</a>'
	case "admin"  : return '<a href="javascript:_GoBBSAdmin()" onmouseover=_ShowTabMenu(_menuBBSAdmin) onmouseout=_HideMenu() target="_self">�������</a>'
	case "buluoqun"  : return _GetBuLuoMenu()
	case "big5"  : return '<SCRIPT>_GoBig5()<'+'/SCRIPT>'
	case "paiming": return '<a href="javascript:_GoPaiMing()" target="_self">����</a>'
	case "shoucang":return '<a onmouseover=_ShowTabMenu(_menubm) onmouseout=_HideMenu() href="javascript:_bmmybbs()" title="�ղ�'+_GetMybbsHome()+'" target="_self"><b style="color:Red">�ղ�</b></a>'
	default : return "Ĭ��"
	}
}//_GetDaohangMenuA


function _GetBuLuoMenu(){
_menuBuoLuo='<nobr><a href="javascript:_GoBuluoQun()" target="_self">����Ⱥ</a></nobr>'
	var oid=_GetMYBBSValue("oid")
	var s
	if (oid){
		s=' target=_blank href=/cgi-bin/club/groups/join.aspx?oid='+oid+'><b>���벿��</b></a>'
		_menuBuoLuo+='<BR><nobr><a'+s+'</nobr>'
		
	}else{
		s= ' title="����һ�����䲢�͵�ǰ��̳��" target=_blank href=/cgi-bin/club/groups/register.aspx?lunquid='+_GetMYBBSValue("lunquid")+'><b>�󶥲���</b></a>'
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
alert('���ڿ���ʹ�ü��� ctrl+v �������Ӹ��Ƶ������ط�')
}