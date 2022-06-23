/**
 * let vs let (and const)
 * function
 */

// console.log(country);
// let country;
// country = 'Bangladesh';

// let language;
// console.log(language);
// language = 'JavaScript!'

// let dataType;
// console.log(dataType);
// dataType = 'Array';


// Unexpected for let
// let LANGUAGE = 'Java';
// let language = 'JavaScript';

// function getLanguage () {
//   if (!language) {
//     let language = LANGUAGE;
//   }
//   return language;
// }

// console.log(`I love ${getLanguage()}`);

// Expected behavior
let LANGUAGE = 'Java';
let language = 'JavaScript';

function getLanguage () {
  if (!language) {
    let language = LANGUAGE;
  }
  return language;
}

console.log(`I love ${getLanguage()}`);