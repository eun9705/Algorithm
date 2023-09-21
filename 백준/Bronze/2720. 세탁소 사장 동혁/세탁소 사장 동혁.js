const input = require('fs').readFileSync('dev/stdin').toString().split('\n').map(Number);
let T = input.shift();
let result = [];
for(let i=0;i<T;i++) {
    let money = 0;
    result[0]  = Math.floor(input[i] / 25);
    money = input[i] % 25;
    result[1] = Math.floor(money / 10);
    money %= 10;
    result[2] = Math.floor(money / 5);
    money %= 5;
    result[3] = Math.floor(money / 1);
    money %= 1;
    console.log(result.join(" "));
}