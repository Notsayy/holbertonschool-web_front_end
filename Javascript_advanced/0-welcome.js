function welcome(firstName, lastName) {
  fullName = firstName + " " + lastName;
  function displayFullName() {
    console.log("Welcome " + fullName + "!");
  }
  displayFullName();
}
