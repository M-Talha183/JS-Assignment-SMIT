
//    var lastIndexOfL = phrase.lastIndexOf("l");
//    alert("The last index of letter 'l' in the phrase 'Hello World' is: " + lastIndexOfL);
// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser
// var word = "Pakistani";
// var charAtIndex3 = word.charAt(3);
// alert("The character at index 3 in the word 'Pakistani' is: " + charAtIndex3);

// 6. Write a program to replace the “Hyder” with “Islam” in the word “Hyderabad” and display the result in your browser
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");

//  alert("After replacement: " + newCity);
// 7. Write a program to replace all occurrences of “and” with “&” in the string “Ali and Sami are best friends. They play cricket and football together.” and display the result in your browser
// var sentence = "Ali and Sami are best friends. They play cricket and football together.";        
// var newSentence = sentence.replace(/and/g, "&");


// alert("After replacement: " + newSentence);
// 8. Write a program that converts a string “472” to a number 472. Display the values & types in your browser
// var strNumber = "472";   
// var num = Number(strNumber);
// alert("Value: " + num + "\nType: " + typeof num);


// 9. Write a program that converts the variable num to string. Display the values & types in your browser
// var num = 472;   
// var strNumber = String(num);
// alert("Value: " + strNumber + "\nType: " + typeof strNumber);





// 10. Write a program that takes user input. Convert and show the input in capital letters.
// var userInput = prompt("Enter a string:");
// var upperCaseInput = userInput.toUpperCase();
// alert("Your input in capital letters: " + upperCaseInput);


// 11. Write a program that takes user input. Convert and show the input in title case.
// var userInput = prompt("Enter a string:");
// var titleCaseInput = userInput.toLowerCase().split(' ').map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }).join(' ');
// alert("Your input in title case: " + titleCaseInput);






// 12. Write a program that converts the variable num to string. Display the values & types in your browser
// var num = 472;   
// var strNumber = String(num);
// alert("Value: " + strNumber + "\nType: " + typeof strNumber);

// javascript  functions 
// 1. Write a function that displays current date & time in your browser.
// function displayDateTime() {
//     var currentDateTime = new Date();
//     alert("Current date and time: " + currentDateTime);
// }
// displayDateTime();


// 2. Write a function that takes first & last name and then it greets the user using his full name.
// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;   
//     alert("Hello, " + fullName + "!");
// }
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// greetUser(firstName, lastName);







// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function addNumbers(num1, num2) {
//     return num1 + num2;  
// }
// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));
// var sum = addNumbers(number1, number2);
// alert("The sum of " + number1 + " and " + number2 + " is: " + sum);





// 4. Write a function that takes three arguments num1, num2 & operator. Compute the desired operation and return the result.
// function calculate(num1, num2, operator) {
//     var result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;

//         case '*':
//             result = num1 * num2;
//             break;   
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             alert("Invalid operator! Please use +, -, *, or /.");
//             return null;
//     }

//     return result;
// }
// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /):");