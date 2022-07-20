var indicatorLower = 0;
var indicatorUpper = 0;
var indicatorSC = 0;
var indicatorN = 1;
var pwLength = 10; 

var lowercaseLetters = "";
var uppercaseLetters = "";
var specialLetters = "";
var numeric = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Get a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

var passwordGenerator = function(pwLength){
  var pwLetter = " ";

  if (indicatorLower){
    lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  };
  if (indicatorUpper){
    uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };
  if (indicatorSC) {
    specialLetters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  };
  if (indicatorN) {
    numeric = "0123456789";
  };

  var characters = lowercaseLetters + uppercaseLetters + specialLetters + numeric;
  var charactersLength = characters.length;
  
  for (let i=0; i < pwLength; i++){
    pwLetter += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return pwLetter;
};

// Generate password based on criteria
var generatePassword = function(){
  
  var criteria = window.prompt("Choose which criteria to include in the password. Enter 'Length' or 'Lowercase' or 'Uppercase' or 'Numeric' or 'Special Character' to choose. ");
  
  if (criteria == "Length") {
    pwLength = window.prompt("Enter a number for the length of password at least 8 characters and no more than 128 characters. For example, 8.");
    
    if (Number.isInteger(parseInt(pwLength))) {
      return passwordGenerator(parseInt(pwLength));
    } else {
      window.alert("You did not enter a number. Try again.");

    }
  } else if (criteria == "Lowercase") {
    var confirmL = window.confirm("Would you like to include lowercase in password?");
    
    if (confirmL) {
      indicatorLower = 1;
      pwConfirm = window.confirm("Ready to generate your password OR want to choose other criteria?");
      if (pwConfirm) {
        return passwordGenerator(pwLength);
      }
    } else {
      window.alert("Your password will not include lowercase. ");
      };
  } else if (criteria == "Uppercase") {
    var confirmU = window.confirm("Would you like to include uppercase in password?");
     
    if (confirmU) {
      indicatorUpper = 1;
      pwConfirm = window.confirm("Ready to generate your password OR want to choose other criteria?");
      if (pwConfirm) {
        return passwordGenerator(pwLength);
      }
    } else {
      window.alert("Your password will not include uppercase.");
      };
  } else if (criteria == "Special Character") {
    var confirmSC = window.confirm("Would you like to include special character in password?");
     
    if (confirmSC) {
      indicatorSC = 1;
      pwConfirm = window.confirm("Ready to generate your password OR want to choose other criteria?");
      if (pwConfirm) {
        return passwordGenerator(pwLength);
      }
    } else {
      window.alert("Your password will not include special character.");
      };
  } else if (criteria == "Numeric") {
    var confirmN = window.confirm("Would you like to include numeric in password?");
     
    if (confirmN) {
      indicatorN = 1;
      pwConfirm = window.confirm("Ready to generate your password OR want to choose other criteria?");
      if (pwConfirm) {
        return passwordGenerator(pwLength);
      }
    } else {
      window.alert("Your password will not include numeric.");
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
