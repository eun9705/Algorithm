let [N,B] = require('fs').readFileSync('dev/stdin').toString().split(' ').map(Number);
console.log(N.toString(B).toUpperCase());