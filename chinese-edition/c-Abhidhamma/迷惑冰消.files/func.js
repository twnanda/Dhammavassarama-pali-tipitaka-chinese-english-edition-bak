//ȥ���ո�
function Trim(str)
{
	if(str.charAt(0) == " ")
	{
		str = str.slice(1);
		str = Trim(str); 
	}
	return str;
}

//�ж��Ƿ��ǿ�
function isEmpty(pObj,errMsg)
{
	var obj = eval(pObj);
	if( obj == null || Trim(obj.value) == "")
	{
		if (errMsg == null || errMsg =="")
		{
			alert("����Ϊ��!");
		}
		else
		{
			alert(errMsg); 
		}
		obj.focus(); 
		return false;
	}
	return true;
}

//�ж��Ƿ�������
function isNumber(pObj,errMsg)
{
	var obj = eval(pObj);
	strRef = "1234567890";
	if(!isEmpty(pObj,errMsg))return false;
	for (i=0;i<obj.value.length;i++) 
	{
		tempChar= obj.value.substring(i,i+1);
		if (strRef.indexOf(tempChar,0)==-1) 
		{
			if (errMsg == null || errMsg =="")
			{
				alert("���ݲ�����Ҫ��,����");
			}
			else
			{
				alert(errMsg);
			}
			if(obj.type=="text") 
			{
				obj.focus(); 
			}
			return false; 
		}
	}
	return true;
}


function resizeImg(p_obj)
{
	if ((p_obj.width > 400) || (p_obj.height > 250) )
	{
		var i = parseInt(p_obj.width/400);
		var j = parseInt(p_obj.height/250);
		if (i < j) 
		{
			i = j;
		}
		p_obj.style.width = p_obj.width / i;
	}
}

function resizeImage(p_iMaxWidth,p_iMaxHeight,p_obj)
{
	if (p_obj == null)
	{
		return;
	}
	k = 0;
	i = p_obj.width / p_iMaxWidth;
	j = p_obj.height / p_iMaxHeight;
	if (i < j)
	{
		i = j;
		k = 1;
	}
	if (i > 1)
	{
		if (k == 0)
		{
			p_obj.style.width = p_iMaxWidth;
		}
		else
		{
			p_obj.style.height = p_iMaxHeight;
		}
	}
}