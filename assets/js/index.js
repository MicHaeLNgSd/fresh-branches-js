// Ex1.1
let summOf100Elemets = 0;
for (let i = 0; i < 100; i++) {
  summOf100Elemets += i + 1;
}
console.log('summ Of 100 Elemets = ' + summOf100Elemets);

// Ex1.1
let summOf100Elemets2 = 0;
let counter2 = 0;
while (counter2 < 100) {
  summOf100Elemets2 += counter2 + 1;
  counter2++;
}
console.log('summ Of 100 Elemets = ' + summOf100Elemets2);

// Ex1.1
let summOf100Elemets3 = 0;
let counter3 = 0;
do {
  summOf100Elemets3 += counter3 + 1;
  counter3++;
} while (counter3 < 100);
console.log('summ Of 100 Elemets = ' + summOf100Elemets3);

// =============================

// // Ex2.1
// let userAns;
// while (userAns !== 2 + 2 * 2) {
//   userAns = +prompt('2.1 What is (2+2*2)?');
// }
// alert('2.1 Congratulations you are right!!! (2+2*2) = ' + (2 + 2 * 2));

// // Ex2.2
// let userAns2;
// do {
//   userAns2 = +prompt('2.2 What is (2+2*2)?');
// } while (userAns2 !== 2 + 2 * 2);
// alert('2.2 Congratulations you are right!!! (2+2*2) = ' + (2 + 2 * 2));

// // Ex2.3
// let userAns3;
// for (let i = 0; i < 5; i++) {
//   userAns3 = +prompt('2.3 What is (2+2*2)? Try:(' + (i + 1) + '/5)');
//   if (+userAns3 === 2 + 2 * 2) break;
// }
// alert(
//   +userAns3 === 2 + 2 * 2
//     ? '2.3 Congratulations you are right!!! (2+2*2) = ' + (2 + 2 * 2)
//     : 'Sorry the answer was ' + (2 + 2 * 2)
// );

// Ex3
const myPow = function (number, power) {
  if (number !== number || typeof number !== 'number') return null;
  let ans = 1;

  let powerTemp = power < 0 ? -power : power;
  for (let i = 0; i < powerTemp; i++) {
    ans *= number;
  }
  return power < 0 ? 1 / ans : ans;
};

console.log(myPow(2, 3));
console.log(myPow(5, 4));
console.log(myPow(2, -3));

// EXTRA
const factorial = function (number) {
  if (number !== number || typeof number !== 'number' || number < 0)
    return null;
  if (number === 0) return 1;
  let ans = 1;
  for (let i = number; i > 0; i--) {
    ans *= i;
  }
  return ans;
};

console.log(factorial(-2));
console.log(factorial(2));
console.log(factorial(3));

// EXTRA 2
const isPrimeNum = function (number) {
  if (number !== number || typeof number !== 'number' || number < 0)
    return null;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};



console.log(isPrimeNum(3)); //t
console.log(isPrimeNum(10)); //f
console.log(isPrimeNum(93)); //f
console.log(isPrimeNum(31)); //t
console.log(isPrimeNum(229)); //t
