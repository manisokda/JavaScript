// 1. Print all numbers from 1 to 5
let input = prompt("Provide sample input ");
let i = 1;
let result = '';
while (i <= input) {
    result += i + ' ';
    i++;
}
console.log(result); // output is - 1 2 3 4 5



// 2. Print all numbers from down to top
let input = prompt("Provide sample input ");
let i = input;
let result = '';
while (i >= 1) {
    result += i + ' ';
    i--;
}
console.log(result); // output - 5 4 3 2 1