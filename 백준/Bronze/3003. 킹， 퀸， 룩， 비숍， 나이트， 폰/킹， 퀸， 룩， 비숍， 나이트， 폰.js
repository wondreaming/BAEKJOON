let isHas = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let correct = [1, 1, 2, 2, 2, 8];
let answer = new Array(6).fill(0);

for (let i = 0; i < 6; i++) {
  if (isHas[i] !== correct[i]) {
    answer[i] = correct[i] - isHas[i];
  }
}

console.log(answer.join(" "));
