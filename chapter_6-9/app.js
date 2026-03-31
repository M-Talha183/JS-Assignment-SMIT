// Chapter 6-9 
// Answer 1
let a = 10;

document.writeln("Result:<br>");
document.writeln("The value of a is: " + a + "<br>");
document.writeln("........................................<br><br>");

// Pre-increment
document.writeln("The value of ++a is: " + (++a) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

// Post-increment
document.writeln("The value of a++ is: " + (a++) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

// Pre-decrement
document.writeln("The value of --a is: " + (--a) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

// Post-decrement
document.writeln("The value of a-- is: " + (a--) + "<br>");
document.writeln("Now the value of a is: " + a + "<br>");

// Answer 2
let a = 10;

document.writeln("Result:<br>");
document.writeln("The value of a is: " + a + "<br>");
document.writeln("........................................<br><br>");

// Pre-increment
document.writeln("The value of ++a is: " + (++a) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

// Post-increment
document.writeln("The value of a++ is: " + (a++) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

// Pre-decrement
document.writeln("The value of --a is: " + (--a) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

// Post-decrement
document.writeln("The value of a-- is: " + (a--) + "<br>");
document.writeln("Now the value of a is: " + a + "<br>");

// Answer 3
// Take name input
let userName = prompt("Enter your name:");

// Check if user entered something
if (userName) {
    alert("Hello " + userName + "! Welcome 😊");
} else {
    alert("Hello Guest! Welcome 😊");
}

// Answer 4
// Take number input
let num = prompt("Enter a number for multiplication table:");

// If user enters nothing → default = 5
if (num === "" || num === null) {
    num = 5;
} else {
    num = +num; // convert to number
}

// Show table in browser
document.writeln("<h3>Multiplication Table of " + num + "</h3>");

for (let i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}