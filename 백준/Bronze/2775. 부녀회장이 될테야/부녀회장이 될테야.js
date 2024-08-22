let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = Number(input[0]);
let output = [];
for (let i = 0; i < T; i++) {
  let k = Number(input[2 * i + 1]);
  let n = Number(input[2 * i + 2]);
  let arr = new Array(n).fill(0).map((value, index) => index + 1);

  for (let j = 0; j < k; j++) {
    for (let idx = 1; idx < n; idx++) {
      arr[idx] += arr[idx - 1];
    }
  }

  output.push(arr[n - 1]);  // 최종 결과는 n호의 사람 수
}

console.log(output.join("\n"));
