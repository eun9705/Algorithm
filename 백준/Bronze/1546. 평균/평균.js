const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let total  = Number(input[0]);
let score = input[1].split(' ').map(Number);
let max = Math.max(...score);
let output = 0;
for(let i=0;i<total;i++){
    output += score[i] / max * 100;
}
console.log(output / total);