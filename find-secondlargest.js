// Write a function that picks the second largest nummber from the array given.
// manual method
const secondLargest = (number) => {
  let largestNumber = -Infinity;
  let secondLargestt = "";

  for (let i = 0; i < number.length; i++) {
    if (number[i] > largestNumber) {
      secondLargestt = largestNumber;
      largestNumber = number[i];
    } else if (number[i] > secondLargestt && number[i] < largestNumber) {
      secondLargestt = number[i];
    }
  }
  return secondLargestt;
};
const sampleArray = [23, 45, 67, 89, 0, 56, 78, 34, 234, 543, 231];
console.log(secondLargest(sampleArray));

// simpler method
function secondLargestTwo(numbers) {
  const sorted = numbers.sort((y, z) => y - z);
  // if there are duplicates in the array
  const removeDuplicate = [...new Set(sorted)];
  const secondLargesttt = removeDuplicate[removeDuplicate.length - 2];
  return secondLargesttt;
}
const samArr = [23, 34, 54, 65, 78, 67, 89, 908, 786, 5464, 3421];
console.log(secondLargestTwo(samArr));
