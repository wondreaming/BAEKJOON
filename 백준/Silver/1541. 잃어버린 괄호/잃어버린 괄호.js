let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let number = "";
let num = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "-" || input[i] === "+") {
    num.push(Number(number));
    num.push(input[i]);
    number = "";
  } else {
    number += input[i];
  }
}
num.push(Number(number));

while (num.includes("+")) {
  let i = num.indexOf("+");
  let a = num[i - 1];
  let b = num[i + 1];
  num.splice(i - 1, 3, a + b);
}

while (num.includes("-")) {
  let i = num.indexOf("-");
  let a = num[i - 1];
  let b = num[i + 1];
  num.splice(i - 1, 3, a - b);
}

console.log(num[0]);
