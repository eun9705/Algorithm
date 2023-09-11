const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let alphabet_arr = ["c=", 'c-', "dz=", "d-", "lj", "nj", "s=", "z="];
const count = (str) => {
    for(let alphabet of alphabet_arr) {
        str = str.split(alphabet).join("Q");
    }
    return str.length;
}
console.log(count(input));