//Write a function argumentsLength that returns the count of arguments passed to it.

function argumentsLength(...args) {
  return args.length;
}

console.log(argumentsLength(1, 2, 3));
console.log(argumentsLength("Mahmoud", "Abdulmajeed"));
console.log(argumentsLength(5, 10));
