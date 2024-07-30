let N = BigInt(require("fs").readFileSync("/dev/stdin").toString().trim());

if (N === 0n) {
  console.log(0);
} else {
  let num = 1n;
  let count = 0;

  for (let i = 1n; i <= N; i++) {
    num *= i;
  }

  let numToString = num.toString();
  for (let j = numToString.length - 1; j > -1; j--) {
    if (numToString[j] == 0) {
      count += 1;
    } else {
      break;
    }
  }
  console.log(count);
}
