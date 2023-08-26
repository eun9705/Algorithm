const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let [N,M] = input[0].split(' ').map((n)=>Number(n));
let arr = new Array(N).fill().map((v,i) => i + 1);
for(let i=1; i<=M; i++){
    let [a, b] = input[i].split(' ').map(n=>parseInt(n));
    let tmp = [];
    for(let j=a-1; j<b; j++){
        tmp.push(arr[j])
    };
    tmp.reverse();
    arr.splice(a-1, b-a+1, ...tmp);
}
console.log(arr.join(' '))