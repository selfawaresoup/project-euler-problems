const { isPrime, range, sum, log } = require('./lib');

const result = range(2, 2e6)
  .filter(isPrime)
  .reduce(sum, 0);

console.log(result)