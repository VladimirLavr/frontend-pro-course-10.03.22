// Objects
console.clear();
const myObj = {
  name: "Andrii",
  age: 25,
  sayHi(name) {
    return "hi " + name;
  }
};

const anotherObj = {name: "Andrii", age: 10, pull: undefined};

console.log(anotherObj.gender);
console.log(anotherObj.pull);
console.log(anotherObj["na" + "me"]);

console.log(myObj.sayHi("Mark"));

console.log("gender" in anotherObj);
console.log("pull" in anotherObj);

anotherObj.gender = () => 'male';
console.log(anotherObj.gender());

const coolObj = new Object(); // {}
console.log(coolObj);

const greatObject = Object.create({foo: 5});
console.log(greatObject.foo);


function greet(min, max) {
  return {};
}
