const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "johndoe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
  },
  hobbies: ["Reading", "Playing guitar", "Cooking"],
  isAdmin: false,
};

for (const key in user) {
  console.log(`user["${key}"] = ${user[key]}`);
}

/*

In the terminal give the path of the folder and type `node Q3.js` to run the file.

Output:
user["firstName"] = John
user["lastName"] = Doe
user["age"] = 30
user["email"] = johndoe@example.com
user["address"] = [object Object]
user["hobbies"] = Reading,Playing guitar,Cooking
user["isAdmin"] = false


*/
