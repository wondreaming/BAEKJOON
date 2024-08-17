let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);
let S = new Set();
let count = 0;

for (let i = 1; i <= N; i++) {
  S.add(input[i]);
}

for (let k = N + 1; k <= N + M; k++) {
  if (S.has(input[k])) {
    count++;
  }
}

console.log(count);
