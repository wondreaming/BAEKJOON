let today = new Date();

let year = today.getFullYear();
let month = (today.getMonth() + 1).toString().padStart(2, '0');
let date = today.getDate();

console.log(`${year}-${month}-${date}`);
