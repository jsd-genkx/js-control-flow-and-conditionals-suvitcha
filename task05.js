"use strict";

// TODO: Convert this if to switch/case (You can add more options.)

const fruit = "banana";

// if (fruit === "apple") {
//   console.log("An apple a day keeps the doctor away.");
// } else if (fruit === "banana") {
//   console.log("Banana is good for potassium.");
// } else if (fruit === "orange") {
//   console.log("Oranges are full of vitamin C.");
// } else {
//   console.log("Unknown fruit.");
// }

switch (fruit) {
  case "apple":
    console.log("An apple a day keeps the doctor away.");
    break;
  case "banana":
    console.log("Banana is good for potassium.");
    break;
  case "orange":
    console.log("Oranges are full of vitamin C.");
    break;
  default:
    console.log("Unknown fruit.");
}
