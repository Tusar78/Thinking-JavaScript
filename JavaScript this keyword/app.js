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
function person (name, age) {
  return {
    name,
    age,
    play() {
      console.log(`${this.name} can play crickets!`);
      console.log(this);
    }
  }
}

const tusar = person('Tusar', 23)
console.log(tusar);
tusar.play()