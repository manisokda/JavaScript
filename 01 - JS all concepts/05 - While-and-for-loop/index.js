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


// 3. Multiples of 4
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


// 4. Print All Digits - From Right To Left
let input = prompt("Provide sample input ");
let result = '';
// if negative number or less than 0
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


// 5. Write a program to find sum all Natural numbers from 1 to N where you have to take N as input from user

let input = prompt("Provide sample input ");
let sum = 0;
let i = 1;
while (i <= input) {
    sum = sum + i;
    i++
}
console.log(sum); // input = 5 => 1+2+3+4+5 => 15


// ----------------------------------------------------------------------------------------------------------------------------


// 6. Print Even numbers from N to 0
let input = prompt("Provide sample input ");
let i = input;
let result = '';
while (i >= 0) {
    if (i % 2 == 0) {
        result += i + ' ';
    }
    i--;
}
console.log(result); // output - 4 2 0


// ----------------------------------------------------------------------------------------------------------------------------


// 7. Write a program to print all odd numbers from 1 to N where you have to take N as input from user.
let input = prompt("Provide sample input ");
let i = 1;
let result = '';
while (i <= input) {
    if (i % 2 !== 0) {
        result += i + ' ';
    }
    i++;
}
console.log(result); // output - 1 3 5


// ----------------------------------------------------------------------------------------------------------------------------


//8. Sum of Odds - You have to print the sum of all odd numbers in the range [1, A].
let input = prompt("Provide sample input ");
let i = 1;
let sum = 0;
while (i <= input) {
    if (i % 2 !== 0) {
        sum = sum + i;
    }
    i++;
}
console.log(sum); // output = 4 => [1,2,3,4] => [1,3] => 1+3 = 4


// ----------------------------------------------------------------------------------------------------------------------------


let input = prompt("Provide sample input ");
let i = 1;
while (i <= 5) {
    console.log(input + " * " + i + " = " + input * i);
    i++;
}
// output is 5
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25


// ----------------------------------------------------------------------------------------------------------------------------


// 9. Steps Of Frog - A frog is currently at position X, jump size (i.e. the distance covered in single jump by frog) is Y. Print next 5 position when frog take 5 continuous jumps.

let X = prompt("Provide sample input1 ");
let Y = prompt("Provide sample input2 ");
let i = 0;
let result = '';
while (i < 5) {
    X += Y;
    result += X + ' ';
    i++;
}
console.log(result); //output: X=27, Y=2 => 29 31 33 35 37



// ----------------------------------------------------------------------------------------------------------------------------


// 10. Print number inbetween 5 to 9
let A = prompt("Provide sample input1 ");
let B = prompt("Provide sample input2 ");
let i = A;
let result = '';
while (i <= B) {
    result += i + ' ';
    i++;
}
console.log(result); //output: A=5, B=9 => 56789


// ----------------------------------------------------------------------------------------------------------------------------






// ----------------------------------------------------------------------------------------------------------------------------





// ----------------------------------------------------------------------------------------------------------------------------






// ----------------------------------------------------------------------------------------------------------------------------





// ----------------------------------------------------------------------------------------------------------------------------