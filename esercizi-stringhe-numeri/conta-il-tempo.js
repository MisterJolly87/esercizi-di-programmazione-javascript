/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var time = 45683967392092;

var ore = time/3600
var oreInt = Math.ceil(ore)-1

var minuti = (ore-oreInt)*3600/60
var minutiInt = Math.ceil(minuti)-1

var secondi = (minuti-minutiInt)*60
var secondiInt = Math.ceil(secondi)-1

console.log(`${oreInt} ore, ${minutiInt} minuti e ${secondiInt} secondi`);
