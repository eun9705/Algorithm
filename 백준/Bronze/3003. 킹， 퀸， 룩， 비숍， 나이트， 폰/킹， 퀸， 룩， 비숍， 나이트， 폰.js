const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let chess = [1,1,2,2,2,8];
let result = [];
for(let i=0;i<chess.length;i++) {
    chess[i] === input[i] ? result.push(0) : result.push(chess[i] - input[i]);
}
console.log(result.join(" "));
