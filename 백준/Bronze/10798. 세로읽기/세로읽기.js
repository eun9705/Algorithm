const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(""));

const maxLength = Math.max(...input.map(el=>el.length));

const solution = (arr) => {
    let result = '';
    for(let i=0;i<maxLength;i++) {
        for(let j=0;j<arr.length;j++) {
            result += arr[j][i] || "";
        }
    }
    return result;
}

console.log(solution(input));
