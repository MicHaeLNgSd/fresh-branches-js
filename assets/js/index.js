'use strict';

const arr1 = ['aa','bb','ff','hh'];
const arr2 = ['gg','aa','tt','rr'];

// let temp = new Set([...arr1, ...arr2])
let allNames = [...new Set([...arr1, ...arr2])]

const testObj = {
  key1: 'value1',
  key2: 'value2'
}

for (const entry of Object.entries(testObj)) {
  console.log(entry)
}
for (const entry of Object.keys(testObj)) {
  console.log(entry)
}