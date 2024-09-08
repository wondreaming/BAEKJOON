let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number); // N : 듣도 못한 사람의 수 M : 보도 못한 사람의 수
let nSet = new Set();
let mSet = new Set();
let answer = [];

for (let i = 1; i <= N; i++) {
  let name = input[i];
  nSet.add(name);
}

for (let i = N + 1; i <= N + M; i++) {
  let name = input[i];
  mSet.add(name);
}

nSet.forEach(value => (mSet.has(value) ? answer.push(value) : null));

answer.sort();

console.log(answer.length);
console.log(answer.join("\n"));
