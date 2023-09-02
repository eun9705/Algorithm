const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map((el)=>el);
console.log(input[0] === '' ? 0 : input.length);