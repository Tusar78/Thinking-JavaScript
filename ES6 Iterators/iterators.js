const range = (start, end, step) => {
  let current = start;
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result;
          if (current <= end) {
            result = { done: false, value: current };
            current += step;
            return result;
          }
          return { done: true };          
        },
      };
    },
  };
};

const number = [...range(1, 50000, 1)];
console.log(number);