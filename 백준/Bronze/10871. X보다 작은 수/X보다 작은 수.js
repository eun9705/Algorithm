const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let check_num = Number(input[0].split(' ')[1]);
const nums = input[1].split(' ');
let find = nums.filter((el)=> el < check_num );
let str = '';
for(let i=0;i<find.length;i++) {
    str += find[i] + ' ';
}
console.log(str);