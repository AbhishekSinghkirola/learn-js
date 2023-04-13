// 'use strict';

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
