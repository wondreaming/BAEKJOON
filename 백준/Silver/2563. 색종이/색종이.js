let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = parseInt(input[0]);

let count = 0;
let paper = Array.from({ length: 100 }, () => new Array(100).fill(0));

for (let k = 1; k <= T; k++) {
  let [n, m] = input[k].split(" ").map(Number);
  for (let i = n; i < n + 10; i++) {
    for (let j = m; j < m + 10; j++) {
      if (paper[i][j] === 0) {
        paper[i][j] += 1;
        count += 1;
      }
    }
  }
}

// console.log(paper);
console.log(count);
