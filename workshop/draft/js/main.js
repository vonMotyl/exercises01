console.log( "PI = " + Math.PI );
//console.log( ”cos(0) = " + Math.cos(0));

console.log( "random = " + Math.random() );


//var liczba = 100;
//var wynik = ( liczba < 0 ) ? -1 : 1;
//console.log( wynik );


var i = 0;
while( true ) {
/* pętla while wykonywała by się w nieskończoność (ponieważ warunek tej pętli był by
zawsze prawdziwy), gdyby nie znajdująca się wewnątrz instrukcja break (dzięki czemu
pętla będzie wykonywana dopóki wartość zmiennej i nie osiągnie co najmniej wartości 9) */
console.log ( "napis [i = " + i + "] " );
if ( i++ >= 10 ) { break };
}


for( var i = 1 ; i <= 20 ; i++ ) {
if ( i % 2 != 0 ) { continue };
/* jeśli wartość zmiennej i nie jest podzielna przez dwa to przejdź do kolejnej iteracji
jeśli jest podzielna przez dwa to wypisz tą iterację */
console.log ( i + " " );
}


var elementParent = document.getElementById( "parFirst" ).parentNode;

console.log( elementParent );
console.log( document.getElementById( "parFirst" ).children );
console.log( document.getElementById( "parFirst" ).childNodes );
console.log( document.getElementById( "parFirst" ).childNodes[1] );
console.log( document.getElementById( "parFirst" ).firstChild );
console.log( document.getElementById( "parFirst" ).lastChild );



var btn = document.createElement( "button" ); // tworzy element <button>
var textBtn = document.createTextNode( "Click me" ); // tworzy tekst
var classAtr = document.createAttribute( "class" ); // tworzy atrybut class
classAtr.value= "btn"; // ustawia wartość dla atrybutu class
document.body.appendChild( btn ); // dodaj element do elementu <body>
btn.appendChild( textBtn ); // dodaj tekst do elementu <button>
btn.setAttributeNode( classAtr ); // dodaj atrybut class do elementu <button>
btn.setAttribute( "href" , "#" ); // dodaj nowy atrybut wraz z wartością do elementy <button>

btn.removeAttribute( "class" );
document.body.removeChild( btn );



/*var myPlaces = ['Paris', 'New York', 'Barcelona'];
var friendPlaces = ['Rome', 'Chicago', 'Paris'];

for (var i = 0; i < myPlaces.length; i++) {
    console.log(myPlaces[i]);
  
  for (var j = 0; j < friendPlaces.length; j++) {
        console.log(friendPlaces[j]);
    
    if (myPlaces[i] === friendPlaces[j]) {
    			console.log('Match: ' + myPlaces[i]);
				}
    }
}*/





//var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
//
//var currentCard = 'Heart';
//
//while (currentCard !== 'Spade') {
//  console.log(currentCard);
//  
//  var randomNumber= Math.floor(Math.random() * 4);
//  
//  currentCard = cards [randomNumber];
//}





/*let myPlaces = ['here', 'there', 'somewhere'];
let friendPlaces = ['under there', 'not here', 'somewhere'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  console.log(myPlaces[myPlacesIndex]);
  
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
  console.log(friendPlaces[friendPlacesIndex]);
  }
}*/









