// Prototype In JavaScript!
// function Person (name, age) {
//   this.name = name;
//   this.age = age;

//   // this.eat = function () {
//   //   console.log(`${this.name} eating rice!`);
//   // }
// }

// Person.prototype = {
//   eat() {
//     console.log(`${this.name} eating rice!`);
//   }
// }

// const tusar = new Person ('Tusar', 23);
// console.log(tusar);
// const rakib = new Person ('Rakib', 30);
// console.log(rakib)

// Understanding Master Object
// const myFunc = function Person() {};
// console.dir(myFunc.__proto__);

// Assign Method to Master OBject
Object.prototype.eat = function () {
  console.log(`${this.name} can eating rice in 5 minutes`);
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  play() {
    console.log(`${this.name} can solve rubik's cube!`);
  },
};

const tusar = new Person("Tusar", 23);
console.log(tusar);
tusar.play();
tusar.eat();
