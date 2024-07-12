let input = require("fs").readFileSync("/dev/stdin").toString().trim().split();

let n = parseInt(input);
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);