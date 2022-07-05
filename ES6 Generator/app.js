// Revise Iterator
const numbers = [1, 23, 4];
const iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);