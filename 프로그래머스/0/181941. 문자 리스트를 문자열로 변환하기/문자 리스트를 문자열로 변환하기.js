let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

function solution(arr) {
    var answer = '';
    arr.forEach((value, index) => answer += value);
    return answer;
}

console.log(solution(input));