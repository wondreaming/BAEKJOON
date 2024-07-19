let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let queue = [];
let output = [];

for (let i = 1; i <= N; i++) {
  let [word, num] = input[i].split(" ");
  switch (word) {
    case "push":
      queue.push(parseInt(num));
      break;
    case "pop":
      if (queue.length === 0) {
        output.push(-1);
      } else {
        output.push(queue[0]);
        queue.splice(0, 1);
      }
      break;
    case "size":
      output.push(queue.length);
      break;
    case "empty":
      if (queue.length === 0) {
        output.push(1);
      } else {
        output.push(0);
      }
      break;
    case "front":
      if (queue.length === 0) {
        output.push(-1);
      } else {
        output.push(queue[0]);
      }
      break;
    case "back":
      if (queue.length === 0) {
        output.push(-1);
      } else {
        output.push(queue.at(-1));
      }
      break;
  }
}

console.log(output.join("\n"));
