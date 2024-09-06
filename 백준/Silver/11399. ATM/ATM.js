let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let person = input[1].split(" ").map(Number);
let mins = new Array(N).fill(0);

person.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  let sum = 0;
  for (let j = 0; j <= i; j++) {
    sum += person[j];
  }
  mins[i] = sum;
}

let total = mins.reduce((a, c) => a + c);

console.log(total);
