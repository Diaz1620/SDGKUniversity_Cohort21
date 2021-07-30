var cart=["Laptop hp 17","Alexa dot","Aipods","Wallet"];
console.log(cart);

for(let i=0;i<cart.length;i++){
    console.log(cart[i]);
    document.write(`<p>The product number ${i+1}: ${cart[i]}</p>`)
}

let points=1000;
let login=true;

if(points===1000){
    console.log("YES");
}else{
    console.log("No");
}

if(login){
    console.log("Welcome to the system");
}

let cash=500;
let card=false;
let total=600;
var cart=["Laptop hp 17","Alexa dot","Aipods","Wallet"];

function transaction(){
    for(let i=0;i<cart.length;i++){
        console.log(cart[i]);
        document.write(`<p>The product number ${i+1}: ${cart[i]}</p>`)
    }
}

// if(cash>=total){
//     console.log("Sucessful Transaction");
//     transaction();
// }else if(card){
//     console.log("Sucessful transaction wiith credit/debit card");
//     transaction();
// }else{
//     console.log("Fail!!");
// }

const paymentMethod="Cash";

switch(paymentMethod){
    case "Cash":
        transaction();
        break;
    case "Credit":
        transaction();
        break;
    default:
        document.write("Incorrect transaction");
        break;
}