// intro to arrays

// => reference type
// ordered collection of items

let fruits = ["apple", "orange", "mango", "grapes"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits[1] = "banana"; /* change iteams  */
console.log(fruits);

//  we can use any data type i arrays
let mixed = [1, 9.97, "ten", "twenty"];
console.log(mixed);
console.log(typeof mixed);
console.log(Array.isArray(fruits)); /* cheack this is array ya not */

// Methods of arrays

//1. Push
fruits.push("orange");
console.log(fruits);
//  add iteams

// 2. Pop
fruits.pop();
console.log(fruits);

// print pop iteams
let poppedFruits = fruits.pop();
console.log(poppedFruits);
//  remove last iteams

// 3. unShift

fruits.unshift("fruits");
console.log(fruits);
// add iteams in start

// 4 shift
fruits.shift();
console.log(fruits);
// remove iteams in start

// Permitive vs reference data types

// permitive

let num1 = 10;
let num2 = num1;

console.log("The value of num1 is", num1);
console.log("The value of num1 is", num2);
num1++;

console.log(" after incrementing  num1");
console.log("The value of num1 is", num1);
console.log("The value of num1 is", num2);
// value not same in num1 and num2

// reference

// array

let array1 = ["apple", "mango", "orange"];
let array2 = array1;
console.log("The value of array is", array1);
console.log("The value of array is", array2);

array1.push("banana");
console.log("after incerementing array1");
console.log("The value of array is", array1);
console.log("The value of array is", array2);
// Value same in array1 and array2

// Clone arrays

// Concatenate two arrays

// 1.
let array3 = ["iteam1", "iteam2"];
let array4 = ["iteam1", "iteam2"];
array3.push("iteam3");
console.log(array3 === array4); /* check arrays3 = arrays4 are same are not. */
console.log(array3);
console.log(array4);

// 2.Slice
let array5 = ["iteam1", "iteam2"];
let array6 = array5.slice(0);
array5.push("iteam3");

console.log(array5 === array6);
console.log(array5);
console.log(array6);

// 3.concate
let array7 = ["iteam1", "iteam2"];
let array8 = [].concat(array7);
array7.push("iteam3");

console.log(array7 === array8);
console.log(array7);
console.log(array8);

// 4.Spread operator
let array9 = ["iteam1", "iteam2"];
let array10 = [...array9];
array9.push("iteam3");

console.log(array9 === array10);
console.log(array9);
console.log(array10);
// use this methods

// example

// 1
// Slice methods
let fruitNameList = ["mango", "banana", "orange"];
let favFruits = fruits.slice(1).concat(["grapes", "pineapple"]);

console.log(fruitNameList);
console.log(favFruits);

// 2
// spread methods
let batsMan = ["Virat", "Rohit", "Rahul", "SKy"];
let boller = ["Bhumara", "Siraj", "chahal", "Aswin"];

let teams = [...batsMan, ...boller];
console.log(teams);

// for loop in array

let indCriTeam = [
  "Virat",
  "Rohit",
  "Rahul",
  "Hardik",
  "SKY",
  "Gill",
  "Jadeja",
  "Chahal",
  "Bhumara",
  "Siraj",
  "Rishab",
];
console.log(indCriTeam.length); /* Find length */
console.log(indCriTeam[favFruits.length - 1]); /* last index */
for (let i = 0; i < indCriTeam.length; i++) {
  console.log(indCriTeam[i].toUpperCase());
}

// use const for creating arrays

const pi = 3.14;
/* pi = 4;   Error code not run */
console.log(pi);

const box = ["iteam1", "iteam2"];
// box = ["iteam3"]; - code not run
box.push("iteam3"); /* Code run */
console.log(box);

// While loop in array

const subject = ["IOS", "DBMS", "DS", "CS"];

let i = 0;
while (i < subject.length) {
  console.log(subject[i]);
  i++;
}

// for of loop in arrays

const box1 = ["iteam1", "iteam2", "iteam3", "iteam4", "iteam5"];
for (let name of box1) {
  console.log(name);
}

//  for in loops in arrays
const box2 = ["iteam1", "iteam2", "iteam3", "iteam4", "iteam5"];
for (let index in box2) {
  console.log(box2[index]);
}

// array destructuring

// not destructuring array
const myArray = ["iteam1", "iteam2"];
let var1 = myArray[0];
let var2 = myArray[1];

console.log(var1);
console.log(var2);

// destructuring array

const newArray = ["iteam10", "iteam12"];
let [box10, box12] = newArray;

console.log(box10);
console.log(box12);

//  jump into next
const myNewArray = ["Cricket", "footboll", "tenis"];

let [game1, , game3] = myNewArray;
console.log(game1);
console.log(game3);

//concate method in array distructuring
const myNewArray1 = ["Cricket", "footboll", "tenis", "batmintor"];
let [game4, game5, ...newArray1] = myNewArray1;

console.log(game4);
console.log(game5);
console.log(newArray1);
