const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let i = 0;
let sum = '';
while(input[i] !== '0 0') {
    let nums = input[i].split(' ');
    sum += Number(nums[0]) + Number(nums[1]) + '\n';
    i++;
}
console.log(sum);