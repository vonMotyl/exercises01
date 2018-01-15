

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
                success: function (data) {
                    data.forEach(function(element){
                      $('div:last').after('<div>User ID: ' + element.id + '<br> User Name: ' + element.username + '<br> User email: ' + element.email + '<br><br>');  
                    });    
                },
                error: function (response) {
                    console(response.responseText)
                }
            });
        }
    });
})
