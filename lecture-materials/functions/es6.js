// spread & rest

function sum(first, second, ...values) {
  // return Array.prototype.reduce.call(arguments, (prev, next) => prev + next, 0);
  return values.reduce((prev, next) => prev + next, first+second);
}

console.log(sum(10, 20));

// --

// const firstName = "Bob";

// const dynamicPropertyName = "age";

// const myObj = {
//   firstName,
//   [dynamicPropertyName]: 23,
// };

// console.log(myObj.age);
// console.log(myObj[dynamicPropertyName]);


// ---

const firstName = "Anna";
console.log(`Hello, ${firstName}!`);


function style(literals, ...substitutions) {
  console.log(literals);
  console.log(substitutions);
  return `LOL THERE IS ${substitutions[0]} ${substitutions[1]} HORSING AROUND!`;
}

console.log(style`Hello, ${firstName} ${"Hornet"}!`);
