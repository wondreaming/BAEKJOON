let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let i = 0;
let output = [];

while (i < input.length) {
  if (input[i] === "0") break;
  let palindrome = "";
  for (let j = input[i].length - 1; j >= 0; j--) {
    palindrome += input[i][j];
  }
  if (input[i] === palindrome) {
    output.push("yes");
  } else {
    output.push("no");
  }
  i++;
}

console.log(output.join("\n"));
