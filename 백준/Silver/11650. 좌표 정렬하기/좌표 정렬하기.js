let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let points = [];
let result = "";
for (let i = 1; i <= N; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  points.push([x, y]);
}

points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

points.forEach(point => {
  result += `${point[0]} ${point[1]}\n`;
});

console.log(result);
