let [N, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let number = parseInt(N, B); // N을 B진법에 맞는 숫자로 바꿈
let demical = number.toString(10); // 10진법으로 바꿈

console.log(demical);
