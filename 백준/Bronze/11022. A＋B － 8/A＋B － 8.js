const input = require('fs').readFileSync('dev/stdin').toString().split('\n');;
let loop_num = Number(input[0]);
let sum = '';
for(let i=1;i<=loop_num;i++){
    let num = input[i].split(' ');
    sum += 'Case #' + i + ': ' + num[0] + ' + ' + num[1] + ' = ' + (Number(num[0]) + Number(num[1])) + '\n';
}
console.log(sum);