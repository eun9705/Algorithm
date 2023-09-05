const input = require('fs').readFileSync('dev/stdin').toString().split('\n').map((el)=>el);
input.forEach((item)=>console.log(item.trim()));