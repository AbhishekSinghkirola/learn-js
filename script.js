// Values and variables

//let firstName = "Ram";

/*
console.log(firstName)
console.log(firstName)
console.log(firstName)
console.log(firstName)
*/

//Data types

// primitive , Object

//Number - decimal, integers
//Strings
//Boolean
//undefined
//null
//symbol
//bigint

// let x = -2.6;
// let y = 'Abhishek';
// let z = true;
// let w;
// let e = null;

// let firstNamePersonValue = "Abhishek";

// let $firstname
// let _firstname
// let first5name4
//let first_name
// let FirstName
// let FIRSTNAME

// typeof

// let firstName = "Ram";
// let x;
// console.log(typeof "Abhishek");

// console.log(typeof firstName)
// console.log(typeof 9)
// console.log(typeof true)
// console.log(typeof x)
// console.log(typeof null)
// let myPreviousJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 = "Programmer";
// let job2 = "Teacher";

//Let Var Const

// let firstName = "Abhishek";
// firstName = "Ram";

// const PI = 3.1415;
// const birthYear = 2001;

// let a,b;

// var firstName = "Ram";
// var firstName = "Rohit";

// firstName = "Ram";
// console.log(firstName)

// let a = 5;
// let b = 6;

// let c = a; //c =5, a=5, b=6
// a = b; //c= 5, a= 6, b=6
// b = c;

// console.log("value of a", a);
// console.log("value of b", b);

// Hello
// let a = 5;
// a = "Abhishek"
// console.log(a)

// Dynamic Typing

//Basic Operators in JS
// Arithmatic Operators
// console.log(4 + 5 + 6);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2); //Modulus

// const currentYear = 2023;
// const ramBirthYear = 2000;
// const ramAge = currentYear - 2000;
// console.log(ramAge)

// const firstName = "Rohit";
// const lastName = "Rathore";

// console.log(firstName + " " + lastName)

//Assignment Operator

// let x = 2;
// let y ;
// y = x;
// console.log(y)
// x += 2; // x = x+2 = 4
// x -= 2; // x = x -2 =0
// x *= 4;
// x /= 3;
// x %= 2;
// x **= 3

// console.log(x) // 2 x 2 x 2 = 8

// Comparison Operator

// const rohitAge = 20;
// const ramAge = 25;
// const isTrue = rohitAge >= ramAge;
// console.log(isTrue) // 20 > 25

// let x = 10 + 5;
// console.log(x)

// const ageAverage = (rohitAge + ramAge) / 2;
// console.log(ageAverage)

// ram, ajay
//ram w = 95kg , h =1.88m
//ajay w = 85kg , h =1.68m
// BMI = w / (height * height) or w / height ** 2
//ram > ajay --true

// const ramWeight = 95;
// const ramHeight = 1.88;
// const ajayWeight = 85;
// const ajayHeight = 1.68;

// const ramBMI = ramWeight / (ramHeight * ramHeight);
// const ajayBMI = ajayWeight / ajayHeight ** 2;

// console.log(ramBMI, ajayBMI)

// const ramHigherBMI = ramBMI > ajayBMI
// console.log(ramHigherBMI)

// Increment and Decrement Operator
// let x = 5;
// // x++; // x = x + 1 //6
// // x--; // x = x - 1 //5
// console.log(--x)
// console.log(x)

/* String Literals */

// let firstName = "Abhishek";
// let birthYear = 2001;
// let job = "Teacher";
// const currentYear = 2023;
// I am Abhsihek my age is 22 and my job is teacher
// const abhishek =
//   "I am " +
//   firstName +
//   " my age is " +
//   (currentYear - birthYear) +
//   " and my job is " +
//   job;
// console.log(abhishek);

// const abhishek2 = `I am ${firstName} my age is ${currentYear - birthYear} and my job is ${job}`;
// console.log(abhishek2)

// const string = "This is \n an example \n Multiline  string";
// console.log(string)
// const string2 = `This is
// an Multiline
// string`;
// console.log(string2)

// const regularString = `This is a regular String ${firstName}`;

// console.log(regularString)

// Decisions

// let age = 16;
// let isOldEnough = age >= 18; //true or false
// if() {

// }else {

// }
// if (age >= 18) {
//   console.log("You Were eligible for Driving License 🚗");
// }else {
//     console.log("Not Eligible for Driving :(");
// }

// console.log("After The if Statement ...")

// const birthYear = 2023;
// let century;

// if(birthYear <= 2000) {
//     century = 20;
// }else {
//     century = 21;
// }

// console.log(century)

// Type Conversion and Type coercion

// const birthYear = "1999";
// console.log(Number(birthYear) , birthYear);

// const age = 23;
// console.log(typeof String(age))

// console.log("I am " + String(23) + " years old");

// console.log("I am " + 23 + " years Old");
// console.log("5" + "4");

// console.log("5" / 4)

// console.log(Number("abhishek"))

// const ramWeight = 95;
// const ramHeight = 1.88;
// const ajayWeight = 85;
// const ajayHeight = 1.68;

// const ramBMI = ramWeight / (ramHeight * ramHeight);
// const ajayBMI = ajayWeight / ajayHeight ** 2;

// console.log(ramBMI, ajayBMI);

// if(ramBMI > ajayBMI) {
//     console.log(`Ram has Higher BMI than Ajay`);
// }else{
//     console.log(`Ajay has Higher BMI than Ram`)
// }

// ECMAscript
// transpiling or polyfiling - BABEL

// Truthy Falsy Values
// false 0,'', undefined, null, NaN
// true - 1, 'abc',[] etc

// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean('Abhishek'))
// console.log(Boolean([]))
// console.log(Boolean({}))
// console.log(Boolean(Number("Abhishek")));

// let money;
// money = 10;
// if (money) {
//   console.log("You can Spend");
// } else {
//   console.log("Don't have enough Money to spend Get a job First");
// }

// let height;

// if(height) {
//     console.log(`Yay! Height is Defined`);
// }else {
//     console.log(`OOPs! Height is Undefined`)
// }

// Equality Operator

// const age = '19';

// // Strict Equality operator
// if(age === 19) {
//     console.log("1. your age is 19")
// }

// // Loose Equality Opeator

// if(age == 19) {
//     console.log("2. Your age is 19")
// }

// 21,7,8 fav number
// const favNumber = 80;

// if (favNumber === 21) {
//   console.log(`21 is coll Number!`);
// } else if (favNumber === 7) {
//   console.log(`7 is cool Number!`);
// } else if (favNumber === 8) {
//   console.log(`8 is also a cool Number!`);
// } else {
//   console.log(`why not 21, 7, 8😭`);
// }

// let age = 13;

// if (age !== 18) { // 13 !== 18 //true
//   console.log("Age is not equal to 18");
// } else {
//   console.log("Age is 18");
// }

// Logical Operators
//  And (&&) , or (||), not (!)

// condition 1  &&  condition 2 - both will true = true
// condition 1  ||  condition 2 - anyone of these will true = true

/**
 * Truth Table for and
 * A    B   RES
 * T    T   T
 * T    F   F
 * F    T   F
 * F    F   F
 *
 * turth table for or
 *
 * A   B   RES
 * T   T   T
 * T   F   T
 * F   T   T
 * F   F   F
 *
 * truth table for not
 * A  RES
 * T  F
 * F  T
 *
 */

// let hasDrivingLicense = true;
// let hasGoodVision = true;
// let isTired = true;

// // console.log(hasDrivingLicense && hasGoodVision);
// // console.log(hasDrivingLicense || hasGoodVision);
// // console.log(!hasDrivingLicense);

// if(hasDrivingLicense && hasGoodVision || !isTired) { // true && true => true || false
//     console.log("You can Drive 🚗")
// }else {
//     console.log("You cannot Drive :D");
// }

/* There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
    1. Calculate the average score for each team, using the test data below
    2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
    
    3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
    4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
    TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
    GOOD LUCK 😀 
*/
