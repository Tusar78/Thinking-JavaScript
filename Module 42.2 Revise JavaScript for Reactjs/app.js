// const animal = {
//   name: "Dog",
//   color: "Brown",
//   age: 7,
// };

// // const { color, ...animalProperty } = animal;
// // console.log(animalProperty);

// // When object is empty
// const { name, ...rest } = animal || {};
// console.log(rest);

// const dreamGirl = [
//   {
//     dream1: {
//       name: "bbu",
//       height: "5.4",
//       family: [{ father: "rock", mother: "shila", sister: "chinki" }],
//       age: undefined,
//       contactInfo: [
//         {
//           facebook: {
//             link: "https://www.facebook.com/",
//             followers: "12545",
//             status: "single",
//             friendsList: [
//               { name: "rofik" },
//               { name: "jobbar" },
//               { name: "salam" },
//               { name: "borkot" },
//               undefined,
//             ],
//           },
//         },
//         { instagram: "https://www.instagram.com/" },
//         { twitter: "https://twitter.com/" },
//         { github: "https://github.com/" },
//         { phone: ["01254823212", "02152457"] },
//       ],
//     },
//   },
// ];

// console.log(dreamGirl[0].dream1);

// const friends = dreamGirl[0].dream1?.contactInfo[0]?.facebook?.friendsList;
// console.log(friends);

// for (const friend of friends) {
//   console.log(friend?.name || {});
// }

// const person = {
//   name: 'Tusar',
//   age: 27,
//   eyeColor: 'Black'
// }

// const personToArray = Object.entries(person);
// for (const person of personToArray) {
//   console.log(person[1]);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const squireOfNumbers = numbers.map(number => {
//   return number * number;
// })

// console.log(numbers);
// console.log(squireOfNumbers);
