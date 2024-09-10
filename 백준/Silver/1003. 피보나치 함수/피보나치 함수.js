let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = Number(input[0]); // 테스트 케이스의 개수
let result = []; // 답을 넣을 배열

let fiboArr = Array.from({ length: 41 }, () => [0, 0]);

fiboArr[0] = [1, 0];
fiboArr[1] = [0, 1];

for (let i = 2; i < 41; i++) {
  fiboArr[i][0] = fiboArr[i - 1][0] + fiboArr[i - 2][0];
  fiboArr[i][1] = fiboArr[i - 1][1] + fiboArr[i - 2][1];
}

for (let i = 1; i <= T; i++) {
  let num = Number(input[i]);
  result.push(fiboArr[num].join(" "));
}

console.log(result.join("\n"));
