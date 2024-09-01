let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);
let sites = new Map();
let result = [];

for (let i = 1; i <= N; i++) {
  let [site, password] = input[i].split(" ");
  sites.set(site, password);
}

for (let j = N + 1; j <= N + M; j++) {
  let site = input[j];
  result.push(sites.get(site));
}

console.log(result.join("\n"));

