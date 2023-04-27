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

