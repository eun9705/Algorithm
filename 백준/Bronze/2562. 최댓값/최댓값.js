const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const max  = Math.max(...input);
const max_index = input.findIndex((el) => Number(el) === max);
console.log(`${max}\n${(max_index + 1)}`);