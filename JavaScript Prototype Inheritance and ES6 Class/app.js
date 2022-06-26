// Prototype In JavaScript!
function Person (name, age) {
  this.name = name;
  this.age = age;

  // this.eat = function () {
  //   console.log(`${this.name} eating rice!`);
  // }
}

Person.prototype = {
  eat() {
    console.log(`${this.name} eating rice!`);
  }
}

const tusar = new Person ('Tusar', 23);
console.log(tusar);
const rakib = new Person ('Rakib', 30);
console.log(rakib);