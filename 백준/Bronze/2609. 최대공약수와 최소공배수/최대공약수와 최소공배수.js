let [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function gcd(a, b) {
  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

function lcm(a, b) {
  return a * (b / gcd(a, b));
}

console.log(gcd(A, B));
console.log(lcm(A, B));
