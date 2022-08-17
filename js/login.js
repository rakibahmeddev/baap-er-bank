// step 1: add click event handler with the login button
document
  .getElementById("login-submit")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // step 2: get the email address from the input filed
    const emailField = document.getElementById("user-email");
    const email = emailField.value;

    // step 3: get the password from the input filed
    const passwordFiled = document.getElementById("user-password");
    const password = passwordFiled.value;

    // step 4: verify email and password
    if (email == "hero@alom.com" && password == "admin") {
      location.href = "bank.html";
    } else {
      alert("invalid user");
    }

    // step 5: clear input filed
    emailField.value = "";
    passwordFiled.value = "";
  });
