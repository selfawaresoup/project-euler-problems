#!/usr/bin/env node

const { isPrime, range, sum, resultCheck } = require('../lib/lib');

const result = range(2, 2e6)
  .filter(isPrime)
  .reduce(sum, 0);

resultCheck(result, 142913828922)
