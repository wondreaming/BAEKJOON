const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [H, M] = input[0].split(" ").map(Number);
let cookingTime = parseInt(input[1]);

let estimatedTime = M + cookingTime;

if (estimatedTime < 60) {
  M = estimatedTime;
} else {
  let share = parseInt(estimatedTime / 60);
  H = H + share;
  M = estimatedTime - 60 * share;
  if (H >= 24) {
    H = H - 24;
  }
}

console.log(H, M);
