#!/usr/bin/env node

const { sqrt, resultCheck } = require('../lib/lib')

const getFactors = n => {
  const factors = [1, n];
  for(let i = 2; i <= sqrt(n); i++) {
    if (n % i === 0) {
      let j = n / i;
      if (!factors.includes(i)) {
        factors.push(i)
      }
      if (!factors.includes(j)) {
        factors.push(j)
      }
    }
  }
  return factors.sortNumeric()
}

let n = 0;
let sum = 0;
while (true) {
  n++;
  sum += n;
  const f = getFactors(sum)
  if (f.length > 500) {
    break;
  }
}

resultCheck(sum, 76576500)
