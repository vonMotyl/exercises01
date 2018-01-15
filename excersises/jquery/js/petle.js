//        
//        
//for(licznik; warunek wykonwywania; zmiana licznika) {} // licznik może być poza funkcją

var zwierzaczki = ['żyrafka', 'słonik', 'zeberka']


//while(true) {
//    
//}
var licznik = 0;

while (licznik < zwierzaczki.length) {
    console.log(zwierzaczki[licznik]);
    ++licznik;
}


//for
for (var i = 0; i < zwierzaczki.length; i++) {
    console.log(zwierzaczki[i]);
}

//do {

//} while()
do {
    console.log(zwierzaczki[licznik]);
    licznik++;
} while (licznik < zwierzaczki.length);



//    .forEach
zwierzaczki.forEach(function (element, index) {
    console.log(element);
});
