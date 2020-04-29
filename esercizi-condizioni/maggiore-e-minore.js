/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2


  http://www.imparareaprogrammare.it
*/
var a = 3;
var b = -1;
var c = 4;
var d = -2;

if (a > b && a > c && a > d) {
  console.log(`Il numero maggiore è: ${a}`);
} else if (b > c && b > d) {
  console.log(`Il numero maggiore è: ${b}`);
} else if (c > d) {
  console.log(`Il numero maggiore è: ${c}`);
} else {
  console.log(`Il numero maggiore è: ${d}`);
}

if (a < b && a < c && a < d) {
  console.log(`Il numero minore è: ${a}`);
} else if (b < c && b < d) {
  console.log(`Il numero minore è: ${b}`);
} else if (c < d) {
  console.log(`Il numero minore è: ${c}`);
} else {
  console.log(`Il numero minore è: ${d}`);
}
