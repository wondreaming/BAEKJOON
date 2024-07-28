let [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let nums = new Array(N).fill(0).map((value, index) => index + 1);
let output = [];
var count = 1;
let index = 0;

while (nums.length > 0) {
  if (index >= nums.length) {
    index = 0;
  }
  if (count === K) {
    output.push(nums[index]);
    nums.splice(index, 1);
    count = 1;
    continue;
  }
  index++;
  count++;
}

console.log("<" + output.join(", ") + ">");
