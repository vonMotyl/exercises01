
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
