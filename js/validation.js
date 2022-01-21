
function checkform()
{    
    
    var messge = document.getElementById('ctl00_ContentPlaceHolder1_contact_txt_message');      
    var email= document.getElementById('ctl00_ContentPlaceHolder1_contact_txt_email');	
    
	if(messge.value != "")
	{
	    if( email.value != "")
	    {	    if(ValidateEmail(email.value))
                { return true;}
                else{return false;}
		   
		}else
		{
		    alert("Enter Email ID");
	        return false;
	    }
	}
	else
	{
	    alert("Enter Mesage/Question");
	    return false;
	}

}
function ValidateEmail()
	{		
		
		var myfld = document.getElementById('ctl00_ContentPlaceHolder1_contact_txt_email');	
		x=myfld.value;
		var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (filter.test(x))
		{
			return true;
		}
		else 
		{
			alert('Invalid Email address'); 
			//myfld.value="";
			myfld.focus();
			return false;
		}
	}
