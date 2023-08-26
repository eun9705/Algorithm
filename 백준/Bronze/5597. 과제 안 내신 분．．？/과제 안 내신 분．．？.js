const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let nums = input.map((el)=>Number(el));
let check_arr = Array.from({length:30},(v,i)=>i+1);
let result = '';
check_arr.forEach((el)=>{
    let comparison = nums.indexOf(el);
    if(comparison === -1) result += el + '\n';
})
console.log(result);