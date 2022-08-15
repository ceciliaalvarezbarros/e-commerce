function buttonLogin(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let arr = [];
    arr.push({user, pass});

    localStorage.removeItem("userdata");
    
    if (user && pass){
        localStorage.setItem("userdata", JSON.stringify(arr));
        window.location="index.html";
    } else {
        alert("Debe ingresar datos de usuario y contraseña");
    }
}

document.addEventListener ("DOMContentLoaded", function(event){
    document.getElementById("login").addEventListener("click", buttonLogin);
  });