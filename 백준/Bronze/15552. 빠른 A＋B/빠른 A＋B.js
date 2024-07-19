let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = parseInt(input[0]);
let output = [];

for (let i = 1; i <= T; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  output.push(A + B);
}

console.log(output.join("\n"));
