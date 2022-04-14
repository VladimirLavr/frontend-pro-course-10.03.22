const firstName = "Anna";
console.log(`Hello, ${firstName}!`);


function style(literals, ...substitutions) {
  console.log(literals);
  console.log(substitutions);
  return `LOL THERE IS ${substitutions[0]} ${substitutions[1]} HORSING AROUND!`;
}

console.log(style`Hello, ${firstName} ${"Hornet"}!`);
