const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let nums = Number(input[1]);
console.log(input[0].charAt(nums - 1));