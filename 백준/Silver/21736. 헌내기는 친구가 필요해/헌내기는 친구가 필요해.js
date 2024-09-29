let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);
let campus = input.slice(1).map(row => row.split(""));
let meetingPerson = 0;

let directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
let startX, startY;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (campus[i][j] === "I") {
      startY = i;
      startX = j;
      break;
    }
  }
}

let queue = [[startY, startX]];
let visited = Array.from({ length: N }, () => Array(M).fill(false));
visited[startY][startX] = true;

while (queue.length) {
  const [y, x] = queue.shift();

  for (let [dy, dx] of directions) {
    const ny = y + dy;
    const nx = x + dx;

    if (ny >= 0 && ny < N && nx >= 0 && nx < M && !visited[ny][nx]) {
      visited[ny][nx] = true;
      const cell = campus[ny][nx];

      if (cell === "O") {
        queue.push([ny, nx]);
      } else if (cell === "P") {
        meetingPerson++;
        queue.push([ny, nx]);
      }
    }
  }
}

console.log(meetingPerson > 0 ? meetingPerson : "TT");
