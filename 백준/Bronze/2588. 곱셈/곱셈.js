const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const A = input[0];
const B = input[1];

const result1 = parseInt(A) * parseInt(B[2]);
const result2 = parseInt(A) * parseInt(B[1]);
const result3 = parseInt(A) * parseInt(B[0]);
const result4 = parseInt(A) * parseInt(B);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


