let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);
let nums = new Array(N).fill(0).map((value, index) => index + 1);

for (let i = 1; i <= M; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  if (start !== end) {
    for (let j = start - 1; j < end - 1; j++) {
      for (let k = end - 1; k > start - 1; k--) {
        let temp = nums[j];
        nums[j] = nums[k];
        nums[k] = temp;
        end -= 1;
        break;
      }
    }
  }
}

console.log(nums.join(" "));
