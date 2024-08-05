let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  let word = input[i];
  let change = false;
  let char = [];
  for (let j = 0; j < word.length; j++) {
    if (
      char.at(-1) === word[j] ||
      (char.at(-1) !== word[j] && !char.includes(word[j])) ||
      char.length === 0
    ) {
      char.push(word[j]);
    } else {
      count--;
      break;
    }
  }
  count++;
}

console.log(count);
