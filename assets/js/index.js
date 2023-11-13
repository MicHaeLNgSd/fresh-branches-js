// let isTrue = "h";

// if (isTrue == "h") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// // let test = testFunc(7)
// console.log(test);

// function testFunc(testVal = 10, ttt) {
//   alert(testVal);
//   return testVal * 3;
// }

// let testFunc2 = function () {};

// let testFunc3 = () => {};
// let ggg = prompt

// let userName = prompt("Input your name");
// alert(`Hello, ${userName}`);
// alert("Hello, " + userName);

// let number1 = +prompt("Input number1");
// let number2 = +prompt("Input number2");
// let result = number1 + number2;

// if (result === result) {
//   alert("Sum = " + result);
// } else {
//   alert("wrong");
// }
function getSumOfTwoNum(num1, num2) {
  // const getSumOfTwoNum = function (num1, num2) {
  if (typeof num1 !== "number" || num1 !== num1) {
    return null;
  }
  if (typeof num2 !== "number" || num2 !== num2) {
    return null;
  }
  return num1 + num2;
}

let number1 = +prompt("Input number1");
let number2 = +prompt("Input number2");

let varResult = getSumOfTwoNum(number1, number2);
console.log(varResult);
