let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let i = 0;

while (true) {
  let [A, B] = input[i].split(" ").map(Number);
  if (A === 0 && B === 0) {
    break;
  }
  if (A > B) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  i++;
}
