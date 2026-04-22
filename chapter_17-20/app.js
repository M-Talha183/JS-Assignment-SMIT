// Declare and initialize an empty multidimensional array.
// (Array of arrays)
let multiArray = [];

// Declare and initialize a multidimensional array
// representing the following matrix:
// 1 2 3
// 4 5 6
// 7 8 9
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Write a program to print numeric counting from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i,'\n');
}

// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user

// user_num = +prompt("Enter the table number ")

// user_count = +prompt("Enter the user count ")

// for (i= 1 ; i<=user_count ; i++){
//     document.writeln(`${user_count} * ${i} = ${user_count * i} <br>`)
// }

// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberr"]

for (let i = 0; i<fruits.length ; i++){
    document.writeln(`
        Element At Index 0 is ${fruits[i] } <br>
        `)
}


// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// a. Counting
for (let i = 1; i <= 15; i++) {
  document.writeln(i + ", ");
}
// b. Reverse counting
for (let i = 10; i >= 1; i--) {
  document.writeln(i + ", ");
}
// c. Even
for (let i = 0; i <= 20; i += 2) {
  document.writeln(i + ", ");
}
// d. Odd
for (let i = 1; i <= 19; i += 2) {
  document.writeln(i + ", ");
}
// e. Series
for (let i = 2; i <= 20; i += 2) {
  document.writeln(i + "k, ");
}

// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter the item you want to search for: ");
let found = false;  
for (let i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput.toLowerCase()) {
    found = true;
    break;
  }
}

if (found) {
  alert(userInput + " is found in the list.");
} else {
  alert(userInput + " is not found in the list.");
}


// question 8 is missing in the provided code snippet. Please provide the complete code for question 8 if you want me to assist with it.

// loop on two dimensional array
let twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (let i = 0; i < twoDimensionalArray.length; i++) {
  for (let j = 0; j < twoDimensionalArray[i].length; j++) {
    console.log(twoDimensionalArray[i][j]);
  }
}