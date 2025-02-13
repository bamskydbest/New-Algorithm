function reverseString(input) {
  let answer = "";

  for (let i = input.length - 1; i >= 0; i -= 1) {
    answer += input[i];
  }

  return answer;
}
let text = "pentium";
const result = reverseString(text);
console.log(result);

// practice

// Regular function

// FLABAGASTED

function reversal(put) {
  let script = " ";
  for (let i = put.length - 1; i >= 0; i--) {
    script += put[i];
  }
  return script;
}
let word = "FLABAGASTED";
const look = reversal(word);
console.log(look);

// Arrow Function

// You Are Going To Make it in life , No Matter What , You can't Be Broken

const mahmoud = (taiye) => {
  let abdulmajeed = " ";
  for (let i = taiye.length - 1; i >= 0; i--) {
    abdulmajeed += taiye[i];
  }
  return abdulmajeed;
};

let wordGiven =
  "You Are Going To Make it in life , No Matter What , You cant Be Broken";
const reveal = mahmoud(wordGiven);
console.log(reveal);

// using regular function reverse
// 'HIPPOPOTAMUS'

function backwardString(store) {
  let response = "";
  for (let i = store.length - 1; i >= 0; i--) {
    response += store[i];
  }
  return response;
}

let content = "HIPPOPOTAMUS";
const solution = backwardString(content);
console.log(solution);
