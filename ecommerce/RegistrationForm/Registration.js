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