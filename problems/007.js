#!/usr/bin/env node

const { isPrime, resultCheck } = require('../lib/lib');

let c = 1;
let n = 1;

do {
  n += 2;
  if (isPrime(n)) {
    c++;
  }
} while (c < 10001)

resultCheck(n, 104743)