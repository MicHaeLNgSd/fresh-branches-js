'use strict';

function User(name, surname, isMale, amountOfMessages) {
  this.name = name;
  this.surname = surname;
  this.isMale = isMale;
  this.amountOfMessages = amountOfMessages;

  this.info = function () {
    let sex = this.isMale ? 'чоловічої' : 'жіночої';
    return `Користувач ${this.name} ${this.surname} ${sex} статі написав ${this.amountOfMessages} повідомлень`;
  };
  this.newMessage = function (userMessage) {
    this.amountOfMessages++;
    return `Користувач ${this.name} ${this.surname} написав: "${userMessage}"`;
  };
}

const user1 = new User('Karat', 'Gorovich', true, 11);
const user2 = new User('Jar', 'Ponpon', false, 6);

console.log(user1.info());
console.log(user2.info());

console.log(user1.newMessage('Hello World!!!'));
console.log(user1.info());