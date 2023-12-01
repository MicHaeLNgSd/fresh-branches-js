'use strict';

const getStrAmount = (...rest) =>
  rest.filter((el) => typeof el === 'string').length;
//console.log(getStrAmount('g', 5, NaN, '', false));//2

const advancedCalc = function (symbol, ...numbers) {
  const correctSymbols = ['+', '-', '*', '/'];
  if (typeof symbol !== 'string') {
    throw new TypeError(`Symbol must a string and one of ${correctSymbols}`);
  }
  if (numbers.filter(el => typeof el !== 'number' || el !== el).length > 0) {
    throw new TypeError(`All arguments exept the first one must be numbers`);
  }
  if (!correctSymbols.includes(symbol.trim())) {
    throw new SyntaxError(`Symbol must one of ${correctSymbols}`);
  }

  let counter = 0;

  switch (symbol) {
    case correctSymbols[0]:
      numbers.forEach((el) => (counter += el));
      break;
    case correctSymbols[1]:
      numbers.forEach((el) => (counter -= el));
      break;
    case correctSymbols[2]:
      counter = 1;
      numbers.forEach((el) => (counter *= el));
      break;
    case correctSymbols[3]:
      counter = 1;
      numbers.forEach((el) => (counter /= el));
      break;
  }

  return counter
};

const arrNums = [
  65, 685, 49, 84, 65, 16, 549, 84, 651, 65, 498, 465, 1651, 984, 9, 16, 8547,
  81,
];
//console.log(Math.max(...arrNums));//8547