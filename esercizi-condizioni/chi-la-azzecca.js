/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/
var gioUno = 56;
var gioDue = 40;
console.log(`Giocatore Uno sceglie il numero ${gioUno} mentre il Giocatore Due sceglie il numero ${gioDue}`);



var numRandom = Math.random() * (100-1) + 1;
var numInt = Math.floor(numRandom);
console.log(`Dato il numero casuale ${numInt}`);

var farUno = (numInt-gioUno);

if (farUno < 0) {
  var farUno = farUno*-1
} else {
  var farUno = farUno
}


var farDue = (numInt-gioDue);

if (farDue < 0) {
  var farDue = farDue*-1
} else {
  var farDue = farDue
}


if (farUno == 0) {
  console.log('Giocatore Uno ha indovinato il numero');
} else if (farDue == 0) {
  console.log('Giocatore Due ha indovinato il numero');
} else if (farUno < farDue) {
  console.log('Giocatore Uno si è avvicinato di più al numero casuale');
} else {
  console.log('Giocatore Due si è avvicinato di più al numero casuale');
}
