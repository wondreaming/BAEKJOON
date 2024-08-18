let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let count = 0;
let movieTitle = 665;

while (count < N) {
  movieTitle++;
  if (movieTitle.toString().includes("666")) {
    count++;
  }
}

console.log(movieTitle);
