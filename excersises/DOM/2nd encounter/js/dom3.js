'use strict'

var istniejacyWezel = document.getElementById('parFirst').children[2];// ten numerek wpływa gdzie zainstalujesz paragraf
console.log(istniejacyWezel);

var  newElement = document.createElement('p'); //stwórz nowy element p

var newElementContent = document.createTextNode('To jest nowy paragraf');// stworzenie nowego tekstu do paragrafu.

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

console.log(newElement); 

istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);


var parFirstDiv = document.getElementById('parFirst');

parFirstDiv.replaceChild(newElement, istniejacyWezel);




/*var linkBreak = document.getElementsByTagName('a');
console.log(linkBreak);*/
/*
var enter = document.createElement('br');


linkBreak.appendChild('enter');*/

//var allLinks = document.getElementsByTagName('a');
//console.log(allLinks);
//
//
//console.log(br);


/*BR musi być w pętli by dodało do każdego loopa następny BR, jakby był na zewnątrz to byłby traktowany jak jeden element*/
//for(var i = 0; i < allLinks.length; i++) {
//    var br = document.createElement('br');
//    allLinks[i].removeAttribute('class');
//    allLinks[i].parentElement.insertBefore(br, allLinks[i].nextSibling);
//}
/*removeAttribute - usuwa clasę, parentElement.insertBefore targetuje wszystkich rodziców linków a za którymi wstawia się BR, a że chcemy wstawić po to musimy dodać do stargetowanych linków (allLinks[i]) atrybut .nextSibling, który mówi, że wkleić ma BR po linku "allLinks"*/


var allLinks = document.querySelectorAll('a'); //dla forEach, ponieważ to nie działa z getElementsByTagName

allLinks.forEach(function(element){
    var br = document.createElement('br'); //tworzy br w loopie
    element.removeAttribute('class'); //usuwa klase
    element.parentElement.insertBefore(br, element.nextSibling); //dodaje br pod każdym linkiem.
});

/*allLinks.forEach(function(br){
    console.log(link);
});*/


