const input = require('fs').readFileSync('dev/stdin').toString();
let output=0;
for(let i=1;i<=Number(input);i++) output += i
console.log(output);