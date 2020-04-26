/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3

  http://www.imparareaprogrammare.it
*/

var a = 1, b = 2, c = 3, d = 4, e = 5;

var somma = a+b+c+d+e;

console.log('somma = '+somma);

a = a.toString();
b = b.toString();
c = c.toString();
d = c.toString();
e = c.toString();

var nElementi = 'a'+'b'+'c'+'d'+'e'

var media = somma/nElementi.length

console.log('media = '+media);
