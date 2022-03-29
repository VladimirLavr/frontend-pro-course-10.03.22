// for auto clearing console while using nodemon
// to use - type "npx nodemon [filename]"
console.clear();

const person = {
  name: "Andrii",
  age: 25,
  sayHi(name) {
    return `Hello, ${name}!`;
  }
};

// getting value of property - access expressions
console.log(person.name);
console.log(person["na" + "me"]);

// calling a method seyHi
console.log(person.sayHi("Mark"));

// adding new property to object
person.pull = undefined;


// setted property vs. not existing property
console.log(person.gender); // undefined
console.log("gender" in person); // gender not even exists in object
console.log(person.pull); // undefined
console.log("pull" in person); // pull existing in object, but value setted to undefined

// adding a method to object
person.gender = () => 'male';
console.log(person.gender());

// creation of object using Object constructor
const coolObj = new Object(); // {}
console.log(coolObj);

// Creation of object based on another object
const greatObject = Object.create({ foo: 5 });
console.log(greatObject.foo);

/* Preparation Homework */

// example of data
const users = [{ email: "test@mail.com", username: "test", position: "web-developer" }];


// function declaration expression for search function
const search = function (searchObj) {
  // your code goes here...
}

// defining test examples
const testExampleOfSearchObject1 = { email: "test@mail.com" };
const testExampleOfSearchObject2 = { position: "web-developer" };

// calling a function for search and passing test examples
const user1 = search(testExampleOfSearchObject1);
console.log(user1);

const user2 = search(testExampleOfSearchObject2);
console.log(user2);

const user3 = search({ somethingNotExisting: "foobar" });
console.log(user3);
