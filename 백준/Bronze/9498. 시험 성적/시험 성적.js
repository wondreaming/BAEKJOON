const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const score = parseInt(input[0]);

if (score >= 90 && score <= 100) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('F');
}