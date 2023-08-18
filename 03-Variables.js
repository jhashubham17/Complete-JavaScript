`use strict`;
// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable

var firstName = "Shubham";

// use variable
console.log(firstName);

// change variable

firstName = "Virat";

console.log(firstName);

// rules for naming variables

// you cannot start with number
// 1value(invalid)
// value1(valid)

var value1 = 2;
console.log(value1);

// you can use only underscore _ or dollar symbol
// first_name(valid)
// _firstname (valid)

// first$name (valid)
// $firstname (valid)

// you cannot use spaces
// var first_name = "harshit"; // snake case writing
// var firstName = "harshit"; // camel case writing
// first name (invalid)

// convention
// start with small letter and use camelCase

// variable are:-

// 1.var
// 2.let
// 3.Const

// 1.var
// declare var

var firstName = "Shubham";
var firstName = "Gautam";
console.log(firstName);

// 2. let
// declare let

let lastName = "Jha";
// let lastName = "Jha"  - error
console.log(lastName);

// 3.const
// declare const

const pi = 3.14;
// pi = 5;     - error
console.log(pi);
