const input = require('fs').readFileSync('dev/stdin').toString().split('\n');;
let loop_num = parseInt(input[0]);
let sum = '';
for(let i=1;i<=loop_num;i++){
    let num = input[i].split(' ');
    sum += Number(num[0]) + Number(num[1]) + '\n';
}
console.log(sum);