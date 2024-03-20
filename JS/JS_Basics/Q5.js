// Initialize variables first
let num1;

console.log("Before hoisting:");
console.log("num1:", num1);
console.log("num2:", num2);

// Declaration after initialization
num1 = 10;
var num2 = 20;

console.log("After hoisting:");
console.log("num1:", num1);
console.log("num2:", num2);

/*

Output:

Before hoisting:
num1: undefined
num2: undefined
After hoisting:
num1: 10
num2: 20


*/
