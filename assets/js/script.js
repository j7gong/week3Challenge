var indicatorLower = 0;
var indicatorUpper = 0;
var indicatorSC = 0;
var indicatorN = 0;
var pwLength = 0; 

var lowercaseLetters = "";
var uppercaseLetters = "";
var specialLetters = "";
var numeric = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Get a random numeric value
var passwordGenerator = function(pwLength){
  var pwLetter = " ";
  
  if (indicatorLower === 0 && indicatorUpper===0 && indicatorSC===0 && indicatorN===0) {
    window.alert("None of criteria is chosen! At least one character type should be included.");
    generatePassword();
  } else {
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
  }

  var characters = lowercaseLetters + uppercaseLetters + specialLetters + numeric;
  var charactersLength = characters.length;
  
  for (let i=0; i < pwLength; i++){
    pwLetter += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return pwLetter;
};
// Criteria confirm process
var criteriaCOnfirm = function(){
  pwConfirm = window.confirm("Ready to generate your password OR want to choose other criteria?");
  if (pwConfirm) {
    return passwordGenerator(pwLength);
  } else {
    generateCriteria();
  }
};

// Generate password criteria
var generateCriteria = function(){

  var criteria = window.prompt("Choose which criteria to include in the password. Enter 'Lowercase' or 'Uppercase' or 'Numeric' or 'Special Character' to choose. ");

  if (criteria == "Lowercase") {
      var confirmL = window.confirm("Would you like to include lowercase in password?");
      
      if (confirmL) {
        indicatorLower = 1;
        
        return criteriaCOnfirm();
     
      } else {
        window.alert("Your password will not include lowercase. Please choose other criteria.");
        generateCriteria();
        };
    } else if (criteria == "Uppercase") {
      var confirmU = window.confirm("Would you like to include uppercase in password?");
      
      if (confirmU) {
        indicatorUpper = 1;
        return criteriaCOnfirm();
      } else {
        window.alert("Your password will not include uppercase. Please choose other criteria.");
        generateCriteria();
        };
    } else if (criteria == "Special Character") {
      var confirmSC = window.confirm("Would you like to include special character in password?");
      
      if (confirmSC) {
        indicatorSC = 1;
        return criteriaCOnfirm();
      } else {
        window.alert("Your password will not include special character. Please choose other criteria.");
        generateCriteria();
        };
    } else if (criteria == "Numeric") {
      var confirmN = window.confirm("Would you like to include numeric in password?");
      
      if (confirmN) {
        indicatorN = 1;
        return criteriaCOnfirm();
      } else {
        window.alert("Your password will not include numeric. Please choose other criteria.");
        generateCriteria();
        };
    } else if (criteria == "" || criteria == null) {
      pwConfirm = window.confirm("None of criteria is chosen! At least one character type should be included. Retry or quit?");
      if (pwConfirm){
        generateCriteria();
      } else {
        return;
      }
    } else {
      window.alert("Please enter listed valid criteria to continue.");
      generateCriteria();
    }
}
// Generate password based on criteria
var generatePassword = function(){
  
  inputLength = window.prompt("Enter a number for the length of password at least 8 characters and no more than 128 characters. For example, 8.");
  intLength = parseInt(inputLength)  
  if (Number.isInteger(intLength)) {
    if (intLength > 7 && intLength < 129){
      pwLength = intLength;
    } else {
      confirmRetry = window.confirm("Your number does not sit in range specified. Try again?");
      if (confirmRetry){
        generatePassword();
      } else {
        return;
      }
    }
  } else {
    confirmRetry = window.confirm("You did not enter a number. Try again?");
    if (confirmRetry){
      generatePassword();
    } else {
      return;
    }
  };
  
  return generateCriteria();
  
  };

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
