let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = parseInt(input[0]);
let charges = [25, 10, 5, 1];

for (let i = 1; i <= T; i++) {
  let cash = parseInt(input[i]);
  let payBack = new Array(4).fill(0);

  for (let j = 0; j < 4; j++) {
    let count = parseInt(cash / charges[j]);
    cash = cash - charges[j] * count;
    payBack[j] = count;
  }
  console.log(payBack.join(" "));
}
