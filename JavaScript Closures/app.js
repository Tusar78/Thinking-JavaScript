const num1 = 10;
// const num2 = 20;

const sum = () => {
  const num2 = 20;
  return function () {
    return num1 + num2
  }
}

const myFunc = sum();
console.dir(myFunc);