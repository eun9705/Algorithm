const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');;
let nums = parseInt(input[0]);
for(let i=1;i<=nums;i++) console.log(input[i].charAt(0) + input[i].charAt(input[i].length - 1));