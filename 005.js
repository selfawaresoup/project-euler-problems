const {range} = require('./lib')

const factors = range(1,20);

let n = 20;
let check = false;

do {
  n++;
  check = factors.every(f => n % f === 0)
} while (!check);

console.log(n);