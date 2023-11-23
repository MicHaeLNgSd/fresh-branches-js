'use strict';

const fillArrByStr = function (arr, amount, strEnd = '') {
  if (!Array.isArray(arr)) return null;
  if (amount !== amount || typeof amount !== 'number') return null;
  for (let i = 0; i < amount; i++) {
    arr[i] = i + '' + strEnd;
  }
  arr.splice(amount);
  return arr;
};

const badArr1 = {};
const badArr2 = NaN;
const badArr3 = undefined;
console.log(fillArrByStr(badArr2, 20));

const arr = [];
fillArrByStr(arr, 20);
console.log(arr);

fillArrByStr(arr, 15, 'th');
console.log(arr);

arr.splice(-5);
console.log(arr);
arr.splice(2, 2, 'nth');
console.log(arr);

let arrCopy1 = arr.slice(3, 7);
console.log('arrCopy1:', arrCopy1);

let arrCopy2 = arr.slice(-3);
console.log('arrCopy2:', arrCopy2);

// arr.push('1th');
// let getLengthOfNewArray = arr.push('2th','3th','4th');
// console.log(arr,getLengthOfNewArray);

// fillArrByStr(arr,10,'th')
// console.log(arr);

// arr.pop()
// let eletedElemFromEnd = arr.pop()
// console.log(arr,eletedElemFromEnd);

// fillArrByStr(arr,10,'th')
// arr.shift()
// let deletedElemFromStart = arr.shift()
// console.log(arr,deletedElemFromStart);

// fillArrByStr(arr,10,'th')
// arr.unshift('-1th')
// let addElemFromStart = arr.unshift('-2th')
// console.log(arr,addElemFromStart);

// arr.push('1')
// arr.unshift('0')
// console.log(arr,arr.shift());
