let word = require("fs").readFileSync("/dev/stdin").toString().trim();

for (let i = 0; i < word.length / 2 + 1; i++) {
  if (word[i] !== word[word.length - 1 - i]) {
    return console.log(0);
  }
}

console.log(1);
