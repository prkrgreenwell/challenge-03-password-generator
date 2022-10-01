// Assignment code here
function generatePassword() {
  //TO DO Make prompt boxes for each kind of character that will 
  // be in the password
  var passUpp = confirm("Do you want upper-case letters in your password?");
  var passLow = confirm("Do you want lower case letters in your password?");
  var passNum = confirm("Do you want numeric characters in your password?");
  var passSpe = confirm("Do you want special characters in your password");
  var passLen = Number(prompt("How many characters do you want your password to be?"));
  
  while (passLen < 8 || passLen > 128) {
    var passLen = prompt("Password length must be a number between 8 and 128. How many characters do you want your password to be?");
  }

  console.log(typeof passLen);


  //TO DO Create Booleans for each character type

  //TO DO Generate the password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
