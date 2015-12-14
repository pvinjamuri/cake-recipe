
function changeMySize() {
    //document.getElementById('demo').innerHTML = Date();
    var x = document.body;
    x.style.fontSize = "25px";           
    //x.style.color = "green"; 
}


function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var email = document.forms["myForm"]["email"].value;
    if (name == null || name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == null || email == "") {
        alert("Email must be filled out");
        return false;
    }
    alert ("Thanks " + name + 
        "!");
}


