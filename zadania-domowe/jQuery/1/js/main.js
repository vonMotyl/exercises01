$("#animation").click(function () {
    $('#rectangle').animate({
        'left': '200px',
        'height': '100px',
        'width': '100px'
    }, 3000, function () {
        $('#rectangle').animate({
            'backgroundColor': '#0000ff'
        }, 5000, function () {
            $('#rectangle').html('<h2>animation complete<h2>');
        });
    });
});
/*
4. Po zakończonej animacji zmień kolor kwadratu na niebieski - animacja
zmiany ma trwać 5 sekund
5. Gdy kwadrat zmieni kolor na niebieski wyświetl wewnątrz niego napis
w nagłówku h2 "Animacja zakończona"

Zadanie podsyłamy z użyciem https://repl.it

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- pamiętaj, że skrypty zawsze podpinamy na końcu, a biblioteka jQuery ma być podpięta powyżej Twojego skryptu.
- bibliotekę jQuery podepnij w wersji zdalnej z serwera CDN.
*/
