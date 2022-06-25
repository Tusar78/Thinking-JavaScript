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
// function Person() {
//   this.name = 'Tusar',
//   this.age = 23;
// }

// const person = new Person();
// console.log(person);

// Manual way to return object in function
// function Person (name, age) {
//   const person = Object.create(personMethod);
//   person.name = name;
//   person.age = age;

//   return person;
// }

// const personMethod = {
//   play() {
//     console.log('Person is playing!');
//   },
//   eat() {
//     console.log('Person is eating!');
//   }
// }

// const tusar = Person('Tusar', 23);
// console.log(tusar);

// Constructor function with parameter
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype = {
//   eat() {
//     console.log(`${this.name} can eat!`);
//   },
//   sleep() {
//     console.log(`${this.name} can sleep!`);
//   },
//   play() {
//     console.log(`${this.name} can play football!`);
//   }
// }

// const tusar = new Person('Tusar', 23);
// console.log(tusar);
// tusar.play()


// getter
// const person = {
//   firstName: 'Tusar',
//   get myName() {
//     console.log(this.firstName);
//   },
//   set changeName(newName) {
//     this.firstName = newName;
//   }
// }

// person.changeName = 'Rakib';
// console.log(person.firstName);

// person.myName;

// Getter and setter using object.defineproptery
const person = {
  firstName: 'Tusar',
  lastName: 'Ali',  
}

Object.defineProperty(person, 'getName', {
  get: function () {
    console.log(this.firstName);
  }
})

Object.defineProperty(person, 'changeName', {
  set: function (newVal) {
    this.firstName = newVal;
  }
})

// Getter
person.getName

// Setter
person.changeName = 'Esharot'
person.getName;