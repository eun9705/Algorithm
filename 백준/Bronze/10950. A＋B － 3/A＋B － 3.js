const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const loopNum = Number(input[0]);
for(let i=1;i<=loopNum;i++){
    let num1 = Number(input[i].split(' ')[0]);
    let num2 = Number(input[i].split(' ')[1]);
    console.log(num1 + num2);
}