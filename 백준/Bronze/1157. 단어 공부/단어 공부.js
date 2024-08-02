let word = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase();

let wordSet = new Set(word);
let wordMap = new Map();

for (let char of wordSet) {
  let count = 0;
  for (let j = 0; j < word.length; j++) {
    if (char == word[j]) {
      count++;
    }
  }
  wordMap.set(char, count);
}

let wordArray = Array.from(wordMap);

wordArray.sort((a, b) => b[1] - a[1]);

if (wordArray.length > 1 && wordArray[0][1] === wordArray[1][1]) {
  console.log("?");
} else {
  console.log(wordArray[0][0]);
}
