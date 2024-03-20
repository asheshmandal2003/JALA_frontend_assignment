function func1(name) {
  console.log(`Hello, My name is ${name}`);
}

console.log("Invoking function using call()");
func1.call(null, "Ashesh");

function func2(name, location) {
  console.log(`Hello, My name is ${name}, \n I from ${location}`);
}

console.log("Invoking function using apply()");
const args = ["Ashesh", "West Bengal"];

func2.apply(null, args);

/*

Output:

Invoking function using call()
Hello, My name is Ashesh
Invoking function using apply()
Hello, My name is Ashesh, 
 I from West Bengal


*/
