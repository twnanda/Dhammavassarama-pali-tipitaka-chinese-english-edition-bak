/*
	
*/
var _QQImgDefaultCanshuO //as object

//����Ĭ�϶���
_QQImgSetDefaultO("bkDir=0&bkH=18");

//������д����ͼҪ��һЩ����
function _ImgFindImg(o)
{
	//alert('_ImgFindImg');
	//return o.parentNode.parentNode.nextSibling.firstChild;
	//alert(o.parentNode.parentNode.nextSibling.firstChild.tagName);
	if (o.parentNode.parentNode.nextSibling.tagName=="IMG") return o.parentNode.parentNode.nextSibling;
	if (o.parentNode.parentNode.nextSibling.firstChild.tagName=="IMG") return o.parentNode.parentNode.nextSibling.firstChild;
	return o.parentNode.parentNode.nextSibling.firstChild.firstChild;
}//_ImgFindImg
function _ImgDec(o){
	var imgO = _ImgFindImg(o);
	//alert(imgO.width);
	imgO.width=imgO.width/1.2
	//alert(imgO.width);
	imgO.height=imgO.height/1.2
	_ImgdisRatio(o)
}

function _ImgInc(o){
	var imgO = _ImgFindImg(o);
	imgO.width=imgO.width*1.2
	imgO.height=imgO.height*1.2
	_ImgdisRatio(o)
}

function _ImgdisRatio(o){
	var imgO = _ImgFindImg(o);
	//alert(o.parentNode.childNodes(1).outerHTML);
	o.parentNode.childNodes(1).innerText="���� "+parseInt(imgO.width/imgO.w*100)+"%"
}

function _ImgReset(o){
	var imgO = _ImgFindImg(o);
  imgO.width=imgO.w
  imgO.height=imgO.h
  _ImgdisRatio(o)
}

function _ImgFit(o){
 var imgO = _ImgFindImg(o);
 var a=_ImgGetFitSize(imgO.w,imgO.h)
 imgO.width=a[0]
 imgO.height=a[1]
  
  _ImgdisRatio(o)
}

function _ImgGetFitSize(width,height){
 if (width >screen.width-50){
   	height = height/width*(screen.width-50)
  	width=screen.width-50
  	}
  return new Array(width,height)
}
//end������д����ͼҪ��һЩ����

//д����ͼҪ��һЩ����
function _QQImgTeXiaoBig(intT,othercanshu,imgurl,width,height,spStr)
{
	//alert("_QQImgTeXiaoBig");
	var texiaoCode = "";
	var reStr="";
	var csO=null;
	var w,h;
	csO = new _QQImgCanShuClass(othercanshu);
	_QQImgConfirmO(csO);//�ۺ϶���
	//alert('aaa');
	var oSize = new Object();
	oSize.width = width;
	oSize.height = height;
	oSize.bz = intT;
	//alert('��Ч���');
	var a=_ImgGetFitSize(width,height);
	if (csO.type=="JAVA") //java��Ч����ʾ���Ź���
	{
		texiaoCode = _QQTexiaoTypeSelect(csO,imgurl,oSize);
		reStr = texiaoCode;
	}
	else	//��java��Ч
	{
		oSize.width = a[0];
		oSize.height = a[1];
		oSize.spStr = "h=\'"+height+"\' w=\'"+width+"\'"+((spStr)?" "+spStr:"");
		texiaoCode = _QQTexiaoTypeSelect(csO,imgurl,oSize);
		reStr = "<nobr><center><span class='qqimg-oview-zoomin' title='��СͼƬ' onclick='_ImgDec(this)'></span><span class='qqimg-oview-zoomrate'>���� "+parseInt(a[0]/width*100)+"%</span><span class='qqimg-oview-zoomout' title='�Ŵ�ͼƬ' onclick='_ImgInc(this)'></span> <span title='ԭʼ�ߴ�' class='qqimg-oview-original' onclick='_ImgReset(this)'></span>&nbsp;<span title='�ʺ���Ļ' class='qqimg-oview-fit' onclick='_ImgFit(this)' this.blur='alert(true)'></span></center></nobr>"+texiaoCode;
	}
	
	//alert(reStr);
	return reStr;	
}//_QQImgTeXiaoBig

//�趨Ĭ�϶�����
function _QQImgSetDefaultO(s)
{
	if (_QQImgDefaultCanshuO) //����Ѿ��趨��_QQImgDefaultCanshuO����
	{
	//alert("have _QQImgDefaultCanshuO");
	var o = new _QQImgCanShuClass(s);
	if ((o.bkDir) && (o.type)) //����趨�˱߿����Ч
	{
		_QQImgDefaultCanshuO = o;
		return;
	}//o.bkDir && o.type
	if (o.bkDir) //��������趨�˱߿�
	{
		_QQImgDefaultCanshuO.bkDir = o.bkDir;
		_QQImgDefaultCanshuO.bkType = o.bkType;
		_QQImgDefaultCanshuO.bkH = o.bkH;
		return;
	}//o.bkDir
	if (o.type) //��������趨����Ч
	{
		o.bkDir = _QQImgDefaultCanshuO.bkDir;
		o.bkType = _QQImgDefaultCanshuO.bkType;
		o.bkH = _QQImgDefaultCanshuO.bkH;
		_QQImgDefaultCanshuO = o;
		return;
	}//o.type
	} // if _QQImgDefaultCanshuO
	else  //�����δ�趨��_QQImgDefaultCanshuO�������趨
	{
		_QQImgDefaultCanshuO = new _QQImgCanShuClass(s);
		//alert(_QQImgDefaultCanshuO.bkDir);
	}//if _QQImgDefaultCanshuO	
}//_QQImgSetDefaultO

//alert(true);
//���ɲ���������
function _QQImgCanShuClass(s)
{
 if (s=="null") return 
 s=s.split("&")
 for (var i=0,l=s.length;i<l;i++)
 {
	var s1=s[i].split("=");
	if (s1.length>1)
		this[s1[0]]=s1[1];
 }//for
}//_QQImgCanShuClass

//���ɱ߿���
function _QQImgBorder(o,texiaoCode,width,height)
{
	//alert('���ɱ߿���aaaaaaaaa');
	var reStr="";
	if (o.bkDir!="none") //����趨�߿�,������Ա߿����ͽ�������
	{
		//alert(o.bkDir!="none");
		if (!/\D/.test(o.bkDir)) o.bkDir = "/qq/imglib/border/"+o.bkDir;  //�ж�������������ϵͳ�ı߿򣬼�Ŀ¼��ȥ
		//alert("begin split");
		//alert(o.bkH);
		var arrBkH = new Array();
		if (!o.bkH) o.bkH = "18";
		arrBkH = o.bkH.split(","); //�ѱ߿��ȴ��ָ�
		//alert("split ok");
		if (arrBkH.length!=4){arrBkH[1]=arrBkH[0];arrBkH[2]=arrBkH[0];arrBkH[3]=arrBkH[0];} //�趨���		
		var folder = (o.bkDir.charAt(o.bkDir.length-1)=="/")?o.bkDir:o.bkDir+"/";
		//alert(folder);
		if (o.bkType=="0") //�����߿�
		{
			//alert("�����߿�");
			reStr = "<table cellspacing=0 cellpadding=0 width=50><tr><td valign=bottom align=right><img src='"+folder+"1.gif'></td><td valign=bottom background='"+folder+"2.gif' height="+arrBkH[0]+" width="+width+"></td><td valign=buttom align=left><img src='"+folder+"3.gif'></td></tr><tr><td align=right background='"+folder+"4.gif' height="+height+" width="+arrBkH[2]+"></td><td>"+texiaoCode+"</td><td background='"+folder+"5.gif' height="+height+" width="+arrBkH[3]+"></td></tr><tr><td valign=top align=right><img src='"+folder+"6.gif'></td><td valign=top background='"+folder+"7.gif' height="+arrBkH[1]+" width="+width+"></td><td valign=top><img src='"+folder+"8.gif'></td></tr></table>";
		}
		else//�Ǳ����߿�
		{
			//alert("�Ǳ����߿�");
			reStr = "<table cellspacing=0 cellpadding=0 width=50><tr><td valign=bottom align=right><img src='"+folder+"1.gif'></td><td valign=bottom><img src='"+folder+"2.gif' height="+arrBkH[0]+" width="+width+"></td><td valign=buttom align=left><img src='"+folder+"3.gif'></td></tr><tr><td align=right><img src='"+folder+"4.gif' height="+height+" width="+arrBkH[2]+"></td><td>"+texiaoCode+"</td><td><img src='"+folder+"5.gif' height="+height+" width="+arrBkH[3]+"></td></tr><tr><td valign=top align=right><img src='"+folder+"6.gif'></td><td valign=top><img src='"+folder+"7.gif' height="+arrBkH[1]+" width="+width+"></td><td valign=top><img src='"+folder+"8.gif'></td></tr></table>";
		} //o.bkType
	}
	else //o.bkDir
	{
		//alert('���mei�趨�߿�');
		reStr = texiaoCode;
	}  //o.bkDir
   	//alert(reStr);
	return reStr;
}//_QQImgBorder

//��Ч����ѡ������ѡ��ʹ��������Ч
function _QQTexiaoTypeSelect(o,imgurl,oSize,title,link,target)
{
	var reStr="";
	switch(o.type)
	{
		case "CSS":
			//alert('���css');
			return _QICSS(o,imgurl,oSize,title,link,target);
			break;
		case "JAVA":
			if (!(oSize.bz&4)) //˵�����java��Ч
			{
				//alert(!oSize.bz&4);
				return _QIJava(o,imgurl,oSize);
			}
			break;
		case "FLASH":
			//alert('���Flash');
			return _QIFlash(o,imgurl,oSize,title,link,target);
			break;
		default:
			//Ĭ��
	}//switch	
	reStr += "<span>";
	if (link) reStr += "<a href='"+link+"'"+((target)?" target="+target:"")+">";
	reStr += "<img "+((oSize.spStr)?oSize.spStr:"")+((title)?" title='"+title+"'":"")+" border=0 src="+imgurl+" "+((oSize.width)?"width="+oSize.width:"")+" "+((oSize.height)?"height="+oSize.height:"")+">";
	if (link) reStr += "</a>";
	reStr += "</span>";
	//alert(reStr);
	return reStr;
}//_QQTexiaoTypeSelect

//ȷ���������ǵ���Ч���󣬼����µ���Ч�����Ĭ�ϵ���Ч������ϳ�һ������
function _QQImgConfirmO(newo)
{
	if (newo.bkDir=="none") //none��ʱ���ر���
	{}
	else if (!newo.bkDir) //�̳�Ĭ�ϱ߿�
	{
		//alert('�̳�Ĭ�ϱ߿�');
		newo.bkDir = _QQImgDefaultCanshuO.bkDir;
		if (_QQImgDefaultCanshuO.bkType) newo.bkType = _QQImgDefaultCanshuO.bkType;
		if (_QQImgDefaultCanshuO.bkH) newo.bkH = _QQImgDefaultCanshuO.bkH;
	} //if newo.bkDir=="none"

	if (newo.type=="none") //none��ʱ���ر���
	{}
	else if (!newo.type) //�̳�Ĭ����Ч
	{
		//alert('�̳�Ĭ����Ч');
		newo.type = _QQImgDefaultCanshuO.type;
		//clone the other property
		for (prop in _QQImgDefaultCanshuO)
		{
			if ((prop=="bkDir") || (prop=="bkType") || (prop=="bkH") || (prop=="type")) continue;
			newo[prop] = _QQImgDefaultCanshuO[prop];
		}//for
	} //if newo.type=="none"	
}//_QQImgConfirmO

//��Ч���
function _QQImgTeXiao(intT,othercanshu,imgurl,width,height,title,link,target)
{
	//alert('��Ч���');
	//alert(_QQImgDefaultCanshuO.bkDir);
	var texiaoCode = "";
	var reStr="";
	var csO=null;
	var w,h;
	csO = new _QQImgCanShuClass(othercanshu);
	_QQImgConfirmO(csO);//�ۺ϶���
	var oSize = new Object();
	//alert('aaa');
	oSize.width = width;
	oSize.height = height;
	oSize.bz = intT;
	if (intT&2) //Ҫ�������Ч
	{
		//alert('Ҫ�������Ч');
		texiaoCode = _QQTexiaoTypeSelect(csO,imgurl,oSize,title,link,target)
	}
	else //��Ҫ�������Ч
	{
		//alert("��Ҫ�������Ч");
		texiaoCode += "<span>";
		if (link) texiaoCode += "<a href='"+link+"'"+((target)?" target="+target:"")+">";
		w = (width)?"width="+width:"";
		h = (height)?"height="+height:"";
		texiaoCode += "<img w="+width+" h="+height+((title)?" title='"+title+"'":"")+" border=0 src="+imgurl+" "+w+" "+h+">";
		if (link) texiaoCode += "</a>";
		texiaoCode += "</span>";
	} //intT&2

	if (intT&1) //Ҫ������߿�
	{
		reStr = _QQImgBorder(csO,texiaoCode,oSize.width,oSize.height);
	}
	else //��Ҫ������߿�
	{
		reStr = texiaoCode;
	} //intT&1
	
	//alert(reStr);
	return reStr;	
}//_QQImgTeXiao

function _QICSS(o,imgurl,oSize,title,link,target)
{
	var reStr="<span>";
	if (link) reStr += "<a href='"+link+"'"+((target)?" target="+target:"")+">";
	var w = (oSize.width)?"width="+oSize.width:"";
	var h = (oSize.height)?"height="+oSize.height:"";
	reStr += "<img "+((oSize.spStr)?oSize.spStr:"")+((title)?" title='"+title+"'":"")+" border=0 src="+imgurl+" "+w+" "+h;
	reStr += " style='filter:"+unescape(o.filterStr)+"'>";
	if (link) reStr += "</a></span>";
	//alert(reStr);
	return reStr;
}//_QICSS

function _QIFlash(o,imgurl,oSize,title,link,target)
{
	//alert("_QIFlash");
	var codebase = "/qq/flash/swf/";  //flash file Folder
	var styleStr = "position:absolute;top:0px;left:0px;"; // style string
	if (o.top) styleStr="position:absolute;top:"+o.top+"px;left:"+o.left+"px;";	
	var flashW = oSize.width;
	var flashH = oSize.height;
	if (o.width)
	{
		flashW = o.width;
		flashH = o.height;
	}
	var reStr="<span style='position:relative;'>";
	if (link) reStr += "<a href='"+link+"'"+((target)?" target="+target:"")+">";
	var w = (oSize.width)?"width="+oSize.width:"";
	var h = (oSize.height)?"height="+oSize.height:"";
	reStr += "<img "+((oSize.spStr)?oSize.spStr:"")+((title)?" title='"+title+"'":"")+" border=0 src="+imgurl+" "+w+" "+h;
	reStr += " style='filter:"+unescape(o.filterStr)+"'>";
	if (link) reStr += "</a>";
	reStr += _SWFTexiao(codebase+o.file+".swf",flashW,flashH,styleStr); //flash
	reStr += "</span>";
	//alert(reStr);
	return reStr;
}//_QIFlash

function _QIJava(o,imgurl,oSize)
{
	//alert("_QIJava");
	var reStr="";
	if (!o.codebase) //û�趨codebase������Ĭ��
	{
		o.codebase = "/qq/java/img/";
	}
	else if (o.codebase.charAt(0)!="/") //���ϵͳĬ�ϵ�
	{
		o.codebase = "/qq/java/img/"+o.codebase;
	}
	if (!o.imgpName) o.imgpName = "image"; //ϵͳĬ�ϲ���
	
	switch (o.cName)
	{
		case "Lake":
			oSize.height = parseInt(oSize.height*1.9);
			break;
		default:
			//��������
	
	}	
	reStr+="<applet code='"+o.cName+".class' codebase='"+o.codebase+"' width="+oSize.width+" height="+oSize.height+">\n";
	reStr+="<param name='"+o.imgpName+"' value='"+imgurl+"'>\n"
	if (o.javaStr)
	{
	//alert("above ok");
	var arrParam = o.javaStr.split(",");	

	for (var i=0;i<arrParam.length;i=i+2)
	{
		//alert("above ok");
		reStr+="<param name='"+arrParam[i]+"' value='"+arrParam[i+1]+"'>\n"
		//i++;
	}//for
	}//!o.javsStr
	reStr+="</applet>";
			
	//alert(reStr);
	return reStr;
}//_QIJava

//Flash��ЧҪ�����⺯��
function _QFSetArgs(strFlash,width,height)
{
	//alert(oFlash);
	try
	{
		oFlash=eval(strFlash);
		if(oFlash.PercentLoaded()==100)
		{
		oFlash.SetVariable("_root.WIDTH",width);
		oFlash.SetVariable("_root.HEIGHT",height);
		oFlash.Play();		
		window.setTimeout(strFlash+".TStopplay('_root.LOGO.watcher')",1000);
		}
		else{
		window.setTimeout("_QFSetArgs("+strFlash+","+width+","+height+")",500);
		}
	}
	catch(e){}
}//_QFSetArgs

//��Чħ��flash�쿴��
function _SWFTexiao(src,width,height,styleStr){
	var oId = src.substring(src.lastIndexOf("/")+1).replace(/\.swf/gi,"");
	//����flash��������
	setTimeout("_QFSetArgs('QF"+oId+"',"+width+","+height+")",1000);
return '<object id=QF'+oId+' style="'+((styleStr)?styleStr:"border:1 solid black")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0"'
	+' width="'+width+'" height="'+height+'">'
	+'<param name=movie value="'+src+'"><param name=quality value=high>'
	+((styleStr)?"<param name=\"scale\" value=\"noscale\" /><param name=\"wmode\" value=\"transparent\">":"")
	+'<embed onload="alert(true)" scale="noscale" src="'+src+'" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash"'
	+' width="'+width+'" height="'+height+'"></embed></object>'
}

//�����ǹ�����
function _ImgVote(id){
	newin('/cgi-bin/class/Img/ImgAdmin.aspx?autogo=refreshopener&act=vote&id='+id)
}
function _ImgDel(id){
if (confirm('ɾ����ͼƬ��')) 
	newin('/cgi-bin/class/Img/ImgAdmin.aspx?autogo=autoclose&act=delete&id='+id)
} 
function _AdminImgDel(id){
if (confirm('ɾ����ͼƬ��')) 
	newin('/cgi-bin/class/Img/ImgAdmin.aspx?autogo=autoclose&act=AdminDelete&id='+id)
} 
function _ImgUpdate(id){
	newin('/cgi-bin/bbs/imgadmin/viewimg_guanli.aspx?id='+id,null,700,500)
} 
function _ImgAddLink(id){
	location=('/cgi-bin/class/Img/ImgAdmin.aspx?autogo=autoclose&act=disaddlink&id='+id)
}

function _ImgTeXiaoChange(o,v){
	o.value=v;
	o.nextSibling.disabled=!(v)
}

function _GetImgTeXiaoSetHTML(otherCanShu,imgurl,width,height){
 return "<input class=button type=button value='���ñ߿�/��Ч' onclick=\"_GetPopUpValue('document.all.'+this.nextSibling.uniqueID,'/qq/imglib/settexiao.htm',700,500)\"><input type=hidden name=othercanshu value='"
 	+(otherCanShu?otherCanShu:"")+"' imgurl='"
 	+(imgurl?imgurl:"")+"'  imgW='"
 	+(width?width:"")+"'  imgH='"
 	+(height?height:"")+"' onchangeValue=_ImgTeXiaoChange><input class=button type=button"
 	+(otherCanShu?"":" disabled")+" value='�����Ч' onclick=\"this.previousSibling.value='';this.disabled=true\">"
}
