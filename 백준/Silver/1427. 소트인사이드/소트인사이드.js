let N = require("fs").readFileSync("/dev/stdin").toString().trim();

let nums = N.split("").map(Number);
nums.sort((a, b) => b - a);
console.log(nums.join(""));
