const sumArray = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    console.log("sum is " + sum);
  }

  return sum;
};

let list = [2, 4, 6, 8];
const result = sumArray(list);
console.log(result);

// Practice

// [10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]

// Arrow function

const practice = (learn) => {
  let summ = 0;

  for (let i = 0; i < learn.length; i++) {
    summ += learn[i];
    console.log("The sum of the given array is " + summ);
  }
  return summ;
};
let checkOut = [
  10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
];
const resultCheck = practice(checkOut);
console.log(resultCheck);

// Regular Function

// given value

// [11,12,13,14,15,16,17,18,19,20,21,21,22,23,24,25,26,27,28,29,30]

function love(marriage) {
  let relationship = 0;

  for (let i = 0; i < marriage.length; i++) {
    relationship += marriage[i];
    console.log("The sum of the given array is " + relationship);
  }
  return relationship;
}
let boy = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 22, 23, 24, 25, 26, 27, 28,
  29, 30,
];
const lastMarriage = love(boy);
console.log(lastMarriage);

// Using Arrow function sum the given number in an array

// let log = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const sumTotal = (figure) => {
  let summation = 0;

  for (let b = 0; b < figure.length; b++) {
    summation += figure[b];
    console.log(" The summation of the sumtotal is " + summation);
  }
  return summation;
};
let log = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const solution = sumTotal(log);
console.log(solution);
