let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let P = new Array();
  let [R, S] = input[i].split(" ");
  for (let j = 0; j < S.length; j++) {
    P.push(S[j].repeat(R));
  }
  console.log(P.join(""));
}
