// Write a function factorial that takes a number as input and returns its factorial

const factorial = (n) => {
  let answer = 1;
  for (let i = 2; i <= n; i++) {
    answer *= i;
  }
  return answer;
};
const number = 5;
console.log(factorial(number));
