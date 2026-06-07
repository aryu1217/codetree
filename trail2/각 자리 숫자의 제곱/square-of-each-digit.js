const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

function recursion (n) {
    if(n < 10) return n*n

    return recursion(parseInt(n/10)) + (n%10)**2
}

console.log(recursion(n))