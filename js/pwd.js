function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Your Password',' ');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1 == "F@mily") {
//alert('You Got it Right!');
window.open('family.html', "_self");
break;
} 
testV+=1;
var pass1 = 
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1!="password" & testV ==3) 
history.go(-1);
return " ";
}