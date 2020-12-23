#!/usr/bin/env node

const { sqr, prod, resultCheck } = require('../lib/lib');

const check = (a, b, c) => a<b && b<c && sqr(a)+sqr(b) === sqr(c) && a+b+c === 1000;

const triplet = () => {
  for (let a = 1; a < 1000; a++) {
    for (let b = a + 1; b < 1000; b++) {
      for (let c = b +1; c < 1000; c++) {
        if (check(a,b,c)) {
          return [a, b, c]
        }
      }
    }  
  }  
}

const r = triplet().reduce(prod)
resultCheck(r, 31875000)
