// Write a function that checks for the availability of vowel sounds in a givenWord and the return the ammount of times they appear

// Solution

const checkVowel = (alphabet) => {
  const vowelBank = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < alphabet.length; i++) {
    if (vowelBank.includes(alphabet[i])) {
      count++;
    }
  }
  return count;
};
let wordGiven = "Mahmoud Abdulmajeed Taiye";
const answer = console.log(checkVowel(wordGiven));
