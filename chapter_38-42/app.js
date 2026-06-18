// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// let user_num_1 = +prompt("Enter the base number ....... ")
// let user_num_2 = +prompt("Enter the power number ........")

// function power_checker(a,b){
//     document.write(`<p>${a} raised to ${b} is = ${Math.pow(a,b)} </p> `)
// }

// power_checker(user_num_1,user_num_2)

// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// let user_input = +prompt("Enter the Year ....... ")
// console.log(typeof(user_input))

// function leap_year_checjer(year){
//     if (year %  100 != 0 & year % 4 == 0){
//         document.write(`<p>${year} is leap year </p> `)
//     }else{
//      document.write(`<p>${year} is not  leap year </p> `)
   
//     }
// }
// leap_year_checjer(user_input)



// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// let lenght_a = +prompt("Enter the length of side a ....... ")
// let lenght_b = +prompt("Enter the length of side b ....... ")
// let lenght_c = +prompt("Enter the length of side c ....... ")

// function area_of_triangle(a,b,c){
//     let s = (a + b + c ) / 2
//     area = s * (s-a) * (s-b) * (s-c)

//     document.write(`Area of Triangle is ${area}`)

// }

// area_of_triangle(lenght_a,lenght_b, lenght_c)


// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


let marks_1 = +prompt("Enter the marks of subject 1 ....... ")
let marks_2 = +prompt("Enter the marks of subject 2 ....... ")
let marks_3 = +prompt("Enter the marks of subject 3 ....... ")


function mainFunction (){
    let average_marks = average(marks_1, marks_2, marks_3)
    let percentage_marks = percentage(marks_1, marks_2, marks_3)
    document.write(`<p>Average Marks is ${average_marks} </p> `)
    document.write(`<p>Percentage Marks is ${percentage_marks} % </p> `)
    
    
}