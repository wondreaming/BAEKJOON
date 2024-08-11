let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let n = BigInt(input[0]);
let m = BigInt(input[1]);

let num = n / m;  
let result = n % m; 

console.log(num.toString());  
console.log(result.toString()); 
