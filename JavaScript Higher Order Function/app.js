// function hello() {
//   console.log(`Hello World!`);
// }

// hello()
// // hello.language = 'javascript';
// console.dir(hello)

// Higher Order Function
function hello() {
  console.log('Hello world');
  return function() {
    console.log('Hello World 2');
  }
}

const result = hello();
result()