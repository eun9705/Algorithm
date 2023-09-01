const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let repeat_num = parseInt(input[0]);
let result = '';
let result_arr = [];
for(let i=1;i<=repeat_num;i++){
    let [num,[...str]] = input[i].trim().split(' ').map((el)=>el);
    for(let j=0;j<str.length;j++) {
        result += str[j].repeat(parseInt(num));
    }
    result_arr.push(result);
    result = '';
}
console.log(result_arr.join('\n'));