let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let stack = [];
let output = [];

for (let i = 1; i <= N; i++) {
  let numToString = input[i];
  switch (numToString[0]) {
    case "1":
      let [A, B] = input[i].split(" ").map(Number);
      stack.push(B);
      break;
    case "2":
      if (stack.length !== 0) {
        output.push(stack.at(-1));
        stack.pop();
      } else if (stack.length === 0) {
        output.push(-1);
      }
      break;
    case "3":
      output.push(stack.length);
      break;
    case "4":
      if (stack.length === 0) {
        output.push(1);
      } else if (stack.length !== 0) {
        output.push(0);
      }
      break;
    case "5":
      if (stack.length !== 0) {
        output.push(stack.at(-1));
      } else if (stack.length === 0) {
        output.push(-1);
      }
      break;
  }
}

console.log(output.join("\n"))