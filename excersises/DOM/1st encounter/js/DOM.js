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

*/


var parFirst = document.getElementById('parFirst');
console.log(parFirst);


var linki = document.getElementsByClassName('superlink');
console.log(linki);

var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

/*można dodać więcej idków ale i tak wybierze pierwszy który napotka*/
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


