function validateForm() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var location =document.getElementById("location").value;

    if (name == ""|| password =="" ||location==""||email =="") {
      alert("Filled out this Field");
      return false;
    }
    // else{
    //     if("name >3 &&<35")
    // }
}