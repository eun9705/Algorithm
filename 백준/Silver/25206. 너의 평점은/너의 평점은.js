const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const score = {
    "A+":4.5,
    "A0":4.0,
    "B+":3.5,
    "B0":3.0,
    "C+":2.5,
    "C0":2.0,
    "D+":1.5,
    "D0":1.0,
    "F":0.0,
}
const solution = (arr) => {
    let result = 0;
    let total = 0;
    for(let i=0;i<arr.length;i++) {
        let split_arr = arr[i].split(" ");
        if(split_arr[2] !== 'P') {
            total += Number(split_arr[1]);
            result += Number(split_arr[1]) * score[split_arr[2]];
        }
    }
    return (result / total).toFixed(6);
}

console.log(solution(input));