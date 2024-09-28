let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = Number(input[0]);
let stairs = [0];

for (let i = 1; i <= T; i++) {
  stairs.push(Number(input[i]));
}

let dp = new Array(T + 1).fill(0);

dp[1] = stairs[1];
dp[2] = stairs[1] + stairs[2];

for (let i = 3; i <= T; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i],
    dp[i - 3] + stairs[i - 1] + stairs[i]
  );
}

console.log(dp[T]);
