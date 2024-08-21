let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let L = Number(input[0]);
let string = input[1];
let l = 0;
let H = 0;

while (l < L) {
  for (let i = 0; i < L; i++) {
    H += (string[i].charCodeAt() - 96) * 31 ** l;
    l++;
  }
}

console.log(H);
