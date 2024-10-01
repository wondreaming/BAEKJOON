let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number); // N : 수의 개수, M : 횟수
let nums = input[1].split(" ").map(Number);
let result = [];

let memo = [0];

for (let i = 1; i <= N; i++) {
  memo.push(memo[i - 1] + nums[i - 1]);
}

for (let k = 2; k < 2 + M; k++) {
  let [i, j] = input[k].split(" ").map(Number);
  let ans = memo[j] - memo[i - 1];
  result.push(ans);
}

console.log(result.join("\n"));
