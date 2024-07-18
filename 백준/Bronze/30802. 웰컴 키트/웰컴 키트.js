let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Math.floor(input[0]); // 총 참가자
let sizes = input[1].split(" ").map(Number);
let [T, P] = input[2].split(" ").map(Number);
let sum = 0;

let Ptotal = Math.floor(N / P);
let Prest = N % P;

for (let i = 0; i < 6; i++) {
  if (sizes[i] % T === 0 && Math.floor(sizes[i] / T) === 0) {
    sum += 0;
  } else if (sizes[i] % T !== 0 && Math.floor(sizes[i] / T) === 0) {
    sum += 1;
  } else if (sizes[i] % T === 0) {
    sum += Math.floor(sizes[i] / T);
  } else {
    sum += Math.floor(sizes[i] / T) + 1;
  }
}

console.log(sum);
console.log(Ptotal, Prest);
