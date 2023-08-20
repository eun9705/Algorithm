const input = require('fs').readFileSync('dev/stdin').toString().split('\n');;
let total = parseInt(input[0]);
let count = parseInt(input[1]);
let output = 0;
for(let i=2;i<=count+1;i++) {
    let price_arr = input[i].split(' ').map((item) => Number(item));
    output += price_arr[0] * price_arr[1];
}
console.log(output === total ? 'Yes' : 'No');