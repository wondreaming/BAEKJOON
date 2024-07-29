let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]); // 상근이가 가지고 있는 카드 개수
let sangCard = input[1].split(" ").map(Number); // 상근이가 가지고 있는 카드
let mapSangCard = new Map(); // 시간 복잡도 감소
let M = parseInt(input[2]);
let card = input[3].split(" ").map(Number);

for (let i = 0; i < N; i++) {
  if (mapSangCard.has(sangCard[i])) {
    mapSangCard.set(sangCard[i], mapSangCard.get(sangCard[i]) + 1);
  } else {
    mapSangCard.set(sangCard[i], 1);
  }
}

let result = card.map(num => mapSangCard.get(num) || 0);

console.log(result.join(" "));
