$(function() {
    var paragrafy = $('body').find('p').eq(1);
    console.log(paragrafy);
});


$(function() {
    $('body').find('p').eq(1).css('color', 'green');
    
    
//    pętla each - dodająca do paragrafów klasę z kolejnym numerem
    
    $('p').each(function(index, element){
        $(this).addClass('paragraf-'+index);
    });
});

