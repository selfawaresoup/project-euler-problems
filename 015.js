const assert = require('assert');
const { log, factorial } = require('./lib');

(factorial(40) / (factorial(20) * factorial(20))).passthrough(log)