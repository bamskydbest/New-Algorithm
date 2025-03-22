// Write a function that convert celsius to fehrenheit

// steps
// (0 * 1.8) + 32

const celsiusToFahrenheit = (n) => {
  const convertedToFehrenheit = n * (9 / 5) + 32;
  return convertedToFehrenheit;
};
const number = 1002;
console.log(celsiusToFahrenheit(number));
