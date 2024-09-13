let n = BigInt(require("fs").readFileSync("/dev/stdin").toString().trim());

const fibo = (idx, memo = []) => {
  if (memo[idx] !== undefined) {
    return BigInt(memo[idx]); // 이미 계산된 값이 있으면 바로 반환
  }
  if (idx < 2) {
    memo[idx] = BigInt(idx);
  } else {
    memo[idx] = fibo(idx - BigInt(1), memo) + fibo(idx - BigInt(2), memo);
  }
  return BigInt(memo[idx]);
};

console.log(fibo(n).toString());
