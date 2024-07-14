let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let num = 0;

for (let i = 0; i < 5; i++) {
  num += parseInt(input[i]) ** 2;
}

let result = num % 10;
console.log(result);
