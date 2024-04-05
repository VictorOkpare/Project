
  function personalValidate(e) {
    e.preventDefault();
    let personName = document.getElementById("user").value;
    let personalEmail = document.getElementById("email").value;
    let personMale = document.getElementById("male");
    let personFemale = document.getElementById("female");
    let personOther = document.getElementById("other");
    let isValid = true;
    if (personName === "") {
      isValid = false;
      document.getElementById("message").innerHTML = "Username is required!";
    }
    if (!isNaN(personName)) {
      isValid = false;
      document.getElementById("message").innerHTML = "Wrong username format!";
    }
    if (
      personMale.checked === false &&
      personFemale.checked === false &&
      personOther.checked === false
    ) {
      isValid = false;
      document.getElementById("sex").innerHTML = "Gender is required!";
    }
    let emailValidator = personalEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    console.log(emailValidator);
    if (!emailValidator) {
      isValid = false;
      document.getElementById("e-mail").innerHTML = "Invalid e-mail format!";
    }
    if (isValid) {
      window.open("../index.html");
    }
  }
