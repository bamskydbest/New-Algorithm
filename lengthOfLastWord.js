// Given a string s consisting of words and spaces, return the length of the last word in the string.
function lengthOfLastWord(s) {
  let lastWord = "";
  let word = s.split(" ");

  for (let i = 0; i < word.length; i++) {
    lastWord = word[word.length - 1];
  }

  return lastWord;
}
console.log(
  lengthOfLastWord("Mahmoud Abdulmajeed Taiye Bamidele Sanusi Taofik")
);
