let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let nums = [];
let frequent = new Map();
let result = [];
let max = 0;
let ans = [];
for (let i = 1; i <= N; i++) {
  let num = Number(input[i]);
  nums.push(num);
}

nums.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  let num = nums[i];
  if (frequent.has(num)) {
    let count = frequent.get(num) + 1;
    frequent.set(num, count);
  } else {
    frequent.set(num, 1);
  }
}

// 산술평균
result.push(Math.round(nums.reduce((a, c) => a + c) / N));
// 중앙값
result.push(nums[Math.floor(nums.length / 2)]);
// 최빈값
for (const [key, value] of frequent.entries()) {
  if (max < value) {
    max = value;
  }
}

for (const [key, value] of frequent.entries()) {
  if (max === value) {
    ans.push(key);
  }
}

if (ans.length === 1) {
  result.push(ans[0]);
} else {
  ans.sort((a, b) => a - b);
  result.push(ans[1]);
}

// 범위
result.push(nums.at(-1) - nums[0]);

console.log(result.join("\n"));
