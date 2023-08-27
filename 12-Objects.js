//  objects => reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// create objects

const userDetails = {
  firstName: "shubham",
  lastName: "Jha",
  age: 20,
  state: "Bihar",
  study: "gaugrated",
  hobbies: ["Coding", "Sleeping", "Webdesign"],
};
console.log(userDetails);
console.log(userDetails.firstName);
console.log(userDetails.lastName);
console.log(userDetails.age);
console.log(userDetails.state);
console.log(userDetails.study);
console.log(userDetails.hobbies);
console.log(userDetails["firstName"]); /* we can also write . string */

// add key value pair to object

userDetails["gender"] = "male";
console.log(userDetails);

// difference between dot and bracket notation

const person = {
  name: "gautam",
  age: 25,
  "Country name": "india",
};
console.log(person);
// console.log(person.Country name);  Wrong
console.log(person["Country name"]); /* correct */

// add key in onject
const key = "gmail";

const EmpDetails = {
  name: "virat",
  PhoneNo: 8700547383,
  twitter: "Shubhamjha",
  linkdin: "Shubhamjha",
  github: "jhaShubham",
};

EmpDetails[key] = "sjha@870054@gmail.com";

console.log(EmpDetails);

// how to iterate object

const details = {
  name: "Virat",
  age: 25,
  state: "Delhi",
  study: "Master",
};

// for in loop
// Object.key

for (let key in details) {
  // console.log(details[key]);
  console.log(`${key} : ${details[key]}`);
}

// for of loop
for (let key of Object.keys(details)) {
  console.log(details[key]);
}

// computed properties

const key1 = "objKeys1";
const key2 = "objkeys2";

const value1 = "myValue1";
const value2 = "myValue2";

const object = {
  [key1]: value1,
  [key2]: value2,
};
console.log(object);

// spread operator

const obj1 = {
  key3: "value1",
  key4: "value2",
};

const obj2 = {
  key5: "value3",
  key6: "value4",
};

const newObject = { ...obj1, ...obj2 /* keys: "value5" */ };
// const newObject = { ...["iteam1", "iteam2"] };

console.log(newObject);

// Destructuring

const car1 = {
  name: "G waggon",
  speed: "100km/s",
  price: 1000000,
  fuleTank: "50l",
};
let { name, price, ...restProps } = car1;
console.log(name);
console.log(price);
console.log(restProps);

// object inside array

const users = [
  { userId: 1, userName: "Shubham", gender: "male" },
  { userId: 2, userName: "Gautam", gender: "male" },
  { userId: 3, userName: "Shivam", gender: "male" },
];

for (let user of users) {
  // console.log(user);
  console.log(user.userName);
}
