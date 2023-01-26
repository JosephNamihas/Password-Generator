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

var passwordLength = 0;
var passwordArray = [];
userChoicesObject = {};

var lowerCaseConfirm;
var upperCaseConfirm;
var numericCaseConfirm;
var specialCaseConfirm;

// Function to prompt user for password options
function getPasswordOptions() {

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

function generatePasswordArray() { // For each value in userChoices Object ?
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
}

function shuffleArray(passwordArray) { // Fisher Yates shuffle algorithm 
  var i, j, k;
  for (i = passwordArray.length - 1; i > 0; i--){
    j = Math.floor(Math.random() * (i + 1));
    k = passwordArray[i]
    passwordArray[i] = passwordArray[j];
    passwordArray[j] = k;
  }
  return passwordArray;
}

// Function for getting a random element from an array
function getRandom(arr) {
  for (let i = 0; i < arr.length; i++){

  }

}
// Function to generate password with user input
function generatePassword() {
  var generatedPw = "Hello"
  return generatedPw;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//----------------------------

getPasswordOptions();
console.log(userChoicesObject);
generatePasswordArray();
console.log(passwordArray);
shuffleArray(passwordArray);
console.log(passwordArray);


// splice the array based on passWord length
// join the array to remove the commas
// output PW

