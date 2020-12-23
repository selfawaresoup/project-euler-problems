#!/usr/bin/env node

const {range, resultCheck} = require('../lib/lib')

const factors = range(1,20);

let n = 20;
let check = false;

do {
  n++;
  check = factors.every(f => n % f === 0)
} while (!check);

resultCheck(n, 232792560)
