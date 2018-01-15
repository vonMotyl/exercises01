'use strict';

/*
class User  {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
}

var milosz = new User ('Miłosz', 'Kowalski')
*/

$(function () {
    //   alert('test');

    
    //pobieranie elementu po znaczniku
    //    document.getElementsByTagName(p) odpowiednik w JS
    var paragrafy = $('p');
    console.log(paragrafy);
    
    //pobieranie po ID
    var paragrafById = $('#paragraf');
    console.log(paragrafById);
    
    var paragrafByClassName = $('.paragraf-next');
    console.log(paragrafByClassName);
    
    });
