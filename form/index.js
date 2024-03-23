const form = document.querySelector("form");
const email = document.getElementById("mail");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an email address!");

    } else {
      email.setCustomValidity("");
      
    }
});
  
// form.addEventListener('submit', function(){
//     if(password.value == repassword.value){
//         console.log("passwords matched");
//     }
// })