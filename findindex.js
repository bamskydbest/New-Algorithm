// Write a function findindex that takes an array and a target CSSMathValue,and returns the index of the target

const findindex = (arr, t) => {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current === t) {
      return i;
    }
  }
  return -1;
};
const givenArray = [3, 6, 7, 9, 9];
const target = 7;
console.log(findindex(givenArray, target));

// Another method

const find = (arr, t) => {
  const solution = arr.indexOf(t);
};
const secondArray = [10, 111, 13, 14, 15, 16];
const targett = 14;
console.log(findindex(secondArray, targett));
