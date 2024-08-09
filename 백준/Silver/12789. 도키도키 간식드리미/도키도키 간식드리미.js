let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);

let stay = input[1].split(" ").map(Number);
let getSnack = [];
let ready = [];
let order = 1;
let stayIndex = 0;
let readyIndex = 0;

while (order <= N) {
  if (stayIndex < stay.length && order === stay[stayIndex]) {
    getSnack.push(stay[stayIndex]);
    stayIndex++;
    order++;
  } else if (order === ready.at(-1)) {
    getSnack.push(ready.at(-1));
    ready.pop();
    order++;
  } else if (stayIndex < stay.length) {
    ready.push(stay[stayIndex]);
    stayIndex++;
  } else {
    break;
  }
}

if (getSnack.at(-1) === N) {
  console.log("Nice");
} else {
  console.log("Sad");
}
