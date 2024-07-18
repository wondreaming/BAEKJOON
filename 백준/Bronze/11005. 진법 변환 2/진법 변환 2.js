let [N, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let otherNum = N.toString(B).toUpperCase(); // 소문자로 출력되기 때문에, 대문자로 변환

console.log(otherNum);
