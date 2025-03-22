// Write a function to split a string and convert it into an array of words.

function stringToArray(string) {
  // code code code

  const result = string.split(" ");
  return result;
}
console.log(stringToArray("Robin Singh"));

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

function litres(time) {
  const result = Math.floor(time * 0.5);
  return result;
}
console.log(litres(11.8));
