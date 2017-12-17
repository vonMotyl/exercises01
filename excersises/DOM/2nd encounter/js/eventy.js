'use strict'


function alarm(event) {
    event.preventDefault(); // zapobiegamy domyślnej akcji, to jest funkcja!
    console.log('kliknięto w link');
    console.log(event.type);
    
}

var secondLink = document.getElementsByTagName('a')[1];

secondLink.onclick = alarm;

var thirdLink = document.getElementsByTagName('a')[2];

thirdLink.addEventListener('click', alarm);


thirdLink.removeEventListener('click', alarm);


thirdLink.addEventListener('click', function(){
    alert('funkcja anonimowa');
});

function klikHeader () {
    console.log('kliknąłeś w Header');
}

document.getElementsByTagName('header')[0].onclick = klikHeader;



function klikH1 (event) {
    event.stopPropagation(); //NAWIAS BO TO FUNKCJA XD i anuluje wszystkie powyższe zdarzenia nałożone na tą funkcje
    console.log('THIS IS ONLY A TEST');
}

document.getElementsByTagName('h1')[0].onclick = klikH1;


