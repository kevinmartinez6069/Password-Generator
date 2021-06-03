// ------------------------------------------------------------Array Definitions------------------------------------------------------------

let lowerchar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperchar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialchar = ["!", "@", "$", "_", "-"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let confirmLength = ""
let confirmLowerCase
let confirmUpperCase
let confirmSpecialChar
let confirmNumber



// ------------------------------------------------------------Password Generation------------------------------------------------------------


var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
    // I want to create a range from 8 to 128 characters for a password
    let confirmLength = (prompt('Password must be from 8 to 128 characters. How many characters would you like your password to be?'))
        // If the use the user chooses a password outside of the range specified I will redirect them to initial prompt to confirm a vaild choice
    while (confirmLength <= 8 || confirmLength >= 128) {
        alert('Please choose a valid character length')
        let confirmLength = (prompt('Password must be from 8 and 28 characters. How many characters would you like your password to be?'))
    }
    // This is a confirmation of the users choice of password length
    alert("Your password will contain " + confirmLength + " characters")
        // These confirmations will decide what type of characters will be used inside of password
    let confirmLowerCase = confirm("Click OK if you would like to use lowercase characters")
    let confirmUpperCase = confirm("Click OK if you would like to use uppercase characters")
    let confirmSpecialChar = confirm("Click OK if you would like to use special characters")
    let confirmNumber = confirm("Click OK if you would like to use numeric characters")
        // Confirmations are started over if user choice does not include at least one of defined parameters
    while (confirmLowerCase === false && confirmUpperCase === false && confirmSpecialChar === false && confirmNumber === false) {
        alert("You must choose at least one option")
        let confirmLowerCase = confirm("Click OK if you would like to use lowercase characters")
        let confirmUpperCase = confirm("Click OK if you would like to use uppercase characters")
        let confirmSpecialChar = confirm("Click OK if you would like to use special characters")
        let confirmNumber = confirm("Click OK if you would like to use numeric characters")
    }

    var passwordCharacters = []

    if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(lowerchar)
    }

    if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(upperchar)
    }

    if (confirmSpecialChar) {
        passwordCharacters = passwordCharacters.concat(specialchar)
    }

    if (confirmNumber) {
        passwordCharacters = passwordCharacters.concat(numbers)
    }


    // Empty string to be filled based on for loop selecting random characters from the array
    var randomPassword = ""

    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
        console.log(randomPassword)
    }
    return randomPassword
}







function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









































// // // go over this stuff
// // statements
// // arrays
// // functions
// // operators
// // expressions