import { concatElements, mergeElements } from './5-merge.js';

const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
console.log(concatElements(list1, list2));
const obj1 = {
  make: 'nissan',
  modle: 'altima',
  displacement: '2.5',
  fule: 'gas'
};
const obj2 = {
  drive: 'automatic',
  drivetrain: '2wd',
  color: 'green'
};
console.log(mergeElements(obj1, obj2));
