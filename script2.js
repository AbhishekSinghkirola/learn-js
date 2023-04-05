'use strict';

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

// function calcAverage(s1, s2, s3) {
//   return (s1 + s2 + s3) / 3;
// }

// function checkWinner(avgDolhphins, avgKoalas) {
//   if (avgDolhphins > avgKoalas * 2) {
//     console.log(`Dolphins Wins (${avgDolhphins} vs ${avgKoalas})`);
//   } else if (avgKoalas > avgDolhphins * 2) {
//     console.log(`Koalas Wins (${avgKoalas} vs ${avgDolhphins})`);
//   } else {
//     console.log(`No one Wins the Trophy 😭`);
//   }
// }

// const avgDolhphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// console.log(avgDolhphins, avgKoalas);

// checkWinner(avgDolhphins, avgKoalas);

// Task : create a function to check number is odd or even
//  how many argument we will pass? 1
//how to create function expression // yes i know
// how to find even number // number / 2 == 0
// how to find odd number // not complete divide

// find even number
//return even or odd

// const checkEvenOdd = function (inputValue) {
//   if (checkPositive(inputValue)) { //true - false
//     if (inputValue % 2 === 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   } else {
//     return "Invalid!!";
//   }
// };

// const checkPositive = function (a) {
//   if (a >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const yourNumber = Number(prompt("Enter Your Number : "));
// console.log(checkEvenOdd(-2));
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

// const friends = ["Ram", "Rohit", "Sachin", "Raman", "John", "Mike", "Kartik"]; //index -> 4,3 , length -> 5 -1 ,4 -1

// console.log(friends[friends.length - 1]) // 7-1 == 6
// // console.log(friends[0] , "," , friends[2]);
// console.log(friends.length);

// console.log(friends[friends.length - 1]); // friends [5 - 1] => friends[4]

// const years = [1999, 1954, 2001, 2023];
// console.log(years[4]);

// years[4] = 2002;
// years[5] = 2001;
// years[years.length - 1] = 1889;
// years[0] = 1990;
// console.log(years, years[4]);

// const firstName= "Abhishek";
// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }
// const abhishek = [firstName, "Singh", calcAge(2001), "Programmer", friends];
// console.log(abhishek)

// Push Method

// const friends = ["Ram", "Rohit", "Sachin", "23"];

// console.log(friends.push("Kishan"));

// friends.push("Kishan");
// friends.push("Tanu");

// Unshift

// friends.unshift("Tanu","Kishan","Preet");

// pop
// friends.pop()
// friends.pop()
// const prevFriend = friends.pop();

// Shift
// console.log(friends.shift());

// const revFriends = [];

// revFriends.push(friends.pop());
// revFriends.push(friends.pop());
// revFriends.push(friends.pop());

// console.log(friends,revFriends)

// console.log(friends.indexOf("Rohit1"));

//Task : if array === value do something

// if(friends.indexOf("Ram") >=0 ) { //0 - falsy value
//   console.log('You have this value present in your array')
// }

// console.log(friends.includes("Ram1"))
// if(friends.includes("23")) { //===
//   console.log("You have friend called Ram");
// }

// if(friends.indexOf("Rohit1") >= 0) { // 0 - false, 1 - true, -1 -true
//   console.log("Exsist")
// }

// if(friends.includes("Ram1")) { //true, false
//   console.log("Exsist");
// }

// Array Methods
// const friends = ["Ram", "Sachin", "Prem", "21"];
// const revFriends = []; //prem, sachin, ram

// friends.push("kishan")
// console.log(friends.push("Laxman", "Rani"));

// friends.unshift("Kishan")

// console.log(friends.pop());
// console.log(friends.pop());

// friends.shift()
// friends.shift()

// revFriends.push(friends.pop()); //Prem
// revFriends.push(friends.pop()); //Sachin
// revFriends.push(friends.pop()); //Ram

// console.log(friends);
// console.log(revFriends);

// console.log(friends.indexOf("sachin"));
// console.log(friends.includes("21")); // ===

// if (friends.indexOf("Ram") >= 0) { // 1 -true, -1 - true, 0 - false
//   console.log("Exsist");
// } else {
//   console.log("Not Exsist");
// }

// if (friends.includes("Ram1")) { // true, false
//   console.log("Exsist");
// } else {
//   console.log("Not Exsist");
// }

// const firstName = "Abhishek";
// const friends = ["Ram", "Rohit", "Sachin"];

// const calcAge = (birthYear) => 2023 - birthYear;

// const abhishek = [firstName, "Singh", calcAge(2001), friends, true, ];

// console.log(abhishek)

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
//       1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
//       2. And now let's use arrays! So create an array 'bills' containing the test data below.
//       3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
//       4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
//       TEST DATA: 125, 555 and 44
//       HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
//       GOOD LUCK 😀

/* function calcTip(billValue) {
  return billValue >= 50 && billValue <= 300
    // ? billValue * (15 / 100)
    : billValue * (20 / 100);
} */

// const bills = [125, 555, 44];

// const tip1 = calcTip(bills[0]);
// const tip2 = calcTip(bills[1]);

// const tips = [tip1, tip2, calcTip(bills[2])];

// const total1 = bills[0] + tips[0];
// const total = [total1, bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills);
// console.log(tips);
// console.log(total);

// Objects

// const abhishekArray = [
//   "Abhishek",
//   "Singh",
//   2023 - 2001,
//   "Programmer",
//   ["Ram", "Rohit", "sachin"],
// ];

// Object Literals
// const abhishek = {
//   firstName: "Abhishek",
//   lastName: "Singh",
//   age: 2023 - 2001,
//   job: "Programmer",
//   friends: ["Ram", "Rohit", "sachin"],
// };

// console.log(abhishek)
// dot Notation or Bracket Notation

// console.log(abhishek.firstName, abhishek.age,abhishek.friends)

// console.log(abhishek["firstName"], abhishek["friends"]);

// const placeholder = "Name";
// console.log(abhishek["first" + placeholder]);

// const propertyName = prompt("What Do you want to know about Abhishek?Choose between firstName, lastName, age, job, friends!!");

// console.log(abhishek[propertyName]); // abhishek['job'], abhishek['friends']

// How to add new key: values in objects
// abhishek.location = "Delhi";
// abhishek['subject'] = "Javascript"
// console.log(abhishek)

// // Task : Abhishek has 3 friends and his best friend called Ram

// console.log(`${abhishek.firstName} has ${abhishek.friends.length} friends and his best friend called ${abhishek.friends[0]}`) //array.length
// console.log(`${abhishek['firstName']} has ${abhishek['friends'].length} friends and his best friend called ${abhishek['friends'][0]}`) //array.length

/*
OBJECT METHODS
*/

// const abhishek = {
//   firstName: "Abhishek",
//   lastName: "Singh",
//   birthYear: 2011,
//   job: "Programmer",
//   friends: ["Ram", "Rohit", "sachin"],
//   hasDrivingLicense: true,

//   // calcAge: function (inputYear) {
//   //   return 2023 - inputYear; //22
//   // },

//   // calcAge: function () {
//   //   // console.log(this)
//   //   return 2023 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2023 - this.birthYear; //22
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} has ${this.calcAge()} years old ${
//       this.job
//     } and he has ${this.hasDrivingLicense ? "a" : "no"} Driving Licence`;
//   },
// };

// console.log(abhishek.calcAge(2001), abhishek.calcAge(2002)); //22
// console.log(abhishek["calcAge"](2001), abhishek["calcAge"](2022));
// console['log']("working....")

// console.log(abhishek.calcAge(abhishek.birthYear)); //2001 => 22

// This keyword - It is equal to the object in which the method is called

// console.log(abhishek.calcAge());
// console.log(abhishek.calcAge());
// console.log(abhishek.calcAge());
// console.log(abhishek.calcAge());
// console.log(abhishek.calcAge());
// console.log(abhishek.age);
// console.log(abhishek.age);

// Task : Abhishek has 22 years old programmer and he has a/no Driving Licence

// console.log(
//   `${abhishek.firstName} has ${abhishek.calcAge()} years old ${
//     abhishek.job
//   } and he has ${abhishek.hasDrivingLicense ? "a" : "no"} Driving License`
// );

// const hemant = {
//   firstName: "Hemant",
//   lastName: "Tanwar",
//   birthYear: 2001,
//   job: "PHP Developer",
//   friends: ["Ram", "Rohit", "sachin"],
//   hasDrivingLicense: false,
//   calcAge: function () {
//     this.age = 2023 - this.birthYear; //22
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} has ${this.calcAge()} years old ${
//       this.job
//     } and he has ${this.hasDrivingLicense ? "a" : "no"} Driving Licence`;
//   },
// };

// console.log(abhishek.getSummary());
// console.log(hemant.getSummary());

// const data = [
//   {
//     name: "Abhishek",
//     job: "PHP",
//   },
//   {
//     name: "Hemant",
//     job: "JS",
//   },
//   {
//     name: "Kavita",
//     job: "Js",
//   },
//   {
//     name: "Vikas",
//     job: "Js",
//   },
// ];

// for(let i =0; i<data.length; i++) {
//   console.log(data[i].name);
// }

// console.log(data[0]['name']);

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
//         1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
//         2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
//         3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
//         TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
//         GOOD LUCK 😀

// Loops

// retpition
// Copy sshortcut (shift + alt + down arrow)
// Dry Principle violates
// console.log("Lifting Weights Repition 1 🏋️");
// console.log("Lifting Weights Repition 2 🏋️");
// console.log("Lifting Weights Repition 3 🏋️");
// console.log("Lifting Weights Repition 4 🏋️");
// console.log("Lifting Weights Repition 5 🏋️");
// console.log("Lifting Weights Repition 6 🏋️");
// console.log("Lifting Weights Repition 7 🏋️");
// console.log("Lifting Weights Repition 8 🏋️");
// console.log("Lifting Weights Repition 9 🏋️");
// console.log("Lifting Weights Repition 10 🏋️");

// initialization, condition, increment/decrement

// For Loop

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting Weights Repition ${i} 🏋️`);
// }

// const abhishekArray = [
//   "Abhishek",
//   "Singh",
//   2023 - 2001,
//   "Programmer",
//   ["Ram", "Rohit", "sachin"],
//   true,
// ];

// const types = [];
// console.log(abhishekArray[0]);
// console.log(abhishekArray[1]);
// console.log(abhishekArray[2]);
// console.log(abhishekArray[3]);
// console.log(abhishekArray[4]);
// console.log(abhishekArray[5]);

// for (let i = 0; i < abhishekArray.length; i++) {
//   // 0 < 6, 1<6,2<6,3<6,4<6,5<6,6<6
//   console.log(abhishekArray[i]);
// } //6

// for (let i = 0; i <= abhishekArray.length - 1; i++) {
//   // console.log(abhishekArray[i], typeof abhishekArray[i]);
// types[i] = typeof abhishekArray[i];
//   types.push(typeof abhishekArray[i]);
//   // console.log(types);
// }

// console.log(types);

// const years = [1991, 1954, 2001, 2003];

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// console.log(calcAge(years[0]));
// console.log(calcAge(years[1]));
// console.log(calcAge(years[2]));
// console.log(calcAge(years[3]));

// for(let i = 0; i < years.length; i++) {
//   console.log(calcAge(years[i]));
// }

// continue Statement and Break Statement
// const abhishekArray = [
//   "Abhishek",
//   "Singh",
//   2023 - 2001,
//   "Programmer",
//   ["Ram", "Rohit", "sachin"],
//   true,
// ];

// Continue -> excape the current iteration

// for (let i = 0; i < abhishekArray.length; i++) {
//   if(typeof abhishekArray[i] !== 'string') continue;
//   console.log(abhishekArray[i], typeof abhishekArray[i]);
// }

// break -> terminate the execution
// for (let i = 0; i < abhishekArray.length; i++) {
//   if(typeof abhishekArray[i] === 'number') break;
//   console.log(abhishekArray[i], typeof abhishekArray[i]);
// }

// Task : - 1  - Put values from 1 to 10 ==> outupt : 1,2,3,4,5,6,7,8,9,10

// const myNumbers = [];

// Task 2 : conosle.log only even numbers
// const randomNumbers = [2,5,6,17,28,39,40,100,150,133]

// Task 3 : print table of 5

// Task 4 : 1 + 3 + 5 +6 +7 ==> 22 Find summ of all the elements
// const myArrays = [1, 3, 5, 6, 7];
// let sum = 0;

// for (let i = 0; i < myArrays.length; i++) {
//   sum = sum + myArrays[i]; // 0 + 1 = 1; 1 + 3 = 4; 4 + 5 = 9; 9 + 6 = 15; 15 + 7 = 22
//   // console.log(sum);
// }
// console.log(sum);

// const abhishekArray = [
//   "Abhishek",
//   "Singh",
//   2023 - 2001,
//   "Programmer",
//   ["Ram", "Rohit", "sachin"],
//   true,
// ];

// for(let i =0 ; i < abhishekArray.length; i++) {
//   console.log(abhishekArray[i]);
// }

// for (let i = abhishekArray.length - 1; i >= 0; i--) {
//   console.log(abhishekArray[i]);
// }

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// Nested Loops - Loop inside loop

//--------E - 1
// R -1
// R-2
// R -3
// R -4
// R -5
// ------E -2
// R -1
// R-2
// R -3
// R -4
// R -5
// ------E -3
// R -1
// R-2
// R -3
// R -4
// R -5

// for(let exercise = 1; exercise <=3; exercise++) {
//   console.log(`------Starting Exercise ${exercise}`);
//   for(let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise} : Lifting Weights Repitition ${rep} 🏋️`);
//   }
// //   //exit
// }

// //exit

// const array = [
//   [1,2,3], //0 l->3
//   ["a","b","c","d"], //1
//   [11,12,13], //2
//   [true,false,false,true] //3
// ];

// console.log(array[0][0]);

// for(let i = 0; i < array.length; i++ ) {
//   // console.log(array[i]);
//   for(let j = 0; j < array[i].length; j++) {
//     console.log(array[i][j]);
//   }
// }

/**
 * i   j
 * 0   0
 * 0   1
 * 0   2
 * 0   3 false
 *
 *
 *
 */

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// for(let i = 1; i <= 5; i++) {
//   for(let j= 1; j <= i; j++) {
//     document.write(j)
//   }
//   document.write("<br>")
// }

// 1. Write a JS code to find the power of a number using for loop
// getPower(2,3) //8  2 x 2 x 2
// getPower(5,3) //125 5 x 5 x 5

// 4. Write a JS code to find the largest number in an array eg [5,78,99,100] =>100
// 5. Get the sum of two arrays…actually the sum of all their elements. eg : [1,2,3] , [4, 5 ,6]  => 6 + 15 =>21

// While Loop

// for(let i = 1; i <= 15; i++) {
//   console.log(`Lifting Weights Repitition ${i} 🏋️`);
// }

// let i = 1; //initialization
// while(i <= 15) { // condition
//   console.log(`Lifting Weights Repitition ${i} 🏋️`);

//   i++; // increment/decrement
// }

// let dice = Math.trunc(Math.random() * 6) + 1; //2 //6

// while(dice !== 6) {
//   console.log(`You Rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1; //3 , 6
//   if(dice === 6) {
//     console.log("Loop is about to end....");
//   }
// }

// Do while Loop

// let i = 25; // initialization
// do {
//   console.log(`Lifting Weights Repititon ${i} 🏋️`);

//   i++; // increment/ decrement
// } while (i <= 15); //condition

// const string = 'string';

// const myFunc = a => a;
// console.log();
// document.write();

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Understanding the Problem

/**
 * 1. what is amplitude? Answer : difference of min and max temp
 * 2. how to compute highest temp
 * 3. how to compute lowest temp
 * 4. what to do when get sensor error ? Answer : just Skip that part
 *
 */

// Sub Problems
/**
 * 1. how to ignore errors
 * 2 . highest temp
 * 3. Lowest temp
 * 4. get amplitude
 *
 */

// const calcTempAmplitude = function (temp) {
//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== 'number') continue;
//     if (temp[i] > max) max = temp[i];
//     if (temp[i] < min) min = temp[i];
//   }
//   return `Amplitude of the temperatures is ${min - max}`;
// };

// console.log(calcTempAmplitude(temperatures));

// Problem 2 : Same fucntion for two arrays
// Understanding
/**
 * 1. should we calculate two times for two arrays? Answer : no merge the arrays
 * 2. how to merge two arrays
 */

// Sub Problems
/**
 * 
 * 1. merge two arrays
 */


// const calcTempAmplitude2 = function (t1, t2) {
//   const temps = t1.concat(t2); //[1,2,3,4,5,6]
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   return `Amplitude of the temperatures is ${min - max}`;
// };

// console.log(calcTempAmplitude2([1,2,3], [4,5,6]));

//  Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
//         Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
//         Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
//         Use the problem-solving framework: Understand the problem and break it up into sub-problems!
//         TEST DATA 1: [17, 21, 23]
//         TEST DATA 2: [12, 5, -5, 0, 4]
