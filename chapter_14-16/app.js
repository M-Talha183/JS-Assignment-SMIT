// Chapter 14 To 16
// ================= Array =============================

// Answer 1

let std_name = [];

// Answer 2
var std_name_1 = new Array();

let my_friends = ["Ali", "Ahmed", "Hassan", "Hussain"];

// Answer 4
let numbers = [1, 2, 3, 4, 5];

// Answer 5
let boolean_array = [true, false, true, false];
// Answer 6
let mixed_array = [1, "Ali", true, 3.14];
// Answer 7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];  
document.writeln("<h1>Qualifications:</h1>");
for (let i = 0; i < qualifications.length; i++) {
    document.writeln("<p>" + (i + 1) + ". " + qualifications[i] + "</p>");
}


// Answer 8
let student_names = ["Ali", "Ahmed", "Hassan"];
let student_scores = [85, 92, 78];

let percentage = [student_scores[0] / 100 * 100, student_scores[1] / 100 * 100, student_scores[2] / 100 * 100];

document.writeln(`
    student_names[0] scored ${student_scores[0]} marks. Percentage: ${percentage[0]}%<br>
    student_names[1] scored ${student_scores[1]} marks. Percentage: ${percentage[1]}%<br>
    student_names[2] scored ${student_scores[2]} marks. Percentage: ${percentage[2]}%<br>
    `)

// Answer 9
let std_score  = [320, 230, 480, 120];
console.log("Scores of Students: " + std_score);
console.log("Sorted Scores of Students ",std_score.sort());

// Answer 10
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selected_cities = cities.slice(2, 4);
console.log("Selected Cities: ", selected_cities);


// answer 11
let arr = ["This", "is", "my", "cat"];
let str = arr.join(" ");
console.log(str);

// Answer 12
let devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.writeln("<h1>Devices:</h1>");
for (let i = 0; i < devices.length; i++) {
    document.writeln("<p>" + (i + 1) + ". " + devices[i] + "</p>");
}

// Answer 13
let devices_1 = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.writeln("<h1>Devices:</h1>");  
for (let i = devices_1.length - 1; i >= 0; i--) {
    document.writeln("<p>" + (devices_1.length - i) + ". " + devices_1[i] + "</p>");
}

// Answer 14
let phone_manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.writeln("<h1>Phone Manufacturers:</h1>");
for (let i = 0; i < phone_manufacturers.length; i++) {
    document.writeln("<p>" + (i + 1) + ". " + phone_manufacturers[i] + "</p>");
}