let factorial = 1;
let num = 8;
while (true) {
  factorial *= num;
  num--;
  if (num === 1) break;
}
console.log(factorial); // Factorial de 8 = 40320
