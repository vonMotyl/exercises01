/*tryb restrykcjyjny, będzie bardziej pilnowała naszej składni i komunikaty błędów będą bardziej konkretne*/

'use strict';



var name;
var femaleName = 'Kaja';
var age = 37;

name = femaleName;
console.log(name);
console.log(age);


/*funkcje zaczynają się od function i są wydzielonym kawałkiem kodu z którego możemy korzystać wiele razy w różnych miejscach*/

function displayVar() {
    /*tutaj kod funkcji wpisujemy*/
    
    var surname = "kowalski";
    console.log(surname);
}

displayVar();


var variable = function() {
    console.log('anonymous function')
}

variable();


function multiplication(par1,par2,par3) {
    var score = par1 * par2 * par3;
//    console.log('Wynik mnożenia: ' + score);
    return score;
}

multiplication(3, 4, 5);


var liczba1 = 5;
var liczba2 = 10;
var liczba3 = 15;

multiplication(liczba1, liczba2, liczba3);


multiplication(liczba1, 0, liczba2);

multiplication(liczba1, 0);

console.log(multiplication(liczba1, liczba2, liczba3));

var wynikDzialaniaFunkcji = multiplication(liczba1, 2, liczba3);
console.log(wynikDzialaniaFunkcji);

























