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
  var leftOver = passLen % splitBetween;
  console.log(perChar);
  console.log(leftOver);


// These functions generate random characters
  function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  function randomSymbol() {
    const symbols = "!@#$%^&*()<>?_+,./-="
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

// Will generate a password of length [types of characters] * [perChar]
  function makePassword(j) {
    var password = "";
    for (i = 0; i < j; i++) {
      if (passUpp) {
        password = password.concat(randomLetter().toUpperCase());
      }
      if (passLow) {
        password = password.concat(randomLetter());
      }
      if (passNum) {
        password = password.concat(Math.floor(Math.random() * 10) );
      }
      if (passSpe) {
        password = password.concat(randomSymbol());
      }
    }
    return password;
  }

  //Finishes off the password to get to desired length
  function finishPassword(j) {
    var password = "";
    if (j != 0) {
      if (passUpp) {
        password = password.concat(randomLetter().toUpperCase());
      }
      j--;
    }
    if (j != 0) {
      if (passLow) {
        password = password.concat(randomLetter());
      }
      j--;
    }
    if (j != 0) {
      if (passNum) {
        password = password.concat(Math.floor(Math.random() * 10) );
      }
      j--;
    }
    if (j != 0) {
      if (passSpe) {
        password = password.concat(randomSymbol());
      }
      j--;
    }
    return password;
  }    
  
  console.log(makePassword(perChar));
  console.log(finishPassword(leftOver));

  password1 = makePassword(perChar).concat(finishPassword(leftOver));
  console.log(password1);

  //One last randomizer of the characters for good measure
  function randomizePassword(j) {
    var startingPassword = j;
    var characterArray = startingPassword.split("");
    var finalPassword = "";

    for (var i = 0; i < j.length; i++) {
      var rand = Math.floor(Math.random() * characterArray.length);
      finalPassword = finalPassword.concat(characterArray[rand]);
      characterArray.splice(rand, 1);
    }
    return finalPassword
  }
  
  password2 = randomizePassword(password1);
  console.log(password2);
  return password2;
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
