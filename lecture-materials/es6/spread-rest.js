function sum(first, second, ...values) {
  // return Array.prototype.reduce.call(arguments, (prev, next) => prev + next, 0);
  return values.reduce((prev, next) => prev + next, first+second);
}

console.log(sum(10, 20));
