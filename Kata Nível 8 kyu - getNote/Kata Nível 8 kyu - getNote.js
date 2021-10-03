/*
  Kata Nível 8 kyu - getNote

dado o seguinte array 
const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
Implemente a função abaixo que deve retornar 
uma a nota musical a partir de um número inteiro.
caso o número seja maior que o tamanho do array, 
a contagem deve ser feita em modo circular.

caso o número seja negativo a lógica deve ser invertida

*/

function getNote(number) {
  let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  theIndex = notes.length + number;
  indexIsNegative = number < notes.length && number < 0;
  indexOverwrite = number > notes.length;
  indexOverwriteTransform = theIndex - notes.length * 2;
  indexAccepted = notes.length > number;

  whatIsTheIndex = negativeIndex(notes, number);
  function negativeIndex(notes, number) {
    if (indexIsNegative) return theIndex + notes.length - notes.length;
    if (indexOverwrite) return indexOverwriteTransform;
    if (indexAccepted) return number;
    return (theIndex - notes.length) * -1;
  }
  return notes[whatIsTheIndex];
}

{
  // Teste 1 deve retornar "C"
  const sample = 0;
  const expected = "C";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 2 deve retornar "B"
  const sample = 11;
  const expected = "B";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 3 deve retornar "F"
  const sample = 5;
  const expected = "F";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 4 deve retornar "D#"
  const sample = 15;
  const expected = "D#";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 5 deve retornar "B"
  const sample = -1;
  const expected = "B";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}
{
  // Teste 6 deve retornar "C"
  const sample = -12;
  const expected = "C";
  console.log(getNote(sample));
  console.log(assert(sample, expected));
}

function assert(sample, expected) {
  const resultFn = getNote(sample);
  return resultFn === expected ? "OK" : "Algo deu errado";
}
