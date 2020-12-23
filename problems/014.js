#!/usr/bin/env node

const { log, resultCheck } = require('../lib/lib')

const collatz = n => (n % 2 === 0) ? (n/2) : (3 * n + 1)

const cache = {}
const count = (n) => {
  if (n === 1) {
    return 1
  }

  const stored = cache[n]
  if (stored) {
    return stored
  }

  l = 1 + count(collatz(n))
  cache[n] = l
  return l
}

let maxL = 1
let maxN = 0
for (let n = 1; n < 1e6; n++) {
  const l = count(n)
  if (l > maxL) {
    maxL = l
    maxN = n
  }
}

resultCheck(maxN, 837799)