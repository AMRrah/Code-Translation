function loginpage() {
  // Get form values
  var email = document.forms["loginform"]["email"].value;
  var password = document.forms["loginform"]["password"].value;

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  // All validations passed
  // alert("Login Successful!");
  // return true;
}
