'use strict';

class Animal {
  #name;
  #type;
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  get name() {
    return this.#name;
  }
  set name(newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
      throw TypeError('name must be a String');
    }
    this.#name = newName;
  }
  get type() {
    return this.#type;
  }
  set type(newType) {
    if (typeof newType !== 'string' || newType.trim() === '') {
      throw TypeError('type must be a String');
    }
    this.#type = newType;
  }
  move() {
    return `stop`;
  }
  say() {
    return `*silence*`;
  }
}
const animal1 = new Animal('Primal', 'Beast');

class Snake extends Animal {
  constructor(name) {
    super(name, 'snake');
  }
  move() {
    return `${this.name} can slither`;
  }
  say() {
    return `*sssssssssssss*`;
  }
}
const animal2 = new Snake('Vasilisk');

class Eagle extends Animal {
  constructor(name) {
    super(name, 'eagle');
  }
  move() {
    return `${this.name} can fly`;
  }
  say() {
    return `*eagle voice*`;
  }
}
const animal3 = new Eagle('TurrucMacTo');

//============================================

let myTest1 = 'test1Info';
const getVarName = (varObj) => Object.keys(varObj);
console.log(`${getVarName({myTest1})} = ${myTest1}`);
