$(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        success: function(response) {
            //console.log(response);
            console.log(response);  
            //to jest działanie nie na tabeli (array'u)
        },
        error: function(msg) {
            console.log(msg.statusText);
        }
    });
});
    
    
    
//    http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl
    
    
