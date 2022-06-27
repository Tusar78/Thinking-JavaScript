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
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = [];

for (let i = 0; i < numbers.length; i++) {
  result.push(`${numbers[i]} x 2 = ${numbers[i] * 2}`);  
}

console.log(result);