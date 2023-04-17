'use strict';

// Array destructuring
// const arr = [1, 2, 3];
// // without desctructuring
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a,b,c);
// // with destructuring

// const [x, y, z] = arr;
// console.log(x, y, z);

// const restaurant = {
//   name: 'Calssico Italiono',
//   location: 'Delhi, Mumbai, Jaipur',
//   categories: ['Indian', 'South Indian', 'Chinese', 'Italian'],
//   starterMenu: ['Chilli Potato', 'Garlic Bread', 'Kabab', 'Paneer Tikka'],
//   mainMenu: ['Pizza', 'pasta', 'chowmein'],

//   order: function (starterIndex, mainMenuIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
//   },
// };

// const [indian, southIndian, chinese] = restaurant.categories;
// console.log(indian, southIndian, chinese);

// const [first, ,third] = restaurant.categories
// console.log(first, third)

// let a = 5;
// let b = 6;

// let temp = a;

// a = b;
// b = temp;

// console.log(a, b);

// [a, b] = [a, b];
// console.log(a, b);

// const nestedArray = [1, 2, 3, [4, 5]];

// const [a, b, c, [e, f]] = nestedArray;
// // const [e,f] = d

// console.log(a, b, c, e, f);

// const [starterDish, mainDish] = restaurant.order(1, 2);
// console.log(starterDish, mainDish);

// Object Destructing

// const restaurant = {
//   name: 'Calssico Italiono',
//   location: 'Delhi, Mumbai, Jaipur',
//   categories: ['Indian', 'South Indian', 'Chinese', 'Italian'],
//   starterMenu: ['Chilli Potato', 'Garlic Bread', 'Kabab', 'Paneer Tikka'],
//   mainMenu: ['Pizza', 'pasta', 'chowmein'],

//   openingHours: {
//     fri: {
//       open: 12,
//       close: 22,
//     },
//     sat: {
//       open: 11,
//       close: 23,
//     },
//     sun: {
//       open: 0,
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainMenuIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 1,
//     address,
//     time = '12:00',
//   }) {
//     // console.log(obj);

//     // const { starterIndex, mainIndex, address, time } = obj;
//     // console.log(
//     //   `Order received! ${this.starterMenu[obj.starterIndex]} and ${
//     //     this.mainMenu[obj.mainIndex]
//     //   } will be delivered to ${obj.address} at ${obj.time}`
//     // );
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };

// const { name, starterMenu, mainMenu } = restaurant;
// console.log(name);
// console.log(starterMenu);
// console.log(mainMenu);

// With our own variable name
// const { name : restaurantName, starterMenu: starter, mainMenu: main } = restaurant;
// console.log(restaurantName);
// console.log(starter);
// console.log(main);

// const {fri : {open : o, close: c}} = restaurant.openingHours
// // const {open, close} = fri
// console.log(o,c);

// const {starterMenu = [], mainMenu = ["pizza"]} = restaurant
// console.log(starterMenu, mainMenu);

// const obj2 = {
//   starterIndex: 2,
//   time: '11:23',
//   mainIndex: 1,
//   address: 'A22 Rohini',
// };
// restaurant.orderDelivery(obj2);
// restaurant.orderDelivery({
//   address: 'A44 Rohini',
// });

//Spread Operator (...)
// const arr = [1, 2, 3];
// console.log(...arr);
// const copyArr = arr;

// copyArr.push(33);

// const copyArr = [...arr] // [1,2,3]
// copyArr.push(33);

// console.log(copyArr, arr);

// const newArr = ['Ram', 'Shivam', ...arr];
// console.log(newArr);

const restaurant = {
  name: 'Calssico Italiono',
  location: 'Delhi, Mumbai, Jaipur',
  categories: ['Indian', 'South Indian', 'Chinese', 'Italian'],
  starterMenu: ['Chilli Potato', 'Garlic Bread', 'Kabab', 'Paneer Tikka'],
  mainMenu: ['Pizza', 'pasta', 'chowmein'],

  openingHours: {
    fri: {
      open: 12,
      close: 22,
    },
    sat: {
      open: 11,
      close: 23,
    },
    sun: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    address,
    time = '12:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(ing1);
    console.log(ing2);
    console.log(ing3);
  },
};

// const starterCourse = [...restaurant.categories]
// console.log(starterCourse);

// const str = "Abhishek";
// const strrArr = [...str];
// console.log(strrArr);

// const ingridients = ['onion', 'Spinach', 'Tomato'];
// const ingridients = [
//   prompt('Enter Ing 1'),
//   prompt('Enter Ing 2'),
//   prompt('Enter Ing 3'),
// ];
// restaurant.orderPasta(...ingridients);

// const restCopy = { foundIn : 1991, ...restaurant, founder: "Ram" };
// console.log(restCopy);