let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let front = [];
let back = Array(N)
  .fill(0)
  .map((value, index) => index + 1);

while (front.length + back.length > 1) {
  if (front.length === 0) {
    front = back.reverse();
    back = [];
  }
  front.pop();

  if (front.length === 0) {
    front = back.reverse();
    back = [];
  }
  back.push(front.pop());
}

console.log(front.length ? front[0] : back[0]);
