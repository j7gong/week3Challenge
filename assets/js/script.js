// var indicatorLower = 0;
// var indicatorUpper = 0;
// var indicatorSC = 0;
// var indicatorN = 0;
// var pwLength = 0; 

var indicatorLower = localStorage.getItem("indicatorLower");
var lowercaseLetters = localStorage.getItem("lowercaseLetters");

if (indicatorLower == null) {
  // localStorage.setItem("indicatorLower", 0);
  localStorage.setItem("lowercaseLetters", "");
}

console.log("init lowercaseIndicator: ", localStorage.getItem("indicatorLower"));

var indicatorUpper = localStorage.getItem("indicatorUpper");
var uppercaseLetters = localStorage.getItem("uppercaseLetters");

if (indicatorUpper == null) {
  // localStorage.setItem("indicatorUpper", 0);
  localStorage.setItem("uppercaseLetters", "");
}

console.log("init uppercaseIndicator: ", localStorage.getItem("indicatorUpper"));

var indicatorSC = localStorage.getItem("indicatorSC");
var specialLetters = localStorage.getItem("specialLetters");

if (indicatorSC == null) {
  // localStorage.setItem("indicatorSC", 0);
  localStorage.setItem("specialLetters", "");
}

var indicatorN = localStorage.getItem("indicatorN");
var numeric = localStorage.getItem("numeric");

if (indicatorN == null) {
  // localStorage.setItem("indicatorN", 0);
  localStorage.setItem("numeric", "");
}

// var lowercaseLetters = "";
// var uppercaseLetters = "";
// var specialLetters = "";
// var numeric = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Reset criteria indicator once user generated password
var refreshCriteria = function () {
  localStorage.clear();

  // localStorage.setItem("indicatorLower", null);
  // localStorage.setItem("lowercaseLetters", "");
  console.log("In refresh lowercaseIndicator: ", localStorage.getItem("indicatorLower"));
  // localStorage.setItem("indicatorUpper", null);
  // localStorage.setItem("uppercaseLetters", "");
  console.log("In refresh uppercaseIndicator", localStorage.getItem("indicatorUpper"));
  // localStorage.setItem("indicatorSC", null);
  // localStorage.setItem("specialLetters", "");
  console.log("In refresh SCIndicator", localStorage.getItem("indicatorSC"));
  // localStorage.setItem("indicatorN", null);
  // localStorage.setItem("numeric", "");
  console.log("In refresh NIndicator", localStorage.getItem("indicatorN"));
}

// Get a random numeric value
var passwordGenerator = function(pwLength){
  

  var pwLetter = " ";
  
  if (localStorage.getItem("indicatorLower") == null && localStorage.getItem("indicatorUpper")==null && localStorage.getItem("indicatorSC") ==null && localStorage.getItem("indicatorN")==null) {
    window.alert("None of criteria is chosen! At least one character type should be included.");
    generatePassword();
  } else {
    console.log("check", localStorage.getItem("indicatorLower"));
    if (localStorage.getItem("indicatorLower") !== null){
      localStorage.setItem("lowercaseLetters", "abcdefghijklmnopqrstuvwxyz");
    };
    console.log("checkLL", localStorage.getItem("lowercaseLetters"));
    console.log("check", localStorage.getItem("indicatorUpper"));
    console.log("checkUL before", localStorage.getItem("uppercaseLetters"));
    if (localStorage.getItem("indicatorUpper") !== null){
      localStorage.setItem("uppercaseLetters", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    };
    console.log("checkUL", localStorage.getItem("uppercaseLetters"));
    console.log("check", localStorage.getItem("indicatorSC"));
    if (localStorage.getItem("indicatorSC") !== null) {
      localStorage.setItem("specialLetters", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
    };

    console.log("checkSC", localStorage.getItem("specialLetters"));
    console.log("check", localStorage.getItem("indicatorN"));
    if (localStorage.getItem("indicatorN") !== null) {
      localStorage.setItem("numeric", "0123456789");
    };

    console.log("checkN", localStorage.getItem("numeric"));
  }
  
  var characters = [localStorage.getItem("lowercaseLetters"), localStorage.getItem("uppercaseLetters"), localStorage.getItem("specialLetters"), localStorage.getItem("numeric")].join("");
  // var characters = localStorage.getItem("lowercaseLetters") + localStorage.getItem("uppercaseLetters") + localStorage.getItem("specialLetters") + localStorage.getItem("numeric");
  console.log("variable", characters);
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

    res = passwordGenerator(pwLength);
    console.log(res);
    
    return res;
    
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
        localStorage.setItem("indicatorLower", 1);
        
        // res = criteriaConfirm();
        // console.log("generateCriteriaF_L", res);
        // return res;
     
      } else {
        window.alert("Your password will not include lowercase. Please choose other criteria.");
        generateCriteria();
        };
    } else if (criteria == "Uppercase") {
      var confirmU = window.confirm("Would you like to include uppercase in password?");
      
      if (confirmU) {
        localStorage.setItem("indicatorUpper", 1);

        // res = criteriaConfirm();
        // console.log("generateCriteriaF_U", res);
        // return res;
      } else {
        window.alert("Your password will not include uppercase. Please choose other criteria.");
        generateCriteria();
        }
    } else if (criteria == "Special Character") {
      var confirmSC = window.confirm("Would you like to include special character in password?");
      
      if (confirmSC) {
        localStorage.setItem("indicatorSC", 1);
        // res = criteriaConfirm();
        // console.log("generateCriteriaF_SC", res);
        // return res;
      } else {
        window.alert("Your password will not include special character. Please choose other criteria.");
        generateCriteria();
        };
    } else if (criteria == "Numeric") {
      var confirmN = window.confirm("Would you like to include numeric in password?");
      
      if (confirmN) {
        localStorage.setItem("indicatorN", 1);
        
        // res = criteriaConfirm();
        // console.log("generateCriteriaF_N", res);
        // return res;
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

  res = criteriaConfirm();
  console.log("generateCriteriaF", res);
  return res;
}
// Generate password based on criteria
var generatePassword = function(){
  
  refreshCriteria();

  inputLength = window.prompt("Enter a number for the length of password at least 8 characters and no more than 128 characters. For example, 8.");
  intLength = parseInt(inputLength)  

  if (Number.isInteger(intLength)) {
    if (intLength > 7 && intLength < 129){
      pwLength = intLength;

      res = generateCriteria();
      console.log("generatePasswordF", res);
      return res;

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
