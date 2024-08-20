let [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let first = 1;
let second = 1;
let third = 1;
let num = N - K;

for (let i = 1; i <= N; i++) {
  first *= i;
}

for (let j = 1; j <= K; j++) {
  second *= j;
}

for (let k = 1; k <= num; k++) {
  third *= k;
}

let result = first / (second * third);

console.log(result);
