function inverteString(string) {
  // imprime no console para ver os testes.
  console.log(string.split("").reverse().join(""));

  // retorna string invertida.
  return string.split("").reverse().join("");
}

// testes.
inverteString("Olá, eu sou uma string");
inverteString("ABCDEFG");
inverteString("Rafael Teixeira");
