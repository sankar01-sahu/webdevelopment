function eyePassword(){
    let pswd= document.getElementById("password");

    if(pswd.type === "password"){
        pswd.type = "text";
    }else{
        pswd.type = "password";
    }
}