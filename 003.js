let n = 600851475143;


const fac = n => {
  for (i = 2; i < n/2; i++) {
    if (n % i === 0) {
      return fac(n/i);
    }
  }
  return n;  
}

console.log(fac(n));