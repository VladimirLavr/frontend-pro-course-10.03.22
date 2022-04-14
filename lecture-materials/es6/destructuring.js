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

const position = [10, 10, 0];

function describePosition([x]) {
  return `Object position on x axis equals ${x}`;
}

console.log(describePosition(position));







// Object Desctructuring
console.clear();

const somePony = {
  name: "Rainbow Pony",
  position: {x: 10, y: 20, z: 0},
  direction: {x: 0, y: 1, z: 0},
  rotation: {x: 1.57, y: 0, z: .89}
};

const {name, position: ponyPosition} = somePony;
console.log(name);
console.log(ponyPosition);

const {position: {x: ponyPositionX}} = somePony;
console.log(ponyPositionX);

const {rotation = {x: 0, y: 0, z: 0}} = somePony;
console.log("rotation", rotation);



const person = {
  name: "Bob",
  lastName: "Garison",
  address: {
    line1: "st. Shevchenko",
    line2: "building 12",
    some: {a: 10, b: 20}
  },
};

// const building = person.address.line2;
const {address: {line2: building, some: {a, b}}} = person;
console.log(building);
console.log(person);
console.log(a, b);

const response = {"data":{"members":{"totalCount":116},"repositories":{"totalCount":223},"projects":{"totalCount":0}}};

function parseTotalCountFromResponse({data: {members: {totalCount: usersTotalCount}}}) {
  return usersTotalCount;
}

console.log(parseTotalCountFromResponse(response));
