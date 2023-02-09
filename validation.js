var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var username = document.getElementById("username");

var email_error = document.getElementById('email_error');
var pass_size = document.getElementById('pass_size');
var pass_error = document.getElementById('pass_error');
var phone_error = document.getElementById('phone_error');


email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (email.value.length > 0 && email.value.length <= 5) {
		email.style.border = "1px solid red";
		phone_error.style.display = "block";
		email.focus();
		return false;
	}
	if (email.value.length == 0 ) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length > 0 && password.value.length <= 6) {
		password.style.border = "1px solid red";
		pass_size.style.display = "block";
		password.focus();
		return false;
	}
	if (password.value.length == 0) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}
}
var passField= document.querySelector("#password");
var btn= document.querySelector("span");
btn.onclick=function(){
	if(passField.type=== "password"){
		passField.type = "text";
		btn.style.color='#cd8219'
	}else{
		passField.type= "password";
		btn.style.color='black'

	}
}
function email_Verify(){
	if (email.value.length == 0) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
	if (email.value.length >5 ) {
		email.style.border = "1px solid silver";
		phone_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length ==0) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
	if (password.value.length > 6) {
		password.style.border = "1px solid silver";
		pass_size.style.display = "none";
		return true;
	}
}