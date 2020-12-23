#!/usr/bin/env node

const {resultCheck} = require('../lib/lib')

let n = 600851475143;

const fac = n => {
  for (i = 2; i < n/2; i++) {
    if (n % i === 0) {
      return fac(n/i);
    }
  }
  return n;  
}

const result = fac(n)

resultCheck(result, 6857)
