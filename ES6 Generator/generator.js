const friends = {
  one: "Rakib",
  two: "Sharif",
  three: "Selim",
  four: "Asad",
  five: "Nazmul",
};

function* generator(obj) {
  const entries = Object.entries(obj);
  for (const element of entries) {
    yield element[1];
  }
}

const iterator = generator(friends);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
