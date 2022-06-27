// function hello() {
//   console.log(`Hello World!`);
// }

// hello()
// // hello.language = 'javascript';
// console.dir(hello)

// Higher Order Function
// function hello() {
//   console.log('Hello world');
//   return function() {
//     console.log('Hello World 2');
//   }
// }

// const result = hello();
// result()

// Not using higher order function
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = [];

// for (let i = 0; i < numbers.length; i++) {
//   result.push(`${numbers[i]} x 2 = ${numbers[i] * 2}`);
// }

// console.log(result);

// Using higher order function
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers.map((number) => `${number} x 2 = ${number * 2}`);
// console.log(result);

// Array filter as a traditional way
// const players = [
//   {
//     name: 'Sakib',
//     avg: 38.9
//   },
//   {
//     name: 'Mahmudulla',
//     avg: 36.4
//   },
//   {
//     name: 'Mushfiq',
//     avg: 35.3
//   },
//   {
//     name: 'Tamim',
//     avg: 37.8
//   }
// ]

// const result = [];

// for (let i = 0; i < players.length; i++) {
//   const graterAvg = players[i].avg;
//   if (graterAvg >= 37) {
//     result.push(players[i])
//   }    
// }

// console.log(result);

// Array filter as a higherOrder way
const players = [
  {
    name: 'Sakib',
    avg: 38.9
  },
  {
    name: 'Mahmudulla',
    avg: 36.4
  },
  {
    name: 'Mushfiq',
    avg: 35.3
  },
  {
    name: 'Tamim',
    avg: 37.8
  }
]

const graterAvg = players.filter(player => player.avg >= 37);
console.log(graterAvg);