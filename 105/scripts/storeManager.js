function saveUser(user){
    // load old data
    let data = readUsers();
    // merge
    data.push(user);

    // save
    localStorage.setItem("users",JSON.stringify(data));
    
}

function readUsers(){
    let data = localStorage.getItem("users");
    if(!data){ // if local storage is empty then
        return [];//create an array
    }
    else{
        let list = JSON.parse(data);// parse string back into object
        return list;
    }
    
}

function clearUsers(){

}

function clearData(){
    localStorage.clear();
}