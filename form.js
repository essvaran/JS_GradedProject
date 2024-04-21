function validate(){
    
    var uname = document.getElementById("uname").value;
    var password = document.getElementById("pw").value;

    if(uname == "admin" && password == "1234"){
        localStorage.setItem("Username",uname);
        window.location.href = 'resume.html';
    }
    else{
        alert("Invalid user name or password");
    }
}

function resume(){
    if(localStorage.getItem("username")){
        window.location.href = 'resume.html';
    }
}

resume();

