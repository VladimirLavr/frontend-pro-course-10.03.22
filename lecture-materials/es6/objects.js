const firstName = "Bob";

const dynamicPropertyName = "age";

const myObj = {
  firstName,
  [dynamicPropertyName]: 23,
};

console.log(myObj.age);
console.log(myObj[dynamicPropertyName]);
