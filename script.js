let counter = 0;
let ab = 0;

let user = document.getElementById ("username1");
let password = document.getElementById ("pwd1");
let inner = document.getElementById ("subdiv21");


function validate() {
    if (user.value == ""){
        document.getElementById ("spn1").innerHTML = "Enter Username";
        counter = 0;
    }
    else if (user.value.length < 4){
        document.getElementById ("spn1").innerHTML = "Enter min 4 char";
        counter = 0;
    }
    else {
        document.getElementById ("spn1").innerHTML = "";
        counter = 1;
    }

    if (password.value == ""){
        document.getElementById ("spn2").innerHTML = "Enter Password";
        ab = 0;
    }
    else{
        document.getElementById ("spn2").innerHTML = "";
        ab = 1;
    }

    if (counter && ab){
        inner.innerHTML = "";
        inner.innerHTML = "Login Successfully!";
    }

    if (counter && ab){
        return true;
    }
    else {
        return false;
    }   
}



