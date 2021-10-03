/*
Kata Nível 8 kyu - Cat years, Dog years

Eu tenho um gato e um cachorro, 
eu os peguei desde que eram um gatinho/cachorrinho. 

Isso foi a humanYears (humano anos) atrás. 

Crie uma função que retorne suas respectivas idades agora 
considerando a sua idade em anos Humano | anos Gato | anos Cachorro
o retorno deverá ser um array como o abaixo:

[humanYears, catYears, dogYears]

NOTAS: 

- humanYears será sempre >= a 1 
- humanYears sempre serão números inteiros

Tabela de conversão de anos Humano para Gato | Cachorro

Cat Years (anos em gato)
15 cat years para o primeiro ano 
+9 cat years para o segundo ano 
+4 cat years para cada ano subsequente 

Dog Years (anos em cachorro)
15 dog years para o primeiro ano 
+9 dog years para o segundo ano 
+5 dog years para cada ano subsequente 


Observações:
para que seja possível ter retorno visual dos testes 
recomendo utilizar as extensões abaixo do Vs Code.

- Quokka.js (para utilizar o quokka é necessário ter o node instalado no seu computador)
- Quokka Statusbar Buttons
*/

function humanYearsCatYearsDogYears(humanYears) {
    // implemente seu código aqui
    let result = []
    result.push(humanYears)
    result.push(CountYears(humanYears,4))
    result.push(CountYears(humanYears,5))
    function CountYears(num,catOrDog)
    {
        if (num == 2)
        return 24
        if (num > 2 ) 
            return 24 + (num - 2)*catOrDog            
        else
        return 15           
    }    


    return result;
  }
  
  {
    // Teste 1 deve retornar [1,15,15]
    const humanYears = 1;
    console.log(humanYearsCatYearsDogYears(humanYears));
    console.log(assert(humanYears, [1, 15, 15]));
  }
  {
    // Teste 2 deve retornar [2, 24, 24]
    const humanYears = 2;
    console.log(humanYearsCatYearsDogYears(humanYears));
    console.log(assert(humanYears, [2, 24, 24]));
  }
  {
    // Teste 3 deve retornar [10, 56, 64]
    const humanYears = 10;
    console.log(humanYearsCatYearsDogYears(humanYears));
    console.log(assert(humanYears, [10, 56, 64]));
  }
  
  function assert(sample, expected) {
    function compareArrays(arr1, arr2) {
      if (arr1.length === arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) {
            return false;
          }
        }
        return true;
      }
      return false;
    }
  
    const resultFn = humanYearsCatYearsDogYears(sample);
    const result = compareArrays(resultFn, expected);
    return result ? "OK" : "Algo deu errado";
  }