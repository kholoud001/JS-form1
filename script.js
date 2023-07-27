
//date field 
//     let d=document.getElementById("date").value;
//     let ErrDate=document.getElementById("p-date");
//     if(d==null){
//         ErrDate.innerHTML="this field must be filled out";
         
 
   

function affiche() {
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone-number").value;
    var date = document.getElementById("date").value;
    var msg = document.getElementById("message").value;
    let affErrEmail=document.getElementById("sp-email");
    let affErrPhone= document.getElementById("sp-phone-number");
    var affErrdate=document.getElementById("sp-date");
    var affMsg=document.getElementById("sp-message");
    let regexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // let regexPhone = /^+212[0-9]{9}$/;
    // let regexPhone=/^(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}$/;
    let regexPhone=/^\+212[0-9]{9}$/;

 
 // // Email validation & check

   if(mail==""){
    affErrEmail.innerHTML = "this field must be filled out ";
    
} else  if (!regexEmail.test(mail) ) {
    affErrEmail.innerHTML = "Invalid email address  ";
  }
else{

    affErrEmail.innerHTML ="";
}


// // Phone validation
 if(phone==""){
     affErrPhone.innerHTML = "this field must be filled out ";
}

else if (!regexPhone.test(phone)) {
affErrPhone.innerHTML = "Invalid phone number. It should start with '+212' and have 9 digits.";
}
else{
     affErrPhone.innerHTML ="";
 }

// // Date validation (you can add a regex for date if needed)
   let selectedDate =  new Date(date);
   let year = selectedDate.getFullYear();

   if(isNaN(year)){
    // console.log("test khawi"+year);
  affErrdate.innerHTML = "this field must be filled out "; 
  }
   else if (year < 2000 || year > 2024) {
   affErrdate.innerHTML = "Date should be between 2000 and 2024";
  //  console.log("type date again"+ year);
    }
   else{
       affErrdate.innerHTML ="";
   }

// // Message validation
// var regexMsg = /^[a-zA-Z]+$/;
var regexMsg=/^[A-Za-z]+$/;

if(msg==""){
    affMsg.innerHTML  = "this field must be filled out ";
}
  else if (!regexMsg.test(msg)) {
  affMsg.innerHTML = "Message should only contain letters";
 }
  else{
    affMsg.innerHTML = ""; 
 }

 
/////////////test display
// create an empty array
const registeredInfo=[];
var i;
var result=mail+"\n"+phone+'\n'+date+'\n'+msg+'\n';
var regist=document.getElementById("test");


if (registeredInfo.length == 0) {
  regist.innerHTML  = "No registrations yet.";
}
else {
  // for(i=0;i<registeredInfo.length;i++){
  registeredInfo.push(result);
  //   document.getElementById("test").textContent=result; 
  console.log(registeredInfo); 

}

//   document.getElementById("test").textContent=result;
// }
}



// // //// Alert test 
// function validateForm() {
//     //mail and phone field
//     let x = document.forms["MyForm"]["mail","phone-number"].value;
//     //to dislpay as alert message that the field must be full
//     let ErrMail= document.getElementById("p-mail");
//     let ErrPhone= document.getElementById("p-phone");
//     // message placeholder
//     let y= document.getElementById("message").value;
//     let ErrMsg=document.getElementById("p-message");
//     //date field
//     // let z = document.getElementById("date").value;
//     // let ErrDate=document.getElementById("p-date");


//     if (x == "" || y == "" ) {
//         ErrMail.innerHTML="this field must be filled out";
//         ErrPhone.innerHTML="this field must be filled out";
//         ErrMsg.innerHTML="this field must be filled out";
//         //  console.log('empty or contains a new line');
//     }
   
 