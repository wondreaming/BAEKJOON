let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number); // N : 동전의 종류 K : 동전의 합
let pause = []; // 동전의 넣을 지갑
let count = 0; // 동전 개수의 최솟값

// 동전을 지갑에 넣기
for (let i = 1; i <= N; i++) {
  let coin = Number(input[i]);
  pause.push(coin);
}

// 지갑에 있는 동전으로 동전의 합 나누기
for (let j = pause.length - 1; j >= 0; j--) {
  let coin = pause[j]; // 이 반복에서 쓰는 동전
  if (K === 0) break; // 필요없는 반복을 줄이기

  if (K >= coin) {
    let coins = Math.floor(K / coin);
    count += coins;
    K -= pause[j] * coins;
  }
}

console.log(count);
