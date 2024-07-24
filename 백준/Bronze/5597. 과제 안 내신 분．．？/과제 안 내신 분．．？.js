let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = new Array(30).fill(false);

input.forEach(value => {
  arr[value - 1] = true;
});

for (let i = 0; i < 30; i++) {
  if (!arr[i]) {
    console.log(i + 1);
  }
}
