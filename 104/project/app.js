var salon={
    name:"The Fashion Pet",
    telephone: "555-555-5555",
    address:{
        street:"Palm",
        number:"345",
        city:"Santa Monica",
        state:"CA"
    },
    hour:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
        {   name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Full Service",
            ownerName:"Shaggy",
            contactPhone:"555-555-5555"
        },
        {   name:"Scrappy",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"Nails Cut",
            ownerName:"Shaggy",
            contactPhone:"555-555-5555"
        },
        {   name:"Tweety",
            age:20,
            gender:"Female",
            breed:"Bird",
            service:"Fluff Feathers",
            ownerName:"Old Lady",
            contactPhone:"555-555-5554"
        },
        {   name:"Monty",
            age:10,
            gender:"Male",
            breed:"Python",
            service:"De-Fang",
            ownerName:"Person",
            contactPhone:"555-555-3333"
        }
    ]
};
    
for(pet in salon.pets){
    console.log(salon.pets);
    document.write(`<p>Pet Name: ${salon.pets[pet].name}</p>`)
}

    document.write(`<p>We have ${salon.pets.length} pets</p>`);


// var scoopy={
    //     name:"Scooby",
    //     age:60,
    //     gender:"Male",
    //     breed:"Dane",
    //     service:"Full Service",
    //     ownerName:"Shaggy",
    //     contactPhone:"555-555-5555"
    // }
    
    // document.write("We have " +salon.pets.length+ " pets");

function displayInfo(){
    document.getElementById("footer-site").innerHTML=`
    <p>${salon.name}</p>
    <p>${salon.address.number} ${salon.address.street}, ${salon.address.city}, ${salon.address.state}, ${salon.telephone}</p>
    <p>The salon is open from ${salon.hour.open} to ${salon.hour.close}</p>
    `;
};

displayInfo();








// console.log("help");
// // object literal
// const person={
//     name: "Angel",
//     city: "New York",
//     age: 27,
//     student: true,
//     music:['Coldplay',"Oasis","Beatles"],
//     address:{
//         street: "University",
//         number:"262-K"
//     }
// }
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
// console.log(person.music[1]);
// console.log(person.address.street);

for(pet in salon.pets){
    document.getElementById("table-body").innerHTML+=`
        <tr>
            
            <th scope="row">${salon.pets[pet].name}</th>
            <th scope="row">${salon.pets[pet].gender}</th>
            <th scope="row">${salon.pets[pet].breed}</th>
        </tr>
    `
}
// for(let i = 0; i<salon.pets.length; i++){
//     document.getElementById("table-body").innerHTML+=`
//         <tr>
//             <th scope="row">${i+1}</th>
//             <th scope="row">${salon.pets[i].name}</th>
//             <th scope="row">${salon.pets[i].gender}</th>
//             <th scope="row">${salon.pets[i].breed}</th>
//         </tr>
//     `
// }