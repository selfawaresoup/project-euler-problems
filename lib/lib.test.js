#!/usr/bin/env node

const assert = require('assert');


const {
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
} = require('./lib')

assertEqual(sum(1, 2), 3)

assertEqual(prod(5, 3), 15)
assertEqual([1,2,3,4].reduce(prod, 1), 24)

assertEqual(max(1,2), 2)
assertEqual(max(2,1), 2)

assertEqual(sqr(3), 9)

assertEqual(isPrime(1), false);
assertEqual(isPrime(2), true);
assertEqual(isPrime(17), true);
assertEqual(isPrime(32), false);
assertEqual(isPrime(104745), false);