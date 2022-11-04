// Assignment code here

function generatePassword(){
  
  //Get the length value (integer), at least 8, no more than 128, and not a string
  var length = 0;
  var lengthIsValid = false;
  var errorMessage = "";
  var lengthMessage = "Enter a password length of at least 8 and no more than 128.";
  var completeMessage = "";
  do {
    completeMessage = errorMessage + lengthMessage;

    length = prompt(completeMessage);

    if(length == null)
      return;

    if(isNaN(length)){
      errorMessage = length + " is not a number.\n\n";
    }else if (!Number.isInteger(Number(length))){
      errorMessage = length + " is not an integer.\n\n";
    }else if(length < 8){
      errorMessage = length + " is too small.\n\n";
    }else if (length > 128){
      errorMessage = length + " is too large.\n\n";
    }else{
      lengthIsValid = true;
    }
  }while(lengthIsValid == false)

  //Get the character types allowed in the password, must be at least one.
  var charTypes = "";
  var atLeastOneValidCharTypeSelected = false;
  errorMessage = "";
  var charTypeMessage = "Enter at least one character type that the password can be generated from:\nL for Lowercase\nU for Uppercase\nN for Numeric and/or\nS for Special characters.";
  do {
    
    completeMessage = errorMessage + charTypeMessage;

    charTypes = prompt(completeMessage);

    if(charTypes == null)
      return;

    if(charTypes.includes('L') || charTypes.includes('U') || charTypes.includes('N') || charTypes.includes('S')){
      atLeastOneValidCharTypeSelected = true;
    }
    else{
      errorMessage = charTypes + " does not contain an L, U, N, nor S.\n\n";
    }

  }while(atLeastOneValidCharTypeSelected == false);

  //Set up all of the allowed character types
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
  };

  //Only include the character types chosen by the user
  var charSet = "";
  if(charTypes.includes('L')){
    charSet += charSets.lowercase;
  }
  if(charTypes.includes('U')){
    charSet += charSets.uppercase;
  }
  if(charTypes.includes('N')){
    charSet += charSets.numeric;
  }
  if(charTypes.includes('S')){
    charSet += charSets.special;
  }

  //Generate the password by randomly selecting indices in the set of values until the password is the correct length.
  var password = "";
  for (var i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  //Return the password
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(password == undefined)
    return;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);