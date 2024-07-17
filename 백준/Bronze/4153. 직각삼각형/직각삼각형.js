let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let i = 0;
let option = true;

while (option) {
  let sides = input[i].split(" ").map(Number);

  if (sides[0] === 0 && sides[1] === 0 && sides[2] === 0) {
    option = false;
    break;
  }

  sides.sort((a, b) => a - b);

  if (sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
  i++;
}
