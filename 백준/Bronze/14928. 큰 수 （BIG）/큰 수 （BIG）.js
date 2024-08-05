let N = BigInt(
  require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")
);

let result = (N % 20000303n).toString();
console.log(result);
