let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = Number(input[0]);
let output = [];
for (let i = 0; i < T; i++) {
  let k = Number(input[2 * i + 1]);
  let n = Number(input[2 * i + 2]);
  let arr = new Array(n).fill(0).map((value, index) => index + 1);

  for (let j = 0; j < k; j++) {
    arr = arr.reduce((a, c) => {
      let sum = a.length > 0 ? a[a.length - 1] + c : c;
      a.push(sum);
      return a;
    }, []);
  }

  output.push(arr.at(-1));
}

console.log(output.join("\n"));
