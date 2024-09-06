let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let person = input[1].split(" ").map(Number);

person.sort((a, b) => a - b);

let total = 0;
let accumulatedSum = 0;

for (let i = 0; i < N; i++) {
  accumulatedSum += person[i];
  total += accumulatedSum;
}

console.log(total);
