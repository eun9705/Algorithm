const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
let [N,M] = input.shift();
const generate = (arr) => {
    let result = new Array(N).fill().map(()=>new Array(M).fill(0));
    for(let i=0;i<N;i++) {
        for(let j=0;j<M;j++) {
            result[i][j] = arr[i][j] + arr[i + N][j];
        }
    }
    
    return result.join("\n").replaceAll(","," ");
}
console.log(generate(input));