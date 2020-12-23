#!/usr/bin/env node

const { log, factorial, resultCheck } = require('../lib/lib');

const result = (factorial(40) / (factorial(20) * factorial(20)))

resultCheck(result, 137846528820)
