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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

// Function to prompt user for password options

// -------------------------------------PROMPTS-------------------------
// TODO - Simplify this / create function for validaiton between each prompt
function getPasswordOptions() {
  var returnedChoices = [];
  returnedChoices.push(prompt("Choose length of password (10 - 64 characters"));
  checkLength(returnedChoices[0]);
  returnedChoices.push(confirm("Would you like lowercase characters?"));
  // returnedChoices[1]
  returnedChoices.push(confirm("Would you like uppercase characters?"));
  // returnedChoices[2]
  returnedChoices.push(confirm("Would you like numeric characters?"));
  // returnedChoices[3]
  returnedChoices.push(confirm("Would you like special characters?"));
  // returnedChoices[4]

  console.log(returnedChoices);

  return returnedChoices;
}

// -------------------------------------VALIDATION-------------------------
function checkLength(param) {
  if (param < 10) {
    alert("Your password will be too short!");
  }

  if (param > 64) {
    alert("Your password will be too long!");
  }

  if (typeof param === 'string') {
    alert("Numbers only!")
  }
}

// Function for getting a random element from an array via shuffling 
function shuffleArr(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}
  
// Function to generate password (max number indicated by paramater entry)
function generatePasswordArray() {

  if (lowerCaseBool === true) {
    lowerCaseTrue();
  }

  if (upperCaseBool === true) {
    upperCaseTrue();
  }

  if (numericBool === true) {
    numericTrue();
  }

  if (specialCharBool === true) {
    specialTrue();
  }
  return passwordArray;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  userPassword = shuffleArr(passwordArray);
  var passwordText = document.querySelector('#password');

  passwordText.value = userPassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


function lowerCaseTrue() {
      passwordArray = lowerCasedCharacters.concat(passwordArray);
  }

function upperCaseTrue() {
      passwordArray = upperCasedCharacters.concat(passwordArray);
}

function numericTrue() {
  passwordArray = numericCharacters.concat(passwordArray);
}

function specialTrue() {
  passwordArray = specialCharacters.concat(passwordArray);
}
// ---------------------------- START OF FLOW -------------------------

var returnedArray = getPasswordOptions();
console.log(returnedArray);

var lengthOfPassword = returnedArray[0]


var lowerCaseBool = returnedArray[1];
var upperCaseBool = returnedArray[2];
var numericBool = returnedArray[3];
var specialCharBool = returnedArray[4];

// Password array contains all the values (lowercase, upper, numeric and special)
var passwordArray = generatePasswordArray();
var userPassword = shuffleArr(passwordArray);


var stringPassword ="";

for(i = 0; i < userPassword; i++)
{
  stringPassword = stringPassword + userPassword[i];
}

console.log(stringPassword);

writePassword();