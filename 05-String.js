// String indexing

let firstName = "Shubham";

//  S   h    u    b    h     a    m
//  0   1    2    3    4     5    6

console.log(firstName);

// length of string
console.log(firstName[5]);

// firstName length
console.log(firstName.length);

// last index : length - 1
console.log(firstName[firstName.length - 1]);

// 2nd last index : length -2
console.log(firstName[firstName.length - 2]);

// String methods

// 1.trim
// 2.toUpperCase
// 3.toLowerCase
// 4.slice

// 1.trim

let countryName = "  india  ";
console.log(countryName.length);

countryName = countryName.trim();
console.log(countryName);
console.log(countryName.length);

// 2.toUpperCase

countryName = countryName.toLocaleUpperCase();
console.log(countryName);

// 2.toLowerCase

countryName = countryName.toLocaleLowerCase();
console.log(countryName);

// 4.slice

let myGoodName = firstName.slice(0, 5);
console.log(myGoodName);

// String concatenation

let first_name = "Shubham";
let last_name = "Jha";

let fullName = first_name + " " + last_name;
console.log(fullName);

// add number in string
// 1.
let firstNumber = "20";
let secondNumber = "10";

let totalNumber = firstNumber + secondNumber;
console.log(totalNumber);
// not add

// 2.
let first_Number = "20";
let second_Number = "10";

let total_Number = +firstNumber + +secondNumber;
console.log(total_Number);
// add

// template string

let age = 22;
let myName = "Shubham";

let aboutMe = ` My name is ${myName} and i am ${age} years old.`;
console.log(aboutMe);
