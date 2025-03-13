//Write a function randomNumber that generates a random number between two given numbers (inclusive)

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(randomNumber(1, 10));
