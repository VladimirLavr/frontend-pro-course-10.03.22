import { cloneDeep } from "lodash";

var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = cloneDeep(objects);
console.log(deep[0] === objects[0]); // => false
