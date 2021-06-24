window.onload = function () {
    document.getElementById('btn').addEventListener('click', function () {
        validate()
    });

    function validate() {
        var names = document.forms["sendMessage"]["name"].value;
        var email = document.forms["sendMessage"]["email"].value;
        var message = document.forms["sendMessage"]["message"].value;
        atposition = email.indexOf("@");
        dotposition = email.lastIndexOf(".");

        if (email == "" || names == "" || message == "") {
            alert("Please fill out all fields");
            return false;
        } else if (atposition < 1 || (dotposition - atposition < 2)) {
            alert("Please enter correct email")
            email.focus();
            return false;
        } else if (names.length < 3 || names.length > 35) {
            alert("Please enter correct name");
            names.focus();
            return false;
        } else {
            alert('Message Sent')
            reset();
        }
        return true;
    }

    function reset() {
        location.reload();
    }


}
function myFunction() {
    // Declare variables
    var input, filter, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }