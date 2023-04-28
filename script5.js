'use strict';

// Functions

// function a(name = 'No name', age = [1,2]) {
//   console.log(`Name is : ${name} and age is : ${age}`);
// }

// a();
// a("Abhishek", 23);

// let primitiveVar = 10;
// let referenceVar = {
//   name: 'abhishek',
//   age: 23,
// };

// function x(primitiveVar, referenceVar) {
//   primitiveVar = 100;
//   referenceVar.name = 'Ram';
// }

// x(primitiveVar, referenceVar);
// console.log(primitiveVar);
// console.log(referenceVar);

// First Class Functions and Higher Order Function /First Class Citizens Function

// let myFunc = function () {
//   console.log('First Class Function');
// };

// function a() {
//   console.log('First Class Function');
// }

// document.body.addEventListener('click', function () {
//     console.log('Click');
// })

// const str = 'Itytsad am Abhishek';

// const singleWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const captalize = function (str) {
//   const arr = str.split(' ');
//   const newRes = [];
//   for (const value of arr) {
//     newRes.push(value[0].toUpperCase() + value.slice(1));
//   }
//   return newRes.join(' ');
// };

// const upperFirstWord = function (str) {
//   const [firstWord, ...otherWords] = str.split(' ');
//   return [firstWord.toUpperCase(), ...otherWords].join(' ');
// };

// const transform = function (str, fn) {
//   console.log(`Transformed string is : ${fn.name}`);
//   console.log(`Transformed string is : ${fn(str)}`);
// };

// transform(str, singleWord);
// transform(str, captalize);
// transform(str, upperFirstWord);

// function a() {
//   return function b() {
//     console.log('Function B');
//   };
// }

// // const newFunc = a();

// // newFunc();

// a()();

// A closure is a closed over variable Environment of the Execution Context in which the function will exsist
// const firstName = function (name) {
//   return function (age) {
//     console.log(`Name : ${name} and age : ${age}`);
//   };
// };

// const newFunc = firstName("Abhishek");

// newFunc(22)

// Call, apply and bind

const person = {
  firstName: 'Abhishek',
  currentYear: 2023,
  calcAge: function (birthYear, gender) {
    console.log(
      `Name : ${this.firstName} and Age : ${
        this.currentYear - birthYear
      } Gender : ${gender}`
    );
  },
};

// person.calcAge(2001, 'male');

const age = function (birthYear, gender) {
  console.log(
    `Name : ${this.firstName} and Age : ${
      this.currentYear - birthYear
    } Gender : ${gender}`
  );
};

const person2 = {
  firstName: 'Ram',
  currentYear: 2023,
};

// age.call(person2, 2001, 'male');

// const arr = [2001, 'male'];
// age.apply(person2, arr);
// age.call(person2,2001);

// bind

// const bindedFunc = age.bind(person2, 2001);
// bindedFunc(2001, 'male');

// bindedFunc('male');
// bindedFunc('female');

// const btn = document.createElement('button');
// btn.textContent = 'Get Value';
// document.body.appendChild(btn);

// const btnEl = document.querySelector('button');

// btnEl.addEventListener('click', age.bind(person2, 2001, 'male'))

// IIFE immediately invoked Function

// function a() {
//   console.log('Working...');
// }
// a();
// a();
// a();

// (function () {
//   console.log('Only Run Once');
// })();

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a);
  };
};

const h = function () {
  const a = 100;
  f = function () {
    console.log(a);
  };
};

g();
f()
h();
f();
