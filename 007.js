const { isPrime } = require('./lib');

let c = 1;
let n = 1;

do {
  n += 2;
  if (isPrime(n)) {
    c++;
  }
} while (c < 10001)

console.log(c, n)