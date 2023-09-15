const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));

let max = input[0][0];
let maxX = 0;
let maxY = 0;
for(let i=0;i<input.length;i++) {
    for(let j=0;j<input.length;j++) {
        if(max < input[i][j]) {
            max = input[i][j];
            maxX = i;
            maxY = j
        }
    }
}
console.log(max);
console.log(`${maxX + 1} ${maxY + 1}`);
