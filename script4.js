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
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(ing1);
//     console.log(ing2);
//     console.log(ing3);
//   },
// };

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

// Rest Patten

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
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(ing1);
//     console.log(ing2);
//     console.log(ing3);
//   },
//   orderPizza: function (mainIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(...otherIng);
//   },
// };

// const arr = [1, 2, 3, 4];
// console.log(...arr);

// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = [5, 6];
// const [a, ...b] = [1, 2, 3, 4, ...arr2];
// console.log(a, b);

// restaurant.orderPizza('Spinach', 'Corn', 'Mushroom');

// const add = function (...inputs) {
//   // console.log(inputs);
//   let sum = 0;
//   for (let i = 0; i < inputs.length; i++) {
//     sum += inputs[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(2, 3, 10, 14);
// add(2, 3, 10, 14, 55);

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
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(ing1);
//     console.log(ing2);
//     console.log(ing3);
//   },
//   orderPizza: function (mainIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(...otherIng);
//   },
// };

// && ||

// console.log(3 || false);
// console.log('' || 'hello');
// console.log(undefined || 0);
// console.log(undefined || 0 || '' || 'Abhishek' || null);

// restaurant.numGuests = 0;

// const guest = restaurant.numGuests ? restaurant.numGuests : 10;
// const guest2 = restaurant.numGuests || 10; //0 || 10
// Null Coaelscing Operator //Null or undefined
// const guest2 = restaurant.numGuests ?? 10; //0 || 10

// console.log(guest);
// console.log(guest2);

// console.log(3 && false);
// console.log(0 && true);
// console.log(true && 'Abhishek' && null && 100);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushroom', 'Sipinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Sipinach');

// 4 % 2 === 0 && console.log('Even');

// const rest1 = {
//   name: 'Restro 1',
//   numGuests: 23,
// };

// const rest2 = {
//   name: 'Restro 2',
//   owner: 'Abhishek',
// };

// // rest1.numGuests = rest1.numGuests || 10; // 23 || 10
// // rest2.numGuests = rest2.numGuests || 10; // undfined || 10
// rest1.numGuests ||= 10; // 23 || 10
// rest2.numGuests ||= 10; // undfined || 10

// rest1.owner &&= '<ANONYMOUS>'; // undefined && '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'; // Abhishek && '<ANONYMOUS>'

// console.log(rest1);
// console.log(rest2);

// Forof

// const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menus, typeof menus);

// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

// for (const value of menus) {
//   console.log(value);
// }

// console.log([...menus.entries()]);

// for (const [key, value] of menus.entries()) {
//   // console.log(value[0], value[1]);
//   console.log(`Key is ${key} : value is ${value}`);
// }

// Weekdays array
const Weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// Opening Hours Object
// const openingHours = {
//   [Weekdays[4]]: {
//     open: 12,
//     close: 22,
//   },
//   sat: {
//     open: 11,
//     close: 23,
//   },
//   sun: {
//     open: 0,
//     close: 24,
//   },
// };

// Main Obj
// const restaurant = {
//   name: 'Calssico Italiono',
//   location: 'Delhi, Mumbai, Jaipur',
//   categories: ['Indian', 'South Indian', 'Chinese', 'Italian'],
//   starterMenu: ['Chilli Potato', 'Garlic Bread', 'Kabab', 'Paneer Tikka'],
//   mainMenu: ['Pizza', 'pasta', 'chowmein'],

//   // New Method of creating properties
//   openingHours,

//   order(starterIndex, mainMenuIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 1,
//     address,
//     time = '12:00',
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(ing1);
//     console.log(ing2);
//     console.log(ing3);
//   },
//   orderPizza: function (mainIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(...otherIng);
//   },
// };

// console.log(restaurant);

// ------ Optional Chaining (?.) --------
// if (restaurant.openingHours) {
//   if (restaurant.openingHours.fri) {
//     console.log(restaurant.openingHours.fri.open);
//   } else {
//     console.log('Not Exsist');
//   }
// } else {
//   console.log('Not Exsist');
// }

// console.log(restaurant.openingHours?.fri1?.['open']); //true?.true?.undefined

// console.log(restaurant.orderPizza1?.('Mushroom', 'Spinach'));

// const person = {
//   name: 'Abhishek',
//   age: 23,
//   gender: 'Male',
// };

// console.log(person);

// const personKeys = Object.keys(person);
// console.log(personKeys);

// obj.prop
// for(const value of personKeys) {
//   console.log(person[value]);
// }

// const personValues = Object.values(person)
// console.log(personValues);

// const personEntries = Object.entries(person)
// console.log(personEntries);

// for(const [key, value] of personEntries) {
//   console.log(key , " : ", value);
// }

// const openingHours = {
//   [Weekdays[4]]: {
//     open: 12,
//     close: 22,
//   },
//   sat: {
//     open: 11,
//     close: 23,
//   },
//   sun: {
//     open: 0,
//     close: 24,
//   },
// };

// console.log(openingHours);

// for(const [key, {open, close}] of Object.entries(openingHours)) {
//   console.log(`${key} -- ${open} , ${close}`);
// }

// ------ SETS ------

const mySet = new Set(['Pizza', 'Burger', 'Burger', 'Pizza', 'Garlic Bread']);
// for (const value of mySet) {
//   console.log(value);
// }

// const myString = new Set(['1000001212000', '2424','24124']);
// console.log(myString);

// add
mySet.add('Chowmein');
mySet.add('Chowmein');
console.log(mySet);

// delete
mySet.delete('Burger');
// mySet.clear();
// console.log(mySet.size);

const staff = [
  'Waiter',
  'Manager',
  'Staff',
  'Waiter',
  'waiter',
  'Owner',
  'Manager',
];

const newStaff = [...new Set(staff)];
console.log(staff, newStaff[0]);
