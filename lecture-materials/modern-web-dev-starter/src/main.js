import {add} from './operations/add';
import {minus} from './operations/minus';
import {camelCase} from 'lodash';

const requiredOperation = 'plus';

if (requiredOperation === 'plus') {
    console.log(add(149014, 323523));
} else {
    console.log(minus(149014, 323523));
}


console.log(camelCase(add('Hello, ', 'my name is Andrii' + 'Test String')));
