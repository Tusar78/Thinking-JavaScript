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
  value1: 1,
  value2: 2,
  value3: 3,
  value4: 4,
};

// Make iterator to object
Object.prototype[Symbol.iterator] = function () {
  const entries = Object.entries(this);
  let count = entries.length;
  let index = 0;

  return {
    next() {      
      if (count > 0) {
        let result = { done: false, value: entries[index][1] };
        count--;
        index++;
        return result;
      } else {
        return { done: true, value: undefined };
      }
    },
  };
};


for (let number of numbers) {
  console.log(number);
}
