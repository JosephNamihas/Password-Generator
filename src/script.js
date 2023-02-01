// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//---------------------------- GLOBAL VARIABLES ----------------------------
var passwordLength = 0;
var passwordArray = [];
userChoicesObject = {};

var lowerCaseConfirm;
var upperCaseConfirm;
var numericCaseConfirm;
var specialCaseConfirm;

//---------------------------- FUNCTIONS ----------------------------
function getPasswordOptions() {

  // VALIDATION TO CHECK BETWEEN CERTAIN CHARACTERS
  passwordLength = prompt("How long would you like your password to be? It needs to be between 8 - 128 characters.")

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters!")
    getPasswordOptions();
  } else {
        lowerCaseConfirm = confirm("Would you like lowercase characters?");
        upperCaseConfirm = confirm("Would you like uppercase characters?");
        numericCaseConfirm = confirm("Would you like numeric characters?");
        specialCaseConfirm = confirm("Would you like special characters?");
  }

  // VALIDATION TO CHECK ONE AT LEAST ONE OPTION SELECTED
  if (lowerCaseConfirm === false && upperCaseConfirm === false && numericCaseConfirm === false && specialCaseConfirm === false) {
    alert("You must choose at least one character type");
    getPasswordOptions();
  }
  
  userChoicesObject = { 
    lowercase: lowerCaseConfirm,
    uppercase: upperCaseConfirm,
    numeric: numericCaseConfirm,
    special: specialCaseConfirm
  };
}

// CONCATENATES ARRAYS BASED ON USER PROMPTS
function generatePasswordArray() { 
  if(userChoicesObject.lowercase === true){
    passwordArray = lowerCasedCharacters.concat(passwordArray);
  }
  if(userChoicesObject.uppercase === true){
    passwordArray = upperCasedCharacters.concat(passwordArray);
  }
  if(userChoicesObject.numeric === true){
    passwordArray = numericCharacters.concat(passwordArray);
  }
  if(userChoicesObject.special === true){
    passwordArray = specialCharacters.concat(passwordArray);
  }

  for (let i = 0; i < passwordLength; i++) {
    passwordArray.push(passwordArray[i]);
  }

}

// SHUFFLES ARRAY USING A RANDOM NUMBER TO PICK ELEMENT
function shuffleArray(passwordArray) { 
  var i, j, k;
  for (i = passwordArray.length - 1; i > 0; i--){
    j = Math.floor(Math.random() * (i + 1));
    k = passwordArray[i]
    passwordArray[i] = passwordArray[j];
    passwordArray[j] = k;
  }
  return passwordArray;
}

// SPLICE THE ARRAY BASED ON PASSWORD LENGTH
function spliceArray (passwordArray) {

  passwordArray.splice(passwordLength, 500);
  console.log(passwordArray);

  return passwordArray;
}

// JOINS THE ARRAY INTO A STRING AND REMOVES COMMAS
function generatePassword() {
  var generatedPw = passwordArray;
  return generatedPw.join("");

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// REGENERATES PASSWORD (BASED ON INITIAL USER PROMPTS)
function regeneratePassword() {
generatePasswordArray();
shuffleArray(passwordArray);
spliceArray(passwordArray);
generatePassword();
writePassword();
}

//---------------------------- START OF PROGRAM FLOW ----------------------------

getPasswordOptions();
generatePasswordArray();
shuffleArray(passwordArray);
spliceArray(passwordArray);
generatePassword();
writePassword();

// Add event listener to generate button
generateBtn.addEventListener('click', regeneratePassword);