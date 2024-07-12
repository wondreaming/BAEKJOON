let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

let num = parseInt(input);

for (let i = 1; i < 10; i++) {
  result = `${num} * ${i} = ${num * i}`;
  console.log(result);
}
