const getSmallestOfTwoNums = function (num1, num2) {
  if (num1 !== num1 || typeof num1 !== 'number') {
    return null;
  }
  if (num2 !== num2 || typeof num2 !== 'number') {
    return null;
  }
  if (num1 < num2) {
    return num1;
  }
  return num2;
};

const isAdult = function (age) {
  if (age !== age || typeof age !== 'number') {
    return null;
  }
  return age >= 18;
};

const calculator = function (num1, num2, symbol) {
  if (num1 !== num1 || typeof num1 !== 'number') {
    return null;
  }
  if (num2 !== num2 || typeof num2 !== 'number') {
    return null;
  }
  if (typeof symbol !== 'string') {
    return null;
  }

  if (symbol === '+') {
    return num1 + num2;
  } else if (symbol === '-') {
    return num1 - num2;
  } else if (symbol === '*') {
    return num1 * num2;
  } else if (symbol === '/') {
    return num1 / num2;
  } else {
    return null;
  }
};

const showIsAdult = function (num) {
  if (num) {
    console.log('adult');
  } else if (num !== null) {
    console.log('young');
  } else {
    console.log('Incorrect input( Write a real number ): ' + num);
  }
};

const nan = +'h';
console.log(getSmallestOfTwoNums(5, 3));
console.log(getSmallestOfTwoNums(1, 3));
console.log(getSmallestOfTwoNums(5, 'hhh'));
console.log(getSmallestOfTwoNums(nan, 3));

let temp = isAdult(5);
showIsAdult(temp);

showIsAdult(isAdult(20));

temp = isAdult('five');
showIsAdult(temp);

temp = isAdult(nan);
showIsAdult(temp);

console.log(calculator(6, 3, '+'));
console.log(calculator(6, 3, '-'));
console.log(calculator(6, 3, '*'));
console.log(calculator(6, 3, '/'));
console.log(calculator(6, '3', '+'));
console.log(calculator(nan, 3, '+'));
