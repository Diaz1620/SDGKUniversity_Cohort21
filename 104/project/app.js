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
    pets:[]
};

class Pet{
    constructor(name,age,gender,breed,service,ownerName,contactPhone){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone
    }
}

function displayInfo(){
    document.getElementById("footer-site").innerHTML=`
    <p>${salon.name}</p>
    <p>${salon.address.number} ${salon.address.street}, ${salon.address.city}, ${salon.address.state}, ${salon.telephone}</p>
    <p>The salon is open from ${salon.hour.open} to ${salon.hour.close}</p>
    `;
};

function register(){
    // create the vars and store the values from the inputs
    var nameInput = document.getElementById("petName").value;
    var ageInput = document.getElementById("petAge").value;
    var genderInput = document.getElementById("petGender").value;
    var breedInput = document.getElementById("petBreed").value;
    var serviceInput = document.getElementById("petService").value;
    var ownerNameInput = document.getElementById("ownerName").value;
    var contactPhone = document.getElementById("contactPhone").value;
    // console.log(nameInput, ageInput, genderInput, breedInput, serviceInput, ownerNameInput, contactPhone);
    // create the object
    var thePet = new Pet(nameInput,ageInput,genderInput,breedInput,serviceInput,ownerNameInput,contactPhone);
    // console.log(thePet);
    // push to the object
    salon.pets.push(thePet);
    console.log(salon.pets);
    clearInput();
    // displayPetsCard()
    displayPetsTable()
}

function clearInput(){
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("petService").value="";
    document.getElementById("ownerName").value="";
    document.getElementById("contactPhone").value="";
}

function displayPetsCard(){
    var temp = "";
    for(pet in salon.pets){
        temp +=`
        <div class="pet">
            <h3> Name: ${salon.pets[pet].name} </h3>
            <p> Age: ${salon.pets[pet].age} </p>
            <p> Gendeer: ${salon.pets[pet].gender} </p>
            <p> Breed: ${salon.pets[pet].breed} </p>
            <p> Service: ${salon.pets[pet].service} </p>
            <p> Owner Name: ${salon.pets[pet].ownerName} </p>
            <p> Contact Number: ${salon.pets[pet].contactPhone} </p>
            </div>`;
    }
    document.getElementById('pets').innerHTML = temp;
}

function displayPetsTable(){
    var temp = ``;
    for(let idx = 0; idx < salon.pets.length; idx++){
        temp += `
            <tr id="loadTable">
                <td scope="row">${salon.pets[idx].name}</td>
                <td scope="row">${salon.pets[idx].gender}</td>
                <td scope="row">${salon.pets[idx].breed}</td>
                <td scope="row"><button onclick="deletePet(${idx});" class="btn btn-danger">Delete</button> | <button class="btn btn-primary">Edit</button></td>
            </tr>
        `
    }
    document.getElementById(`table-body`).innerHTML = temp;
    // console.log(salon.pets);

}

function deletePet(idx){
    salon.pets.splice(idx, 1);
    console.log(salon.pets);
    displayPetsTable();
}



function init(){
    let scooby = new Pet("Scooby",60,"Male","Dane","Full Service","Shaggy","555-555-5555");
    let scrappy = new Pet("Scrappy",50,"Male","Dane","Nails Cut","Shaggy","555-555-5555");
    let tweety = new Pet("Tweety",20,"Female","Bird","Feather Fluff","Old Lady","555-555-5554");
    let monty = new Pet("Monty",10,"Male","Python","De-fang","Florida Man","555-555-3333");
    salon.pets.push(scooby,scrappy,tweety,monty)
    displayPetsTable()
    displayInfo();
}
window.onload=init;




// {   name:"Scooby",
// age:60,
// gender:"Male",
// breed:"Dane",
// service:"Full Service",
// ownerName:"Shaggy",
// contactPhone:"555-555-5555"
// },
// {   name:"Scrappy",
// age:50,
// gender:"Male",
// breed:"Dane",
// service:"Nails Cut",
// ownerName:"Shaggy",
// contactPhone:"555-555-5555"
// },
// {   name:"Tweety",
// age:20,
// gender:"Female",
// breed:"Bird",
// service:"Fluff Feathers",
// ownerName:"Old Lady",
// contactPhone:"555-555-5554"
// },
// {   name:"Monty",
// age:10,
// gender:"Male",
// breed:"Python",
// service:"De-Fang",
// ownerName:"Person",
// contactPhone:"555-555-3333"
// }




// for(pet in salon.pets){
//     console.log(salon.pets);
//     document.write(`<p>Pet Name: ${salon.pets[pet].name}</p>`)
// }

//     document.write(`<p>We have ${salon.pets.length} pets</p>`);


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

// for(pet in salon.pets){
//     document.getElementById("table-body").innerHTML+=`
//         <tr>
            
//             <td scope="row">${salon.pets[pet].name}</td>
//             <td scope="row">${salon.pets[pet].gender}</td>
//             <td scope="row">${salon.pets[pet].breed}</td>
//         </tr>
//     `
// }
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


