'use strict'

var jsonOsoby = {
    "osoby": [
        {
            imie: 'Krystian',
            nazwisko: 'Dziocha',
            wzrost: 180,
            zainteresowania: [
                {
                    nazwa: 'podróże'
                },
                {
                    nazwa: 'piłka nożna'
                }
            ]
        },
        {
            imie: 'Stefano',
            nazwisko: 'Pseudopotacie',
            wzrost: 169,
            zainteresowania: [
                {
                    nazwa: 'podróże'
                },
                {
                    nazwa: 'gotowanie'
                }
            ]
        },
        {
            imie: 'WUNSZ',
            nazwisko: 'Dziocha',
            wzrost: 666,
            zainteresowania: [
                {
                    nazwa: 'podróże'
                },
                {
                    nazwa: 'gotowanie'
                },
                {
                    nazwa: 'filozofia'
                }
            ]
        },
    ]
}

console.log(jsonOsoby);

jsonOsoby.osoby[0].zainteresowania.forEach(function (element, index) {
    console.log(element.nazwa)
});



/*forEach'a można robic w nawiasach kwadratowych (czyli w tablicach!)
A sam forEach jest w stanie wyciągnąć elementy, które są w danej tabeli pod daną osobą, Ponadto możesz się odwołać do konkretnej osoby wpisując w kwadratowy nawias nr przy *.osoby[o tutej]*/

jsonOsoby.osoby.forEach(function (element, index) {
    console.log("imie delikwenta: " + element.imie + " wzrost: " + element.wzrost)
});
