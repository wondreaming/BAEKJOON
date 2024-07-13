let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);
let arr = new Array(N).fill(0);

for (let i = 1; i <= M; i++) {
  let arr2 = input[i].split(" ").map(Number);

  for (let j = arr2[0] - 1; j < arr2[1]; j++) {
    arr[j] = arr2[2];
  }
}

let result = arr.join(" ");
console.log(result);
