const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let h = parseInt(input[0].split(" ")[0]);
let m = parseInt(input[0].split(" ")[1]);
let given_m = parseInt(input[1]);
m += given_m;
while(m >= 60) {
    m -= 60;
    h++;
}
h %=24;
console.log(h,m);