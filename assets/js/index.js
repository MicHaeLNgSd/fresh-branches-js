'use strict';

// function test1(){
//   console.log(this);
// }

// test1()

// const testObj ={
//   testFunc: function(){
//     console.log(this);
//     this.isTest = true;
//   }
// }

// testObj.testFunc()

let phone = {
  brand: 'Samsung',
  model: 'lindo',
  price: 5000,
  color: 'blue',
  isOn: true,
  operator: null,
  call: function () {
    console.log('calling... ring..ring..ring');
  },
  printPhoneData: function () {
    if (!this.brand || !this.model || !this.price) return null;

    let priceInfo =
      this.price.value && this.price.currency
        ? `${this.price.value}${this.price.currency}`
        : `${this.price} гривень`;
    return `Телефон ${this.brand} ${this.model} коштує ${priceInfo}`;
  },
};

console.log(phone);
console.log(phone.printPhoneData());

phone.price = {
  value: phone.price,
  currency: '₴',
};
// phone.pin = '';
// delete phone.pin;

console.log(phone);
console.log(phone.printPhoneData());

// function Phone(brand, model, price, color, isOn, operator) {
//   let newPhone = {
//     // brand:brand,
//     // model:model,
//     // price:price,
//     // color:color,
//     // isOn:isOn,
//     // operator:operator

//     brand,
//     model,
//     price,
//     color,
//     isOn,
//     operator,
//   };
//   return newPhone;
// }

// const phone5 = Phone('Test','Best model', 150,'black',true,'Lifecell')

// function Phone(brand, model, price, color, isOn, operator) {

// }

// const phone5 = Phone('Test','Best model', 150,'black',true,'Lifecell')
// const phone6 = new Phone('Test','Best model', 150,'black',true,'Lifecell')

function Phone(brand, model, price, color, isOn, operator) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.color = color;
  this.isOn = isOn;
  this.operator = operator;
}
const phone7 = new Phone('Test', 'Best model', 150, 'black', true, 'Lifecell');
