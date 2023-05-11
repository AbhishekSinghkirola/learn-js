'use strict';
// Object Oriented Programming (OOP)
/**
 * Classes and Objects
 *
 * student {
 *
 * name;
 * age;
 *
 * study () {
 * ....
 * }
 *
 * play () {
 * ...
 * }
 *
 * }
 *
 * class child extends student {
 * ...
 *
 * ....
 * play () {
 * }
 *
 * }
 *
 * obj = new student()  // Instantiation
 *
 * 1. Abstraction
 * 2. Encapsulation
 * 3. Inheritance
 * 4. Polymorphism
 *
 *
 * Objects prototype
 * prototypal Inheritance
 *
 * 1. constructor Function
 *  new functionName
 *  new Array
 *
 * 2. Es6 classes
 *
 * 3. Object.create()
 */

// const arr = [1, 2, 3];
// arr.length;

// const Person = function (firstName, birthYear, course = 'Js') {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   this.course = course;

// Not The way of Making Methods
//   this.calcAge = function () {
//     return 2023 - birthYear;
//   };
// };

/**
 * 1 {}
 * 2. this
 * 3. prototype
 * 4. function return object
 */

// const abhishek = new Person('Abhishek', 1991);
// const ram = new Person('Ram', 2001, 'PHP');

// console.log(abhishek);
// console.log(ram.firstName);
// console.log(ram.calcAge());
// console.log(abhishek.calcAge());

// const arr = [];
// const arr1 = new Array();

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   return 2023 - this.birthYear;
// };

// console.log(abhishek.calcAge());

// console.log(Person.prototype);

// // __proto__
// console.log(abhishek.__proto__);
// console.log(abhishek.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(abhishek));

// const ramesh = {
//   name: 'Ramesh',
// };

// console.log(Person.prototype.isPrototypeOf(ramesh));

// Person.prototype.species = 'Homo sapiens';

// console.log(Person.prototype);

// console.log(Person.prototype.isPrototypeOf(Person));

// console.log(abhishek.hasOwnProperty('firstName'));
// console.log(ram.hasOwnProperty('firstName'));
// console.log(ramesh.hasOwnProperty('name'));
// console.log(abhishek.hasOwnProperty('species'));

// console.log(abhishek.__proto__);
// console.log(abhishek.__proto__.__proto__);
// console.log(abhishek.__proto__.__proto__.__proto__);

// const arr = new Array(1, 2, 3, 4);
// const arr = [1, 2, 3, 4, 1, 3, 2];

// console.log(arr.__proto__);

// console.log(arr.at(1));

// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// Never Do This
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2023 - this.birthYear;
  }

  greet() {
    console.log('Hi There 👋');
  }
}

const abhishek = new PersonCl('Abhishek', 1991);

// PersonCl.prototype.calcAge = function () {
//   return 2023 - this.birthYear;
// };

console.log(abhishek.firstName);
console.log(abhishek.birthYear);
console.log(abhishek.calcAge());
abhishek.greet()

console.log(PersonCl.prototype);
console.log(abhishek.__proto__);
console.log(abhishek);
