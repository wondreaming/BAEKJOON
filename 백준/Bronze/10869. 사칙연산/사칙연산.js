input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = parseInt(input[0], 10);
const B = parseInt(input[1], 10);

const result1 = A + B;
const result2 = A - B;
const result3 = A * B;
const result4 = parseInt(A / B);
const result5 = A % B;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);