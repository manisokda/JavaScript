// 1. Print all numbers from 1 to 5
let input = prompt("Provide sample input ");
let i = 1;
let result = '';
while (i <= input) {
    result += i + ' ';
    i++;
}
console.log(result); // output is - 1 2 3 4 5


// ----------------------------------------------------------------------------------------------------------------------------


// 2. Print all numbers from down to top
let input = prompt("Provide sample input ");
let i = input;
let result = '';
while (i >= 1) {
    result += i + ' ';
    i--;
}
console.log(result); // output - 5 4 3 2 1


// ----------------------------------------------------------------------------------------------------------------------------


// Multiples of 4
let input = prompt("Provide sample input ");
let i = 1;
let result = '';
while (i * 4 <= input) { // condition chek only multiple of 4 instead of all the loops
    result += i * 4 + ' ';
    i++;
}
console.log(result); // 4 8 12 16 20

// or

let i = 1;
while (i * 4 <= 22) {
    console.log(i * 4);
    i++;
}


// ----------------------------------------------------------------------------------------------------------------------------


// Print All Digits - From Right To Left
let input = prompt("Provide sample input ");
let result = '';
// if negative number
let isNegative = false
if (input == 0 || input < 0) {
    console.log("0");
}
while (input > 0) {
    let lastDight = input % 10;
    result += lastDight;
    input = parseInt(input / 10);
}
console.log(result); // 2345 -> 5432


// ----------------------------------------------------------------------------------------------------------------------------