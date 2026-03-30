// answer 1

// Take input from user
let input = prompt("Enter a single character:");

// Get ASCII code of first character
let ascii = input.charCodeAt(0);

// Check conditions
if (ascii >= 48 && ascii <= 57) {
    document.writeln(input + " is a Number");
}
else if (ascii >= 65 && ascii <= 90) {
    document.writeln(input + " is an Uppercase Letter");
}
else if (ascii >= 97 && ascii <= 122) {
    document.writeln(input + " is a Lowercase Letter");
}
else {
    document.writeln(input + " is neither a number nor a letter");
}

// answer 2
// Take input from user
let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));

// Compare numbers
if (num1 > num2) {
    document.writeln("Larger number is: " + num1);
}
else if (num2 > num1) {
    document.writeln("Larger number is: " + num2);
}
else {
    document.writeln("Both numbers are equal: " + num1);
}

// answer 3
// Take input from user
let num = parseFloat(prompt("Enter a number:"));

// Check if number is positive, negative or zero
if (num > 0) {
    document.writeln(num + " is a Positive number");
} 
else if (num < 0) {
    document.writeln(num + " is a Negative number");
} 
else {
    document.writeln("The number is Zero");
}

// answer 4
// Take input from user
let char = prompt("Enter a single character:");

// Convert to lowercase to handle both cases
char = char.toLowerCase();

// Check if input is a single character
if (char.length !== 1) {
    document.writeln("Please enter only one character");
} else {
    // Check for vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        document.writeln(true);  // It's a vowel
    } else {
        document.writeln(false); // Not a vowel
    }
}

// answer 5
// a. Store correct password
let correctPassword = "MySecret123";

// b. Ask user to enter password
let userPassword = prompt("Enter your password:");

// c. Validate the password
if (!userPassword) {
    // i. Check if user entered anything
    document.writeln("Please enter your password");
} else if (userPassword === correctPassword) {
    // ii. Check if passwords match
    document.writeln("Correct! The password you entered matches the original password");
} else {
    // Passwords do not match
    document.writeln("Incorrect password");
}

// answer 6
// Initialize variables
var greeting;
var hour = 13;

// Correct if/else syntax
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Show the greeting
document.writeln(greeting);