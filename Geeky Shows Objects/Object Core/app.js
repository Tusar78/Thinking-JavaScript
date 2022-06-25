// Object Literal 
// const student = {
//   firstName: `Tusar`,
//   class: 12
// }

// console.log(typeof student);

/** Accessing Object Properties
 * 1. Using Dot notation
 * 2. Using bracket notation
 * 3. JavaScript Object Method
 */

// const person = {
//   name: 'Tusar', 
//   age: 23
// }

// console.log(person.name);
// console.log(person['age']);

// In JavaScript an object can also contain a function. For example
// const person = {
//   name: 'Tusar',
//   age: 23,
//   greet: function () {
//     console.log(`Hello ${this.name}! How is going on.`);
//   }
// }

// person.greet()

// Constructor Function
function Person() {
  this.name = 'Tusar',
  this.age = 23;
}

const person = new Person();
console.log(person);