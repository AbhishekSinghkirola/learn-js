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

const colors = [
  'red',
  'green',
  'burlywood',
  'cyan',
  'hotpink',
  'orange',
  'aqua',
];

// for (const [key, value] of colors.entries()) {
//   console.log(`Key ${key} : value ${value}`);
// }

// const a = function (value, key, arr) {
//   console.log(`${value} - ${key}`);
// };

const container = document.getElementById('container');
colors.forEach(function (value, key, arr) {
  const html = `<div class="box-size" style="background-color: ${value};"></div>`;
  container.insertAdjacentHTML('beforeend', html);
  //   console.log(`${value} - ${key}`);
});
