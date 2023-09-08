const input = require('fs').readFileSync('/dev/stdin').toString();
let loop = (2 * Number(input)) - 1;
let str = '';
let str2 = ''
for(let i=1;i<=loop;i+=2) {
    str += ' '.repeat((loop - i) / 2) + '*'.repeat(i) + '\n';
}
for(let j=loop - 2;j>0;j-=2) {
    str2 += ' '.repeat((loop - j) / 2) + '*'.repeat(j) + '\n';
}
console.log(str + str2);