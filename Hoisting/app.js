/**
 * var vs let (and const)
 * function
 */

// console.log(country);
// var country;
// country = 'Bangladesh';

// let language;
// console.log(language);
// language = 'JavaScript!'

// let dataType;
// console.log(dataType);
// dataType = 'Array';

var LANGUAGE = 'Java';
var language = 'JavaScript';

function getLanguage () {
  if (!language) {
    var language = LANGUAGE;
  }
  return language;
}

console.log(`I love ${getLanguage()}`);