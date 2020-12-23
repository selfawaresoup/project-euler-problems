#!/usr/bin/env node

const {range, resultCheck, assertEqual} = require('../lib/lib')

const isPalindrome = n => {
    const d = n.toString().split('');
    const l = d.length - 1;
    for (let i = 0; i < l / 2; i++) {
        if (d[i] !== d[l-i]) {
            return false;
        }
    }
    return true;
}

assertEqual(isPalindrome(12021), true);
assertEqual(isPalindrome(12345), false);



let nums = range(100,999)
  .map(n => range(100,999).map(n2 => n * n2))
  .flat()
  .filter(isPalindrome)
  .sort((a,b) => a - b);

const result = nums.pop()

resultCheck(result, 906609)
