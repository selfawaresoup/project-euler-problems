#!/usr/bin/env node

const { sqr, resultCheck } = require('../lib/lib');

const check = (a, b, c) => a<b && b<c && sqr(a)+sqr(b) === sqr(c) && a+b+c === 1000;


for (let a = 1; a < 1000; a++) {
  for (let b = 1; b < 1000; b++) {
    for (let c = 1; c < 1000; c++) {
      if (check(a,b,c)) {
      }
    }
  }
}

resultCheck(0, 31875000)
