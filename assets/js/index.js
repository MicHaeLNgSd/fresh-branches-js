'use strict';

class Employee {
  constructor(name, surname, isMale, payRate, hoursPerMonth) {
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.payRate = payRate;
    this.hoursPerMonth = hoursPerMonth;
  }

  getPaycheck() {
    return this._payRate * this._hoursPerMonth;
  }

  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }
  get isMale() {
    return this._isMale;
  }
  get payRate() {
    return this._payRate;
  }
  get hoursPerMonth() {
    return this._hoursPerMonth;
  }

  set name(newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
      throw new SyntaxError('Name must be a normal String');
    }
    this._name = newName;
  }
  set surname(newSurname) {
    if (typeof newSurname !== 'string' || newSurname.trim() === '') {
      throw new SyntaxError('Surname must be a normal String');
    }
    this._surname = newSurname;
  }
  set isMale(newIsMale) {
    if (typeof newIsMale !== 'boolean') {
      throw new SyntaxError('IsMale must be a Boolean');
    }
    this._isMale = newIsMale;
  }
  set payRate(newPayRate) {
    if (typeof newPayRate !== 'number' || isNaN(newPayRate)) {
      throw new SyntaxError('PayRate must be a normal Number');
    }
    this._payRate = newPayRate;
  }
  set hoursPerMonth(newHoursPerMonth) {
    if (typeof newHoursPerMonth !== 'number' || isNaN(newHoursPerMonth)) {
      throw new SyntaxError('HoursPerMonth must be a normal Number');
    }
    this._hoursPerMonth = newHoursPerMonth;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
  set fullName(newFullName) {
    [this.name, this.surname] = newFullName.split(' ');
  }
}

const enp1 = new Employee('John', 'Weak', true, 500, 1000);
