const input = require('fs').readFileSync('dev/stdin').toString();
let bitNum = parseInt(input) / 4;
let str = ''
for(let i=1;i<=bitNum;i++) {
    str += 'long '
    if(i === bitNum) str += 'int';
}
console.log(str);