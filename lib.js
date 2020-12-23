const assert = require('assert');

const log = v => {
  console.log(v);
  return v;
}

Array.prototype.sortNumeric = function() {
  const clone = this.slice(0)
  clone.sort((a,b) => a - b);
  return clone;
}

Object.prototype.passthrough = function(f) {
  f(this);
  return this;
}

const range = (n1, n2) => {
  const r = [];
  for (let i = n1; i <= n2; i++) {
    r.push(i)
  }
  return r;
}
assert.deepStrictEqual(range(5,10), [5,6,7,8,9,10])

const sum = (a, b) => a + b
assert.strictEqual(sum(1, 2), 3)

const prod = (a, b) => a * b
assert.strictEqual(prod(5, 3), 15)
assert.strictEqual([1,2,3,4].reduce(prod, 1), 24)

const max = (a, b) => a > b ? a : b
assert.strictEqual(max(1,2), 2)
assert.strictEqual(max(2,1), 2)

const sqr = n => n * n
assert.strictEqual(sqr(3), 9)

const sqrt = n => Math.sqrt(n)

const isPrime = n => {
  if (n === 1) {
    return false;
  }
  for(let i = 2; i <= sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
assert.equal(isPrime(1), false);
assert.equal(isPrime(2), true);
assert.equal(isPrime(17), true);
assert.equal(isPrime(32), false);
assert.equal(isPrime(104745), false);

const factorial = n => {
  if (n === 0) {
    return 1;
  }
  return range(2, n).reduce(prod, 1);
}


module.exports = {
  range,
  sum,
  max,
  prod,
  sqr,
  isPrime,
  log,
  sqrt,
  factorial,
};
