let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = Number(input[0]); 
let results = [];

for (let i = 0; i < T; i++) {
  let [N, M] = input[2 * i + 1].split(" ").map(Number);
  let priorities = input[2 * i + 2].split(" ").map(Number);

  let queue = priorities.map((priority, index) => [priority, index]);
  let printOrder = 0;

  while (queue.length > 0) {
    let current = queue.shift();
    if (queue.some(doc => doc[0] > current[0])) {
      queue.push(current);
    } else {
      printOrder += 1;
      if (current[1] === M) {
        results.push(printOrder);
        break;
      }
    }
  }
}

console.log(results.join("\n"));