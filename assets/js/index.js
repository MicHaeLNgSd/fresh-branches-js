'use strict';

function toPower(number, power) {
  if (typeof number !== 'number' || number !== number) {
    throw new TypeError('first arg of toPower(number,power) must be a Number');
  }
  if (typeof power !== 'number' || power !== power) {
    throw new TypeError('second arg of toPower(number,power) must be a Number');
  }
  if (number === 0 || number === 1 || power === 1) return number;
  if (power === 0) return 1;

  const result = number * toPower(number, Math.abs(power) - 1);
  return power < 0 ? 1 / result : result;
}

function fuctorial(number) {
  if (typeof number !== 'number' || number !== number) {
    throw new TypeError('f(number) must be a Number');
  }
  if (number < 0) {
    throw new RangeError('f(number) must be a positive number');
  }
  if (number === 1 || number === 0) return 1;
  return number * fuctorial(number - 1);
}
