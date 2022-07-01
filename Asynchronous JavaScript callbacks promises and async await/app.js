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

// Asynchronous behavior simple.
// const processOrder = customer => {
//   console.log(`Processing order for customer 1~`);
//   setTimeout(() => {
//     console.log(`Cooking complete!`);
//   }, 3000);
//   console.log(`Processing order for customer 2~`);
// }

// console.log(`Take order for customer 1~`);
// processOrder();
// console.log(`Complete order for customer 1~`);


// Asynchronous using the beauty of callback
// const takeOrder = (customer, callback) => {
//   console.log(`Take order from ${customer}`);
//   callback(customer);
// }

// const processOrder = (customer, callback) => {
//   console.log(`Order processing for ${customer}`);
//   setTimeout(() => {
//     console.log(`Cooking Complete!`);
//     console.log(`Order processed for ${customer}`);
//     callback(customer)
//   }, 3000);
// }

// const completeOrder = (customer) => {
//   console.log(`Order complete for ${customer}`);
// }

// takeOrder('Tusar', (customer) => {
//   processOrder(customer, (customer) => {
//     completeOrder(customer)
//   })
// })

// Promise 


// Primitive vs reference
// let a = 5;
// let b = a;

// a = 6;
// console.log(a);
// console.log(b);

// let person = {
//   name: 'Tusar'
// }


// let person1 = person;

// person = {} // ASsignment 


// let array1 = ['Tusar', 'Rakib']
// let array2 = array1;

// // array1.push('Rubi');

// array1 = [];
// array1.push('Saba') // Mutation
// let array3 = array1;

// // Assignment
// array1 = [];

// console.log(array1);
// console.log(array3);
// console.log(array2);

// Change immutably
const language = {
  name: 'JavaScript',
  estd: '1995',
  library: ['React', 'Vue', 'jQuery']
}

const language1 = _.cloneDeep(language);

language.library.push('Svelt')

console.log(language);
console.log(language1);