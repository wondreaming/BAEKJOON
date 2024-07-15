let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let first = input[i][0];
  let last = input[i].at(-1);
  console.log(first + last);
}
