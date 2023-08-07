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



// Even Odd Elements
function oddEvenNumber(A) {
    let N = A.length;
    let odd_count = 0;
    let even_count = 0;
    let total = '';
    for (let i = 0; i < N; i++) {
        if (A[i] % 2 == 0) {
            even_count++;
        } else {
            odd_count++;
        }
    }
    total = even_count - odd_count;
    if (total < 0) {
        total = total * -1;
    }
    return total;

}
console.log(oddEvenNumber([1, 2, 3, 4, 5])); // odd count =3, even count = 2 so talal 3-2=1



// ----------------------------------------------------------------------------------------------------------------------------



// Temperature Difference
function temperatureDifference(arr) {
    let N = arr.length;
    let max = -Infinity;
    let result = '';
    let min = Infinity;
    for (let i = 0; i < N; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    result = max - min;
    return result
}
console.log(temperatureDifference([12, 26, 25, 21, 18, 10, 45, 40, 29, 30], 10)); // output - 35



// ----------------------------------------------------------------------------------------------------------------------------



// Average Rainfall
function averageRainfall(arr, A) {
    let N = arr.length;
    let sum = 0;
    let total = '';
    for (let i = 0; i < N; i++) {
        sum += arr[i];
    }
    total = sum / A;
    total = Math.floor(total);
    return total
}
console.log(averageRainfall([1, 2, 3, 4], 4)); // output - 2



// ----------------------------------------------------------------------------------------------------------------------------



// Position Of Element B
function positionFind(arr, B) {
    let N = arr.length;
    for (let i = 0; i < N; i++) {
        if (arr[i] == B) {
            return i;
        }
    }
    return -1;
}
console.log(positionFind([12, 26, 25, 21, 18, 10, 45, 40, 29, 30], 40)); //output - index position is 7



// ----------------------------------------------------------------------------------------------------------------------------



// Count Of Elements Greater Than B
function countGreatherthanB(arr, B) {
    let N = arr.length;
    let sum = 0;
    for (let i = 0; i < N; i++) {
        if (arr[i] > B) {
            sum++
        }
    }
    return sum;
}
console.log(countGreatherthanB([12, 26, 25, 21, 18, 10, 45, 40, 29, 30], 25)); // 5
console.log(countGreatherthanB([22, 28, 23, 21, 18, 15, 24, 40, 12, 30, 10, 19], 20)); // 7



// ----------------------------------------------------------------------------------------------------------------------------



// First and Last Index
function firstAndLastIndex(arr, B) {
    let N = arr.length;
    let result = [];
    let count = [];
    let lastIndex = '';
    for (let i = 0; i < N; i++) {
        if (arr[i] == B) {
            count += i;
        }
    }
    lastIndex = count.length - 1;
    result.push(count[0]);
    result.push(count[count.length - 1]);
    return result;
}
console.log(firstAndLastIndex([-2, -2, 4, 4, 8, 9], 4));



// ----------------------------------------------------------------------------------------------------------------------------


// Consecutive Duplicate
function consecutiveDuplicate(arr) {
    let N = arr.length;
    for (let i = 0; i < N; i++) {
        if (arr[i] == arr[i - 1]) {
            return "True";
        }
    }
    return "False";
}
console.log(consecutiveDuplicate([1, 2, 3, 4]));



// ----------------------------------------------------------------------------------------------------------------------------



// Separate Odd Even
function seperateOddEven(arr) {
    let N = arr.length;
    let odd_num = [];
    let even_num = [];
    for (let j = 0; j < N; j++) {
        if (arr[j] % 2 == 0) {
            even_num.push(arr[j])
        } else {
            odd_num.push(arr[j])
        }
    }
    if (odd_num.length > 0) {
        console.log(odd_num.join(' ') + ' ');
    } else {
        console.log('');
    }
    if (even_num.length > 0) {
        console.log(even_num.join(' ') + ' ');
    } else {
        console.log('');
    }
}
console.log(seperateOddEven([1, 2, 3, 4, 5, 6]))



// ----------------------------------------------------------------------------------------------------------------------------



// // Check If Array Is Strictly Decreasing?
function strictlyDecreasingOrder(A) {
    let N = A.length;
    for (let i = 0; i < N; i++) {
        if (A[i] <= A[i + 1])
            return 0;
    }
    return 1;
}
console.log(strictlyDecreasingOrder([6, 5, 4, 3, 2, 1])) // output - its decreasing order so print it as 1.



// ----------------------------------------------------------------------------------------------------------------------------



// pair sum and compare with K
function pairEqual(arr, K) {
    let N = arr.length;
    let count = 0;
    for (let i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            if (arr[i] + arr[j] == K) {
                count++;
            }
        }
    }
    return count / 2;
}
console.log(pairEqual([5, 3, 2, 3, 6], 8))



// ----------------------------------------------------------------------------------------------------------------------------



//  Inverse of the Array

/*You are given an integer array A. Now your task is to find the inverse of A. Now, the inverse of the array is A will be an array in which we change the positions of the values as their indices and indices as values.

So, array A = [2, 0, 1]
- Now 2 is at index 0. So, place 0 at index 2.
- 0 is at index 1. So, place 1 at index 0.
- 1 is at index 2. So, place 2 at index 1.

So, the inverse of A will be [1, 2, 0]*/

function invesrArray(arr) {
    let N = arr.length;
    let count = [];
    for (let i = 0; i < N; i++) {
        count[arr[i]] = i;
    }
    return count
}
console.log(invesrArray([2, 0, 1])) // [1, 2, 0]



// ----------------------------------------------------------------------------------------------------------------------------



// Left Shift An Array
function leftShift(arr) {
    let N = arr.length;
    let firstDight = arr[0];
    // console.log(temp);
    for (let i = 0; i < N - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[N - 1] = firstDight;
    return arr;
}
console.log(leftShift([1, 2, 3, 4, 5])); // [2,3,4,5,1]



// ----------------------------------------------------------------------------------------------------------------------------



// Find unique element
function findUniqueElement(arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++;
            }
        }
        ans = arr[i]

        if (count === 1) {
            ans = arr[i] + '';
            break;
        }
    }
    return ans;
}

console.log(findUniqueElement([1, 4, 3, 5, 2, 3, 5, 1, 4, 4])); // unique number is 2



// ----------------------------------------------------------------------------------------------------------------------------



// All Even Numbers
function AllEvenNumbers(arr) {
    let N = arr.length;
    let evenNum = [];
    for (let i = 0; i < N; i++) {
        if (arr[i] % 2 == 0) {
            evenNum.push(arr[i]);
        }
    }
    // evenNum;
    return evenNum;
}
console.log(AllEvenNumbers([8, 54, 79, 62, 33, 59, 14, 19, 20, 27])); // [ 8, 54, 62, 14, 20 ]




// ----------------------------------------------------------------------------------------------------------------------------




// All Odd Numbers
function AllEvenNumbers(arr) {
    let N = arr.length;
    let oddNum = [];
    for (let i = 0; i < N; i++) {
        if (arr[i] % 2 != 0) {
            oddNum.push(arr[i]);
        }
    }
    // evenNum;
    return oddNum;
}
console.log(AllEvenNumbers([8, 54, 79, 62, 33, 59, 14, 19, 20, 27])); // [ 8, 54, 62, 14, 20 ] // output is - [ 79, 33, 59, 19, 27 ]




// ----------------------------------------------------------------------------------------------------------------------------




// All Unique Elements - Increasing Order
function findUniqueElementIncreasingOrder(A) {
    let ans = [];
    for (let i = 0; i < A.length; i++) {
        let count = 0
        for (let j = 0; j < A.length; j++) {
            if (i === j) {
                continue;
            }
            if (A[i] === A[j]) {
                count++;
            }
        }
        if (count === 0) {
            ans.push(A[i]);
        }
    }
    for (let i = 0; i < ans.length; i++) {
        let minvalue = ans[i]; // 9  //4
        let index = i; //0
        for (let j = i + 1; j < ans.length; j++) { //2
            if (ans[j] < minvalue) { //5<9 => 4<5 => 7<4 => 8<4
                minvalue = ans[j]; // 9=5 // 5=4 // 8=4 
                index = j; //1 //2 //2 //2 //3
            }
        }
        let temp = ans[i]; //9 //2 
        ans[i] = ans[index]; //7 //3
        ans[index] = temp; //7 -> 9
    }
    return ans;
}

console.log(findUniqueElementIncreasingOrder([8, 54, 79, 62, 33, 59, 14, 8, 20, 27, 33, 54])); // output is - 14 20 27 59 62 79




// ----------------------------------------------------------------------------------------------------------------------------



// Check Pair With Sum X
/*You are given an integer array A[] and an integer B.
You are required to return 1 if any pair of elements exist in the array whose sum is equal to B.
Otherwise, return 0.*/
function checkPair(A, B) {
    let N = A.length;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < i; j++) {
            if (A[i] + A[j] == B) {
                return 1
            }
        }
    }
    return 0
}
console.log(checkPair([41, 25, 36, 10, 9, 85, 45, 68, 74, 90], 100)) // output is 90+10 = 100 so ans is 1



// ----------------------------------------------------------------------------------------------------------------------------



// Divisible by 5 and 7
function divisible(A) {
    let N = A.length;
    let result = [];
    for (let i = 0; i < N; i++) {
        if (A[i] % 5 == 0 && A[i] % 7 == 0) {
            result.push(A[i]);
        }
    }
    return result;
}
console.log(divisible([23, 34, 25, 35, 66, 70, 14])) // output - [35,70]



// ----------------------------------------------------------------------------------------------------------------------------