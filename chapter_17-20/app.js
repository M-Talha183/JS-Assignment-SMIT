//Answer 01 
// let mult_array = [[]]

// // Answer 02
// let req_mult = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]

// // Answer 03
// // for (let i = 1 ; i<=10 ; i++){
// //     document.writeln(i,"<br>")
// // }

// // Answer 04

// // user_tab = +prompt("Enter the number which Table is required : ")
// // user_len = +prompt("Enter the Length : ")
// // for(let i = 1 ; i<= user_len ; i++){
// //     document.writeln(`${user_tab} * ${i} = ${user_tab * i} <br>`)
// // }

// // Answe 05
// let fruits = ["apple","orange","banana","straberry","mango"]
// for(let i = 0 ; i<= fruits.length ; i++ ){
//     document.writeln(`Element At Index ${i} is ${fruits[i]} <br>`)
// }
// // Answer 06
// document.writeln("<br>Counting <br>")
// // 1 2 3 series 15 
// for (let i= 0 ; i <= 15 ; i++){
//     document.writeln(i,",")
// }
// document.writeln("<br>Rverse Counting <br>")

// document.writeln("<br>")
// for (let i= 15 ; i >=0 ; i--){
//     document.writeln(i,",")
// }
// document.writeln("<br>Even <br>")

// document.writeln("<br>")

// for (let i= 0 ; i <= 20 ; i+=2){
//     document.writeln(i,",")
// }
// document.writeln("<br>ODD  <br>")

// document.writeln("<br>")

// for (let i= 1 ; i <= 20 ; i+=2){
//     document.writeln(i,",")
// }
// document.writeln("<br>Series <br>")

// document.writeln("<br>")

// for (let i= 2 ; i <= 20 ; i+=2){
//     document.writeln(i,"K,")
// }


// Answer 07
// let user_item = prompt("Enter the item ")
// let bakrey = ["Bread", "Croissant", "Cupcake", "Donut", "Cookie", "Muffin", "Brownie", "Cinnamon Roll", "Bagel", "Pastry", "Baguette", "Cake", "Cheesecake", "Pie", "Tart", "Bun", "Rusk", "Scone", "Pretzel", "Churros", "Macaron", "Cream Roll", "Danish"]

// item_fount = bakrey.indexOf(user_item)
// if (item_fount >= 0){
//     console.log("Item Found ",bakrey[item_fount] ,"At Index", item_fount)
// }else{
//     console.log("Item not found")
// }


// // Answer 08
// let num_array = [24,53,78,91,12]

// var largest_num = num_array[0]
// for (let i= 0 ; i < num_array.length ; i++){
//      if (num_array [i] > largest_num  ){
//          largest_num = num_array [i]
        
//      }
    
// }
// document.writeln(`Array Items ${num_array} <br> Largest Number ${largest_num} <br>`)

// // Answer 09
// let num_arr = [24,53,78,91,12]

// var smallest_num = num_arr[0]
// for (let i= 0 ; i < num_arr.length ; i++){
//      if (num_arr [i] < largest_num  ){
//          smallest_num = num_array [i]
        
//      }
    
// }
// document.writeln(`Array Items ${num_arr} <br> Largest Number ${smallest_num}`)


for (let i= 1 ; i<=100 ; i++){
    if(i%5 == 0){
        document.writeln(i)
    }
}