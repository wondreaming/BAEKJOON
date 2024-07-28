let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let nums = [];

for (let i = 1; i <= N; i++) {
  nums.push(parseInt(input[i]));
}

nums.sort((a, b) => a - b);

console.log(nums.join("\n"));
