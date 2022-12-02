function validate(){
    if(document.myForm.id.value==""){
        document.getElementById("idErr").innerHTML="Please enter your name";
        return false;
    }
    if(document.myForm.firstname.value==""){
        document.getElementById("firstnameErr").innerHTML="Please enter your name";
        return false;
    }
    if(document.myForm.lastname.value==""){
        document.getElementById("lastnameErr").innerHTML="Please enter your name";
        return false;
    }
    if(document.myForm.dept.value==""){
        document.getElementById("deptErr").innerHTML="Please enter your name";
        return false;
    }
    if(document.myForm.position.value==""){
        document.getElementById("posErr").innerHTML="Please enter your name";
        return false;
    }

    if(document.myForm.email.value==""){
    document.getElementById("emailErr").innerHTML = "Please input valid email";
    return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.email.value)==false){
            alert("Please enter a valid email address");
            return false;
        }
    }
}