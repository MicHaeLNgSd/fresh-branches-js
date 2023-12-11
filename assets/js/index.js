'use strict';

const myFunc = (symbol) => {
  if (typeof symbol !== 'string')
    throw new TypeError('symbol must be a String');
  return (...restNum) => {
    restNum = restNum.filter(el=> typeof el === 'number' && el === el)
    if(restNum.length <= 0){
      throw new TypeError('numbers must contain at least one Number');
    }
    return restNum.reduce((acc, num) => {
      switch (symbol) {
        case '+':
          return acc + num;
        case '-':
          return acc - num;
        case '*':
          return acc * num;
        case '/':
          return acc / num;
      }
    });
  };
};

const calc1 = myFunc('+');
const calc2 = myFunc('-');
const calc3 = myFunc('*');
const calc4 = myFunc('/');

// 'use strict';

// let val = 0
//     switch (symbol) {
//       case '+':
//         // return (temp += restNum.reduce((acc, num) => acc + num));
//         val = restNum.reduce((acc, num) => acc + num);
//         return !temp ? (temp = val) : (temp += val);
//       case '-':
//         val = restNum.reduce((acc, num) => acc - num);
//         return !temp ? (temp = val) : (temp -= val);
//       case '*':
//         // temp = 1;
//         // return (temp *= restNum.reduce((acc, num) => acc * num));
//         val = restNum.reduce((acc, num) => acc * num);
//         return !temp ? (temp = val) : (temp *= val);
//       case '/':
//         val = restNum.reduce((acc, num) => acc / num);
//         return !temp ? (temp = val) : (temp /= val);
//       default:
//         throw new SyntaxError('symbol must be one of: (+, -, *, /)');
//     }

// const myFunc = (symbol) => {
//   if (typeof symbol !== 'string') throw new TypeError('symbol must be a String');
//   let temp = 0;
//   return (...restNum) => {
//     switch (symbol) {
//       case '+':
//         return temp += restNum.reduce((acc, num) => acc + num);
//       case '-':
//         return temp -= restNum.reduce((acc, num) => acc - num);
//       case '*':
//         return temp *= restNum.reduce((acc, num) => acc * num);
//       case '/':
//         return temp /= restNum.reduce((acc, num) => acc / num);
//       default:
//         throw new SyntaxError('symbol must be one of: (+, -, *, /)')
//     }
//   };
// };

// const calc1 = myFunc('+');
// const calc2 = myFunc('-');
// const calc3 = myFunc('*');
// const calc4 = myFunc('/');

// const myFunc = (symbol) => {
//   if (typeof symbol !== 'string')
//     throw new TypeError('symbol must be a String');
//   let temp = null;
//   return (...restNum) => {
//     switch (symbol) {
//       case '+':
//         // return (temp += restNum.reduce((acc, num) => acc + num));
//         const val1 = restNum.reduce((acc, num) => acc + num);
//         return !temp ? (temp = val1) : (temp += val1);
//       case '-':
//         const val2 = restNum.reduce((acc, num) => acc - num);
//         return !temp ? (temp = val2) : (temp -= val2);
//       case '*':
//         // temp = 1;
//         // return (temp *= restNum.reduce((acc, num) => acc * num));
//         const val3 = restNum.reduce((acc, num) => acc * num);
//         return !temp ? (temp = val3) : (temp *= val3);
//       case '/':
//         const val4 = restNum.reduce((acc, num) => acc / num);
//         return !temp ? (temp = val4) : (temp /= val4);
//       default:
//         throw new SyntaxError('symbol must be one of: (+, -, *, /)');
//     }
//   };
// };
