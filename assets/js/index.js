'use strict';

function OldUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
const userProto = {
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
OldUser.prototype = userProto;

const user1 = new OldUser('John', 'Doe', 42);
// user1.__proto__ = userProto;
const user2 = new OldUser('John', 'Doe', 42);

//==============================

class NewUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user3 = new NewUser('Mike', 'H', 20);
const user4 = new NewUser('Karat', 'G', 25);

//==========================

class House {
  constructor(numOfFloors = 1, address = 'unknow_address', style = 'modern') {
    this.numOfFloors = numOfFloors;
    this.adress = address;
    this.style = style;
  }

  getHouseDate() {
    return `House data address: ${this.adress}, floors: ${this.floors}, style: ${this.style}`;
  }
}

const house1 = new House(3, 'swr in ZP');

//==============

class User {
  constructor(firstName, lastName, isMale, age, height) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isMale = isMale;
    this.age = age;
    this.height = height;
  }
  getInfo() {
    return `${this.firstName} ${this.lastName} is a ${
      this.isMale ? 'male ' : 'female s'
    }he is ${this.age} and ${this.height} sm height`;
  }
  isAdult() {
    return this.age >= 18;
  }
}

const user5 = new User('Mike', 'H', true, 20, 180);
const user6 = new User('Ann', 'G', false, 16, 160);

//===============

class Product {
  constructor(name, price, amount, isForAdult){
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.isForAdult = isForAdult;
  }
  getFullPrice(){
    return this.price * this.amount;
  }
}

const bottle = new Product('水', 40, 200, false)