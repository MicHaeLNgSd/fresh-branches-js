'use strict';

class Employee {
  #name
  #surname
  #isMale
  #payRate
  #hoursPerMonth
  constructor(name, surname, isMale, payRate, hoursPerMonth) {
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.payRate = payRate;
    this.hoursPerMonth = hoursPerMonth;
  }

  getPaycheck() {
    return this.#payRate * this.#hoursPerMonth;
  }

  get name() {
    return this.#name;
  }
  get surname() {
    return this.#surname;
  }
  get isMale() {
    return this.#isMale;
  }
  get payRate() {
    return this.#payRate;
  }
  get hoursPerMonth() {
    return this.#hoursPerMonth;
  }

  set name(newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
      throw new TypeError('Name must be a normal String');
    }
    this.#name = newName;
  }
  set surname(newSurname) {
    if (typeof newSurname !== 'string' || newSurname.trim() === '') {
      throw new TypeError('Surname must be a normal String');
    }
    this.#surname = newSurname;
  }
  set isMale(newIsMale) {
    if (typeof newIsMale !== 'boolean') {
      throw new TypeError('IsMale must be a Boolean');
    }
    this.#isMale = newIsMale;
  }
  set payRate(newPayRate) {
    if (typeof newPayRate !== 'number' || isNaN(newPayRate)) {
      throw new TypeError('PayRate must be a normal Number');
    }
    this.#payRate = newPayRate;
  }
  set hoursPerMonth(newHoursPerMonth) {
    if (typeof newHoursPerMonth !== 'number' || isNaN(newHoursPerMonth)) {
      throw new TypeError('HoursPerMonth must be a normal Number');
    }
    this.#hoursPerMonth = newHoursPerMonth;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
  set fullName(newFullName) {
    [this.name, this.surname] = newFullName.split(' ');
  }
}

const enp1 = new Employee('John', 'Weak', true, 500, 1000);
console.log(enp1.name);
console.log(enp1._name);
// console.log(enp1.#name); //SyntaxError