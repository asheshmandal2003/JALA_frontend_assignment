const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "USA",
    state: "CA",
    postalCode: "12345",
  },
  hobbies: ["reading", "traveling", "cooking"],
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.postalCode);
console.log(person.hobbies);

/*

Output:

John
Doe
30
123 Main St
USA
CA
12345
[ 'reading', 'traveling', 'cooking' ]

*/
