'use strict';
// Object Oriented Programming (OOP)
/**
 * Classes and Objects
 *
 * student {
 *
 * name;
 * age;
 *
 * study () {
 * ....
 * }
 *
 * play () {
 * ...
 * }
 *
 * }
 *
 * class child extends student {
 * ...
 *
 * ....
 * play () {
 * }
 *
 * }
 *
 * obj = new student()  // Instantiation
 *
 * 1. Abstraction
 * 2. Encapsulation
 * 3. Inheritance
 * 4. Polymorphism
 *
 *
 * Objects prototype
 * prototypal Inheritance
 *
 * 1. constructor Function
 *  new functionName
 *  new Array
 *
 * 2. Es6 classes
 *
 * 3. Object.create()
 */

// const arr = [1, 2, 3];
// arr.length;

// const Person = function (firstName, birthYear, course = 'Js') {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   this.course = course;

// Not The way of Making Methods
//   this.calcAge = function () {
//     return 2023 - birthYear;
//   };
// };

/**
 * 1 {}
 * 2. this
 * 3. prototype
 * 4. function return object
 */

// const abhishek = new Person('Abhishek', 1991);
// const ram = new Person('Ram', 2001, 'PHP');

// console.log(abhishek);
// console.log(ram.firstName);
// console.log(ram.calcAge());
// console.log(abhishek.calcAge());

// const arr = [];
// const arr1 = new Array();

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   return 2023 - this.birthYear;
// };

// console.log(abhishek.calcAge());

// console.log(Person.prototype);

// // __proto__
// console.log(abhishek.__proto__);
// console.log(abhishek.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(abhishek));

// const ramesh = {
//   name: 'Ramesh',
// };

// console.log(Person.prototype.isPrototypeOf(ramesh));

// Person.prototype.species = 'Homo sapiens';

// console.log(Person.prototype);

// console.log(Person.prototype.isPrototypeOf(Person));

// console.log(abhishek.hasOwnProperty('firstName'));
// console.log(ram.hasOwnProperty('firstName'));
// console.log(ramesh.hasOwnProperty('name'));
// console.log(abhishek.hasOwnProperty('species'));

// console.log(abhishek.__proto__);
// console.log(abhishek.__proto__.__proto__);
// console.log(abhishek.__proto__.__proto__.__proto__);

// const arr = new Array(1, 2, 3, 4);
// const arr = [1, 2, 3, 4, 1, 3, 2];

// console.log(arr.__proto__);

// console.log(arr.at(1));

// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// Never Do This
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     return 2023 - this.birthYear;
//   }

//   greet() {
//     console.log('Hi There 👋');
//   }

//getter and setter methods

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a Full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log(`Hey, Hi there!`);
//   }
// }

// const abhishek = new PersonCl('Abhishek Singh', 1991);
// abhishek.fullName = 'Abhishek Singh';

// PersonCl.prototype.calcAge = function () {
//   return 2023 - this.birthYear;
// };

// console.log(abhishek.firstName);
// console.log(abhishek.birthYear);
// console.log(abhishek.calcAge());
// abhishek.greet()

// console.log(PersonCl.prototype);
// console.log(abhishek.__proto__);
// console.log(abhishek);

// console.log(abhishek.age);
// console.log(abhishek.fullName);

// PersonCl.hey();
// Array.from()

// Object.create()
// const PersonProto = {
//   hey() {
//     console.log(`Hello There!`);
//   },

//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.init('Steven', 1991);
// // steven.fullName = 'Steven';
// // steven.birthYear = 1991;

// console.log(steven);
// console.log(steven.__proto__);

// steven.hey();
// steven.calcAge();

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Linking Prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const abhishek = new Student('Abhishek', 1991, 'PHP');

// console.log(abhishek);
// abhishek.calcAge();
// abhishek.introduce();

// console.log(abhishek.__proto__);
// console.log(abhishek.__proto__.__proto__);
// console.log(abhishek.__proto__.__proto__.__proto__);
// console.log(abhishek.__proto__.__proto__.__proto__.__proto__);

// console.log(abhishek instanceof Student);
// console.log(abhishek instanceof Person);
// console.log(abhishek instanceof Object);

// Student.prototype.constructor = Student;
// console.log(Student.prototype.constructor);

// Inheritance in Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2023 - this.birthYear;
  }

  greet() {
    console.log('Hi There 👋');
  }
}

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   };

//   calcAge() {
//     return `Child : ${2023 - this.birthYear}`;
//   }
// }

// const abhishek = new StudentCl('Abhishek', 1991, 'PHP');

// console.log(abhishek.calcAge());

// Inheritance in Object.create()
// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const abhishek = Object.create(StudentProto);
// abhishek.init('Abhishek', 1991, 'PHP');
// abhishek.introduce();

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     this._movements = [];

//     console.log(`Thanks for opening an Account ${owner}`);
//   }

//   // Public Interface
//   deposit(value) {
//     this._movements.push(value);
//   }

//   withdrawal(value) {
//     this._movements.push(-value);
//   }

//   _approveLoan(value) {
//     return true;
//   }

//   requestLoan(value) {
//     if (this._approveLoan(value)) {
//       this._movements.push(value);
//     }
//   }
// }

// const acc1 = new Account('Abhishek', 'INR', 111);

// acc1.deposit(2000);
// acc1.deposit(200);
// acc1.withdrawal(200);
// acc1.withdrawal(1000);
// acc1.requestLoan(5000);

// // acc1.movements.push(100)
// // console.log(acc1.pin);
// console.log(acc1);

class Account {
  #pin;
  #movements;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this.#movements = [];

    console.log(`Thanks for opening an Account ${owner}`);
  }

  // Public Interface
  deposit(value) {
    this.#movements.push(value);
  }

  withdrawal(value) {
    this.#movements.push(-value);
  }

  _approveLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.#movements.push(value);
    }
  }
}

const acc1 = new Account('Abhishek', 'INR', 111);

// console.log(acc1.#pin);
