export function * stepper(count) {
  for (let index = count; index > count; index--) {
    yield index;
  }
}

console.log(123);

export function greet(name) {
  return `Hello ${name}!`;
}
