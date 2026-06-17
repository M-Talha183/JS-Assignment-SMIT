// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.


// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

let user_input = +prompt("Enter the Year ....... ")
console.log(typeof(user_input))

function leap_year_checjer(year){
    if (year %  100 != 0 & year % 4 == 0){
        document.write(`<p>${year} is leap year </p> `)
    }else{
     document.write(`<p>${year} is not  leap year </p> `)
   
    }
}
leap_year_checjer(user_input)