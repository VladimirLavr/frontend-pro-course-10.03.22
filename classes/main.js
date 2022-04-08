console.clear();
/// --- ES3 --- ///

function sayHi() {
  console.log(`Hi! I'm ${this.firstName} ${this.lastName}.`);
}

function personConstructor(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    sayHi,
  };
}

// const dorosh = personConstructor("Andrii", "Doroshenko", 25);
// console.log(dorosh);
// console.log(dorosh.sayHi());

// const bob = personConstructor("Bob", "Mayers", 34);
// console.log(bob);
// console.log(bob.sayHi());


// console.log(dorosh.sayHi === bob.sayHi);


/// --- ES5 --- ///

const Person = {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    return this;
  },

  sayHi() {
    console.log(`Hi! I'm ${this.firstName} ${this.lastName}.`);
  }
};

const doroshES5 = Object.create(Person).constructor("Andrii", "Doroshenko", 25);
console.log(doroshES5);

const bobES5 = Object.create(Person).constructor("Bob", "Mayers", 34);
console.log(bobES5);

// const a = Object.create(person);
// console.log(a);
// console.log(a.__proto__);
// console.log(a.sayHi());

// a.firstName = "Alla";
// console.log(a);
// console.log(a.__proto__);


/// --- Function Constructor --- ///

const PersonFC = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

PersonFC.prototype.sayHi = function() {
  console.log(`Hi! I'm ${this.firstName} ${this.lastName}.`);
}

const doroshFC = new PersonFC("Andrii", "Doroshenko", 25);
console.log(doroshFC);
console.log(doroshFC.sayHi());


const bobFC = new PersonFC("Bob", "Mayers", 34);
console.log(bobFC);
console.log(bobFC.sayHi());

console.log(doroshFC.sayHi === bobFC.sayHi);


/// --- ES6 --- ///

class PersonC {

}
