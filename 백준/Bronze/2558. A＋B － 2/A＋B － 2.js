let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let A = parseInt(input[0]);
let B = parseInt(input[1]);

console.log(A + B);
