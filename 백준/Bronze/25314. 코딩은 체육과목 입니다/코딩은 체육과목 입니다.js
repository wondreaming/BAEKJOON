let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);

let n = N / 4;

console.log("long ".repeat(n) + "int");
