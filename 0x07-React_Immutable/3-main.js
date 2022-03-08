import { getListObject, addElementToList } from './3-list.js';

const myArray = ['1', '2', '3', '4'];
const myElement = '5';
const myList = getListObject(myArray);
console.log(myList);
const myListTwo = addElementToList(myList, myElement);
console.log(myListTwo);
