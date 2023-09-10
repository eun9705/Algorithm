const input = require('fs').readFileSync('/dev/stdin').toString().trim().toLowerCase().split("");
let obj = {};
for(let i=0;i<input.length;i++) {
    if(!obj[input[i]]) obj[input[i]] = 1;
    else obj[input[i]] += 1;
}
let result = '';
let max = 0;
for(let str in obj) {
    
    if(obj[str] > max) {
        max = obj[str];
        result = str.toUpperCase();
    }
    else if(obj[str] === max) result = '?'

}
console.log(result);