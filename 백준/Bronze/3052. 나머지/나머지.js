let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = new Set();

for (let i = 0; i < 10; i++) {
  let remain = parseInt(input[i]) % 42;
  arr.add(remain);
}

let result = arr.size;

console.log(result);
