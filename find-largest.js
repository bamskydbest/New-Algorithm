function findLargest(numbers) {
  let keeper = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    if (current > keeper) {
      keeper = current;
    }
  }

  return keeper;
}
const scores = [20, 49, 46, 3, 86, 99];
console.log(findLargest(scores));
