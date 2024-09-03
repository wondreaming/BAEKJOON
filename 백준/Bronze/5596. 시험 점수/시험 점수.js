let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let A = input[0].split(" ").map(Number);
let T = A.reduce((a, c) => a + c);

let B = input[1].split(" ").map(Number);
let S = B.reduce((a, c) => a + c);

if (T >= S) {
  console.log(T);
} else {
  console.log(S);
}
