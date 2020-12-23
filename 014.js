const assert = require('assert');
const { log, range } = require('./lib')

const collatz = (n, steps = 1) => {
  if (n === 1) {
    return steps;
  } else {
    return collatz( n % 2 === 0 ? n / 2 : 3 * n + 1, steps + 1);
  }
}
assert.strictEqual(collatz(1), 1);
assert.strictEqual(collatz(13), 10);

range(1, 1e6).map(n => [n, collatz(n)])
  .sort((a, b) => a[1] - b[1])
  .pop()
  .passthrough(log);