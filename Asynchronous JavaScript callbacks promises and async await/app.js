// Synchronous behavior
// const processFunc = () => {
//   console.log('Process output 1!');

//   let currentTime = new Date().getTime();
//   while (currentTime + 3000 >= new Date().getTime());

//   console.log('Process output 2');
// }

// console.log('output 1');
// processFunc();
// console.log('output 2');

// Asynchronous behavior
const processOrder = customer => {
  console.log(`Processing order for customer 1~`);
  setTimeout(() => {
    console.log(`Cooking complete!`);
  }, 3000);
  console.log(`Processing order for customer 2~`);
}

console.log(`Take order for customer 1~`);
processOrder();
console.log(`Complete order for customer 1~`);