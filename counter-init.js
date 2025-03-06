// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const createCounter = (init) => {
  let current = init;

  return {
    increment: function () {
      return ++current;
    },
    decrement: function () {
      return --current;
    },
    reset: function () {
      current = init;
      return current;
    },
  };
};

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 5
console.log(counter.reset()); // 5
