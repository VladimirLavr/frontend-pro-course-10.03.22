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

const person = Object.create(Person).constructor("Andrii", "Doroshenko", 25);
console.log(person);
person.sayHi();

const anotherPerson = Object.create(Person).constructor("Bob", "Mayers", 34);
console.log(anotherPerson);
anotherPerson.sayHi();

const WebDeveloper = Object.create(Person);

WebDeveloper.constructor = function(firstName, lastName, age, skills) {
  Person.constructor.apply(this, arguments);
  this.skills = skills;
  return this;
}

WebDeveloper.develop = function(ticketNumber) {
  console.log(`${this.firstName} working on ticket ${ticketNumber}...`);
}

const developer = Object.create(WebDeveloper).constructor("John", "Joe", 45, ["HTML", "CSS", "JS"]);
console.log(developer);
developer.sayHi();
developer.develop("AB-12345");

console.clear();
console.log(developer instanceof WebDeveloper);
console.log(developer instanceof Person);
