let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number); // N : 총 카드 개수, M : 카드 합
let nums = input[1].split(" ").map(Number); // 입력 받은 숫자
let result = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = nums[i] + nums[j] + nums[k];
      if (result < sum && sum <= M) {
        result = sum;
      }
    }
  }
}

console.log(result);
