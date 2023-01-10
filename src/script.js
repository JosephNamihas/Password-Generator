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
}

// TODO validation for integer
  /*if(typeoff  === string){
    alert("Please use numbers instead")
  }
}*/

//TODO validations for Boolean needed here (x 3)

// Function for getting a random element from an array
function getRandom(arr) {

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
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



// the parameter will be the array
function lowerCaseTrue() {
      passwordArray = lowerCasedCharacters.concat(passwordArray);
      console.log(passwordArray);
  }

function upperCaseTrue() {
      passwordArray = upperCasedCharacters.concat(passwordArray);
      console.log(passwordArray);
}

function numericTrue() {
  passwordArray = numericCharacters.concat(passwordArray);
  console.log(passwordArray);
}

function specialTrue() {
  passwordArray = specialCharacters.concat(passwordArray);
  console.log(passwordArray);
}
// ---------------------------- START OF FLOW -------------------------
// Initital values

var returnedArray = getPasswordOptions();
console.log(returnedArray);

// TODO Simplyfy this
var lengthOfPassword = returnedArray[0]
var lowerCaseBool = returnedArray[1];
var upperCaseBool = returnedArray[2];
var numericBool = returnedArray[3];
var specialCharBool = returnedArray[4];

var passwordArray = [];
generatePasswordArray(passwordArray);

console.log(passwordArray);

// Feed password array into random picker which then generates password




// When button clicked

// Prompts for length, upper/lowercase, numbers, special characters 
// Store prompts within a variable / array index
// Validate password length is correct
// If correct, go to next prompt
  // Otherwise, error message. Repeat prompt?
















 // Concat for merging arrays

 /* When generator password button is clicked, create series of prompts for password criteria.

 Prompt 1: Length of Password (=> 10 && =< 64
 Prompt 2: Do you want lower case?
 Prompt 3: Do you want upper case?
 Prompt 4: Do you want numeric?
 Prompt 5: What special characters do you want?

 Code should validate for each input and at least one character type should be selected

 Once prompts are answered, the password should be generated and displayed in an alert*/
