//  alert("fisrtName")
const submitButton = document.querySelector(".submitButton");
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const errorCircle = document.querySelectorAll(".error_circle");
const errorText = document.querySelectorAll(".error_text");

submitButton.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log(firstName.value)
    const fName = firstName.value;
    const lName = lastName.value;
    const eMail = email.value;
    const passWord = password.value;
    if (fName === ""){
        firstName.classList.add("error");
        errorCircle[0].classList.remove("hide")
        errorText[0].classList.remove("hide")
    }else{
        firstName.classList.remove("error");
        errorCircle[0].classList.add("hide")
        errorText[0].classList.add("hide")
    }
    if (lName === ""){
        lastName.classList.add("error");
        errorCircle[1].classList.remove("hide")
        errorText[1].classList.remove("hide")
    }else{
        lastName.classList.remove("error");
        errorCircle[1].classList.add("hide")
        errorText[1].classList.add("hide")
    }
    if (eMail === ""){
        email.classList.add("error");
        errorCircle[2].classList.remove("hide")
        errorText[2].classList.remove("hide")
    }else{
        email.classList.remove("error");
        errorCircle[2].classList.add("hide")
        errorText[2].classList.add("hide")
    }
    if (passWord === ""){
        password.classList.add("error");
        errorCircle[3].classList.remove("hide")
        errorText[3].classList.remove("hide")
    }else{
        password.classList.remove("error");
        errorCircle[3].classList.add("hide")
        errorText[3].classList.remove("hide")
    }
    // when all the checks are done, send to backend
    // console.log(fName, " : ", lName, " : ", eMail, " : ",passWord)
    

})

const showPassword = document.querySelector("#show-password");
showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
     const type = password.getAttribute("type")
     === "password" ? "text" : "password";
     password.setAttribute("type", type);

})
