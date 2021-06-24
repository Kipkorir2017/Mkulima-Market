function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value.indexOf("@");
    var password = document.getElementById("password").value;
    var location =document.getElementById("location").value;
    submitOK = "true";

    // if (name == ""|| password =="" ||location==""||email =="") {
    //   alert("Filled out this Field");
    //   return false;
    // }
    if (name.length > 8) {
        alert("The name may have no more than 8 characters");
        submitOK = "false";
      }
      if ( email== -1) {
        alert("Not a valid e-mail!");
        submitOK = "false";
      }
      if (password> 6) {
        alert("password must be more than 6 characters");
        submitOK = "false";
}
if (location.length <3) {
    alert("invalid location");
    submitOK = "false";
  }
if (submitOK == "false") {
    return false;
  }
}