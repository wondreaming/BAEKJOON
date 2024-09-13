let X = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const dp = (num, memo = {}) => {
  if (num === 1) return 0;
  if (num in memo) return memo[num];
  let min = Infinity;

  if (num % 3 === 0) {
    min = Math.min(min, dp(num / 3, memo) + 1); // 3으로 나누어 떨어지면
  }

  if (num % 2 === 0) {
    min = Math.min(min, dp(num / 2, memo) + 1); // 2로 나누어 떨어지면
  }

  min = Math.min(min, dp(num - 1, memo) + 1); // 1을 빼는 경우
    memo[num] = min;
    return memo[num];
  
};

console.log(dp(X));
