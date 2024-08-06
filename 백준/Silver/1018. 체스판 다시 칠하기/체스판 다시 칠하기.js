let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);

let str1 = "BWBWBWBWWBWBWBWB".repeat(4);
let str2 = "WBWBWBWBBWBWBWBW".repeat(4);

let min = Infinity;

for (let i = 1; i < N - 6; i++) {
  for (let j = 0; j < M - 7; j++) {
    let count1 = 0;
    let count2 = 0;
    let idx = 0;
    for (let k = i; k < i + 8; k++) {
      for (let l = j; l < j + 8; l++) {
        if (input[k][l] !== str1[idx]) {
          count1++;
        }
        if (input[k][l] !== str2[idx]) {
          count2++;
        }
        idx++;
      }
    }
    if (min > count1) {
      min = count1;
    }
    if (min > count2) {
      min = count2;
    }
  }
}

console.log(min);
