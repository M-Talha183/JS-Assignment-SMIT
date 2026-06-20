// // Write a custom function power ( a, b ), to calculate the value of
// // a raised to b.


// // let user_num_1 = +prompt("Enter the base number ....... ")
// // let user_num_2 = +prompt("Enter the power number ........")

// // function power_checker(a,b){
// //     document.write(`<p>${a} raised to ${b} is = ${Math.pow(a,b)} </p> `)
// // }

// // power_checker(user_num_1,user_num_2)

// // Write a custom function power ( a, b ), to calculate the value of
// // a raised to b.

// // let user_input = +prompt("Enter the Year ....... ")
// // console.log(typeof(user_input))

// // function leap_year_checjer(year){
// //     if (year %  100 != 0 & year % 4 == 0){
// //         document.write(`<p>${year} is leap year </p> `)
// //     }else{
// //      document.write(`<p>${year} is not  leap year </p> `)
   
// //     }
// // }
// // leap_year_checjer(user_input)



// // If the lengths of the sides of a triangle are denoted by a, b, and
// // c, then area of triangle is given by
// // area = S(S − a)(S − b)(S − c)
// // where, S = ( a + b + c ) / 2
// // Calculate area of triangle using 2 functions

// // let lenght_a = +prompt("Enter the length of side a ....... ")
// // let lenght_b = +prompt("Enter the length of side b ....... ")
// // let lenght_c = +prompt("Enter the length of side c ....... ")

// // function area_of_triangle(a,b,c){
// //     let s = (a + b + c ) / 2
// //     area = s * (s-a) * (s-b) * (s-c)

// //     document.write(`Area of Triangle is ${area}`)

// // }

// // area_of_triangle(lenght_a,lenght_b, lenght_c)


// // Write a function that receives marks received by a student in 3
// // subjects and returns the average and percentage of these
// // marks. there should be 3 functions one is the mainFunction
// // and other are for average and percentage. Call those functions
// // from mainFunction and display result in mainFunction.


// let marks_1 = +prompt("Enter the marks of subject 1 ....... ")
// let marks_2 = +prompt("Enter the marks of subject 2 ....... ")
// let marks_3 = +prompt("Enter the marks of subject 3 ....... ")


// function mainFunction (){
//     let average_marks = average(marks_1, marks_2, marks_3)
//     let percentage_marks = percentage(marks_1, marks_2, marks_3)
//     document.write(`<p>Average Marks is ${average_marks} </p> `)
//     document.write(`<p>Percentage Marks is ${percentage_marks} % </p> `)


// }

// function average(marks_1, marks_2, marks_3){
//     let average_marks = (marks_1 + marks_2 + marks_3) / 3
//     return average_marks
// }


// // question 4
// function percentage(marks_1, marks_2, marks_3){
//     let total_marks = 300
//     let obtained_marks = marks_1 + marks_2 + marks_3
//     let percentage_marks = (obtained_marks / total_marks) * 100
//     return percentage_marks
// }



// Store your name in Local Storage and display it in console.

// let user_input = prompt("Enter your name ........")

// localStorage.setItem("name",user_input)

// Store your age and retrieve it.
// user_age = prompt("Enter your Age ...")

// localStorage.setItem("age",user_age)

// let get_age = localStorage.getItem('age')

// document.write(`<p>${get_age}</p>`)


// ["HTML","CSS","JS"]

// let arr = ["HTML","CSS","JS"]

// localStorage.setItem("course",arr)

// let getData = localStorage.getItem("course")
// document.write(`<p>${typeof(getData) }</p> <br> <p>${getData.slice(0,4)}</p>
// <br>
// <p>${getData.slice(5,8)}</p>
// <br>
// <p>${getData.slice(9)}</p>`)


// Store an object:

// let my_obj = {
//     name : "Talha",
//     age: 250
// }
// localStorage.setItem("obj",my_obj)

// document.write(`${localStorage.getItem(my_obj.age)}`)


// Create a button.
// let button = document.createElement("button").innerHTML = "dark mode"

// button.addEventListener("click", function(){    
//     document.body.style.backgroundColor = "black"
//     document.body.style.color = "white"
// })



// Q7 (To-Do App Level)

// Create:

// Input
// Add Button

// When clicked:

// Save task in Local Storage
// Display task
// Data should remain after refresh

let user_input = document.getElementById('user')
let taskList = document.getElementById('taskList')


console.log(user_input.value)

let button = document.getElementById('addBtn')
function task (){
    let li = document.createElement('li');

    li.textContent= user_input.value
    taskList.appendChild(li)


user_input.value = ""
}

button.addEventListener("click", task)
