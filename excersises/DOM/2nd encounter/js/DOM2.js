/*
console.log(document);

console.log(document.documentElement);

console.log(document.head);

console.log(document.body);

console.log(window);

console.log(window.innerHeight);

console.log(window.innerWidth);

console.log(window.Infinity);

console.log(window.outerHeight);

console.log(window.outerWidth);




var parFirst = document.getElementById('parFirst');
console.log(parFirst);


var linki = document.getElementsByClassName('superlink');
console.log(linki);

var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

można dodać więcej idków ale i tak wybierze pierwszy który napotka
var divPoID = document.querySelector('#parSecond, #parFirst');
console.log(divPoID);

var linkiPoSelektorze = document.querySelectorAll('.link');
console.log(linkiPoSelektorze);


//od razu odpal okrągły nawias i średnik na końcu
linkiPoSelektorze.forEach(function(link){
    console.log(link);
});


for(var i = 0; i < linkiPoSelektorze.length; i++) {
    console.log(linkiPoSelektorze[i]);
}


*/



var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
/*pokazuje parenta tego co własnie wyszukujemy*/
console.log(pierwszyDiv.parentNode);

console.log(pierwszyDiv.parentElement);

console.log(document.documentElement.parentNode); //#document
console.log(document.documentElement.parentElement); //null

/*to zwraca nam wszystko na stronie (nawet entery które sami wprowadziliśmy)*/
console.log(pierwszyDiv.childNodes);

/*to zwraca tylko rzeczki z znacznikami HTML plus jest to tablica*/
console.log(pierwszyDiv.children[0]);

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

/*Element zwraca tylko znaczniki HTMLowe

Node zwraca syćko w sensie razem z enterami eg*/

var pierwszyDivChild = pierwszyDiv.children[1];
console.log(pierwszyDivChild.nextElementSibling);


var childsNodesDiva = pierwszyDiv.childNodes;
childsNodesDiva.forEach(function(element) {
    console.log(element.nodeType);
    if(element.nodeType == 1) {
        console.log(element);
    }
});










