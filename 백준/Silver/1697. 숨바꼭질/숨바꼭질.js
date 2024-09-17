let [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function findMinTime(N, K) {
  const Max = 100000;
  const visited = new Array(Max + 1).fill(-1);
  const queue = [];

  queue.push(N);
  visited[N] = 0;

  while (queue.length > 0) {
    let current = queue.shift();

    if (current === K) {
      return visited[current];
    }

    const teleport = current * 2;
    if (teleport <= Max && visited[teleport] === -1) {
      visited[teleport] = visited[current] + 1;
      queue.unshift(teleport);
    }

    const walkBack = current - 1;
    if (walkBack >= 0 && visited[walkBack] === -1) {
      visited[walkBack] = visited[current] + 1; 
      queue.push(walkBack); 
    }


    const walkForward = current + 1;
    if (walkForward <= Max && visited[walkForward] === -1) {
      visited[walkForward] = visited[current] + 1; 
      queue.push(walkForward); 
    }
  }
}

console.log(findMinTime(N, K));
