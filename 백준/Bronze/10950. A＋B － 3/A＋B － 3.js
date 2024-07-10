const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]) + 1;

for (i = 1; i < T; i++) {
  let numbers = input[i].split(" ").map(Number);
  let A = parseInt(numbers[0]);
  let B = parseInt(numbers[1]);
  console.log(A + B);
}
