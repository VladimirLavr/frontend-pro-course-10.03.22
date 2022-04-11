const Person = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.sayHi = function() {
  console.log(`Hi! I'm ${this.firstName} ${this.lastName}.`);
}

const person = new Person("Andrii", "Doroshenko", 25);
console.log(person);
person.sayHi();

const anotherPerson = new Person("Bob", "Mayers", 34);
console.log(anotherPerson);
anotherPerson.sayHi();

const WebDeveloper = function(firstName, lastName, age, skills) {
  Person.apply(this, arguments);
  this.skills = skills;
}

WebDeveloper.prototype = Object.create(Person.prototype);
WebDeveloper.prototype.constructor = WebDeveloper;

WebDeveloper.prototype.develop = function(ticketNumber) {
  console.log(`${this.firstName} working on ticket ${ticketNumber}...`);
}

const developer = new WebDeveloper("John", "Joe", 45, ["HTML", "CSS", "JS"]);
console.log(developer);
developer.sayHi();
developer.develop('FR-33344');

console.clear();
console.log(developer instanceof WebDeveloper);
console.log(developer instanceof Person);
