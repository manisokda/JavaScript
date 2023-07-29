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



// 3. Write a function that retuens sum of all the elemets of am array

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



// 4. Given an array and a value k, write a function that returns the frequency of k in the given array.

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



// 5. write a function that return maximum of array.

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


// 6. Max and Min of an Array, Take input an array A of size N and write a program to print maximum and minimum elements of the input. The only line of the input would contain a single integer N that represents the length of the array followed by the N elements of the input array A.
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


// 7. Print in Reverse
// Write a program to print the input array A of size N in reverse order where you have to take integer N and further N elements as input from user.

let A = prompt("Provide sample input ");
let result = '';
for (let i = A.length - 1; i > 0; i--) {
    result += A[i] + ' ';

}
console.log(result); // 512345 - > 54321


// ----------------------------------------------------------------------------------------------------------------------------


// 8. Product of elements
// Write a program that returns the product of all elements present in the array.

function solve(n, arr) {
    // YOUR CODE GOES HERE
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}

// output - A = [7, 9, 2, 51] = > 6426



// ----------------------------------------------------------------------------------------------------------------------------



// 9. Copy the Array

function CopytheArray(A, B) {
    let arr = [];
    for (let i = 0; i <= A.length - 1; i++) {
        arr[i] = A[i] + B;
    }
    return arr;
}
console.log(CopytheArray([1, 2, 3, 2, 1], 3)) // output is [ 4, 5, 6, 5, 4 ]



// ----------------------------------------------------------------------------------------------------------------------------



// Insert New elememt

function insert(arr, X, P) {
    let N = arr.length;
    let O = new Array(N + 1);
    let index = P - 1;
    for (let i = 0; i < index; i++) {
        O[i] = arr[i];
    }
    O[index] = X; //2,3,5,1, 4, 2 
    for (let j = index + 1; j <= N; j++) {
        // console.log(O[j] = arr[j-1])
        O[j] = arr[j - 1]
    }
    return O;
}
console.log(insert([2, 3, 1, 4, 2], 5, 3)); //output - [ 2, 3, 5, 1, 4, 2 ]



// ----------------------------------------------------------------------------------------------------------------------------



//  Remove Array (deleting element at specified position)

function removeArray(arr, P) {
    let N = arr.length;
    let O = new Array(N - 1); // 
    let index = P - 1; //3-1=2

    for (let i = 0; i < index; i++) {
        O[i] = arr[i];
    }

    for (let j = index; j <= N - 2; j++) {
        O[j] = arr[j + 1];
    }

    return O;
}

console.log(removeArray([2, 3, 1, 4, 2], 3)); //output - [ 2, 3, 4, 2 ]


// ----------------------------------------------------------------------------------------------------------------------------



//  Reverse Array

function reverse(A) {
    let N = A.length;
    let p1 = 0;
    let p2 = N - 1;
    while (p1 < p2) {
        let temp = A[p1];
        A[p1] = A[p2];
        A[p2] = temp;
        p1++;
        p2--;
    }
    return A;
}
console.log(reverse([2, 3, 4, 5, 6, 7, 8])); // output is 8,7,6,5,4,3,2



// ----------------------------------------------------------------------------------------------------------------------------



//  Reverse Part Of Array
function reverse(A, B, C) {
    let N = A.length;
    let p1 = B;
    let p2 = C;
    while (p1 < p2) {
        let temp = A[p1];
        A[p1] = A[p2];
        A[p2] = temp;
        p1++;
        p2--;
    }
    return A;
}
console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 7)); // output is 8,7,6,5,4,3,2




// ----------------------------------------------------------------------------------------------------------------------------


//  Count the numbers 
/*Given an array A of N integers. 
Count the number of elements that have at least 1 elements greater than itself.*/

function countNumbers(A) {
    let N = A.length;
    let count = 0;
    let max_value = A[0];

    // Find the maximum value in the array
    for (let i = 1; i < N; i++) {
        if (A[i] > max_value) {
            max_value = A[i];
        }
    }

    // Count the elements that have at least one element greater than itself
    for (let i = 0; i < N; i++) {
        if (A[i] < max_value) {
            count++;
        }
    }

    return count;
}
console.log(countNumbers([3, 2, 0])); // output is 2




// ----------------------------------------------------------------------------------------------------------------------------



//Check if Array is Sorted or not
function arraySorted(A) {
    let N = A.length;
    let isSorted = A[0];
    for (let i = 1; i < N; i++) {
        if (A[i] < isSorted) {
            return 0;
        }
        isSorted = A[i];
    }
    return 1;

}
console.log(arraySorted([1, 2, 2])); // output is - 1



// ----------------------------------------------------------------------------------------------------------------------------




//Right Shift an Array
function shiftArray(A) {
    let N = A.length;
    let lastDightStore = A[N - 1];
    for (i = N - 1; i >= 1; i--) {
        A[i] = A[i - 1];
    }
    A[0] = lastDightStore;
    return A
}
console.log(shiftArray([1, 2, 3, 4, 5])) // [5,1,2,3,4]




// ----------------------------------------------------------------------------------------------------------------------------