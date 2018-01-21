//var przyciski = document.querySelectorAll('.btn');
var przyciski = document.getElementsByClassName('btn');

console.log(przyciski);

/*for(var i = 0; i < przyciski.length; i++){
    //console.log(przyciski[i]);
    przyciski[i].addEventListener('click', function(){
     console.log(this.innerHTML);
    });   
};*/


//minus jeden bo indeks zaczyna się od 0 a nie od 1 (as in 0-11 not 1-12)
for(var i = przyciski.length -1; i > 0; i--){
    //console.log(przyciski[i]);
    przyciski[i].addEventListener('click', function(){
     console.log(this.innerHTML);
    });   
};




/*
przyciski.addEventListener('click', function (){
   console.log("Kliknąłem przycisk"); 
});
*/
