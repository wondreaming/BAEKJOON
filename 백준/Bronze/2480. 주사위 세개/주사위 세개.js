const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
let result;

if (a === b && b === c) {
  result = 10000 + a * 1000;
} else if (a === b || b === c || c === a) {
  if (a === b || a === c) {
    result = 1000 + a * 100;
  } else {
    result = 1000 + b * 100;
  }
} else {
  result = Math.max(a, b, c) * 100;
}

console.log(result);
