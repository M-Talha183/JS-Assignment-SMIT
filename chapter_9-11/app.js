// Chapter  9 - 11
// Answer 1
var city= prompt("Enter your city name ")

if (city == "karachi"){
    console.log("Welcome TO  City OF Lights")
}


// Answer 1
var gender = prompt("Enter you Gender")

if (gender == "male"){
    console.log("Good Morinig sir ")
}else{
    console.log("Good morning Madam ")
}

// Answer 3
var traficsignal = prompt("Enter a trafic signal color ")

if (traficsignal == "red"){
    console.log("Must Stop")
}
else if (traficsignal == "Yellow "){
console.log("Ready to go")
}
else if(traficsignal == "green"){
    console.log("Moved NOw ")
}
else{
    console.log("Enter the valid color ")
}

// Answer 4
 let fuel = prompt("Enter your fuel in remaing (In leters ) ")
if (fuel <= 0.25){
    console.log("Please Refuel your Car ")
}
// Answer 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

if (c === 13){
alert("condition 2 is true");
}

// Answer 6
let sub1 = Number ( prompt("Enter you subject 1 marks"))
let sub2 = Number (prompt("Enter you subject 2 marks"))
let sub3 = Number (prompt("Enter you subject 3 marks"))

let total_marks = 300
let marks_obtained = sub1 + sub2 +sub3

let percentage = (marks_obtained / total_marks ) * 100

if (percentage >= 80){
    console.log(`Marks Sheet \n \n \n Total Marks : ${total_marks} \n
        Marks Obtained : ${marks_obtained} \n 
        Percentage : ${percentage} \n 
        Grade : A-one \n 
        Remarks : Excellent `)
}else if (percentage >= 70){
console.log(`Marks Sheet \n \n \n Total Marks : ${total_marks} \n
        Marks Obtained : ${marks_obtained} \n 
        Percentage : ${percentage} \n 
        Grade : A-one \n 
        Remarks : Good `)

}else if (percentage >= 60){
   console.log(`Marks Sheet \n \n \n Total Marks : ${total_marks} \n
        Marks Obtained : ${marks_obtained} \n 
        Percentage : ${percentage} \n 
        Grade : A-one \n 
        Remarks : You need to improve `)

}else{
   console.log("Fail")
}

// Answer 7
// Store secret number
let secretNumber = 7;

// Ask user to guess
let userGuess = +prompt("Guess the secret number (1 to 10):");

// Check conditions
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}

// Answer 8
// Take number input
let num = +prompt("Enter a number:");

// Check divisibility
if (num % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is NOT divisible by 3");
}

// Answer 9
// Take input
let number = +prompt("Enter a number:");

// Check even or odd
if (number % 2 === 0) {
    alert("The number is Even");
} else {
    alert("The number is Odd");
}
// asnwer 10
// Take temperature input
let temp = +prompt("Enter temperature:");

// Check conditions
if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is very cold outside.");
}

//  asnwer 11
// Take inputs
let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
let operation = prompt("Enter operation (+, -, *, /, %):");

let result;

// Perform calculation
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
} else {
    alert("Invalid operation");
}

// Show result
if (result !== undefined) {
    alert("Result is: " + result);
}