let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);

let arr1 = [];
let arr2 = [];
let arr3 = [];

for (let i = 1; i <= N; i++) {
  let nums = input[i].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    arr1.push(nums[j]);
  }
}

for (let i = 1 + N; i <= 2 * N; i++) {
  let nums = input[i].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    arr2.push(nums[j]);
  }
}

for (let i = 0; i < N * M; i++) {
  arr3[i] = arr1[i] + arr2[i];
}

for (let i = 0; i < arr3.length; i += M) {
  const chunk = arr3.slice(i, i + M);
  console.log(chunk.join(" "));
}
