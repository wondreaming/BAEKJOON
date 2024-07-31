let [a, b, c, d, e, f] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let y = (d * c - a * f) / (d * b - a * e);
let x = (c - b * y) / a || (f - e * y) / d;

console.log(`${x} ${y}`);
