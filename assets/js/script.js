// Initiate indicator to determine if criteria needs to be included in password

var indicatorLower = localStorage.getItem("indicatorLower");
var lowercaseLetters = localStorage.getItem("lowercaseLetters");

if (indicatorLower == null) {
  
  localStorage.setItem("lowercaseLetters", "");
}

var indicatorUpper = localStorage.getItem("indicatorUpper");
var uppercaseLetters = localStorage.getItem("uppercaseLetters");

if (indicatorUpper == null) {
  
  localStorage.setItem("uppercaseLetters", "");
}

var indicatorSC = localStorage.getItem("indicatorSC");
var specialLetters = localStorage.getItem("specialLetters");

if (indicatorSC == null) {
  
  localStorage.setItem("specialLetters", "");
}

var indicatorN = localStorage.getItem("indicatorN");
var numeric = localStorage.getItem("numeric");

if (indicatorN == null) {
  
  localStorage.setItem("numeric", "");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Reset criteria indicator once user generated password
var refreshCriteria = function () {
  localStorage.clear();
}

// Get a random numeric value
var passwordGenerator = function(pwLength){

  var pwLetter = " ";
  
  if (localStorage.getItem("indicatorLower") == null && localStorage.getItem("indicatorUpper")==null && localStorage.getItem("indicatorSC") ==null && localStorage.getItem("indicatorN")==null) {
    window.alert("None of criteria is chosen! At least one character type should be included.");
    generatePassword();
  } else {
    
    if (localStorage.getItem("indicatorLower") !== null){
      localStorage.setItem("lowercaseLetters", "abcdefghijklmnopqrstuvwxyz");
    };

    if (localStorage.getItem("indicatorUpper") !== null){
      localStorage.setItem("uppercaseLetters", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    };

    if (localStorage.getItem("indicatorSC") !== null) {
      localStorage.setItem("specialLetters", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
    };

    if (localStorage.getItem("indicatorN") !== null) {
      localStorage.setItem("numeric", "0123456789");
    };

  }
  
  // null value in js has been converted as string "null" so need to get rid of that
  var characters = [localStorage.getItem("lowercaseLetters"), localStorage.getItem("uppercaseLetters"), localStorage.getItem("specialLetters"), localStorage.getItem("numeric")].join("");
  var charactersLength = characters.length;
  
  for (let i=0; i < pwLength; i++){
    pwLetter += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return pwLetter;
};

// Criteria confirm process
var criteriaConfirm = function(){
  pwConfirm = window.confirm("Ready to generate your password OR include another criteria?");
  if (pwConfirm) {

    return passwordGenerator(pwLength);
    
  } else {
    return generateCriteria();
  };
};

// Generate password criteria
var generateCriteria = function(){
  
  var criteria = window.prompt("Choose which criteria to include in the password. Enter 'Lowercase' or 'Uppercase' or 'Numeric' or 'Special Character' to choose. ");

  if (criteria == "Lowercase") {
      var confirmL = window.confirm("Would you like to include lowercase in password?");
      
      if (confirmL) {
        localStorage.setItem("indicatorLower", 1);
        
      } else {
        window.alert("Your password will not include lowercase. Please choose other criteria.");
        generateCriteria();
        };
    } else if (criteria == "Uppercase") {
      var confirmU = window.confirm("Would you like to include uppercase in password?");
      
      if (confirmU) {
        localStorage.setItem("indicatorUpper", 1);

      } else {
        window.alert("Your password will not include uppercase. Please choose other criteria.");
        generateCriteria();
        }
    } else if (criteria == "Special Character") {
      var confirmSC = window.confirm("Would you like to include special character in password?");
      
      if (confirmSC) {
        localStorage.setItem("indicatorSC", 1);
      } else {
        window.alert("Your password will not include special character. Please choose other criteria.");
        generateCriteria();
        };
    } else if (criteria == "Numeric") {
      var confirmN = window.confirm("Would you like to include numeric in password?");
      
      if (confirmN) {
        localStorage.setItem("indicatorN", 1);
        
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

  return criteriaConfirm();

}
// Generate password based on criteria
var generatePassword = function(){
  
  refreshCriteria();

  inputLength = window.prompt("Enter a number for the length of password at least 8 characters and no more than 128 characters. For example, 8.");
  intLength = parseInt(inputLength)  

  if (Number.isInteger(intLength)) {
    if (intLength > 7 && intLength < 129){
      pwLength = intLength;

      return generateCriteria();

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
  
};

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
