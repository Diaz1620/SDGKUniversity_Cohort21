var person = {
    name: prompt("Enter your name:"),
    email: prompt("Enter your email:"),
    age: prompt("Enter your age:"),
    password: prompt("Enter your password:"),
    country: prompt("Enter your country:"),
    salary: prompt("Enter your salary:") * 12
};

function showInfo(something){
    for(const val in something) {
        console.log(`${val}: ${something[val]}`);
        document.getElementById("info").innerHTML+=`<p>${val.toUpperCase()}: ${something[val]}.</p>`
    }
}

showInfo(person);

var userDB="admin@gmail.com"
var passDB="admin123"

function login(){
    var userName = prompt("Enter your Username:")
    var userPass = prompt("Enter your Password:")
    if(userName == userDB && userPass == passDB){
        document.write(`<p>Welcome to the system ${userName}</p>`)
    }
    else{
        alert("Incorrect info")
    }
}

