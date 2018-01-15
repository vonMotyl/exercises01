//$(function () {
//            $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL / akademia108.pl ', function (data) {
//                // wyswietl w konsoli
//                console.log(data.userName);
//            });
//    });

$(function () {
    $('#przycisk').click(function () {

        $.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {

            $('#lista-uzytkownikow').text('');
/*            data.forEach(function (element, index) {
                $('#lista-uzytkownikow').append(element.username + '<br>');
            });*/
            
            for(var i=0; i<data.length; i++) {
                $('#lista-uzytkownikow').append(data[i].username + '<br>');
            }
                
        });
    });
});
