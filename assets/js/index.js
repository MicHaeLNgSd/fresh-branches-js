'use strict';

const arr = [];
fillArrByStr(arr, 10);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] ** 4);
}

console.log('==============');

arr.forEach((elem, i) => {
  console.log(elem + ' elem2' + i);
});

console.log('==============');

let forEach = arr.forEach(function printArr(elem, i) {
  console.log(elem ** 4, '[' + i + ']');
  return 'test';
});
console.log('forEach', forEach);

let map = arr.map(function printArr(elem, i) {
  console.log(elem ** 4, '[' + i + ']');
  return elem ** 4;
});
console.log('map', map);

let filterNo2 = arr.filter(function cb(elem) {
  return elem !== '2';
});
console.log('filterNo2', filterNo2);

console.log(
  'some2',
  filterNo2.some((el) => {
    return el === '2';
  })
);

console.log(
  'everyIsStr',
  arr.some((el) => {
    return typeof el === 'string';
  })
);

console.log(
  'find(first)4',
  arr.find((el) => {
    return el === '4';
  })
);
console.log(
  'findIndex(first)4',
  arr.findIndex((el) => {
    return el === '4';
  })
);

console.log(
  'findIndex(first)4',
  arr.findIndex((el) => {
    return el === '4';
  })
);

// const newArr = [1, 2, 3, [10, 20, 30, [100, [1000]]], 4];

// console.log(arr.includes(10));

// const newFlatArr = newArr.flat(3);
// console.log(newFlatArr);

// const firstPartArr = [1, 2, 3, 4];
// const secondPartArr = [9,8,7,6];

// const fullArr = firstPartArr.concat(10,secondPartArr)
// console.log(fullArr);

function fillArrByStr(arr, amount, strEnd = '') {
  if (!Array.isArray(arr)) return null;
  if (amount !== amount || typeof amount !== 'number') return null;
  for (let i = 0; i < amount; i++) {
    arr[i] = i + 1 + '' + strEnd;
  }
  arr.splice(amount);
  return arr;
}

// const badArr1 = {};
// const badArr2 = NaN;
// const badArr3 = undefined;
// console.log(fillArrByStr(badArr2, 20));

// const arr = [];
// fillArrByStr(arr, 20);
// console.log(arr);

// fillArrByStr(arr, 15, 'th');
// console.log(arr);

// arr.splice(-5);
// console.log(arr);
// arr.splice(2, 2, 'nth');
// console.log(arr);

// let arrCopy1 = arr.slice(3, 7);
// console.log('arrCopy1:', arrCopy1);

// let arrCopy2 = arr.slice(-3);
// console.log('arrCopy2:', arrCopy2);

//===================

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

const nums3 = [1, 2, 3, 4, 5];
const nums4 = nums3.map((el) => (el % 2 === 0 ? el ** 5 : el * 3));

//reduce - перетворює масив на конкретне значення
const nums5 = [10, 20, 56, -4];
const nums6 = nums5.reduce((acc,num,i,arr)=>{
  return acc += num
})