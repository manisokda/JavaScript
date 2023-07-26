// 1. Write a program to print all the array of elements.
let cars = ["BMW", "TATA", "BenZ"];
for (let i = 0; i < cars.length; i++) {
    console.log(i + " " + cars[i])
}
// output
// BMW
// TATA
// BenZ


// ----------------------------------------------------------------------------------------------------------------------------


// 2. Write a function that retuens sum of all the elemets of am array

let arr = [3, 6, 2, 7, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum); // output is 3+6+2+7+5 = 23



// ----------------------------------------------------------------------------------------------------------------------------



// 2. Write a function that retuens sum of all the elemets of am array

function sumOfArray(arr) {
    let N = arr.length;
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sumOfArray([3, 6, 2, 7, 5])); // output is 3+6+2+7+5 = 23



// ----------------------------------------------------------------------------------------------------------------------------



// 3. Given an array and a value k, write a function that returns the frequency of k in the given array.

function frequency(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            count++;
        }
    }
    return count;
}
console.log(frequency([3, 6, 2, 6, 7, 6, 4, 6], 6)); // output is 4 => total 6 present in array is 4 times



// ----------------------------------------------------------------------------------------------------------------------------



// 3. write a function that return maximum of array.

function findMax(arr) {
    let N = arr.length;
    let ans = 0 // for a count
    for (let i = 0; i < N; i++) {
        if (arr[i] > ans) {
            ans = arr[i]
        }
    }
    return c;
}
console.log(findMax([2, 3, 4, 5, 6, 9])); // output is 4 => total 6 present in array is 4 times



// ----------------------------------------------------------------------------------------------------------------------------


// 3. Max and Min of an Array, Take input an array A of size N and write a program to print maximum and minimum elements of the input. The only line of the input would contain a single integer N that represents the length of the array followed by the N elements of the input array A.
//Input Format - The first line contains a single integer N representing the length of the array A followed by N elements of the array A.
let A = prompt("Provide sample input ");
let min = A[1]; // this calculate from 1st index
let max = A[1]; // this calculate from 1st index
for (let i = 1; i < A.length; i++) { //Number(A[i]); 
    if (A[i] > max) {
        max = Number(A[i]);
    }
    if (A[i] < min) {
        min = Number(A[i]);
    }
}
console.log(max + " " + min); // 123456 => min 2, max 6



// ----------------------------------------------------------------------------------------------------------------------------