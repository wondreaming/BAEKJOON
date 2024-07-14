let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = new Array(10).fill(0);
let multi = 1;

for (let i = 0; i < 3; i++) {
  multi = parseInt(input[i]) * multi;
}

for (let k = 0; k < multi.toString().length; k++) {
  for (let j = 0; j < 10; j++) {
    if (multi.toString()[k] == j) {
      result[j] += 1;
    }
  }
}

console.log(result.join(" "));
