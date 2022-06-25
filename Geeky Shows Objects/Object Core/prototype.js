// As you know, you can create an object in javascript using an object constructor function

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.gender = 'male';
// Person.prototype.play = function () {
//   console.log(`${this.name} can playing football!`);
// }
// const tusar = new Person('Tusar', 23);
// const rubi = new Person('Rubi', 30);

// console.log(tusar);
// tusar.play()

// console.log(rubi);
// rubi.play()

// console.log(Person.prototype);

// Changing Prototype
function Person (name) {
  this.name = name;
}

Person.prototype.age = 23;

const tusar = new Person('Tusar');

Person.prototype = {age: 30};


const rubi = new Person('Rubi')
console.log(tusar);
console.log(rubi);

// Note: You should not modify the prototypes of standard JavaScript built-in objects like strings, arrays, etc. It is considered a bad practice.

