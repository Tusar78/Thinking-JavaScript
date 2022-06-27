const languages = ['JavaScript', 'TypeScript', 'Python', 'C++', 'C'];

const ownMap = (arr, cb) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const temp = cb(arr[i], arr, i);
    newArray.push(temp)    
  }
  return newArray;
}

const languageCharacter = ownMap(languages, (language, arr, ind) => {
  console.log(language, arr, ind);
})

// console.log(languageCharacter);

// const demo = languages.map((val, arr, ind) => {
//   console.log(val, arr, ind);
// })

// console.log(demo);