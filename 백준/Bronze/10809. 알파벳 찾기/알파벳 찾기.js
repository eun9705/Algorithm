const input = require('fs').readFileSync('dev/stdin').toString();
let str = [...input];
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let output = '';
for(let i=0;i<alphabet.length;i++) {
    output += str.indexOf(alphabet[i]) + ' ';
}
console.log(output);