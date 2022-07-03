const languages = ['JavaScript', 'TypeScript', 'Go', 'Python', 'C'];
const iterator = languages[Symbol.iterator]();
console.log(iterator.next());
console.log('Amar sonar bangla');
console.log('Ami tomai valobashi');

setTimeout(() => {
  console.log('Chirodin tomar akash');
}, 2000);

console.log(iterator.next());
console.log(iterator.next());