const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const basket_length = Number(input[0].split(' ')[0]);
const loop_num = input[0].split(' ')[1];
let basket_arr = new Array(basket_length).fill(0);
let result = '';
for(let i=1;i<=basket_length;i++) basket_arr[i - 1] = i;
for(let k=1;k<=loop_num;k++) {
    let [start,end] = input[k].split(" ").map(el => +el);   
    let tmp = basket_arr[start - 1];
    basket_arr[start - 1] = basket_arr[end - 1];
    basket_arr[end - 1] = tmp;
}
basket_arr.forEach((el)=>result += `${el} `);
console.log(result);