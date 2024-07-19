let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let output = [];

for (let i = 1; i <= N; i++) {
  let [age, name] = input[i].split(" ");
  age = parseInt(age);
  output.push([age, name]);
}

output.sort((a, b) => a[0] - b[0]);

output.forEach(item => {
  console.log(item[0] + " " + item[1]);
});
