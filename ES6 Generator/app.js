// Revise Iterator
/*
const numbers = [1, 23, 4];
const iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
*/

// function *generator() {
//   yield 1;
//   yield 2;
//   return 'I am finished'
//   yield 3;
//   yield 4;
// }

// const iterator = generator();
// console.dir(iterator);

const numbers = {
  value: 1,
  value: 2,
  value: 3,
  value: 4
}

for (const number of numbers) {
  console.log(number);
}