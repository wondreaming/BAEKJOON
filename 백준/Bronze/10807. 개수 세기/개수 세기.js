let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let arr = input[1].split(" ").map(Number);
let v = parseInt(input[2]);
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (v === arr[i]) {
    count += 1;
  }
}

console.log(count);
