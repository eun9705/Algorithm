const input = require('fs').readFileSync('dev/stdin').toString().split('\n').map((el)=>el.split(" ").map(Number));
input.shift();
let arr = new Array(100).fill().map(el => new Array(100).fill(false));

for(let i=0;i<input.length;i++) {
    let x = input[i][0];
    let y = input[i][1];
    for(let j=0;j<10;j++){
        for(let k=0;k<10;k++) {
            arr[x + j][y + k] = true;
        }
    }
}
const solution = arr.reduce((acc,cur) => {
    for(let bool of cur) {
        if(bool) acc++;
    }
    return acc;
},0);

console.log(solution);