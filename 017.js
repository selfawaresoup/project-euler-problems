const assert = require('assert');
const { range, sum, log } = require('./lib');

const numWords = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seveneen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
}

const getWords = n => {
  let s = '';
  if (n >= 1000) {
    s += 'one thousand ';
    n -= 1000;
  }

  if (n >= 100) {
    const h = Math.floor(n / 100)
    
    s += numWords[h] + ' hundred '
    n -= h * 100;
    if (n > 0) {
      s += 'and '
    }
  }

  if (n >= 20) {
    const d = 10 * Math.floor(n / 10);
    s += numWords[d];
    n -= d;
    if (n > 0) {
      s += '-';
    }
  }

  if (n > 0) {
    s += numWords[n];
  }

  return s.trim();
}

assert.equal(getWords(1000), 'one thousand');
assert.equal(getWords(1200), 'one thousand two hundred');
assert.equal(getWords(1242), 'one thousand two hundred and forty-two');
assert.equal(getWords(712), 'seven hundred and twelve');
assert.equal(getWords(5), 'five');
assert.equal(getWords(100), 'one hundred');
assert.equal(getWords(42), 'forty-two');
assert.equal(getWords(142), 'one hundred and forty-two');

const letterCount = s => s.replace(/[\s\-]+/g, '').length
assert.equal(letterCount('a b c'), 3)
assert.equal(letterCount('a b c-d'), 4)
assert.equal(letterCount('three hundred and forty-two'), 23)
assert.equal(letterCount('one hundred and fifteen'), 20)

const text_numbers = range(1, 1000).map(getWords)
const n = text_numbers.map(letterCount).reduce(sum, 0);

console.log(n)