console.clear();

const arr = [1,2,3,4,5,6,7,8,9];
const arr2 = ["Andrii", "Doroshenko", 25];

// es5 variant
// const first = arr[0];
// const second = arr[1];
// const rest = arr.slice(2);

const [first, second, ...rest] = arr;
let [firstName, lastName, age] = arr2;

console.log(`first is ${first}`);
console.log(`second is ${second}`);
console.log(`rest is ${rest}`);
console.log("-------");
console.log(`firstName is ${firstName}`);
console.log(`lastName is ${lastName}`);
console.log(`lastName is ${age}`);
console.log(age);


// default value
const nElementsArray = [1,2];

const [one, two, three = 1000] = nElementsArray;
console.log(one, two, three);

// nested arrays
const nestedArray = [[1,2,3],[4,5,6]];

const [[, , firstElem], secondElem] = nestedArray;
console.log(firstElem, secondElem);

// swithcing values of variables
let x = 10;
let y = 20;
console.log(`x is ${x} and y is ${y}`);

[x,y] = [y, x];
console.log(`x is ${x} and y is ${y}`);
