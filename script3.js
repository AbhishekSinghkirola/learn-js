'use strict';

// function square(n) {
//   return n * n;
// }

// var a = 4;
// console.log(square(2));
// console.log(square(a));

// console.log(a)
// function a() {
//   function b() {
//     console.log('Function B');
//   }
//   b();
// }

// a();

// Scopes - where we can access a particular function or a variable
// Global Scope and Local Scope / Function Scope
// Lexical Environment - Local memory space + outer parent Local Memory Space
// scope chaining- process of finding the variable in the lexical environment of the outer parent
// var a = 10;

// function x(n) {
//   var z = 100;
//   console.log(a,z);
// }

// console.log(a,z);
// x(a);

// var a = 100;

// function x() {
//   var b = 20;
//   function y() {
//     var c = 20;
//     console.log(a);
//     console.log(b);
//   }

//   y();
// }

// x();

// var a = 10;
// function x() {
//   var a = 20;
// }

// x();
// console.log(a);

// var a = 10;
// let b = 20;
// {
//   var a = 100;
//   let b = 90;
//   {
//     let a = 1001; // 10001
//     console.log(a);
//   }
//   const c = 80;
//   console.log(a); //100
//   console.log(b); //90
//   console.log(c); //80
// }
// console.log(a); //100
// console.log(b); //20
// console.log(c);

// let a = 20;
// {
//   console.log(a);
// }

// Temporal Dead Zone 0 time between hoing to ur variable to intialoze them with some value
// console.log(x);
// let a = function () {
//   console.log(a);
// };

// const a;
// let a = 10;
// let a =20;

// var a = 10;

// Normal function, arrow functions, methods, event listner

// function a() {
//     console.log(this);
// }

// var x =10
// a();

// const a = () => {
//   console.log(this);
// };

// a();

// const obj = {
//   name: 'Abhishek',
//   birthYear: 1991,
//   calcAge: function () {
//     console.log(this.name);
//   },
// };

// const obj2 = {
//   name: 'Rahul',
//   birthYear: 2001,
// //   calcAge: function () {
// //     console.log(this);
// //   },
//     // calcAge2: obj.calcAge
// };

// obj2.calcAge2 = obj.calcAge;
// obj.calcAge();
// obj2.calcAge2();

// const h1 = document.querySelector('h1');

// h1.addEventListener('click', () => {
//   console.log(this);
// });

// const obj = {
//   name: 'Abhishek',
//   birthYear: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.birthYear);
//     // const self = this;
//     // const a = function () {
//     //   console.log(self.birthYear);
//     // };
//     const a = () => {
//         console.log(this);
//     }
//     a();
//   },
// };

// obj.calcAge();

// const add = function (a, b) {
//   console.log(arguments);
// };
// const add =  (a, b) => {
//   console.log(arguments);
// };

// add(2, 3);

// Primitive data types and reference data types
// let a = 20;
// let b = a;

// a = 30;

// console.log(a);
// console.log(b);

const obj = {
  name: 'Abhishek',
  birthYear: 1991,
  arr: [1, 2, 3],
};

// const copyObj = obj;

// obj.arr.push(4);

// console.log(obj);
// console.log(copyObj);

const copyobj = Object.assign({}, obj)
obj.arr.push(4);
copyobj.name = "Ram";
console.log(obj);
console.log(copyobj);