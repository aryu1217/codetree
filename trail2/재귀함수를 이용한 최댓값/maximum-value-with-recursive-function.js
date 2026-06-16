const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);


function f(k, max) {
    if(k === n) return max

    if(arr[k] > max) max = arr[k]

    return f(k+1, max)
} 

console.log(f(0, 0))