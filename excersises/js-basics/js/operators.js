'use strict';

var liczba = 10;

liczba += 5; // liczba = liczba + 5 czyli 15

console.log(liczba == 15);
console.log(liczba == 16);

console.log(liczba != 16);
console.log(liczba != 15);

var liczbaStr = "15"

console.log(liczba == liczbaStr);
console.log(liczba === liczbaStr);


var warunek = (liczba % 2 == 0) ? 'parzysta' : 'nieparzysta';

console.log(warunek);