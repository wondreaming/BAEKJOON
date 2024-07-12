let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let scores = input[1].split(" ").map(Number);
let M = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  if (M < scores[i]) {
    M = scores[i];
  }
}

for (let i = 0; i < N; i++) {
  scores[i] = (scores[i] / M) * 100;
  sum += scores[i];
}

let result = sum / N;

console.log(result);
