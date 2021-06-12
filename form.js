
function validation(){
    // store the value that user enter in variables
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let conpass = document.getElementById('conpass').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    
    var myform = document.getElementById('myform');
     // to check if that field empty or not
     if(user == ""){
        document.getElementById("fn").innerHTML="Enter your first name";
        return false;
    }
   
   //  to accert a name of 3 letters at least
    if(user.length<3||user.length>12){
        document.getElementById('fn').innerHTML="Enter valid name";
        return false;
    }
    
    else{
        document.getElementById('fn').innerHTML="";
    }
    if(user == ""){
        document.getElementById("ln").innerHTML="Enter your last name";
        return false;
    }
   
   //  to accert a name of 3 letters at least
    if(user.length<3||user.length>12){
        document.getElementById('ln').innerHTML="Enter valid name";
        return false;
    }
    
    else{
        document.getElementById('ln').innerHTML="";
    }
    
  
    // to check if that field empty or not
    if(pass == ""){
        document.getElementById('passs').innerHTML="please write your passward";
        return false;
    }
    if(pass.search(/[ ]/)!=-1){
        document.getElementById('passs').innerHTML="Can't include a space";
    return false;
   }
    // limit the lenght of the  pass
    if(pass.length<8 ){
        document.getElementById('passs').innerHTML="too short";
        return false;
    }
    if( pass.length>16 ){
        document.getElementById('passs').innerHTML="Too long";
        return false;
    }
      // must enclud numbers
   if(pass.search(/[0-9]/)==-1){
        
        document.getElementById('passs').innerHTML="must encluce at least a number";
        return false;
    }
    //not to accept without upper characters
    if(pass.search(/[A-Z]/)==-1||pass.search(/[a-z]/)==-1||pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\<\>\,\?]/)==-1){
        document.getElementById('passs').innerHTML="Too Weak";
        return false;
    }
   
    // make the span empty if these conditions are false
    else{
    document.getElementById('passs').innerHTML="";
}   
    // to check if that field empty or not
    if(conpass == ""){
        document.getElementById('conpasss').innerHTML="please confirm yor passward";
        return false;
    }
    // to check if the passwords match or not
    if(conpass != pass){
        document.getElementById('conpasss').innerHTML="password isn't correct";
        return false;
    
    }
    // make the span empty if these conditions are false
    else{
        document.getElementById('conpasss').innerHTML="";
    }
    // to check if that field empty or not
    if(email == ""){
        document.getElementById('emaill').innerHTML="this field can not be empty";
        return false;
    }   
        // not to accept if there are no words after @ sign and limit the no. of  them
      if(email.indexOf("@") == -1 || email.length < 6){
      document.getElementById('emaill').innerHTML= "Please Enter valid Email";
       return false;
  }
    // make the span empty if these conditions are false
     else{
         document.getElementById('emaill').innerHTML="";
     }
// to check if that field empty or not
    if(mobile == ""){
        document.getElementById('mobill').innerHTML="this field can not be empty";
        return false;
    }
    // to accept  numbers  only
    if(isNaN(mobile)){
         document.getElementById('mobill').innerHTML="Only numbers accepted";
         return false;}
    // to limit what the user enter
    if(mobile.length<10 || mobile.length>10){
        document.getElementById('mobill').innerHTML="Enter a vaild mobile number";
        return false;
    }
    
    // make the span empty if these conditions are false
    else{
        document.getElementById('mobill').innerHTML="";
    }
    
}
