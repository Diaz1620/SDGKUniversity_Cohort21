
function login(){
    let email = $("#txtEmail").val();
    let pass = $("#txtPassword").val();
    console.log(email,pass);
    
    let userList=readUsers();//from the local storage
    let found=false;
    for(user in userList){
        let current = userList[user];
        if(current.email === email && current.password === pass){
            found=true;
            console.log("Logged in");
            window.location="user.html";
        }
    }
    if(!found){
        console.log("Invalid Credentials");
        $("#invalid").slideDown(500).delay(3000).slideUp(500)
        // $("#alertError").removeClass("hide");
        // setTimeout(function(){
        //     $("#alertError").addClass("hide");
        // },3000)
    }
}


function init(){
    console.log("Home page");
    $("#btnLogin").click(login);
    $("#invalid").hide()
}

window.onload=init;