let sum = 0;
let v1 = 0;
let v2 = 1;

while (v2 < 4e6) {
  let t = v2;
  v2 = t + v1;
  v1 = t;
  //console.log(v2)
  if (v2 % 2 === 0) {
    sum += v2;
  }
}

console.log(sum);