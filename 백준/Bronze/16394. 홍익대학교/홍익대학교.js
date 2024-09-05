let n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let years = n - 1946;

console.log(years);