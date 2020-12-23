const assert = require('assert');

const log = (...args) => {
  console.log(...args);
  return args[0];
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

const sum = (a, b) => a + b

const prod = (a, b) => a * b

const max = (a, b) => a > b ? a : b

const sqr = n => n * n

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


const factorial = n => {
  if (n === 0) {
    return 1;
  }
  return range(2, n).reduce(prod, 1);
}

const assertEqual = (a,b) => assert.strictEqual(a,b)

const println = str => process.stdout.write(str + "\n")

const resultCheck = (result, correctSolution) => {
  assertEqual(result, correctSolution)
  println(result)
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
  assertEqual,
  println,
  resultCheck
};
