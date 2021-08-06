let arr = ["string1", "string2", "string3", "string4", "string5"]

for(str in arr){
    console.log(arr[str]);
}

let clientel = [
    user={
        name: "Angel",
        number: "000-000-0000",
        email: "test@.com",
        id: 001
    },
    user1={
        name: "Josh",
        number: "222-222-2222",
        email: "josh@.com",
        id: 002
    },
    user2={
        name: "Andy",
        number: "111-111-1111",
        email: "andy@.com",
        id: 003
    }
    
]

for(client in clientel){
    console.log(clientel[client].name);
    document.getElementById("list").innerHTML+=`<li>${clientel[client].name}</li>`
}