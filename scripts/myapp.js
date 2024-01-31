let userDB = "Kim"
let passDB = "Mypassword"

function login(){
    let userName = prompt("Enter your username");
    let userPassword = prompt("Enter your password");
    console.log(userName, userPassword);

    if(userName === userDB && userPassword === passDB){
        document.getElementById("notifications").innerHTML = 
        "<p>Welcome to the Canvas</p>"
    }else{
        document.getElementById("notifications").innerHTML =
        "<p class='alert-error'>Invalid username or password</p>"
    }

}


