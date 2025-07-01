console.log("JS file connected");

const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name= document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messError");
    const success = document.getElementById("messSent");

    nameError.textContent="";
    emailError.textContent="";
    messageError.textContent="";
    success.textContent="";
    
    let valid = true;

    if (name ===""){
        nameError.textContent="Please enter name";
        valid= false;
    }
 const emailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if (email==="")
 {
    emailError.textContent="Please enter email";
    valid = false;
 }
 else if(!emailPattern.test(email)){
    emailError.textContent="Enter valid email";
    valid = false ;
 }
 if (message ==="")
 {
    messageError.textContent="Enter your message";
    valid = false;
 }
 else if (message.length < 10) {
  messageError.textContent = "Message must be at least 10 characters";
  valid = false;
}

 
 if(valid){
  success.textContent = "Form submitted successfully!";
success.classList.add("show");

form.reset();

setTimeout(() => {
  success.classList.remove("show");
  success.textContent = "";
}, 2000); 
}


});