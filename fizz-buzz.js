const fizzBuzz = () => {
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
fizzBuzz();

// Second example

// Write a function that gives a number between 1- 200 , that prints "Mahmoud" when there is a multiple of 7 and also prints '"Abdulmajeed" when there is a multiple of 9 , lets spice it up by adding "Mahmoud Abdulmajeed Taiye " when there is a multiple of 7 and 9.

const newGame = () => {
  for (let i = 1; i <= 200; i++) {
    // console.log(i);
    if (i % 7 === 0 && i % 9 === 0) {
      console.log(`Mahmoud Abdulmajeed Taiye ${i}`);
    } else if (i % 7 === 0) {
      console.log("Mahmoud");
    } else if (i % 9 === 0) {
      console.log("Abdulmajeed");
    } else {
      console.log(i);
    }
  }
};
newGame();
