let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let [A, B, V] = input.split(" ").map(Number);
let days = Math.ceil((V - A) / (A - B)) + 1; // 올라가는 데, 걸린 일수

console.log(days);
