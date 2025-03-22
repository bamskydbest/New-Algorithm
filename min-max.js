// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

const maximumNumber = (list) => {
  let bank = -Infinity;
  for (let i = 0; i < list.length; i++) {
    let maximum = list[i];
    if (maximum > bank) {
      bank = maximum;
    }
  }
  return bank;
};
const sampleArray = [4, 6, 2, 1, 9, 63, -134, 566];
console.log(maximumNumber(sampleArray));

// const minimumNumber = (minn) => {
//   let min = -Infinity;
//   let minimum = "";
//   for (let i = 0; i < min.length; i++) {
//     let current = minn[i];
//     if (current < min) {
//       min = current;
//     } else if (min < current) {
//       minimum = current;
//     }
//   }
//   return minimum;
// };
// const arr = [-52, 56, 30, 29, -54, 0, -110];
// console.log(minimumNumber(arr));

const minimumNumber = (minn) => {
  const minimum = Math.min(...minn);
  return minimum;
};
const arrr = [-52, 56, 30, 29, -54, 0, -110];
console.log(minimumNumber(arrr));
