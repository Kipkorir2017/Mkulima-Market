function validatemyForm() {
    var name = document.getElementById("myForm")("name").value;
    var email = document.getElementById("myForm")("email").value;
    var password = document.getElementById("myForm")("psw").value;
    var location =document.getElementById("myForm")("location").value;
    atpos=email.indexof("@");
    dotpos = email.lastIndexOf(".");
    submitOK = "true";
    if (name.length<5) {
        alert("The name may have no more than 8 characters");
        submitOK = "false";
      }
      if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        return false;
     }
      if (password.length < 6) {
        alert("password must be more than 6 characters");
        submitOK = "false";
}
if (location.length <=2) {
    alert("invalid location");
    submitOK = "false";
  }
if (submitOK == "false") {
    return false;
  }
}