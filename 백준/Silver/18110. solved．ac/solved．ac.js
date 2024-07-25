let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = parseInt(input[0]);

if (n === 0) {
  console.log(0);
  process.exit(0);
}

let nums = [];
for (let i = 1; i <= n; i++) {
  nums.push(parseInt(input[i]));
}

nums.sort((a, b) => a - b);

let trimCount = Math.round(n * 0.15);

nums = nums.slice(trimCount, n - trimCount);

let sum = nums.reduce((acc, val) => acc + val, 0);
let result = Math.round(sum / nums.length);

console.log(result);
