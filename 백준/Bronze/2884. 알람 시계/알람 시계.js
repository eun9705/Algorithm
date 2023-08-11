const input = require('fs').readFileSync('dev/stdin').toString().split(' ');
let h = parseInt(input[0]);
let m = parseInt(input[1]);

m -= 45;

if(m < 0) {
    m += 60;
    h--;
    if(h === -1) h = 23;
}

console.log(h + ' ' + m);