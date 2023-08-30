const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let N = parseInt(input[0]);
let num_arr = [...input[1]].map(Number);
let output = 0;
for(let i=0;i<N;i++) output += num_arr[i];
console.log(output);