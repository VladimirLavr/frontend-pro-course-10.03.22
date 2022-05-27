console.group();

const array = [1,2,3,4,5,6,7,8,9];
console.log(array);

const demoObject = {a: 10, b: 20, c: 30};
console.log(demoObject);

for (let index = 0; index < array.length; index += 2) {
  const element = array[index];
  console.log(element);
}

console.log('-----------------------------------');

console.groupCollapsed('GENERATORS');

for (const item of array) {
  console.log(item);
}

console.log('-----------------------------------');

// for (const iterator of object) {
// }

const a  = {
  ['hello'+ 'world']: '12345',
  [Symbol.for('test')]: '1234567',
}

// const iterator = array[Symbol.iterator]();
// console.log(iterator);
// console.log(iterator.next());

// // API of ArrayIterator.next(): () => {value: any, done: boolean}

// let iter = iterator.next();

// while (!iter.done) {
//   const iterResult = iterator.next();
//   console.table(iterResult);
// }

// console.clear();


const myAwesomeObjectForIteration = {
  name: "IT School",
  _courses: ['Front-end Pro', 'Front-end Basic', 'Python Pro'],

  get courses() {
    return this._courses;
  },

  [Symbol.iterator]() {
    let count = 0;
    return {
      next: () => {
        if (this._courses[count++]) {
          value = document.createElement('div');
          value.innerText = this._courses[count++];
          value.style.backgroundColor = '#ffdead';
          return {value, done: false};
        } else {
          return {value: undefined, done: true};
        }
      },
    }
  },

};

for (const iterator of myAwesomeObjectForIteration) {
  console.log(iterator);
}

console.log('-----------------------------------');

function * testGenerator(params) {
  console.log('start 3');
  console.log('start 2');
  console.log('start 1');
  console.log('GO!');
  yield 21;
  yield 22;
  yield false;
  yield 'HAHAHFAF';
  console.log('finish');
  return 42;
}

const iteratorForGenerator = testGenerator(1);
const iteratorForGenerator1 = testGenerator(1);

console.log(iteratorForGenerator1.next());
console.log(iteratorForGenerator1.next());
console.log(iteratorForGenerator1.next());
console.log(iteratorForGenerator1.next());
console.log(iteratorForGenerator1.next());
console.log(iteratorForGenerator1.next());

for (let iter of iteratorForGenerator) {
  console.log(iter);
}

function * rangeGenerator (min = 1, max = 100) {
  for (let i = min; i <= max; i++) {
    yield i;
  }
}


for (const value of rangeGenerator(-5, 5)) {
  console.log(value);
}


function * IDGenarator(prefix = 'UUID') {
  while (true) {
    yield `${prefix}-${Math.floor(Math.random() * Date.now())}`;
  }
}

const idGen = IDGenarator();

console.log(idGen.next());
console.log(idGen.next());
console.log(idGen.next());
console.log(idGen.next());
console.log(idGen.next());
console.log(idGen.next());


console.log(console);

console.time('TIME FOR CONSOLE');
console.warn(1234);
console.info(1234);
console.info(1234);
console.info(1234);
console.timeEnd('TIME FOR CONSOLE');


const iterator = array[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next());

// API of ArrayIterator.next(): () => {value: any, done: boolean}

let iter = iterator.next();

while (!iter.done) {
  iter = iterator.next();
  console.table(iter);
}

