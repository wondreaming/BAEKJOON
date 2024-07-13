let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);
let arr = new Array(N).fill(0).map((value, index) => index + 1);
let C = 0;

for (let i = 1; i <= M; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  if (A !== B) {
    C = arr[A - 1];
    arr[A - 1] = arr[B - 1];
    arr[B - 1] = C;
  }
}

console.log(arr.join(" "));
