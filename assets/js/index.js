'use strict';

// let num1 = +prompt('Type num1')
// let num2 = +prompt('Type num2')

// console.log(`${num1} + ${num2} = ${num1 + num2}`);
// console.log(`${num1} - ${num2} = ${num1 - num2}`);
// console.log(`${num1} * ${num2} = ${num1 * num2}`);
// console.log(`${num1} / ${num2} = ${Math.round(num1 / num2)}`);

// const str = 'jjjjjjjjj lorem impus'
// const test = str.slice(-5)

//=====================================

// function getRandomCase(str){
//   let resultStr =''

//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i]
//     if (Math.random() > 0.5) {
//       resultStr += letter.toUpperCase()
//     }
//     else{
//       resultStr += letter.toLowerCase()
//     }
//   }
//   return resultStr
// }

//=====================================

// function getRandomCase(str) {
//   const lettersArr = str.split('');
//   const newLettersArr = lettersArr.map((el) => {
//     return Math.random() > 0.5 ? el.toUpperCase() : el.toLowerCase();
//   });
//   return newLettersArr.join('');
// }

//=====================================

// function getRandomCase(str) {
//   return str.split('').map((el) => Math.random() > 0.5 ? el.toUpperCase() : el.toLowerCase()).join('');
// }
// console.log(getRandomCase('test')); concat(el[0].toUpperCase(), el.slice(1)))

//====================================

// function getCapitalized(str){
//   const arr = str.split(' ')
//   const newArr  = arr.map((el) => el.charAt(0).toUpperCase() + el.slice(1))
//   return newArr.join(' ');
// }

// function getCapitalized(str) {
//   return str
//     .split(' ')
//     .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
//     .join(' ');
// }

const getCapitalized = (str) =>
  str
    .split(' ')
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(' ');

// console.log(getCapitalized('   lorem   impus    '));

//====================================

// function amountOfVowel(str, arrOfSearchItems) {
//   let arr = str.split('');
//   let count = 0;

//   arr.forEach((el) => {
//     if (arrOfSearchItems.includes(el)) {
//       count++;
//     }
//   });

//   return count;
// }

//====================================

// function amountOfVowel(str, arrOfSearchItems) {
//   return str.split('').filter((el) => arrOfSearchItems.includes(el)).length;
// }

const amountOfVowel = (str, arrOfSearchItems) =>
  str.split('').filter((el) => arrOfSearchItems.includes(el)).length;

const vowels = ['a', 'e', 'i', 'o', 'u'];
// console.log(amountOfVowel('liiorem imous', vowels)); // 7

const shop = {
  name: 'Roz',
  products: [
    { name: 'prod1', price: 5000, quantity: 0 },
    { name: 'prod2', price: 1000, quantity: 1234 },
    { name: 'prod3', price: 200, quantity: 2 },
    { name: 'prod4', price: 21222, quantity: 15 },
    { name: 'prod5', price: 76800, quantity: 12112 },
  ],
  displayProducts: function () {
    this.products.forEach(function (product) {
      console.log(this);
      console.log(
        `Shop ${this.name} has product ${product.name} has price ${product.price} and quantity ${product.quantity}`
      );
    });
  },
  displayProductsV1: function () {
    let that = this;
    this.products.forEach(function (product, that) {
      console.log(
        `Shop ${that.name} has product ${product.name} has price ${product.price} and quantity ${product.quantity}`
      );
    });
  },
  displayProductsV2: function () {
    function display(product) {
      console.log(
        `Shop ${this.name} has product ${product.name} has price ${product.price} and quantity ${product.quantity}`
      );
    }
    const bindedCorrectThisFunc = display.bind(this);
    this.products.forEach(bindedCorrectThisFunc);
  },
  displayProductsV3: function () {
    this.products.forEach((product) => {
      console.log(
        `Shop ${this.name} has product ${product.name} has price ${product.price} and quantity ${product.quantity}`
      );
    });
  },
};

const haveArg = function () {
  console.log(arguments);
};

const doesNotHaveArg = () => {
  console.log(arguments);
};

const sumOfAnyNumbers = (...restNumbers) => {
  let result = 0;
  restNumbers.forEach((el) => {
    result += el;
  });
  return result
};
