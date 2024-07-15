let [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let sangA = "";
let sangB = "";

for (let i = 2; i >= 0; i--) {
  sangA += A[i];
  sangB += B[i];
}

let result = 0;

if (parseInt(sangA) > parseInt(sangB)) {
  result = parseInt(sangA);
} else {
  result = parseInt(sangB);
}

console.log(result);