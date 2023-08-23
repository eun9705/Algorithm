const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let nums = input[1].split(' ');
const check_num = input[2];
let count = nums.filter((el)=>el === check_num).length;
console.log(count);