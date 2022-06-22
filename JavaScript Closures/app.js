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

// const stopWatch = () => {
//   const starTime = Date.now();

//   const getDelay = () => {
//     console.log(Date.now() - starTime);
//   }

//   return getDelay;
// }

// let timer = stopWatch();

// for (let i = 0; i < 100000; i++) {
//   const a = Math.random() * 1000;  
// }

// timer();
// console.dir(timer)

// timer = null;


// Problem
for (var i = 0; i < 3; i++) {
  const myFunc = () => {
    console.log(i);
  }

  console.log(i);
  console.dir(myFunc);

  setTimeout(myFunc, 3000);
}

// Solution
for (let i = 0; i < 3; i++) {
  const myFunc = () => {
    console.log(i);
  }

  console.log(i);
  console.dir(myFunc);

  setTimeout(myFunc, 3000);
}