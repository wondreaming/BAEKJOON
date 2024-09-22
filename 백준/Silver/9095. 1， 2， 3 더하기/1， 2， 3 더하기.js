let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = Number(input[0]);
let result = [];

function plusFibo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n < 0) return 0;
  if (n === 0) return 1;
  memo[n] =
    plusFibo(n - 1, memo) + plusFibo(n - 2, memo) + plusFibo(n - 3, memo);
  return memo[n];
}

for (let i = 1; i <= T; i++) {
  let n = Number(input[i]);
  result.push(plusFibo(n));
}

console.log(result.join("\n"));
