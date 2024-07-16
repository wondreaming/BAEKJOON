let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let count = 0;
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == "O") {
      count += 1;
      sum += count;
    } else {
      count = 0;
    }
  }
  console.log(sum);
}
