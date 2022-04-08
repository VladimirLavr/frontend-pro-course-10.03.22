console.clear();

const person = {
  name: "Andrii",
  get age() {
    return `I'm ${this._age} y.o.`
  },

  set age(value) {
    this._age = (value <= 108) ? value : this._age;
  }
};

// Object.defineProperty(person, "_age", {
//   // value: 25,
//   // writable: true,
//   set() {},
//   get() {},
//   configurable: true,
//   enumerable: true,
// });


person.age; // read
person.age = 26; // write

console.log(person);
console.log(person.age);


person.age = 126; // write
console.log(person.age);


for (key in person) {
  console.log(key);
}


Object.preventExtensions(person);
person.interests = [];
console.log(person);
console.log(Object.isExtensible(person));

Object.seal(person);
Object.freeze(person);
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log("isSealed:", Object.isSealed(person));
console.log("isFrozen:", Object.isFrozen(person));
person._age = 1000;
console.log(person);
