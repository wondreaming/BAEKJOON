let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

for (let i = N; i > 0; i--) {
  console.log("*".repeat(i));
}
