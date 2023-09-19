const [N,B] = require('fs').readFileSync('dev/stdin').toString().split(' ');
let split = N.split('').reverse();
let result = 0;
for(let i=0;i<split.length;i++) {
    if(split[i] >=  'A' && split[i] <= 'Z') {
        split[i] = split[i].charCodeAt(0) - 55;
        result += split[i] * Math.pow(B,i);
    }
    else {
        split[i]  = Number(split[i] );
        result += split[i]  * Math.pow(B,i);
    }
}
console.log(result);