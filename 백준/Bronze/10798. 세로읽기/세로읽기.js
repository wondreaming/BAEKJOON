let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let output = "";

for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j][i] !== undefined) {
      output += input[j][i];
    }
  }
}

console.log(output);
