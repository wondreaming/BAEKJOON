const input = require('fs').readFileSync('/dev/stdin').toString().trim().split();

const year = parseInt(input[0]);

// 4의 배수
const A = year % 4 === 0 ? true : false;
// 100의 배수
const B = year % 100 === 0 ? true : false;
// 400의 배수
const C = year % 400 === 0 ? true : false;

if (A == 1 && B != 1) {
  console.log(1);
} else if (A == 1 && C == 1) {
  console.log(1);
} else {
  console.log(0);
}