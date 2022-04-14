console.clear();


// let symbolIdFirst = Symbol("id"); // $y1uejin23ih4223n42iu35b35bn2i5n = {description: "id"};

// let symbolIdSecond = Symbol("id"); // $msdglkmoe4j3204jm3t5n6308h530o = {description: "id"};

// const myObject = {
//   [symbolIdFirst]: 1,
//   value: "My custom value",
//   [symbolIdSecond]: 100,
// };

// console.log(myObject);


const symbolIdFrist = Symbol.for("id"); // $y1uejin23ih4223n42iu35b35bn2i5n
const symbolIdSecond = Symbol.for("id"); // $y1uejin23ih4223n42iu35b35bn2i5n
console.log(symbolIdFrist === symbolIdSecond);


const nameSymbol = Symbol.for("name");
console.log(nameSymbol);

console.log(Symbol.keyFor(nameSymbol));

const person = {
  [Symbol.for("name")]: "Will Smith",
}

console.log(person);
console.log(person[Symbol.for("name")]);

console.log(Object.keys(person));

console.log(Symbol.iterator);
