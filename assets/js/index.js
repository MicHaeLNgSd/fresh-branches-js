'use strict';

const regExp1 = new RegExp('qwerty');
const regExp2 = /^qwert\.y$/i;

const testStr = '02138947012397qwerty2384572qw34905';
console.log(regExp1.test(testStr));
console.log(testStr.match(regExp2));
