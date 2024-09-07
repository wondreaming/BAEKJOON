let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number); // N : 포켓몬 개수  M : 문제 개수
let pocketmons = new Map();
let index = new Map();
let result = []; // 답을 담을 배열

// 포켓몬을 Map{ key(index) : value(포켓몬 이름)}에 넣음
for (let i = 1; i <= N; i++) {
  let pocketmon = input[i];
  pocketmons.set(i, pocketmon);
  index.set(pocketmon, i);
}

// 문제의 값 도출
for (let j = N + 1; j <= N + M; j++) {
  let problem = input[j];
  // 문자와 숫자를 구분
  if (isNaN(Number(problem))) {
    let ans = index.get(problem);
    result.push(ans);
  } else {
    // key로 값을 얻음
    let ans = pocketmons.get(Number(problem));
    result.push(ans);
  }
}

console.log(result.join("\n"));
