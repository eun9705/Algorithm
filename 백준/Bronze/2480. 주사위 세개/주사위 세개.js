const [x,y,z]  = require('fs').readFileSync('dev/stdin').toString().split(' ').map(Number).sort();

if(x===y && y===z) {
    console.log(10000 + (x * 1000));
}else if(x===y || y===z) {
    console.log(1000 + (y *100));
}else {
    console.log(z * 100);
}
