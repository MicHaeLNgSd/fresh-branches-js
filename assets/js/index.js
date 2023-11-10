// let testVar = 20;
// switch (testVar) {
//   case 1:
//   case 3:
//   case 5:
//     alert('qq');
//     break;
//   case 7:
//     alert('ww');
//     break;

//   default:
//     alert('ee');
//     break;
// }

let counter = 0;
while (counter <= 10) {
  console.log(counter);
  counter += 2;
}

console.log('========');

counter = 0;
do {
  console.log(counter);
  counter += 2;
} while (counter <= 10);

console.log('========');

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
