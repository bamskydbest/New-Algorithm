//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

const deleteDuplicate = (head) => {
  let check = [];
  for (let i = 0; i < head.length; i++) {
    let current = head[i];
    if (!check.includes(current)) {
      check.push(current);
    }
  }
  return check;
};
console.log(deleteDuplicate([1, 1, 2]));

// function lengthOfLastWord(s) {
//   let lastWord = "";
//   let word = s.split(" ");
//   //   return word;
//   let check = word[1];
//   //   return check;
//   lastWord = check.length;
//   return lastWord;
// }
// console.log(lengthOfLastWord("hello world"));
