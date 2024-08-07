let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let croatiaAlpahet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let count = 0;

for (let i = 0; i < croatiaAlpahet.length; i++) {
  while (input.includes(croatiaAlpahet[i])) {
    input = input.replace(croatiaAlpahet[i], " ");
    count++;
  }
}

input = input.replace(/ /g, "");
count += input.length;

console.log(count);
