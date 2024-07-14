let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let A = input[0];
let B = input[1];
let C = input[2];

let result1 = parseInt(A) + parseInt(B) - parseInt(C);
let result2 = A + B - C;

console.log(result1);
console.log(result2);
