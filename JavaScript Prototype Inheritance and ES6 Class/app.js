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
// Object.prototype.eat = function () {
//   console.log(`${this.name} can eating rice in 5 minutes`);
// };

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype = {
//   play() {
//     console.log(`${this.name} can solve rubik's cube!`);
//   },
// };

// const tusar = new Person("Tusar", 23);
// console.log(tusar);
// tusar.play();
// tusar.eat();


// Getter & Setter
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   walk() {
//     console.log(`${this.name} can walk fast!`);
//   }

//   get getName() {
//     return this.name;
//   }

//   set setName(newVal) {
//     this.name = newVal;
//   }
// }

// const tusar = new Person('Tusar', 23);
// tusar.setName = 'Rakib'
// console.log(tusar);
// console.log(tusar.getName);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} can eating just in 5 minutes`);
  }

  static myFunc(p1, p2) {
    return p1.age === p2.age;
  }
}

const tusar = new Person('Tusar', 30);
const rakib = new Person('Rakib', 30);
console.log(tusar);

console.log(Person.myFunc(tusar, rakib));