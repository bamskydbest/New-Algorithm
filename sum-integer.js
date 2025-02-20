// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// let a = 50;
// let b = -100;

let a = 100;
let b = 100;

function sumInteger() {
  const sum = a + b;

  if (a === b) {
    return a;
  }
  return sum;
}
console.log(sumInteger());
