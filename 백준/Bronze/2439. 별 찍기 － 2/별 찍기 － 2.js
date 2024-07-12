let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let N = parseInt(input);

for (let i = 0; i < N; i++) {
  let empty =  N - i - 1;
  console.log(" ".repeat(empty) + "*".repeat(i + 1));
}
