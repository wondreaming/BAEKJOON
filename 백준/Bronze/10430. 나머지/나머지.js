let input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

const result1 = (A + B) % C;
const result2 = ((A % C) + (B % C)) % C;
const result3 = (A * B) % C;
const result4 = ((A % C) * (B % C)) % C;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);