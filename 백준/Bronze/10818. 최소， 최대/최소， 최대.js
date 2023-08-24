const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let nums = input[1].split(' ');
const max = Math.max(...nums);
const min = Math.min(...nums);
console.log(`${min} ${max}`);