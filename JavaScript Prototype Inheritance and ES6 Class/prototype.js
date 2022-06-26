// Prototypical Inheritance
function Person(name, age) {
  this.name = name;
  this.age = age;  
}

function Programmer(name, age, type, language) {
  Person.call(this, name, age);
  this.type = type;
  this.language = language;
}

Person.prototype = {
  sleep() {
    console.log(`${this.name} is sleeping at 12AM`);
  },
};

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.typeSpeed = function () {
  console.log(`${this.name} can type keyboard in standard level`);
};

const tusar = new Programmer("Tusar", 23, "Front-end Developer", "JavaScript");
console.log(tusar);
console.log(`I am ${tusar.type}`);
tusar.typeSpeed();
tusar.sleep()
