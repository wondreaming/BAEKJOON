let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let L = Number(input[0]);
let string = input[1];
let l = 0n;
let H = 0n;
let M = 1234567891n;

for (let i = 0; i < L; i++) {
  H += BigInt(string[i].charCodeAt() - 96) * 31n ** BigInt(i) % M;
}
if(H >= M) H %= M;
console.log(Number(H));
