// const num1 = 10;
// // const num2 = 20;

// const sum = () => {
//   const num2 = 20;
//   return function () {
//     return num1 + num2
//   }
// }

// const myFunc = sum();
// console.dir(myFunc);

// (function () {
//   console.log('tusar');
// })()

const stopWatch = () => {
  const starTime = Date.now();

  const getDelay = () => {
    console.log(Date.now() - starTime);
  }

  return getDelay;
}

const timer = stopWatch();

for (let i = 0; i < 100000; i++) {
  const a = Math.random() * 1000;  
}

timer();
console.dir(timer)