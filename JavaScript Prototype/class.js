class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} playing!`);
  } 
  play() {
    console.log(`${this.name} playing!`);
  }
}

const tusar = new Person ('Tusar', 23);
tusar.play()