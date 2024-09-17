let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let cities = Number(input[0]);
let buses = Number(input[1]);

let infoOfBuses = [...input.slice(2)].map(value => [
  ...value.split(" ").map(Number),
]);

function findMinCost(n, infoOfBuses) {
  const MaxCost = Infinity;
  const minCost = Array.from({ length: n }, () => new Array(n).fill(MaxCost));

  for (let i = 0; i < n; i++) {
    minCost[i][i] = 0;
  }

  for ([a, b, c] of infoOfBuses) {
    const from = a - 1;
    const to = b - 1;
    if (minCost[from][to] > c) {
      minCost[from][to] = c;
    }
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (minCost[i][j] > minCost[i][k] + minCost[k][j]) {
          minCost[i][j] = minCost[i][k] + minCost[k][j];
        }
      }
    }
  }

  return minCost;
}

let result = findMinCost(cities, infoOfBuses);

for (let i = 0; i < cities; i++) {
  for (let j = 0; j < cities; j++) {
    if (result[i][j] === Infinity) {
      result[i][j] = 0;
    }
  }
}

console.log(result.join("\n").replace(/,/g, " "));
