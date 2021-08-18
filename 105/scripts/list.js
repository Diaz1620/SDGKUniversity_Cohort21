function displayUsers(users){
    // travel the array
    for(let i=0;i<users.length;i++){
        // get each user
        let user = users[i];
        // display the user
        let syntax=`
            <tr>
                <td> ${user.firstName} </td>
                <td> ${user.lastName} </td>
                <td> ${user.username} </td>
                <td> ${user.email} </td>
                <td> ${user.address}, ${user.city}, ${user.state} </td>
                <td> ${user.age} </td>
                <td> ${user.method} </td>
                <td> ${user.color} </td>
            </tr>
        `;
        $("#tblUsers").append(syntax);
        // append the user to the DOM
    }
}


function init(){
    console.log("Listing users");
    var users=readUsers(); //this fn is on  the storeManager
    displayUsers(users);
    $("#btnClear").click(function(){
        clearUsers();
        location.reload();
    });
}

window.onload=init;