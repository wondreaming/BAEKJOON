let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let first = 2;

for (let i = 0; i < N; i++) {
  first = first + 2 ** i;
}

console.log(first ** 2);
