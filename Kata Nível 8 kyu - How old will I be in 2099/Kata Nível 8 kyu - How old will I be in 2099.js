/*

Kata Nível 8 kyu - How old will I be in 2099?

Philip acabou de fazer quatro anos e quer saber quantos anos terá daqui a vários anos no futuro, como 2090 ou 3044. 
Seus pais não conseguem calcular isso, então imploraram que você os ajudasse 
escrevendo um programa que pode responder às perguntas intermináveis de Philip.

Sua tarefa é escrever uma função que leva dois parâmetros: 
o ano de nascimento e o ano em relação ao qual contar os anos. 

Como Philip está ficando mais curioso a cada dia, ele pode em breve querer 
saber quantos anos faltam para ele nascer, então sua função 
precisa trabalhar com datas no futuro e no passado.

Forneça a saída neste formato: 

Para datas no futuro: "Você tem ... ano (s) de idade." 
Para datas no passado: "Você nascerá daqui ... ano (s)." 
Se o ano de nascimento for igual ao ano solicitado, retorne: "Você nasceu neste mesmo ano!"

ATENÇÃO!!

"..." devem ser substituídos pelo número, seguido e precedido por um único espaço. 
Lembre-se de que você precisa contabilizar "ano" e "anos", dependendo do resultado.

Boa sorte!
*/

function calculateAge(birthYear, targetYear) {
  const yearsdifference = targetYear - birthYear;

  const outputs = [
    {
      key: (value) => value < 0 && value == -1,
      value: `Você nascerá daqui ${-yearsdifference} ano.`,
    },
    {
      key: (value) => value > 0 && value == 1,
      value: `Você tem ${yearsdifference} ano de idade.`,
    },
    {
      key: (value) => value === 0,
      value: "Você nasceu neste mesmo ano!",
    },
    {
      key: (value) => value < 0,
      value: `Você nascerá daqui ${-yearsdifference} anos.`,
    },
    {
      key: (value) => value > 0,
      value: `Você tem ${yearsdifference} anos de idade.`,
    },
  ];

  return outputs.find((item) => item.key(yearsdifference)).value;
}

{
  //Teste 1
  const [a, b] = [2012, 2016];
  const expected = "Você tem 4 anos de idade."; // valor esperado

  console.log(calculateAge(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 2
  const [a, b] = [1989, 2016];
  const expected = "Você tem 27 anos de idade."; // valor esperado

  console.log(assert(a, b, expected));
  console.log(calculateAge(a, b));
}

{
  //Teste 3
  const [a, b] = [2000, 2090];
  const expected = "Você tem 90 anos de idade."; // valor esperado

  console.log(assert(a, b, expected));
  console.log(calculateAge(a, b));
}

{
  //Teste 4
  const [a, b] = [2000, 1990];
  const expected = "Você nascerá daqui 10 anos."; // valor esperado

  console.log(assert(a, b, expected));
  console.log(calculateAge(a, b));
}

{
  //Teste 5
  const [a, b] = [3400, 3400];
  const expected = "Você nasceu neste mesmo ano!"; // valor esperado

  console.log(assert(a, b, expected));
  console.log(calculateAge(a, b));
}

{
  //Teste 6
  const [a, b] = [900, 2900];
  const expected = "Você tem 2000 anos de idade."; // valor esperado

  console.log(assert(a, b, expected));
  console.log(calculateAge(a, b));
}

{
  //Teste 7
  const [a, b] = [2010, 1990];
  const expected = "Você nascerá daqui 20 anos."; // valor esperado

  console.log(assert(a, b, expected));
  console.log(calculateAge(a, b));
}

{
  //Teste 8
  const [a, b] = [2010, 1500];
  const expected = "Você nascerá daqui 510 anos."; // valor esperado

  console.log(assert(a, b, expected));
  console.log(calculateAge(a, b));
}

{
  //Teste 9
  const [a, b] = [2011, 2012];
  const expected = "Você tem 1 ano de idade."; // valor esperado

  console.log(assert(a, b, expected));
  console.log(calculateAge(a, b));
}

{
  //Teste 10
  const [a, b] = [2000, 1999];
  const expected = "Você nascerá daqui 1 ano."; // valor esperado

  console.log(assert(a, b, expected));
  console.log(calculateAge(a, b));
}

function assert(a, b, expected) {
  const resultFn = calculateAge(a, b);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
