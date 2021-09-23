// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\"," ^ ",_", "{", "|", "}", "~"]
var password = "";
var availablechars = []

function writePassword() {
  // takeing the length of the password
  var passwordLength = window.prompt("select length between 8 to 128 ")
  if (passwordLength < 8) {
    window.alert(" charecters are not in between 8 to 128")
  } else if (passwordLength > 128) {
    window.alert(" charecters are not in between 8 to 128")
  } else {
    //takeing the confirmation of chararters that need to include 
    var upperCaseconf = window.confirm(" do you need Uppercase?")
    if (upperCaseconf == true) {
      window.alert("Uppercase included ")
    } else {}
    var lowerCaseconf = window.confirm(" do you need Lowercase?")
    if (lowerCaseconf == true) {
      window.alert("Lowercase included  ")
    } else {}
    var symbolSconf = window.confirm(" do you need Symbols?")
    if (symbolSconf == true) {
      window.alert("Symbol included  ")
    } else {}
    var numberconf = window.confirm(" do you need Numbers?")
    if (numberconf == true) {
      window.alert("Numbers included  ")
    } else {}
    if (upperCaseconf == false && lowerCaseconf == false && symbolSconf == false && numberconf == false) {
      window.confirm(" at least one option should be selected")
    } else {
      //concting(combing) the selected chararters 
      if (upperCaseconf == true) {
        availablechars = availablechars.concat(uppercase)
      }
      if (lowerCaseconf == true) {
        availablechars = availablechars.concat(lowercase)
      }
      if (symbolSconf == true) {
        availablechars = availablechars.concat(symbol)
      }
      if (numberconf == true) {
        availablechars = availablechars.concat(number)
      }
      for (i = 1; i <= passwordLength; i++) {
        var index = Math.floor(Math.random() * availablechars.length);
        password += availablechars[index];
      }
    }
  }
   //retun statment that displays text on html page   
  document.querySelector('#password').value = password;
  console.log("Password", password);
}

// listener to generate button
generateBtn.addEventListener("click", writePassword)
