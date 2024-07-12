let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

let N = parseInt(input);

for (let i = 0; i < N; i++) {
  console.log("*".repeat(i + 1));
}
