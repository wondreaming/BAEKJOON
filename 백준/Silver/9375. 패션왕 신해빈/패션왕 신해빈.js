let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = Number(input[0]); // 테스트 케이스
let answer = [];
let num = 1;

for (let i = 1; i <= T; i++) {
  let n = Number(input[num]); // 해빈이의 의상 수

  if (n === 0) {
    answer.push(0);
    num += n + 1;
    continue;
  }

  let clothes = new Map();

  for (let j = 1; j <= n; j++) {
    let [clothe, kindOf] = input[num + j].split(" ");

    if (!clothes.has(kindOf)) {
      let clotheSet = new Set();
      clotheSet.add(clothe);
      clothes.set(kindOf, clotheSet);
    } else {
      let clothesArr = Array.from(clothes.get(kindOf));
      clothesArr.push(clothe);
      let clothesSet = new Set(clothesArr);
      clothes.set(kindOf, clothesSet);
    }
  }
  let clothesCount = [];
  clothes.forEach(value => {
    clothesCount.push(value.size);
  });

  let result = 0;
  clothesCount = clothesCount.map(value => value + 1);
  result += clothesCount.reduce((a, c) => a * c);
  result--;
  answer.push(result);
  num += n + 1;
}

console.log(answer.join("\n"));
