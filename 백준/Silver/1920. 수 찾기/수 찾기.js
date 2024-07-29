let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let nNums = input[1].split(" ").map(Number);
let setNNums = new Set(nNums); // set을 통하여 시간 복잡도 감소
let M = parseInt(input[2]);
let mNums = input[3].split(" ").map(Number);

let result = new Array(M).fill(0);

for (let i = 0; i < M; i++) {
  if (setNNums.has(mNums[i])) {
    result[i] = 1;
  }
}

console.log(result.join("\n"));
