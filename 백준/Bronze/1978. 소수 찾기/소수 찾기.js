let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);

let result = 0;
let nums = input[1].split(" ").map(Number);

for (let i = 0; i < N; i++) {
  if (nums[i] === 1) {
    continue;
  } else {
    let count = 0;
    for (let j = 2; j < nums[i]; j++) {
      if (nums[i] % j === 0) {
        count += 1;
      }
    }

    if (count === 0) {
      result += 1;
    }
  }
}

console.log(result);
