// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     console.log(`${this.name} playing!`);
//   } 
//   play() {
//     console.log(`${this.name} playing!`);
//   }
// }

// const tusar = new Person ('Tusar', 23);
// tusar.play()

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     console.log('Person can eating');
//   }

//   sleep() {
//     console.log(`${this.name} can sleeping!`);
//   }
// }

// const tusar = new Person('Tusar', 23);
// console.log(tusar);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} can eating!`);
  }
}

class SoftwareEngineer extends Person{
  constructor(name, age, type, language) {
    super(name, age)
    this.type = type;
    this.language = language;
  }

  sleep() {
    console.log(`${this.name} is sleeping!`);
  }
}

const tusar = new SoftwareEngineer('Tusar', 23, 'Frontend Developer', 'JS')
console.log(tusar);