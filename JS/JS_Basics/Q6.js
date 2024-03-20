"use strict";

console.log("Before hoisting:");
// Trying to access the variable before it's initialization
try {
  console.log("num1: ", num1);
} catch (error) {
  console.log(error.message);
}

let num1 = 10;

console.log("After hoisting:");
console.log("num1:", num1);

// Trying to access the variable which doesn't exists
try {
  console.log("num2: ", num2);
} catch (error) {
  console.log(error.message);
}

/*

Output

Before hoisting:
Cannot access 'num1' before initialization
After hoisting:
num1: 10
num2 is not defined

*/
