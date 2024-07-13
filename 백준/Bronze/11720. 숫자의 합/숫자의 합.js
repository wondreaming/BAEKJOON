let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let S = input[1];
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += parseInt(S[i]);
}

console.log(sum);
