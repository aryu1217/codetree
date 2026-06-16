const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

const num = a * b * c

function f(n, sum) {
    if (n < 10) return n+sum

    sum += n % 10

    return f(Math.floor(n/10), sum)
}

console.log(f(num, 0))