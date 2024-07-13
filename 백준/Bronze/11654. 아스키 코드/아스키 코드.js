let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

let N = input[0].charCodeAt();

console.log(N);
