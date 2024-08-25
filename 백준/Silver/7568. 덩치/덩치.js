let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let arr = [];
let output = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let [x, y] = input[i + 1].split(" ").map(Number);
  arr.push([x, y]);
}

for (let k = 0; k < N; k++) {
  let count = 0;
  for (let l = 0; l < N; l++) {
    if (arr[k][0] < arr[l][0] && arr[k][1] < arr[l][1]) {
      count++;
    }
  }
  output[k] = count + 1;
}

console.log(output.join(" "));
