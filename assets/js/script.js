// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Get a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

// Generate password based on criteria
var generatePassword = function(){
  var criteria = window.prompt("Choose which criteria to include in the password. Enter 'Length' or 'Lowercase' or 'Uppercase' or 'Special Character' to choose. ");
  
  if (criteria == "Length") {
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
  } else if (criteria == "Lowercase") {
    var confirmLowercase = window.confirm("Would you like to include lowercase in password?");
     
    if (confirmLowercase) {
      var pwLetter = " ";
      var characters = "abcdefghijklmnopqrstuvwxyz";
      var charactersLength = characters.length;
      var length = 10;
      for (let i = 0; i < length; i++ ) {
        pwLetter += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return pwLetter;
    } else {
      window.alert("Your password will not include lowercase.");
      };
  } else if (criteria == "Uppercase") {
    var confirmUppercase = window.confirm("Would you like to include uppercase in password?");
     
    if (confirmUppercase) {
      var pwLetter = " ";
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var charactersLength = characters.length;
      var length = 10;
      for (let i = 0; i < length; i++ ) {
        pwLetter += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return pwLetter;
    } else {
      window.alert("Your password will not include uppercase.");
      };
  } else if (criteria == "Special Character") {
    var confirmSC = window.confirm("Would you like to include special character in password?");
     
    if (confirmSC) {
      var pwLetter = " ";
      var characters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      var charactersLength = characters.length;
      var length = 10;
      for (let i = 0; i < length; i++ ) {
        pwLetter += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return pwLetter;
    } else {
      window.alert("Your password will not include special character.");
      };
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
