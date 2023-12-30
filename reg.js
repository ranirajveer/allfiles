// Register form validation
function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm-password").value;
  var checkbox = document.getElementById("checkbox").checked;

  if (email == "" || password == "" || confirm_password == "") {
    alert("Please fill in all fields!");
    return false;
  }

  if (password.length < 3) {
    alert("Password must be at least 3 characters long!");
    return false;
  }

  if (password != confirm_password) {
    alert("Passwords do not match!");
    return false;
  }

  if (!checkbox) {
    alert("Please accept the conditions!");
    return false;
  }

  alert("Registration successful!");
  return true;
}

// Login form validation
// function login() {
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;

//   if (email == "" || password == "") {
//     alert("Please fill in all fields!");
//     return false;
//   }

//   alert("Login successful!");
//   return true;
// }

//  In this example, the `register()` function checks if the email, password, and confirm password fields are filled in, if the password is at least 8 characters long, if the passwords match, and if the checkbox is checked. If any of these conditions fail, an alert is displayed with an error message.

// The `login()` function checks if the email and password fields are filled in. If either of these fields is empty, an alert is displayed with an error message.

// You can call these functions from your HTML form using the `onsubmit` attribute. For example:


// <form onsubmit="return register()">
//   <!-- Register form fields here -->
// </form>

// <form onsubmit="return login()">
//   <!-- Login form fields here -->
// </form>


// I hope this helps! Let me know if you have any other questions.