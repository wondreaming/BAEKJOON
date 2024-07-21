let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let result = "";

for (let i = 1; i <= N; i++) {
  let brakets = [];
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") {
      brakets.push(input[i][j]);
    } else if (input[i][j] === ")") {
      if (brakets.at(-1) === "(") {
        brakets.pop();
      } else {
        brakets.push(input[i][j]);
      }
    }
  }
  if (brakets.length === 0) {
    result += "YES\n";
  } else {
    result += "NO\n";
  }
}

console.log(result);
