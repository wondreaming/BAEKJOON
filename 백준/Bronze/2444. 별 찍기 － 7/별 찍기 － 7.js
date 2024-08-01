let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let result = [];

for (let i = 0; i < N; i++) {
  result.push(" ".repeat(N - i - 1) + "*".repeat(2 * i + 1));
}

for (let i = N - 1; i > 0; i--) {
  result.push(" ".repeat(N - i) + "*".repeat(2 * i - 1));
}

console.log(result.join("\n"));
