let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  let [A, B] = input[i].split(" ");
  result = parseInt(A) + parseInt(B);
  console.log(result);
}
