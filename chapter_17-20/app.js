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