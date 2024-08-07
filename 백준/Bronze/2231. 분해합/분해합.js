let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

for (let i = 0; i < N; i++) {
  let num = i.toString();
  let sum = i;
  for (let j = 0; j < num.length; j++) {
    sum += Number(num[j]);
  }

  if (sum === N) {
    console.log(i);
    break;
  }
  if (i === N - 1) {
    console.log(0);
  }
}
