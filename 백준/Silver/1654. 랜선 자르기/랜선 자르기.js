let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number);
let cables = input.slice(1).map(Number);

let min = 1;
let max = Math.max(...cables);
let result = 0;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let count = cables.reduce((a, c) => a + Math.floor(c / mid), 0);

  if (count >= K) {
    result = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(result);
