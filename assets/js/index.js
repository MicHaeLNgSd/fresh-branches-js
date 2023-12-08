'use strict';

function createCounter() {
  let i = 0;
  return function increment() {
    return ++i;
  };
}

let counter = createCounter();
let counter2 = createCounter();

// function createCounterObj() {
//   let i = 0;

//   function increment() {
//     return ++i;
//   }

//   function decrement() {
//     return --i;
//   }

//   return {
//     increment,
//     decrement,
//   };
// }

// let counterObj = createCounterObj();
// let counterObj2 = createCounterObj();

// function createMultiplier(numX) {
//   return function inner(numY) {
//     return numX *= numY;
//   };
// }

// function createMultiplier(numX) {
//   return (numY) =>  numX *= numY;
// }

const createMultiplier = (numX) => (numY) => numX *= numY;
const multiplier = createMultiplier(2);
// multiplier(5) //10
// multiplier(6) //60
// multiplier(10) //600
