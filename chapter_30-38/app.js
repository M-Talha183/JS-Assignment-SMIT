// JavaScript code for the application
// This file contains the main logic for the application and interacts with the HTML elements
// Example function to display a message in the console
function displayMessage(message) {
    console.log(message);
}
// Example usage of the displayMessage function
displayMessage("Hello, welcome to the JavaScript application!");
// Additional functions and logic can be added here to enhance the functionality of the application

//  functions and switch ccase questions

function askQuestion(question) {
    const answer = prompt(question);
    return answer;
}
function handleQuestion(question) {
    switch (question) {
        case "What is your name?":
            const name = askQuestion(question);
            displayMessage(`Your name is ${name}.`);
            break;
        case "How old are you?":
            const age = askQuestion(question);
            displayMessage(`You are ${age} years old.`);
            break;
        case "What is your favorite color?":
            const color = askQuestion(question);
            displayMessage(`Your favorite color is ${color}.`);
            break;
        default:
            displayMessage("Sorry, I don't understand the question.");
    }
}
// Example usage of the handleQuestion function
handleQuestion("What is your name?");
handleQuestion("How old are you?");
handleQuestion("What is your favorite color?");
handleQuestion("What is your favorite food?"); // This will trigger the default case