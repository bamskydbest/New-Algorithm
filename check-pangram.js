// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

const checkPangram = (alphabet) => {
  let check = " ";
  const panagramBank = " abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ";
  for (let i = 0; i < alphabet.length; i++) {
    check += alphabet[i];
    if (check.includes(panagram)) {
      return true;
    } else {
      false;
    }
  }

  return check;
};
const panagram = "The quick brown fox jumps over the lazy dog";
console.log(checkPangram(panagram));
