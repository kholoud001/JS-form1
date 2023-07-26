// //Alert test 
 function validateForm() {
    //mail and phone field
    let x = document.forms["MyForm"]["mail","phone-number"].value;
    //to dislpay as alert message that the field must be full
    let ErrMail= document.getElementById("p-mail");
    let ErrPhone= document.getElementById("p-phone");
    // message placeholder
    let y= document.getElementById("message").value;
    let ErrMsg=document.getElementById("p-message");

    if (x == "" || y == "") {
        ErrMail.innerHTML="this field must be filled out";
        ErrPhone.innerHTML="this field must be filled out";
        ErrMsg.innerHTML="this field must be filled out";
        //  console.log('empty or contains a new line');
    }
//date field 
//     let d=document.getElementById("date").value;
//     let ErrDate=document.getElementById("p-date");
//     if(d==null){
//         ErrDate.innerHTML="this field must be filled out";
         
 }
   

function affiche() {
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone-number").value;
    var datee = document.getElementById("date").value;
    var msg = document.getElementById("message").value;
    let affErrEmail=document.getElementById("sp-email");
    let affErrPhone= document.getElementById("sp-phone-number");
    var affErrdate=document.getElementById("sp-date");
    var affMsg=document.getElementById("sp-message");
    let regexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // let regexPhone = /^+212[0-9]{9}$/;


 // // Email validation
 if (!regexEmail.test(mail)) {
  affErrEmail.innerHTML = "Invalid email address";
}
else{
    affErrEmail.innerHTML ="";
}


// //Phone validation
// if (!regexPhone.test(phone)) {
// affErrPhone.innerHTML = "Invalid phone number. It should start with '+212' and have 9 digits.";
// }
// else{
//      affErrdate.innerHTML ="";
//  }

// // Date validation (you can add a regex for date if needed)

   let selectedDate = new Date(datee);
   let year = selectedDate.getYear();

if (year < 2000 || year > 2024) {
   affErrdate.innerHTML = "Date should be between 2000 and 2024";
//    console.log("type date again"+ year);
    }
   else{
       affErrdate.innerHTML ="";
   }


// // Message validation
var regexMsg = /^[A-Za-z]+$/;
 if (!regexMsg.test(msg)) {
  affMsg.innerHTML = "Message should only contain letters";
 }
 else{
    affMsg.innerHTML = ""; 
 }
}
 
// document.getElementById("aff").innerHTML=email +","+
 

// // function MyFonction(){
// //   var email=document.getElementById("mail").value;
// //   var regexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// //   if(!regexEmail.test(email)){
// //     alert("test");

// //   }


// // }
