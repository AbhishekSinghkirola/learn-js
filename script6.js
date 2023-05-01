'use script';

// Arrays

// const arr = [1, 2, 3, 4, 5];
// const arr2 = ['a', 'b', 'c'];

// Slice
// console.log(arr.slice(3));
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-1));
// console.log(arr.slice());

// Splice
// console.log(arr.splice(2));
// console.log(arr.splice(1, 1, "Man"));
// console.log(arr);

// Reverse
// console.log(arr.reverse());
// console.log(arr);

// Concat

// const arr3 = [...arr, ...arr2];
// const arr3 = arr.concat(arr2, [3,4],"Man")
// console.log(arr3);

// console.log(arr.at(2));
// console.log("Abhishek".at(4));

// const colors = [
//   'red',
//   'green',
//   'burlywood',
//   'cyan',
//   'hotpink',
//   'orange',
//   'aqua',
// ];

// // for (const [key, value] of colors.entries()) {
// //   console.log(`Key ${key} : value ${value}`);
// // }

// // const a = function (value, key, arr) {
// //   console.log(`${value} - ${key}`);
// // };

// const container = document.getElementById('container');
// colors.forEach(function (value, key, arr) {
//   const html = `<div class="box-size" style="background-color: ${value};"></div>`;
//   container.insertAdjacentHTML('beforeend', html);
//   //   console.log(`${value} - ${key}`);
// });

// const arr = [1, 22, 4, 5];

// arr.forEach(function (value, i, origianalArr) {
//   // console.log(origianalArr);
//   console.log(value, i);
// });

// const myMap = new Map([
//   ['name', 'Abhishek'],
//   ['age', 22],
//   ['course', 'Javascript'],
// ]);

// myMap.forEach(function (value, key, map) {
//   console.log(value, key);
// });

// const unique = new Set(['red', 'green', 'blue', 'pink', 'red', 'green']);

// unique.forEach(function (value, _, arr) {
//   console.log(value);
// });

// const arr = [1, 2, 3, 4];

// const newArr = arr.map(function (value, key, arr) {
//   return value * 2;
// });

// console.log(newArr);

// const newArr = [];

// for (const value of arr) {
//   newArr.push(value * 2);
// }

// console.log(newArr);

// Filter Method

// const arr = [200, 12, -1000, 445, -450, 999, -44, 1, 67, -80];

// const positives = arr.map(function (value) {
//   if (value > 0) return value;
// });

// console.log(positives);

// const positives = arr.filter(function (value) {
//   return value > 0;
// });

// const negatives = arr.filter(value => value < 0);
// console.log(positives);
// console.log(negatives);

// const evens = arr.filter(value => value % 2 === 0).filter(value => value > 0);
// console.log(evens);

// const arr = [200, 12, -1000, 445, -450, 999, -44, 1, 67, -80];

// let sum = 0;
// for (const value of arr) {
//   sum += value;
// }

// console.log(sum);

// const res = arr.reduce(function (acc, value) {
//   // console.log(acc);
//   return acc + value;
// }, 0);

// console.log(res);

// const sumOfPositives = arr
//   .filter(value => value > 0)
//   .reduce((acc, value) => acc + value, 0);
// console.log(sumOfPositives);

// const max = arr.reduce(function (acc, value) {
//   if (acc > value) {
//     return acc;
//   } else {
//     return value;
//   }
// }, arr[0]);

// console.log(max);

const persons = [
  {
    id: 1,
    personName: 'Abhishek',
    age: 16,
  },
  {
    id: 2,
    personName: 'Ram',
    age: 28,
  },
  {
    id: 3,
    personName: 'Rajesh',
    age: 16,
  },
  {
    id: 4,
    personName: 'Geeta',
    age: 19,
  },
  {
    id: 5,
    personName: 'Manish',
    age: 33,
  },
];

// persons.forEach(function ({ id, personName, age }) {
//   // console.log(value.personName);
//   console.log(`id : ${id} Name : ${personName} Age : ${age}`);
// });

// const names = persons.map(value => value.personName);

// console.log(names);

// const adultPersons = persons.filter(value => value.age >= 18);

// console.log(adultPersons);

const sumOfAges = persons.reduce((acc, value) => acc + value.age, 0);
console.log(sumOfAges);
