// Class In JavaScript

// Person Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`${this.name} can sleep at 12AM!`);
  }

  eat() {
    console.log(`${this.name} can eating rice in just 5 minutes!`);
  }
}

// Programming Class
class Programmer extends Person {
  constructor(name, age, type, language) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.type = type;
    this.language = language;
  }

  typeSpeed() {
    console.log(`${this.name} can type in standard level.`);
  }
}

// IT class
class IT_Engineer extends Person{
  constructor(name, age, type, language) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.type = type;
    this.language = language;
  }

  configure() {
    console.log(`${this.name} can configure anything related to the IT`);
  }
}

const tusar = new Programmer("Tusar", 23, "Front end Developer", "JavaScript");
console.log(tusar);
tusar.typeSpeed();

console.log('%c ----------------------- ', 'background: white; color: #111');

const rakib = new IT_Engineer('Rakib', 30, 'IT-Engineer', 'Python');
console.log(rakib);
rakib.configure();
