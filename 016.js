const { sum, log } = require('./lib');

const num = [1];
for (let n = 0; n < 1000; n++) {
  let carry = 0;
  for (let k = 0; k < num.length; k++) {
    let temp = num [k] * 2 + carry;
    if (temp > 9) {
      carry = 1;
      temp -= 10;
    } else {
      carry = 0;
    }
    num[k] = temp
  }
  if (carry > 0) {
    num.push(carry);
  }
}

num.reduce(sum, 0).passthrough(log)