// Player Salaries 
var playerone = 20000000 // 20 million
var playertwo = 20000000 // 20 million
var playerthree = 10000000 // 10 million

// To calculate the total for all players
var salaryTotal = playerone + playertwo +playerthree 
// Prints total salary to console
console.log("The total salary for all 3 players: " + salaryTotal) 

var limit = 40000000
// Calculation to work out remainder
var tax = salaryTotal - limit
// Multiply's remainder by 18%
var taxrate = tax * 0.18

// Logged figures to console
console.log("The team exceeded the limit by: " + tax + "\n" + "The team owes luxury tax of: " + taxrate)

// \n creates a line break in Javascript