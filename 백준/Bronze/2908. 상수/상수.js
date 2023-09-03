const input = require('fs').readFileSync('dev/stdin').toString().split(' ');
let result = [];
input.forEach((item)=>{
    let output = item.split('').reverse().join('');
    result.push(output);
});
console.log(Math.max(...result));