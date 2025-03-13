// Write a function sumDigits that  takes a number  or string of numbers and returns the sum of all its digits

const constDigits = (num) => {
  const answer = num.toString();
  const zoo = answer.split("").map((haha) => Number(haha));
  const score = zoo.reduce((a, b) => a + b, 0);
  return score;
};
const givenNumber = 45673;
console.log(constDigits(givenNumber));

// function sumDigits(num) {
//     return Math.abs(num) // Remove negative sign
//       .toString()
//       .split('')
//       .map(Number)
//       .reduce((a, b) => a + b, 0);
//   }

// Math.abs(num) helps to deal with the negative number
