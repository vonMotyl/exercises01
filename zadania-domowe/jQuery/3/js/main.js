var sum = 0;

$("#count-sum").click(function () {
    $('.salary').each(function(){
        sum += parseFloat($(this).text());
        $('#sum').text(sum);
    });
});


//Zaprogramuj przycisk #count-sum aby po kliknięciu pobrał wypłaty wszystkich pracowników i je zsumował.
//Uzyskany wynik wyświetl w elemencie o ID #sum.
//
//Zadanie zrób z wykorzystaniem biblioteki jQuery.
//
//Podpowiedzi:
//- oprogramuj zdarzenie "click" przycisku #count-sum
//- pobierz wszystkie wypłaty i za pomocą pętli je zsumuj
//- pobierz element o ID #sum i podmień mu treść na obliczoną sumę