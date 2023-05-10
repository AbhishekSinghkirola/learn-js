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

const Person = function (firstName, birthYear, course = 'Js') {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;

  // Not The way of Making Methods
  //   this.calcAge = function () {
  //     return 2023 - birthYear;
  //   };
};

/**
 * 1 {}
 * 2. this
 * 3. prototype
 * 4. function return object
 */

const abhishek = new Person('Abhishek', 1991);
const ram = new Person('Ram', 2001, 'PHP');

console.log(abhishek);
console.log(ram.firstName);
// console.log(ram.calcAge());
// console.log(abhishek.calcAge());

// const arr = [];
// const arr1 = new Array();
