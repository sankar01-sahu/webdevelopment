document.getElementById("formContainer").addEventListener("submit",function data(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;

    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(mobile);
    let errorEmail =document.getElementById("errorEmail");
    let errorPassword = document.getElementById("errorPassword");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        errorEmail.textContent ="Invalid Email.."
        return;
    }

    let passwordPattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&]).{5,}$/;
    if(!passwordPattern.test(password)){
        errorPassword.textContent ="Invalid Password.."
        return;
    }

    let userData ={
        name : name,
        email : email,
        mobile : mobile,
        password : password
    };
    console.log(userData);
    localStorage.setItem("userData",JSON.stringify(userData));
    alert("Registration Successfully!!!");
    window.location.href = "../Login/Login.html"; 
});

function eyePassword(){
    let pswd= document.getElementById("password");

    if(pswd.type === "password"){
        pswd.type = "text";
    }else{
        pswd.type = "password";
    }
}
