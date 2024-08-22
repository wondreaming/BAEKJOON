let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let nums = [];

for (let i = 0; i < 3; i++) {
  if (input[i] === "FizzBuzz") {
    nums.push("15N");
  } else if (input[i] === "Fizz") {
    nums.push("3N");
  } else if (input[i] === "Buzz") {
    nums.push("5N");
  } else {
    nums.push(Number(input[i]));
  }
}

for (let j = 0; j < 3; j++) {
  if (typeof nums[j] == "number") {
    let x = 3 - j;
    let result = nums[j] + x;
    if (result % 15 === 0) {
      return console.log("FizzBuzz");
    } else if (result % 5 === 0) {
      return console.log("Buzz");
    } else if (result % 3 === 0) {
      return console.log("Fizz");
    } else {
      return console.log(result);
    }
  }
}

console.log(1);
