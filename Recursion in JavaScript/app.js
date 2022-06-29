// let total = 0;
// const n = 10;

// for (let i = 0; i <= n; i++) {
//   total += i;  
// }

// console.log(total);

// f(n-1) + n = f(n)
function sum(n) {
  if (n === 0) {
    return 0;
  } else {
    return sum(n - 1) + n
  }
}

console.log(sum(10));