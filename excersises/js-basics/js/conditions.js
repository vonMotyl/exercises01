'use strict'

var wzrostMateusz = 190;
var wzrostOlgi = 160;

/*Warunek if*/
/*

if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa")
}
*/

/*Warunek if else*/
/*

if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa")
} else {
    console.log("Olga nie jest niższa");
}
*/


if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa")
} else if (wzrostOlgi == wzrostMateusz) {
    console.log("Olga jest tak wysoka jak Mateusz");
} else {
    console.log("Olga jest wyższa");
}


var kolor = "dziwny";

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
        break;
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('inny kolor');    
}

/*Pętla for*/

for (var i = 1; i < 10; ++i){
    console.log(i);
}

console.log("--------------------------------------------------------");


/*powtórzyć pętle*/
var liczby = [1, 2, 0, 10, 12, 100, 55];

for (var i = 0; i < liczby.length; i++) {
    console.log(liczby[i]); /*to jest zmienna lokalna tylko w obrębie tej pętli*/
}
console.log("--------------------------------------------------------");

//1,2,3,4,
var i = 1;
for (; i < 5;){
    console.log(i++);
}

console.log("--------------------------------------------------------");

//2,3,4,5
for (var i = 0; i < 5;){
    console.log(++i);
}

console.log("--------------------------------------------------------");


var tablica = ['Adam', 'Ewa', 'Kacper'];

tablica.forEach(function(element, index) {
    console.log("Element z indexem " + index+ " ma wartość " + element);
});



//while pętelka
var it = 10;
var flaga = true;
while(flaga) {
    console.log(it);
    if(it < 5) {
        flaga = false;
    }
    it--;
}

//wchodzimy z trójką z poprzedniej pętli
do {
    console.log('Pętla do...while');
    it--;
} while (it > 0);



console.log("--------------------------------------------------------");


var a = 0;
while(a < 10) {
    console.log(++a);
    if (a == 5) {
        break;
    }
}

console.log("--------------------------------------------------------");

for(var i = 0; i<4; i++) {
    for(var j = 0; j < 4 ; j++) {
        console.log(i +" "+ j);
        if(j==2){
           continue;
           }
        console.log(i+j);
    }
    
}

console.log("--------------------------------------------------------");





