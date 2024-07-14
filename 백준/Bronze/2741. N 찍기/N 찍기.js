let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let num = parseInt(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
