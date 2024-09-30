let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function dp(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 1;
  if (n === 1) return 1;
  memo[n] = (dp(n - 1, memo) + dp(n - 2, memo)) % 10007;
  return memo[n];
}

let result = dp(n);
console.log(result);
