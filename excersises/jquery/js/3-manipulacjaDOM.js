$(function () {
    //   pobieranie tekstu 
    var tekstParagrafuPierwszego = $('p:first');
    console.log(tekstParagrafuPierwszego.text());

    console.log(tekstParagrafuPierwszego.html());

    //    dodawanie HTML

    $('.paragraf-next').html($('paragraf-next').html() + 'To jest <strong>paragraf</strong> z dodanym HTML');


    //    dodanie treści na końcu selektora
    $('.paragraf-next').append('Treść na końcu selektora');

    //    dodanie treści na początku selektora

    $('.paragraf-next').prepend('Treść na początku selektora ');

    $('.paragraf-next').after('Treść za selektorem ');

    $('.paragraf-next').before('Treść przed selektorem ');

    //$('#paragraf').remove(); usuwa całość

    $('#paragraf').empty(); // usuwa zawartość

    //dodawanie CSS
    $('h3').css({
        'color': 'red',
        'font-size': '5em'
    });
    
    // dodanie klasy css
    $('h1').addClass('klasa-testowa druga-klasa');
    $('h1').removeClass('WONT'); //jak zostawisz puszte to usunie wszystkie klasy
    
    //dodanie atrybutu
    $('h1').attr('nazwa-atrybutu', 'wartosc-atrybutu');
    
    $('.paragraf-next').attr('id', 'id-1');

});
