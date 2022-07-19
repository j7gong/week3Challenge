// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Get a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

// Generate password based on criteria
var generatePassword = function(){

  var pwLength = window.prompt("Enter a number for the length of password at least 8 characters and no more than 128 characters. For example, 8.")
  
  if (Number.isInteger(parseInt(pwLength))) {
    
    password = new Array();

    for(let i=0; i<pwLength; i++){
      password[i] = randomNumber(0, 9);
    }
    return password.toString().replace(/,/g, '');

  } else {
    window.alert("You did not enter a number. Try again.");
    
  }
};

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
