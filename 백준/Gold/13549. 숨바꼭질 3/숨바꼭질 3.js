let [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function findMinTime(N, K) {
  const MAX = 100000;
  const visited = new Array(MAX + 1).fill(-1);
  const deque = [];

  deque.push(N);
  visited[N] = 0;

  while (deque.length > 0) {
    const current = deque.shift();

    if (current === K) {
      return visited[current];
    }

    const teleport = current * 2;
    if (teleport <= MAX && visited[teleport] === -1) {
      visited[teleport] = visited[current];
      deque.unshift(teleport);
    }

    const walkBack = current - 1;
    if (walkBack >= 0 && visited[walkBack] === -1) {
      visited[walkBack] = visited[current] + 1;
      deque.push(walkBack);
    }

    const walkForward = current + 1;
    if (walkForward <= MAX && visited[walkForward] === -1) {
      visited[walkForward] = visited[current] + 1; // 시간 1초 증가
      deque.push(walkForward); // 덱의 뒤에 추가
    }
  }
}

console.log(findMinTime(N, K));
