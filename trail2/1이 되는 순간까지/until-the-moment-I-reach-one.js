const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

let cnt = 0

function f(n) {
    if(n===1) return

    cnt++

    if(n%2===0) f(parseInt(n/2))
    else f(parseInt(n/3))
}

f(n)

console.log(cnt)