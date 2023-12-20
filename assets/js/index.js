'use strict';

const arr = [5, 1, 684, 6, -5500, 6, 158];

function merge(leftArr, rigthArr) {
  let sortArr = [];

  while (leftArr.length && rigthArr.length) {
    const smallestNum =
      leftArr[0] < rigthArr[0] ? leftArr.shift() : rigthArr.shift();
    sortArr.push(smallestNum);
  }

  const resultArr = [...sortArr, ...leftArr, ...rigthArr];
  return resultArr;
}

function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;
  let middleIndex = Math.floor(arr.length / 2);

  const leftArr = arr.slice(0, middleIndex);
  const rigthArr = arr.slice(middleIndex);

  const leftSortedArr = mergeSort(leftArr)
  const rigthSortedArr = mergeSort(rigthArr)

  return merge(leftSortedArr, rigthSortedArr)
}
