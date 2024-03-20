function Person(name, country) {
  this.name = name;
  this.country = country;
}

Person.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name} from ${this.country}.`);
};

const person1 = new Person("William", "UK");
const person2 = new Person("Brian", "USA");

person1.greet();
person2.greet();

/*

Output:

Hello, I'm William from UK.
Hello, I'm Brian from USA.

*/
