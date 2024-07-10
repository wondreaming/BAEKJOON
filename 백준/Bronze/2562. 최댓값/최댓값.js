const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const max = Math.max(...input);
const maxIndex = input.indexOf(max) + 1;

console.log(`${max}\n${maxIndex}`);
