let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let S = input[0];
let i = parseInt(input[1]);

console.log(S[i - 1]);
