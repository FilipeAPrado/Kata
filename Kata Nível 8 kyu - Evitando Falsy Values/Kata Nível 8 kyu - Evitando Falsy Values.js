function soma(val1, val2) {
  // implemente seu código aqui
  result = parseInt(val1, 10) + parseInt(val2, 10);
  if (isNaN(result)) return undefined;
  return result;
}

{
  // Teste 1 deve retornar 1
  const [a, b] = [1, 0];
  console.log(soma(a, b));
  console.log(assert(a, b, 1));
}
{
  // Teste 2 deve retornar 1
  const [a, b] = ["1", 0];
  console.log(soma(a, b));
  console.log(assert(a, b, 1));
}
{
  // Teste 3 deve retornar 1
  const [a, b] = [1, "0"];
  console.log(soma(a, b));
  console.log(assert(a, b, 1));
}
{
  // Teste 4 deve retornar 1
  const [a, b] = ["1", "0"];
  console.log(soma(a, b));
  console.log(assert(a, b, 1));
}
{
  // Teste 5 deve retornar undefined
  const [a, b] = [1, null];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 6 deve retornar undefined
  const [a, b] = [1, undefined];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 7 deve retornar undefined
  const [a, b] = [1, ""];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 8 deve retornar undefined
  const [a, b] = [1, NaN];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 9 deve retornar undefined
  const [a, b] = [1, false];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 10 deve retornar undefined
  const [a, b] = [null, 1];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 11 deve retornar undefined
  const [a, b] = [undefined, 1];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 12 deve retornar undefined
  const [a, b] = ["", 1];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 13 deve retornar undefined
  const [a, b] = [NaN, 1];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 14 deve retornar undefined
  const [a, b] = [false, 1];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 15 deve retornar undefined
  const [a, b] = [null, null];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 16 deve retornar undefined
  const [a, b] = [undefined, undefined];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 17 deve retornar undefined
  const [a, b] = ["", ""];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 18 deve retornar undefined
  const [a, b] = [NaN, NaN];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}
{
  // Teste 19 deve retornar undefined
  const [a, b] = [false, false];
  console.log(soma(a, b));
  console.log(assert(a, b, undefined));
}

function assert(a, b, expected) {
  return soma(a, b) === expected ? "OK" : "Algo deu errado";
}
