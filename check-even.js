// Write a fuction that checks if a given number is even or odd , return "Even " when it is even and return "Odd" when it is odd.

const checkEven = (number) => {
  if (number % 2 === 1) {
    return "Odd";
  } else {
    return "Even";
  }
};
const givenNumber = 100;
console.log(checkEven(givenNumber));

//Steps
//1. use a conditional statement to deploy what you want to do
//2. use an arithmetic operator modulous so as to get a remainder
//3. return  "Even" when the number given is even
//4. return "Odd" if the number given is odd
