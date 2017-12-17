'use strict'

var mainHeader = document.getElementById('main-header'); // pobieramy h1

mainHeader.innerHTML = 'Treść nagłówka';


var p = document.querySelector('header').children[0];
console.log(p); // z tagiem
console.log(p.innerHTML); // bez taga p
console.log(p.outerHTML); //wszystko pokazuje w linii
console.log(p.innerText); // wycina wszystkie tagi, pobiera tylko tekst
console.log(p.outerText);


var link = document.getElementsByClassName('link')[0];

link.href = "http://reddit.com/" //podmienia linki po kropce (nadpisuje)

link.className += ' nowa-klasa' // pamiętaj o spacji, tak można dodać
//link.className = link.className + ' nowa-klasa'; //to samo co wyżej

mainHeader.style.color = '#11aa22';

mainHeader.style.background = '#0076ff';