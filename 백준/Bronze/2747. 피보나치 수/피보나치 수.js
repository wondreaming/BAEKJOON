let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const fibo = (idx, memo = []) => {
  if (memo[idx] !== undefined) {
    return memo[idx]; // 이미 계산된 값이 있으면 바로 반환
  }
  if (idx < 2) {
    memo[idx] = idx;
  } else {
    memo[idx] = fibo(idx - 1, memo) + fibo(idx - 2, memo);
  }
  return memo[idx];
};

console.log(fibo(n));
