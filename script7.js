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

// console.log(Math.trunc(2.333));

// console.log(Math.floor(-2.333));
// console.log(Math.floor(-2.333));

// console.log(Math.ceil(2.33));
// console.log(Math.ceil(-2.33));

// console.log(Math.round(2.5));
// console.log(Math.round(2.4));

// console.log(+(2.45738).toFixed(0));
// console.log(+(2.45738).toFixed(3));
// console.log(+(2.45738).toFixed(2));

// // 1,20,00,000;
// // Numeric Separator
// const a = 12_000_000_000_000
// console.log(a);

// Creating Dates in Javascript
// const now = new Date();
// console.log(now);

// console.log(new Date('June 10 2023 11:13:14:00'));
// console.log(new Date('June 10 2023'));
// console.log(new Date('June 32 2023'));

// console.log(new Date(2023, 10, 32));

// console.log(new Date(0));

// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const future = new Date(2037, 10, 19, 12, 13);

// console.log(future);

// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.getMilliseconds());
// console.log(future.getTime());

// console.log(new Date(2142225780000));

// console.log(future.toISOString());

// console.log(Date.now());

// const future = new Date(2037, 10, 19, 12, 13);
// console.log(+future);

// const daysPassed = function (date1, date2) {
//   const days = Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

//   if (days === 0) {
//     console.log(`Today`);
//   }
//   if (days === 1) console.log('Yesterday');

//   if (days > 1) console.log(`${days} days ago`);
// };

// daysPassed(new Date(2023, 3, 14), new Date(2023, 3, 18));
// daysPassed(new Date(2023, 3, 14), new Date(2023, 3, 14));
// daysPassed(new Date(2023, 3, 14), new Date(2023, 3, 15));
// daysPassed(new Date(2023, 3, 14), new Date(2023, 3, 13));
// daysPassed(new Date(2023, 3, 14), new Date(2023, 3, 3));

// console.log(new Date(+new Date(2023, 3, 14) + +new Date(2023, 3, 18)));

// Internationalization Api  (INTL)

// const now = new Date();

// const options = {
//   hour: 'numeric',
//   minutes: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'short',
// };

// console.log(new Intl.DateTimeFormat('en-Us', options).format(now));
// console.log(new Intl.DateTimeFormat(navigator.language, options).format(now));
// console.log(new Intl.DateTimeFormat('ar-EG').format(now));

// Set Timeout and Set Interval

// setTimeout(function () {
//   console.log('Hey There 👋');
// }, 3000);

// console.log('Waiting...');

// const ings = ['olives', 'mushroom'];
// const ings = ['olives', 'spinach'];

// const order = setTimeout(
//   function (ing1, ing2) {
//     console.log(`Here is your Pizza with ${ing1} and ${ing2}`);
//   },
//   3000,
//   ...ings
// );

// console.log('waiting...');

// if (ings.includes('spinach')) clearTimeout(order);

// setInterval(function () {
//   const now = new Date();
//   const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
//   //   console.log(time);
//   document.body.innerHTML = `<h1 style="text-align: center; font-size: 10rem; margin-top: 2rem;">${time}</h1>`;
// }, 1000);

let time = 10;

const timer = function () {
  const min = Math.trunc(time / 60);
  const sec = Math.trunc(time % 60);
  if (time === 0) clearInterval(res);
  time--;
  console.log(min, sec);
};

timer();
const res = setInterval(timer, 1000);

// 4
