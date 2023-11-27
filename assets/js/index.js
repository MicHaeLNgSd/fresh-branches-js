'use strict';

const arr1 = ['test', false, 2345, null];
const arr2 = [
  { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
  { firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male' },
  { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
  { firstName: 'Undefined', lastName: 'Undefined', age: 99 },
  { firstName: 'Null', lastName: 'Nullochyk', gender: 'male' },
];

const arrEx1 = arr1.map((el,i) => `Item with index ${i} has value ${el}`)
const arrEx2 = arr2.filter(el => el.age >= 18);
const arrEx3 = arr2.findIndex(el => el.gender === 'female');

console.log(arrEx1);
console.log(arrEx2);
console.log(arrEx3);