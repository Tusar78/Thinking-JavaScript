/** JavaScript this keyword rules
 * 1. Implicit binding
 * 2. Explicit binding
 * 3. new keyword
 * 4. window
 */

// var printPlayerName = function (name) {
//   console.log(name);
// }

// printPlayerName('Tusar');

// const tusar = {
//   name: 'Tusar',
//   age: 23,
//   play: function() {
//     console.log(`${this.name} can playing cricket!`);
//     console.log(this);
//   }
// }

// tusar.play();

// Number two example to understand 'this' implicit bindings
// const playFunction = function (obj) {
//   obj.play = function () {
//     console.log(`${this.name} can playing football!`);
//   }
// }

// const tusar = {
//   name: 'Tusar',
//   age: 23
// }

// const rakib = {
//   name: 'Rakib',
//   age: 30
// }

// // Create play function
// playFunction(tusar);
// playFunction(rakib);

// tusar.play() 
// rakib.play() 

// THird example using factory function
// function person (name, age, fatherName) {
//   return {
//     name,
//     age,
//     play: function() {
//       console.log(`${this.name} can play crickets!`);
//       console.log(this);
//     },
//     father: {
//       name: fatherName,
//       customPrint() {
//         console.log(`${name} father name ${this.name}!`);
//         console.log(this);
//       }
//     }
//   }
// }

// const tusar = person('Tusar', 23, 'Md. Esharot Ali')
// // console.log(tusar);
// // tusar.play()
// tusar.father.customPrint();

// const sleep = function (skill1, skill2, skill3) {
//   // console.log(`${this.name} sleeping at 12 am everyday!`);
//   console.log(`${this.name} know ${skill1}, ${skill2} & ${skill3}`);
//   console.log(this);
// }

// const tusar = {
//   name: 'Tusar',
//   age: 23
// }

// const v1 = 'Tailwind'
// const v2 = 'Bootstrap'
// const v3 = 'jQuery'

// const v = [v1, v2, v3]
// sleep.call(tusar, v1, v2, v3)
// sleep.apply(tusar, v)


// const skill = function (s1, s2, s3) {
//   console.log(`${this.name} know ${s1}, ${s2}, and ${s3}`);
//   console.log(this);
// }

// const tusar = {
//   name: 'Tusar',
//   age: 23
// }

// const v1 = 'Tailwind';
// const v2 = 'Bootstrap';
// const v3 = 'ReactJS';

// const result = skill.bind(tusar, v1, v2, v3);
// result()


function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(`${this.name} is ${this.age} years old!`);
}

const tusar = new Person('Tusar', 23);
console.log(tusar);