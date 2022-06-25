// 1- prompt users for parameters
// length, special chars, numbers, upperC, lowerC
function randomLowerGen() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpperGen() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomNumGen() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSymGen() {
  let symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "=",
    "<",
    ">",
    "?",
  ];
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  let lengthProm = prompt(`how long do you want the password to be? (8 - 128)`);
  if (lengthProm < 8 || !lengthProm > 128) {
    alert(`password needs to be min of 8 and max of 128`);
    reload();
  }
  let upperProm = confirm(`do you want uppercase letters in your password?`);
  let lowerProm = confirm(`do you want lowercase letters in your password?`);
  let symProm = confirm(`do you want symbols in your password?`);
  let numProm = confirm(`do you want numbers in your password?`);
  let passArr = [];
  let passGenObj = {
    upperGen: randomUpperGen(),
    lowerGen: randomLowerGen(),
    numGen: randomNumGen(),
    symGen: randomSymGen(),
  };
  if (upperProm) {
    passArr.push(passGenObj.upperGen);
  }
  if (lowerProm) {
    passArr.push(passGenObj.lowerGen);
  }
  if (symProm) {
    passArr.push(passGenObj.symGen);
  }
  if (numProm) {
    passArr.push(passGenObj.numGen);
  }
  console.log(passArr);
}

//2 create random password from available characters
// for loop run the number of times that user sets length to
// assign random character to password string
// create 1 random character to push to password

// return password;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
