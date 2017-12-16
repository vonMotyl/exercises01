'use strict';

var iloscOsoba1 = 3500;
var iloscOsoba2 = 5000;
var iloscOsoba3 = 7500;
var iloscOsoba4 = 2500;

var sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;

console.log('w głównym programie suma kasy:' + sumaKasy);

function policzSumeKasy (iloscOsoba1, iloscOsoba2, iloscOsoba3) {
    
    /*zmiana lokalna*/
//    sumaKasy = 500;
    
    var suma = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;
    
    var sumaKasy = iloscOsoba1 + iloscOsoba2;
    
    console.log('W funkcji suma kasy: ' + sumaKasy);
    console.log('W funkcji suma: ' + suma);
    
    return suma;
    
    /*to nie będzie działać ponieważ sumaKasy została zdefiniowana wcześniej globalenie
    return sumaKasy;*/
}


/*
Po wstawieniu return suma w funkcji trzeba tą linijkę wsadzić do console.log by sie wyświetlił wynik
policzSumeKasy(10,20,30);*/

console.log(policzSumeKasy(10,20,30));


console.log('W głównym programie po wykonaniu funkcji suma kasy: ' + sumaKasy);