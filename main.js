	

	function valid()
	{	
		
		let  name=document.getElementById("na").value;
		let  email=document.getElementById("email").value;
		let  pwd=document.getElementById("pass").value;
		let  len=pwd.length;
		let  cpwd=document.getElementById("cpass").value;
		let error1=document.getElementById("error1")
		let  error2=document.getElementById("error2")
		let  error4=document.getElementById("error4")
		let error5=document.getElementById("error5")
		let  re=/\d/
		let  id=email.indexOf('@')
		let  re1=/[\@\#\$\%\^\&\*\(\)]/
		if(!name || !email || !pwd || !cpwd)
		{
			alert("All fields are required");
			error5.innerHTML="All fields are required"
		}
		else
		{	
			let res1=nameCheck() 
			let res2=emailCheck()
			let res3=passwordCheck()
			if(res1  && res2 && res3)
				{ alert("You are successfully Register");
				error1.innerHTML=" ";
				error2.innerHTML=" ";
				error5.innerHTML=" ";
				error4.innerHTML=" ";
				}
			 
		}
	
	
	function nameCheck()
	{	
			
			if(re.test(name)==1 && re1.test(name)==1)
			 {  
				alert("Digits and special characters are not allowed in Name");
				error1.innerHTML="Digits and special characters are not allowed in Name"
				return false; 
			}
			else if(re1.test(name)==1)
			{   
				alert("Special characters are not allowed in Name");
				error1.innerHTML="Special characters are not allowed in Name"
				return false; 
			}
			if(re.test(name)==1)
			{
				alert("Digits are not allowed in Name");
				error1.innerHTML="Digits are not allowed in Name"
				return false; 
			}
			
		return true; 
	}
	
	function emailCheck()	
	{
		if(id==-1)
		{
		  alert("Invalid email-Id");
		  error2.innerHTML="Invalid email-Id";
		  return false; 
		}
		return true; 
	}
	
	function passwordCheck()
	{
			if(pwd!=cpwd)
			{
				alert("Password and confirm password are not match");
				error4.innerHTML="Password and confirm password are not match";
				return false;
			}
			else
			{	
				 
				 if(len < 6)
				   {
					alert("Password length must be greater than 6 digits"); 
					error4.innerHTML="Password length must be greater than 6 digits"
					return false;
				  }
			
			}
	return true; 
	}
	
}
	
