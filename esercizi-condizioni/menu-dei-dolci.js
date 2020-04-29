/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/

var uno = 'Tiramisù';
var due = 'Torta della nonna';
var tre = 'Cheesecake alla nutella';
var quattro = 'Macedonia';

console.log('MENU:');
console.log('1. Tiramisù');
console.log('2. Torta della nonna');
console.log('3. Cheesecake alla nutella');
console.log('4. Macedonia');

console.log('Che dolce vuoi?');
var scelta = 2;
console.log('Vorrei il dolce N. '+scelta);

if (scelta == 1) {
  console.log(`Hai scelto il dolce ${uno}`);
} else if (scelta == 2) {
  console.log(`Hai scelto il dolce ${due}`);
} else if (scelta == 3) {
  console.log(`Hai scelto il dolce ${tre}`);
} else if (scelta == 4) {
  console.log(`Hai scelto il dolce ${quattro}`);
} else {
  console.log(`Dolce non disponibile`);
}

console.log('Tu, invece, che dolce vuoi?');
var scelta = 7;
console.log('Vorrei il dolce N. '+scelta);

if (scelta == 1) {
  console.log(`Hai scelto il dolce ${uno}`);
} else if (scelta == 2) {
  console.log(`Hai scelto il dolce ${due}`);
} else if (scelta == 3) {
  console.log(`Hai scelto il dolce ${tre}`);
} else if (scelta == 4) {
  console.log(`Hai scelto il dolce ${quattro}`);
} else {
  console.log(`Dolce non disponibile`);
}
