document.getElementById("login_Container").addEventListener("submit",function loginForm(e){
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let loginData = JSON.parse(localStorage.getItem("userData"));

  if(loginData.email === email && loginData.password ===password){
    alert("Login Successfully...");
  window.location.href = "../Home/Home.html";
  }else{
    alert("Enter a valid Credential!!");
  }

  let errorPassword = document.getElementById("errorPassword");
  let passwordPattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&]).{5,}$/;
  
    if(!passwordPattern.test(password)){
        errorPassword.textContent ="Invalid Password.."
        return;
    }
})

function eyePassword(){
    let pswd= document.getElementById("password");

    if(pswd.type === "password"){
        pswd.type = "text";
    }else{
        pswd.type = "password";
    }
}

document.getElementById("back").addEventListener("click",()=>{
    window.location.href = "../RegistrationForm/Registration.html";
})

