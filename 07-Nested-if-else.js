// nested if else

let winningNumber = 7;
let userGuess = +prompt(
  "Enter a correct 1digit Number"
); /* string into Number */

if (winningNumber === userGuess) {
  console.log("You are correct");
} else {
  if (userGuess < winningNumber) {
    console.log("to low!!");
  } else {
    console.log("to high!!");
  }
}
