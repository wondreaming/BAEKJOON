let [M, N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let output = [];

for (let i = M; i <= N; i++) {
  if (i === 1) continue;
  else if (i === 2) {
    output.push(i);
  } else {
    let isPrime = true;
    for (let j = 2; j < i ** 0.5 + 1; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) output.push(i);
  }
}

console.log(output.join("\n"));
