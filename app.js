
function multiplyingTwo (a, b) {
  return a * b;
}

function multiplyingThree (a, b, c) {
  return a * (b * c);
}

function decorator (a, b) {
  return b + a   + b;
}
console.log(multiplyingTwo (2, 3));
console.log(multiplyingThree(3, 4, 5));
console.log(decorator('Vadim', '***'));
