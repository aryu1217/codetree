const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function f(k) {
    if(n%2!=0 && k===1) return 1
    if(n%2===0 && k===2) return 2

    return k + f(k-2)

}

console.log(f(n))