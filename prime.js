// Lesson 2: Find All Prime Numbers in a Range
//     Write a function findPrimes that returns an array of all prime numbers between two numbers.
//     function findPrimes(start, end) {   // Your code here }
//     console.log(findPrimes(10, 20)); // [11, 13, 17, 19]

// function findPrimes(start, end) {
//   function getPrime(prm) {
//     if (prm === 2 && prm % 2 === 0) {
//       return false;
//     }
//   }
//   let newArray = [];

//   for (let i = start; i <= end; i++) {
//     console.log(getPrime[i]);
//     if (getPrime[i] % 2 !== 0) {
//       newArray.push(getPrime[i]);
//     }
//   }
//   return newArray;
// }
// console.log(findPrimes(10, 20));

function getPrimesBetween(start, end) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let primes = [];
  for (let i = Math.max(2, start); i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}
console.log(getPrimesBetween(10, 50));
