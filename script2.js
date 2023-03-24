"use strict";

// let hasDriversLicense = false;
// const hasPassTest = true;

// if (hasPassTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("You can Drive 🚗");

// const interface = 'Audio';
// const private = 5678;
// const if = 334;

/**
 * Functions
 * DRY - Do not repeat Yourself
 */

// Function Declaration or definition
// function logger() {
//   console.log("My name is Ram");
// }

// Calling / invoking / Running a Function
// logger();
// logger();
// logger();
// logger();

// receive values and return values

// function printYourName(firstName) { //Parameter
//     console.log(`I am ${firstName}`);
// }
// printYourName("Abhishek") //argument
// printYourName("Ram")
// printYourName("Rohit")

//task : apple - 4  mangoes - 5 return juice
// function fruitProcessor(apples, mangoes) {
// //   const juice = `juice of ${apples} apples and ${mangoes} mangoes`;
//   return `juice of ${apples} apples and ${mangoes} mangoes`;
// }

// const juice = fruitProcessor(4, 5);
// console.log(juice)
// console.log(fruitProcessor(5, 0));

// Function declaration and function Expression

// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge(1991); //46

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(2000);

// console.log(age1, age2);

// console.log(`My Age is ${calcAge(1991)}`);

// Arrow Functions

// const calcAge2 = birthYear => 2037 - birthYear;

// console.log(calcAge2(1991))

// Task : age, retirement left

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 60 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991,'John'))
// console.log(yearsUntilRetirement(1990,'Ram'))

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// calcAge2(1991)

// function cutPieces(fruit) {
//   //4 //2
//   return fruit * 4; //16 //8
// }

// function fruitProcessor(apples, mangoes) {
//   //4 2
//   const applePeices = cutPieces(apples); // 16
//   const mangoesPeices = cutPieces(mangoes); //8
//   return `juice of ${applePeices} pieces of apples and ${mangoesPeices} peices of mangoes`;
// }

// // juice of 16 peices of apple and 8 peices of mangoes
// console.log(fruitProcessor(4, 2));

// const findAge = function (birthYear) {
//   if (2023 - birthYear > 0) {
//       return `2023 - birthYear`;
//     //   console.log('hi')
//   }else {
//     return -1; //No meaning
//   }
// };

// console.log(findAge(2014));

//    Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
//       Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
//       A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
//       1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
//       2. Use the function to calculate the average for both teams
//       3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
//       4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
//       5. Ignore draws this time.
//       TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
//       TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
//       HINT: To calculate average of 3 values, add them all together and divide by 3
//       HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
//       GOOD LUCK 😀

// Task : create a function to check number is odd or even
//  how many argument we will pass? 1
//how to create function expression // yes i know
// how to find even number // number / 2 == 0
// how to find odd number // not complete divide

// find even number
//return even or odd

const checkEvenOdd = function (inputValue) {
  if (inputValue % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

// const yourNumber = Number(prompt("Enter Your Number : "));
// console.log(checkEvenOdd(2));
// console.log(checkEvenOdd(3));
// console.log(checkEvenOdd(5));
// console.log(checkEvenOdd(10));
// console.log(checkEvenOdd(-10));
// console.log(checkEvenOdd(yourNumber));

// Task : write a function to checkpositive number , which will call inside your check oddeven function
// Odd Even Will only applicable on Positive Numbers so Create a function to check the number is positive or not

// const friend1 = "Ram";
// const friend2 = "Rohit";
// const friend3 = "Sachin";

// const years = new Array(1999 , 1954, 2001, 2023)

// console.log(years)

const friends = ["Ram", "Rohit", "Sachin", "Raman", "John", "Mike", "Kartik"]; //index -> 4,3 , length -> 5 -1 ,4 -1

// console.log(friends[0] , "," , friends[2]);
console.log(friends.length);

console.log(friends[friends.length - 1]); // friends [5 - 1] => friends[4]
