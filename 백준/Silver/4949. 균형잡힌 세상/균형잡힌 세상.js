let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let i = 0;
let result = [];

while (true) {
  if (input[i] === ".") {
    break;
  }

  let brakets = [];

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(" || input[i][j] === "[") {
      brakets.push(input[i][j]);
    } else if (input[i][j] === ")") {
      if (brakets.at(-1) === "(") {
        brakets.pop();
      } else {
        brakets.push(input[i][j]);
      }
    } else if (input[i][j] === "]") {
      if (brakets.at(-1) === "[") {
        brakets.pop();
      } else {
        brakets.push(input[i][j]);
      }
    }
  }

  if (brakets.length === 0) {
    result += `yes\n`;
  } else {
    result += `no\n`;
  }

  i++;
}

console.log(result);
