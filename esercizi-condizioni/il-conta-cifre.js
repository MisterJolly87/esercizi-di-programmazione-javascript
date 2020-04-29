/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
console.log(`Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.`);

var numero = 7890

if (numero >= 0 && numero <= 9) {
  console.log(`Il numero ${numero} ha 1 cifra`);
} else if (numero >= 10 && numero <= 99) {
  console.log(`Il numero ${numero} ha 2 cifre`);
} else if (numero >= 100 && numero <= 999) {
  console.log(`Il numero ${numero} ha 3 cifre`);
} else if (numero >= 1000 && numero <= 9999) {
  console.log(`Il numero ${numero} ha 4 cifre`);
} else {
  console.log(`Il numero Non corrisponde alle istruzioni iniziali`);
}
