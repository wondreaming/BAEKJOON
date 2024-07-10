const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let H = parseInt(input[0]);
let M = parseInt(input[1]);

if (M >= 45) {
  M = M - 45;
} else {
  if (H === 0) {
    H = 23;
    M = M + 60 - 45;
  } else {
    H = H - 1;
    M = M + 60 - 45;
  }
}

console.log(H, M);
