let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let X = parseInt(input[0]);
let N = parseInt(input[1]);
let allPrice = 0;

for (let i = 2; i < input.length; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  allPrice += A * B;
}

if (X === allPrice) {
  console.log("Yes");
} else {
  console.log("No");
}
