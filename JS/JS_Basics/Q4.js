const person = {
  firstName: "John",
  lastName: "Doe",
};

console.log("Method 1: ");
console.log("First Name: ", person.firstName);
console.log("Last Name: ", person.lastName);

console.log("Method 2: ");
for (const key in person) {
  console.log(`person["${key}"] = ${person[key]}`);
}

/*

Output:

Method 1: 
First Name:  John
Last Name:  Doe
Method 2: 
person["firstName"] = John
person["lastName"] = Doe

*/
