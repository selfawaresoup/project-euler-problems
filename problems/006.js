#!/usr/bin/env node

const {range, sum, sqr, resultCheck} = require('../lib/lib')

const nums = range(1,100);

const diff = Math.abs(nums.map(sqr).reduce(sum) - sqr(nums.reduce(sum)));

resultCheck(diff, 25164150)
