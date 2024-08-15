let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let countNums = 1;
let count = 1;

for (let i = 1; ; i++) {
  if (countNums >= N) {
    break;
  }
  countNums = countNums + 6 * i;
  count++;
}

console.log(count);
