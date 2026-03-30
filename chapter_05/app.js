// Chapter 05: Temperature Converter

// a) Store a Celsius temperature into a variable
let celsiusTemp = 25;

// b) Convert it to Fahrenheit & output "NNoC is NNoF"
let fahrenheitFromCelsius = (celsiusTemp * 9/5) + 32;
document.writeln(celsiusTemp + "°C is " + fahrenheitFromCelsius + "°F<br>");

// c) Store a Fahrenheit temperature into a variable
let fahrenheitTemp = 77;

// d) Convert it to Celsius & output "NNoF is NNoC"
let celsiusFromFahrenheit = (fahrenheitTemp - 32) * 5/9;
document.writeln(fahrenheitTemp + "°F is " + celsiusFromFahrenheit + "°C<br>");

    // i) Decrement
    num--;

    // j) Show after decrement
    document.writeln("Value after decrement is: " + num + "<br><br>");

    // k) Remainder after dividing by 3
    var remainder = num % 3;

    // l) Show remainder
    document.writeln("The remainder is: " + remainder);


// answer 4
    // Store ticket price
    var ticketPrice = 600;

    // Number of tickets
    var totalTickets = 5;

    // Calculate total cost
    var totalCost = ticketPrice * totalTickets;

    // Show output
    document.writeln("Cost of one movie ticket is " + ticketPrice + " PKR <br><br>");
    document.writeln("Total cost to buy " + totalTickets + " tickets to a movie is " + totalCost + " PKR");

// answer 5
    // Number ka variable
    var num = 4;

    document.write("<h2>Multiplication Table of " + num + "</h2>");

    // Loop for table
    for (var i = 1; i <= 10; i++) {
        document.write(num + " x " + i + " = " + (num * i) + "<br>");
    }


// answer 6
// a. Store a Celsius temperature into a variable
let celsius = 25;

// b. Convert it to Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;
document.writeln(celsius + "°C is " + fahrenheit + "°F <br><br>");

// c. Store a Fahrenheit temperature into a variable
let fahrenheit2 = 77;

// d. Convert it to Celsius
let celsius2 = (fahrenheit2 - 32) * 5/9;
document.writeln(fahrenheit2 + "°F is " + celsius2 + "°C");

// answer 7
// a. Price of item 1
let price_item1 = 500;

// b. Price of item 2
let price_item2 = 800;

// c. Ordered quantity of item 1
let quantity_item1 = 2;

// d. Ordered quantity of item 2
let quantity_item2 = 3;

// e. Shipping charges
let shipping_charges = 200;

// Calculate total cost
let total_cost = (price_item1 * quantity_item1) + 
                 (price_item2 * quantity_item2) + 
                 shipping_charges;

// Show receipt in browser
document.writeln("<h2>Shopping Cart Receipt</h2>");
document.writeln("Price of Item 1: " + price_item1 + " PKR<br>");
document.writeln("Quantity of Item 1: " + quantity_item1 + "<br><br>");

document.writeln("Price of Item 2: " + price_item2 + " PKR<br>");
document.writeln("Quantity of Item 2: " + quantity_item2 + "<br><br>");

document.writeln("Shipping Charges: " + shipping_charges + " PKR<br><br>");

document.writeln("<b>Total Cost: " + total_cost + " PKR</b>");

// answer 8
// Total currency in PKR (single expression)
let totalPKR = (10 * 104.80) + (25 * 28);

// Show result in browser
document.writeln("<h2>Currency Conversion</h2>");
document.writeln("Total Currency in PKR: " + totalPKR);

// answer 9

// Initialize a number
let num = 10;

// Perform all operations in a single expression
let result = ((num + 5) * 10) / 2;

// Display result
document.writeln("<h2>Arithmetic Result</h2>");
document.writeln("Initial Number: " + num + "<br>");
document.writeln("Final Result: " + result);

// answer 10
// a. Store the current year
let currentYear = 2026;

// b. Store the birth year
let birthYear = 2000;

// c. Calculate two possible ages
let age1 = currentYear - birthYear;
let age2 = age1 - 1;

// Output result
document.writeln("<h2>Age Calculator</h2>");
document.writeln("They are either " + age2 + " or " + age1 + " years old.");


// answer 11
// a. Store radius
let radius = 7;

// π
let pi = 3.142;

// Calculate circumference
let circumference = 2 * pi * radius;

// Calculate area
let area = pi * radius * radius;

// Output results
document.writeln("<h2>The Geometrizer</h2>");
document.writeln("Radius: " + radius + "<br><br>");

document.writeln("The circumference is " + circumference + "<br>");
document.writeln("The area is " + area);


// answer 12
// a. Store your favorite snack
let snack = "Chips";

// b. Store your current age
let currentAge = 20;

// c. Store maximum age
let maxAge = 80;

// d. Store estimated amount per day
let perDay = 3;

// e. Calculate total amount needed for rest of life
// (remaining years × 365 days × snacks per day)
let totalNeeded = (maxAge - currentAge) * 365 * perDay;

// Output result
document.writeln("<h2>Lifetime Supply Calculator</h2>");
document.writeln("Favorite Snack: " + snack + "<br>");
document.writeln("You will need " + totalNeeded + " " + snack + 
                 " to last you until the ripe old age of " + maxAge);