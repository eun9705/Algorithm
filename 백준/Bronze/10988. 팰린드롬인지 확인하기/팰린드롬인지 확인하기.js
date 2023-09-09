const input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(input.split("").reverse().join("") === input ? 1 : 0);