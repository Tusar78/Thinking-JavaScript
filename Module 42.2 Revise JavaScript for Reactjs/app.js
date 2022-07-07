const animal = {
  name: "Dog",
  color: "Brown",
  age: 7,
};

const { color, ...animalProperty } = animal;
console.log(animalProperty);