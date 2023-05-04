'use strict';

// console.log(23 === 23.0);

// console.log(0.1 + 0.2 === 0.3);

// console.log(Number('23px'));
// console.log(Number.parseInt('23px', 10));
// console.log(Number.parseInt('e23'));
// console.log(parseInt('2.3px'));

// // ParseFloat
// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.parseFloat('2rem'));

// // IsNAN
// console.log(Number.isNaN(2));
// console.log(Number.isNaN(23 / 0));

// // IsFinite
// console.log(Number.isFinite(23));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(20));
// console.log(Number.isInteger("20"));
// console.log(Number.isInteger(20.5));

// console.log(Math.sqrt(64));

// console.log(Math.max(1, 2, 3, 4, 6));
// console.log(Math.min(1, 2, 3, 4, 6));
// console.log(Math.PI);

// // console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = function (min, max) {
//   return Math.floor(Math.random() * (max - min) + 1) + min;
//   // 0 ... 1 * (max - min) ==> 0 ... (max - min + 1) ==> min ... max
// };

// console.log(randomInt(5, 10));

console.log(Math.trunc(2.333));

console.log(Math.floor(-2.333));
console.log(Math.floor(-2.333));

console.log(Math.ceil(2.33));
console.log(Math.ceil(-2.33));

console.log(Math.round(2.5));
console.log(Math.round(2.4));

console.log(+(2.45738).toFixed(0));
console.log(+(2.45738).toFixed(3));
console.log(+(2.45738).toFixed(2));

// 1,20,00,000;
// Numeric Separator
const a = 12_000_000_000_000
console.log(a);
