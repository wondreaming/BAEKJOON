let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let [H, W, N] = input[i].split(" ").map(Number);
  let count = 0;
  for (let k = 1; k <= W; k++) {
    for (let l = 1; l <= H; l++) {
      count += 1;
      if (count === N) {
        if (k < 10) {
          console.log(l + "0" + k);
        } else {
          console.log(l.toString() + k.toString());
        }
      }
    }
  }
}
