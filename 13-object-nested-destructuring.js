// nested destructuring

const users = [
  { userId: 1, userName: "Shubham", gender: "male" },
  { userId: 2, userName: "Gautam", gender: "male" },
  { userId: 3, userName: "Shivam", gender: "male" },
];
const [{ userName }, , { gender }] = users;
console.log(userName);
console.log(gender);

// change variables name in - nested Destructuring

const usersDetails = [
  { userId: 1, name: "Shubham", sex: "male" },
  { userId: 2, name: "Gautam", sex: "male" },
  { userId: 3, name: "Shivam", sex: "male" },
];
const [{ name: user1Name }, , { sex: user3Gender }] = usersDetails;
console.log(user1Name);
console.log(user3Gender);
