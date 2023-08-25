const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const basket_length = Number(input[0].split(' ')[0]);
const loop_num = input[0].split(' ')[1];
let basket_arr = new Array(basket_length).fill(0);
let result = '';
for(let i=1;i<=loop_num;i++) {
    let [start,end,k] = input[i].split(" ").map(el => +el);   
    for(start;start<=end;start++) {
        basket_arr[start - 1] = k
    }
}
basket_arr.forEach((el)=>result += `${el} `);
console.log(result);