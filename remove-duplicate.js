const removeDuplicateArray = (arr) => {
  const special = [];
  for (i = 0; i < arr.length; i++) {
    if (!special.includes(arr[i])) {
      special.push(arr[i]);
    }
  }
  return special;
};
const sampleArray = [
  1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 9, 9, 9, 9, 9,
  10,
];
console.log(removeDuplicateArray(sampleArray));

// steps

//create an empty array
// loop over the given array
// use a conditional statement to check the conditio of what you are trying to achieve
// push the result in the special variable
