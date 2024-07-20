let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y]);
}

arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let result = "";

arr.forEach(arr => {
  result += `${arr[0]} ${arr[1]}\n`;
});

console.log(result);
