'use strict'


var imiona = ['Monika', 'Krystian', 'Łukasz'];

/*console.log(imiona[0]);
console.log(imiona[3]);*/
console.log(imiona);

imiona[3] = 'Ola';
imiona[2] = 'Wojtek';

/*dodanie elementu na końcu tabeli*/
imiona.push('Miłosz');


console.log(imiona);

/*zdejmuje z końca i zwraca wartość*/
var ostatniElement = imiona.pop();

console.log(ostatniElement);

console.log(imiona);

/*Dodaje z początku Robert i wypluwa ilość danych w tabelce*/
console.log(imiona.unshift('Robert'));

console.log(imiona);

/*Zdejmuje z początku i zwrata*/
console.log(imiona.shift());

console.log(imiona.length);

/*Wartość która będzie sie znajdować pomiędzy elementami w array'u*/
/*console.log(imiona.join("( ͡° ͜ʖ ͡°)"));

console.log(imiona.join(" + "));*/

/*imiona.reverse();

console.log(imiona);*/

imiona.sort();


var liczby = [1, 2, 0, 10, 12, 100, 55]

liczby.sort();

console.log(liczby);









