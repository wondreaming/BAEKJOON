let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);

let queue = [];
let output = [];
let idx = 0;

for (let i = 1; i <= N; i++) {
  let [word, num] = input[i].split(" ");
  switch (word) {
    case "push":
      queue.push(Number(num));
      break;
    case "pop":
      if (queue.length - idx === 0) {
        output.push(-1);
      } else if (queue.length - idx !== 0) {
        output.push(queue[idx]);
        idx++;
      }
      break;
    case "size":
      output.push(queue.length - idx);
      break;
    case "empty":
      if (queue.length - idx === 0) {
        output.push(1);
      } else if (queue.length - idx !== 0) {
        output.push(0);
      }
      break;
    case "front":
      if (queue.length - idx === 0) {
        output.push(-1);
      } else if (queue.length - idx !== 0) {
        output.push(queue[idx]);
      }
      break;
    case "back":
      if (queue.length - idx === 0) {
        output.push(-1);
      } else if (queue.length - idx !== 0) {
        output.push(queue.at(-1));
      }
      break;
  }
}

console.log(output.join("\n"));
