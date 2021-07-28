for(var i = 0; i <= 10; i++){
    document.getElementById('grid-container').innerHTML+=`<p class="bordered">Description ${i}</p>`
}
console.log("Container...");


var numOfChildren = 32;
var partnersName = "Crazy";
var geoLocation = "Mars";
var jobTitle = "Pencil Sharpener";

document.getElementById("fortune").innerHTML=`<p>You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numOfChildren} kids.`;


// var name = "joe"
// var email = "an_email@email.com"
// var age = 527
// var password = "password"
// var country = "All of Them"
// var salary = 1

var person = {
    name: "joe",
    email: "an_email@email.com",
    age: 527,
    password: "password",
    country: "All of Them",
    salary: 5 * 12
};

function showInfo(val){
    for(const val in person) {
        console.log(`${val}: ${person[val]}`);
        document.getElementById("info").innerHTML+=`<p>${val.toUpperCase()}: ${person[val]}.</p>`
    }
}

showInfo(person)


