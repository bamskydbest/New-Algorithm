// Write a fuction that returns true or false for a palindrome word for "malayalam"

//Solution

let wordGiven = "";
function palindromeCheck(data) {
  for (let i = data.length - 1; i >= 0; i--) {
    wordGiven += data[i];
  }
  //   wordGiven === data ? true : false;
  if (wordGiven === data) {
    return true;
  } else return false;
}
const word = "malayalam";
const reveal = console.log(palindromeCheck(word));
