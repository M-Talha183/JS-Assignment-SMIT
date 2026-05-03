//  chapter 20 to 
// 24

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable fullName. Greet the user using his full name.
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "!");
// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// var favoritePhone = prompt("Enter your favorite mobile phone model:")
// var inputLength = favoritePhone.length
//  
// alert("The length of your input is: " + inputLength);
// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser
// var word = "Pakistani";
// var indexOfN = word.indexOf("n");
// alert("The index of letter 'n' in the word 'Pakistani' is: " + indexOfN);
// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser
// var phrase = "Hello World";

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
