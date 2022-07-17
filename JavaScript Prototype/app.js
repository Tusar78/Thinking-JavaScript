// Object introduction
// const personMethod = {
//   eat() {
//     console.log("Person is eating!");
//   },
//   sleep() {
//     console.log("Person is sleeping!");
//   }
// }

// function Person(name, age) {
//   const person = {};

//   person.name = "Tusar";
//   person.age = 30;

//   person.eat = personMethod.eat;
//   person.sleep = personMethod.sleep;

//   return person;
// }

// const tusar = Person('Tusar', 23);
// const rakib = Person('Rakib', 30);

// console.log(personMethod);
// console.log(tusar.eat());

// const player = {
//   name: 'Sakib',
//   age: 31,
//   country: 'Bangladesh'
// }

// const captain = Object.create(player);
// console.log(captain);

// const player = {
//   name: 'Sakib',
//   age: 31,
//   country: 'Bangladesh'
// }

// const captain = Object.create(player);
// console.log(captain);

// const personMethod = {
//   eat() {
//     console.log("Person is eating!");
//   },
//   play() {
//     console.log(`${this.name} is playing!`);
//   },
//   sleep() {
//     console.log("Person is sleeping!");
//   }
// }

// function Person(name, age) {
//   const person = Object.create(personMethod);
//   person.name = name;
//   person.age = age;
//   return person;
// }

// const tusar = Person('Tusar', 23);
// const rakib = Person('Rakib', 30);

// tusar.play()
// rakib.play()

// Object.prototype way

// console.time();
// function Person (name, age) {

//   const person = Object.create(Person.prototype);
//   person.name = name;
//   person.age = age;
//   return person;
// }
// Person.prototype = {
//   play() {
//     console.log('He is playing');
//   }
// }

// const tusar = Person('Tusar', 23);
// console.log(tusar);

// console.timeEnd()

// Method inheritance using prototype as manual way
// const personMethod = {
//   eat() {
//     console.log(this.name + ' eating!');
//   },
//   play() {
//     console.log(this.name + ' playing!');
//   }
// }
// function Person (name, age) {
//   const person = Object.create(personMethod);
//   person.name = name;
//   person.age = age;

//   return person;
// }

// const tusar = Person('Tusar', 23);
// tusar.play();
// const rakib = Person('Tusar', 30);

// Direct prototypical inheritance using functional way

// Person.prototype = {
//   eat() {
//     console.log(`${this.name} eating..!`);
//   },
//   play() {
//     console.log(`${this.name} playing..!`);
//   }
// }

// function Person (name, age) {
//   const person = Object.create(Person.prototype);
//   person.name = name;
//   person.age = age;

//   return person;
// }

// const tusar = Person('Tusar', 23);
// console.log(tusar);

// Prototypical inheritance using this and new keyword
// function Person (name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype = {
//   eat() {
//     console.log(`{this.name} eating!`);
//   },
//   play() {
//     console.log(`${this.name} playing!`);
//   }
// }

// const tusar = new Person('Tusar', 23);
// console.log(tusar);
// tusar.play()

// Array Conclusion
// const person = new Array();
// const person = new Number();
// console.log(person);

// const person = {
//   name: function() {
//     return {
//       friend: function() {
//         return ['Rakibul islam', 'sharif']
//       }
//     }
//   }
// }

// console.log(person.name().friend());

// Prototype mechanism
function Person(name, age) {
  const person = Object.create(Person.prototype);  
  person.name = name;
  person.age = age;

  return person;
}

Person.prototype = {
  eat() {
    console.log(`${this.name} can eating!`);
  },
  sleep() {
    console.log(`${this.name} can sleeping!`);
  },
  play() {
    console.log(`${this.name} can playing!`);
  }
}

const tusar = Person('Tusar', 23);
tusar.play()