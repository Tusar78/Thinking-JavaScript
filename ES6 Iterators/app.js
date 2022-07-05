const languages = ['JavaScript', 'TypeScript', 'Go', 'Python', 'C'];
// const iterator = languages[Symbol.iterator]();
// console.log(iterator.next());
// console.log('Amar sonar bangla');
// console.log('Ami tomai valobashi');

// setTimeout(() => {
//   console.log('Chirodin tomar akash');
// }, 2000);

// console.log(iterator.next());
// console.log(iterator.next());

// String.prototype[Symbol.iterator] = function () {
//   let count = this.length;
//   return {
//     next() {
//       if (count > 0) {
//         count--;
//         return {done: false, value: 'JS'}
//       } else {
//         return {done: true, value: undefined};
//       }
//     }
//   }
// }

// const favoriteLanguage = 'JavaScript';
// console.log(...languages);

const range = (start, end, step) => {
  let current = start;
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result;
          if (current <= end) {
            result = {done: false, value: current};
            current += step;
            return result;
          } else {
            return {done: true, value: undefined};
          }
        }
      }
    }
  }
}

console.log([...range(1, 100, 2)]);