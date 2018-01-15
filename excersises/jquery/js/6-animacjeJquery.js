$(function () {
    $('p').hide('slow').show(3000, koniecAnimacji);

    $('h1').fadeOut(1500).fadeIn(1500);
    
    $('h2').slideUp(1500).slideDown(1500);
    
    // zaloguje 3 razy bo są 3 elementy p
    function koniecAnimacji() {
        console.log('koniec')
    }
   
    $('h3').animate({
        'font-size': '3em',
        'margin-left': '100px'
    }, 5000);
    
});


