function validateForm(){
    let registerValue=document.getElementById("validationForm");
    let name=registerValue.elements["name"].value;
    let Email=registerValue.elements["Email"].value;
    let password=registerValue.elements["password"].value;
    let passwordNew=registerValue.elements["passwordnew"].value;
//console.log(name.length);
//console.log(password.length);

    if(name.length<5){
        alert("Enter Your Full Name");
    }
    else if(Email==null || Email==""){
        alert("email cannot be empty")
    }
    else if(password.length<8){
        alert("Add Special characters")
    }
    else if(password!=passwordNew){
        alert("Incorrect Password ")
    }
}