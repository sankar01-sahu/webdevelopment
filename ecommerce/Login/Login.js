document.getElementById("login").addEventListener("click",loginForm);

function loginForm() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please fill all details");
    return;
  }
  let loginData = JSON.parse(localStorage.getItem("login")) || [];

  let user = {
    email: email,
    password: password
  };

  loginData.push(user);
  localStorage.setItem("login", JSON.stringify(loginData));
  alert("Login Successfully...");
  window.location.href = "../Home/Home.html";
}

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

