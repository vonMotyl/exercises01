//var naglowek = document.getElementById('first');
//
//naglowek.addEventListener('click', function() {
//    alert('kliknięto w h1');
//})

//
//klick w czystym JS
//function klikH1() {
//    alert('kliknieto w h1')
//};
//
//naglowek.addEventListener('click', 'klikH1');
//naglowek.removeEventListener('click', 'klikH1');



//funkcji anonimowej nie można odpiąć


// zaznaczą sie wszystkie  p na czerwono
//$(function(){
//   $('p').click(function(){
//       $('p').css('color', 'red');
//   });
//});



$(function () {
    function klikH1() {
        alert('kliknięto w H1');
        $('h1').off('click', klikH1);
    }
    $('p').click(function () {
        $(this).css('color', 'red');
    });
    // wyłączenie i włączenie zdarzenia
    //    $('h1').on('click', klikH1);

    $('h1').on({
        'click': klikH1,
        'mouseover': function () {
            $(this).css('color', 'green');
        }
    });
    
    $('h2').hover(function(){
        $(this).css('color', 'yellow');
    }, function () {
        $(this).css('color', '');
    });
});
