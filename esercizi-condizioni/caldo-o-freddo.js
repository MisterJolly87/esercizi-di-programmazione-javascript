/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

var lun = 26, mar = 14, mer = 23, gio = 31, ven = 23, sab = 24, dom = 12
console.log('Date le rilevazioni della temperatura di questa settimana.');
console.log('Quale è stata il valore della giornata più calda?');
console.log('Quale è stata il valore della giornata più fredda?');

if (lun > mar && lun > mer && lun > gio && lun > ven && lun > sab && lun > dom) {
  console.log(`Giornata più calda = ${lun}`);
} else if (mar > mer && mar > gio && mar > ven && mar > sab && mar > dom) {
  console.log(`Giornata più calda = ${mar}`);
} else if (mer > gio && mer > ven && mer > sab && mer > dom) {
  console.log(`Giornata più calda = ${mer}`);
} else if (gio > ven && gio > sab && gio > dom) {
  console.log(`Giornata più calda = ${gio}`);
} else if (ven > sab && ven > dom) {
  console.log(`Giornata più calda = ${ven}`);
} else if (sab > dom) {
  console.log(`Giornata più calda = ${sab}`);
} else {
  console.log(`Giornata più calda = ${dom}`);
}

if (lun < mar && lun < mer && lun < gio && lun < ven && lun < sab && lun < dom) {
  console.log(`Giornata più fredda = ${lun}`);
} else if (mar < mer && mar < gio && mar < ven && mar < sab && mar < dom) {
  console.log(`Giornata più fredda = ${mar}`);
} else if (mer < gio && mer < ven && mer < sab && mer < dom) {
  console.log(`Giornata più fredda = ${mer}`);
} else if (gio < ven && gio < sab && gio < dom) {
  console.log(`Giornata più fredda = ${gio}`);
} else if (ven < sab && ven < dom) {
  console.log(`Giornata più fredda = ${ven}`);
} else if (sab < dom) {
  console.log(`Giornata più fredda = ${sab}`);
} else {
  console.log(`Giornata più fredda = ${dom}`);
}
