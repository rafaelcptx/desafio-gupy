function pertenceFibonacci(num) {
  let a = 0;
  let b = 1;
  let c;
  let pertence = false;

  if (num === 0) pertence = true;

  while (b <= num) {
    if (b === num) {
      pertence = true;
    }

    c = a + b;
    a = b;
    b = c;
  }

  if (pertence) {
    console.log(`${num} pertece a sequencia Fibonacci`);
  } else {
    console.log(`${num} não pertece a sequencia Fibonacci`);
  }

  // retorna true ou false (se pertence ou não...).
  return pertence;
}

// testes.
pertenceFibonacci(-1);
pertenceFibonacci(0);
pertenceFibonacci(1);
pertenceFibonacci(3);
pertenceFibonacci(5);
pertenceFibonacci(6);
pertenceFibonacci(15);
