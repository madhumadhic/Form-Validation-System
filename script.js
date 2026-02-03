document.getElementById("regForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload

    // get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // error flags
    let isValid = true;

    // clear previous errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    // name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
    }

    // email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email";
        isValid = false;
    }

    // password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }

    // final check
    if (isValid) {
        alert("Registration Successful!");
        // form.submit(); // use this if backend exists
    }
});
