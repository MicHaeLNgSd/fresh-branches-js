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

function getCapitalized(str) {
  return str
    .split(' ')
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(' ');
}
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

function amountOfVowel(str, arrOfSearchItems) {
  return str.split('').filter((el) => arrOfSearchItems.includes(el)).length;
}

const vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(amountOfVowel('liiorem imous', vowels)); // 7
