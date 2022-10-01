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

  // identifies how many character types we need to divide the 
  //password length by:
  var splitBetween = 0;
  if (passUpp) {splitBetween += 1;}
  if (passLow) {splitBetween += 1;}
  if (passNum) {splitBetween += 1;}
  if (passSpe) {splitBetween += 1;}  
  console.log(splitBetween);

  var perChar = Math.floor(passLen / splitBetween);
  console.log(perChar);



  function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  function randomSymbol() {
    const symbols = "!@#$%^&*()<>?_+,./-="
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function makePassword(j) {
    var generatedPassword = ""
    for (i = 0; i < j; i++) {
      if (passUpp) {
        generatedPassword = generatedPassword.concat(randomLetter().toUpperCase());
      }
      if (passLow) {
        generatedPassword = generatedPassword.concat(randomLetter());
      }
      if (passNum) {
        generatedPassword = generatedPassword.concat(Math.floor(Math.random() * 10) );
      }
      if (passSpe) {
        generatedPassword = generatedPassword.concat(randomSymbol());
      }
    }
    return generatedPassword;
  }
  console.log(makePassword(perChar));

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
