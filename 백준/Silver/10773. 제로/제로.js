let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let K = parseInt(input[0]);
let nums = [];
let sum = 0;

for (let i = 1; i <= K; i++) {
  if (parseInt(input[i]) === 0) {
    nums.pop();
  } else {
    nums.push(parseInt(input[i]));
  }
}

for (let j = 0; j < nums.length; j++) {
  sum += nums[j];
}

console.log(sum);
