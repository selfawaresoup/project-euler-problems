const {range, sum, sqr} = require('./lib')

const nums = range(1,100);

const diff = Math.abs(nums.map(sqr).reduce(sum) - sqr(nums.reduce(sum)));

console.log(diff);