// Type of operator

// data types (primitive data type)
// String - "Shubham"
// Number - 2, 4, 5
// Bolleans - true, flase
// Underfined
// Null
// BigInt
// Symbol

let age = 20;
let firstName = "Shubham";
let student = true;

console.log(typeof age); /*number */
console.log(typeof firstName); /*String */
console.log(typeof student); /*bollean */

//  convert number to string

// 1.
let age1 = age + "";
console.log(typeof age);

// 2.
let birthAge = 2005;
birthAge = String(birthAge);
console.log(birthAge);
console.log(typeof birthAge);

//  convert string to number

// 1
let admissionYear = "2022";
admissionYear = +"2022";
console.log(admissionYear);
console.log(typeof admissionYear);

// 2
let passingYear = "2025";
passingYear = Number(passingYear);
console.log(passingYear);
console.log(typeof passingYear);

// Underfine

let myName;
console.log(myName);
console.log(typeof myName);

// Null

let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable); /* Object */
//  bug ,error

// BigInt

// console.log(Number.MAX_SAFE_INTEGER);  ---  9007199254740991

let firstNumber = BigInt(123);
let secondNumber = 123n; /* also bigInt  */
console.log(typeof firstNumber);
console.log(typeof secondNumber);

console.log(firstNumber + secondNumber);

// bolleans & compariso>n oparator

let num1 = "7";
let num2 = 7;

console.log(num1 > num2);
console.log(num1 <= num2);

//  == vs ===

console.log(num1 === num2); /* false */
console.log(num1 == num2); /* true */

// != vs !==
console.log(num1 != num2);
console.log(num1 !== num2);

// truthy and falsy values

// falsy values

// false
// " "
// null
// undefined
// 0

// 1.
let herName = ""; /* false , null , undefined , 0 are falsy value */
if (herName) {
  console.log(herName);
} else {
  console.log("hername is empty.");
}

// ternary operator  / conditional operator

let totalAge = 8;
let drink;

if (age >= 5) {
  drink = "Pepsi";
} else {
  drink = "Milk";
}
console.log(drink);

// example

let total_age = 3;
let drink1 = total_age >= 5 ? "pepsi" : "milk";
console.log(drink1);

// AND -&& / Or - || operator

// AND - &&

// example
let yourName = "virat";
let work = "cricket";

if (yourName[0] == "v" && work == "cricket") {
  console.log("he is a cricketer");
} else {
  console.log("he is not a cricketer");
}
// both statement is true in AND operator

// Or - ||

let playerName = "rohit";
let workDuring = "batsman";

if (playerName == "rohit" || workDuring == "boller") {
  console.log(" cricketer rohit");
} else {
  console.log("not real");
}
// one conditions is true.
