let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let arr = [];
let output = [];

for (let i = 1; i <= N; i++) {
  let [x, num] = input[i].split(" ");
  switch (x) {
    case "push":
      arr.push(parseInt(num));
      break;
    case "pop":
      if (arr.length === 0) {
        output.push(-1);
      } else {
        output.push(arr.at(-1));
        arr.pop();
      }
      break;
    case "size":
      output.push(arr.length);
      break;
    case "empty":
      if (arr.length === 0) {
        output.push(1);
      } else {
        output.push(0);
      }
      break;
    case "top":
      if (arr.length === 0) {
        output.push(-1);
      } else {
        output.push(arr.at(-1));
      }
      break;
  }
}

console.log(output.join("\n"));
