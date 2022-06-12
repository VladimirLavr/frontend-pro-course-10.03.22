// code from NPM
import {createElement} from '../../element-creator';

function * stepper(count) {
  for (let index = count; index > count; index--) {
    yield index;
  }
}

console.log(123);

function hello(name) {
  return `Hello ${name}!`;
}


// ES Modules
console.log(stepper());

createElement();