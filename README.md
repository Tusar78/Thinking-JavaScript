# Object Oriented Programming (OOP).

## What is Object Oriented Programming (OOP) ?
- In my opinion: Many people think that object oriented programming is a language, or tools. But this idea is wrong. Object Oriented Programming is a model, a type of code writing.

- Like Book: Object Oriented Programming (OOP) is a programming language model organized around object rather than "Action" and data rather than "Logic"

## What is Encapsulations?
- In my opinion: Encapsulation is one of the four pillars of Object Oriented Programming. Let us analyze in a simple way with an example. Suppose we have initialized a data called "person" in one of our projects. Good thing there is no problem. But while working on that project for a while, you have initialized another data called "person" in line "1200". What would happen now? Either the new data will overwrite the previous data or it will show a "syntax error". "Encapsulation" has emerged to solve this problem. "Encapsulation" is what keeps data encapsulated. As a result, the data of one scope cannot be accessed from another scope. For example, if we initialize any data within the "class" and then privatize that data, then that data cannot be accessed from outside the "class". The same thing happens with "function scope". These are the characteristics of "encapsulation".

## What is Abstract?
- In my opinion: "Abstraction" is one of the four pillars of Object Oriented Programming. The function of "abstraction" is to make the necessary things visible to the user and to hide the unnecessary things. Let's analyze the matter with an example. When we play videos on YouTube, we see many options there, such as: Like button, Play, Pause button, etc. These can be used by ordinary users without any hesitation. But I don't know how a like button works, what's going on in the background. This is basically a game of abstract. Because the average user does not need to know how to complete a like by clicking the like button.

## What is Inheritance?
- In my opinion: Inheritance is one of the four pillars of Object Oriented Programming. "Inheritance" means inheritance. "Inheritance" provides the power to create new classes with the characteristics of the parent class.

## What is Polymorphism?
- In my opinion: Polymorphism is one of the four pillars of Object Oriented Programming. "Polymorphism" means polymorphism. Polymorphism in JavaScript refers to the idea of reusing a single piece of code more than once.

## What is Object?
- An "object" is a combination of one or more properties. Properties are a combination of key and value. Key's value can also be a function. The function used as the value of the key is called the method.

## Type of Object?
- User defined object.
  > User defined object refers to a custom created object. Which programmers create to handle their specific programming tasks.

- Native object.
  > Native objects are basically provided by JavaScript itself. Such as: string, number, Boolean, function etc.

- Host object.
  > The host object is basically a part of JavaScript language not and does not support. It basically supports various host environments such as browsers. For example: window, navigator etc.

- Document object.

## What is Prototype?
> Prototype
> - Every object in JavaScript has a built-in property, which is called its prototype.
> - The prototype is itself an object, so the prototype will have its own prototype, making what iss called a prototype chain.
> - The chain ends when we reach a prototype that has null for its own prototype.
> - Prototypes are the mechanism by which JavaScript objects inherit features from one another
> Example: 

## Change Prototype object

``` JavaScript
function Person (name) {
  this.name = name;
}

Person.prototype.age = 23;

const tusar = new Person('Tusar');

Person.prototype = {age: 30};


const rubi = new Person('Rubi')
console.log(tusar);
console.log(rubi);

// Note: You should not modify the prototypes of standard JavaScript built-in objects like strings, arrays, etc. It is considered a bad practice.
```

## Assign Method to Master Object

``` JavaScript
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
```

## Prototypical Inheritance

``` JavaScript
function Person(name, age) {
  // Parent
  this.name = name;
  this.age = age;
}

function Programmer(name, age, type, language) {
  // child
  Person.call(this);
  this.name = name;
  this.age = age;
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
```

## JavaScript Class Example

``` JavaScript
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
```