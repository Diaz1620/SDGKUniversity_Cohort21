console.log("Users register");
class User {
    constructor(firstName, lastName, username, email, pass, address, address2, city, state, zip, age, method, color) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = pass;
        this.address = address;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.age = age;
        this.method = method;
        this.color = color;
    }
}

function registerUser(){
    let firstName =$("#inputfirstName").val();
    let lastName =$("#inputlastName").val();
    let username =$("#inputUsername").val();
    let email = $("#inputEmail").val();
    let pass = $("#inputPassword").val();
    let address = $("#inputAddress").val();
    let address2 = $("#inputAddress2").val();
    let city = $("#inputCity").val();
    let state = $("#inputState").val();
    let zip = $("#inputZip").val();
    let age = $("#inputAge").val();
    let method = $("#inputPaymentMethod").val();
    let color = $("#txtcolor").val();
    let user = new User(firstName,lastName,username,email,pass,address,address2,city,state,zip,age,method,color)
    // console.log(color);
    saveUser(user)
}


function init(){
    console.log("init function");
    $("#btnSave").click(registerUser);
}
window.onload=init;