//Write a function capitalizeWords that takes a string and capitalizes the first letter of each word.

// function capitalizeFirstWord(strg) {
//   let word = strg.split(" ");
//   for (let i = 0; i < strg.length; i++) {
//     const first = strg.split(" ").map((word) => {
//       word[0].toUpperCase();
//     });
//     console.log(first);
//   }

//   return word;
// }
// console.log(capitalizeFirstWord("hello world"));

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world from javascript"));
