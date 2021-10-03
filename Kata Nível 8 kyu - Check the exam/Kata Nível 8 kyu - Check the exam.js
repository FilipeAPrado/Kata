/*

Kata Nível 8 kyu - Check the exam

O primeiro array de entrada contém as respostas corretas de um exame, como ["a", "a", "b", "d"]. 
O segundo contém as respostas enviadas por um aluno.

Os dois arrays não estarão vazios e têm o mesmo comprimento. 

Retorne a pontuação do aluno de acordo com o array de de respostas, 
dando:

+4 para cada resposta correta, 
-1 para cada resposta incorreta e 
+0 para cada resposta em branco (string vazia), 


caso o total te pontos seja negativo retorne 0.

*/

function checkExam(examAnswers, studentAnswers) {
  // your code here

  const arrayFilter = [...studentAnswers].map((item) =>
    item == "" ? "|" : item
  );
  const right = arrayFilter.filter(
    (item, index) => item == [...examAnswers][index]
  );
  const wrong = arrayFilter.filter((item) => item != "|").length - right.length;
  const result = right.length * 4 - wrong * 1;
  return result > 0 ? result : 0;
}

{
  //Teste 1
  const [a, b] = [
    ["a", "a", "b", "b"],
    ["a", "c", "b", "d"],
  ];

  const expected = 6; // valor esperado

  console.log(checkExam(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 2
  const [a, b] = [
    ["a", "a", "c", "b"],
    ["a", "a", "b", ""],
  ];

  const expected = 7; // valor esperado

  console.log(checkExam(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 3
  const [a, b] = [
    ["a", "a", "b", "c"],
    ["a", "a", "b", "c"],
  ];
  const expected = 16; // valor esperado

  console.log(checkExam(a, b));
  console.log(assert(a, b, expected));
}

{
  //Teste 4
  const [a, b] = [
    ["b", "c", "b", "a"],
    ["", "a", "a", "c"],
  ];
  const expected = 0; // valor esperado

  console.log(checkExam(a, b));
  console.log(assert(a, b, expected));
}

function assert(a, b, expected) {
  const resultFn = checkExam(a, b);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
