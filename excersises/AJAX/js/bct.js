var currency = $('#waluta').val();
var value = $('#kasa').val();

$(function () {
    $.getJSON('https://blockchain.info/pl/ticker', function (data) {
        $.each(data, function (klucz, wartosc) {
            $('#waluta').append('<option value=' + klucz + '">' + klucz + "</option>");
        });
    });
});

$('#button').click(function () {
pobierzBTC(this.currency, this.value);
console.log(pobierzBTC);
});

function pobierzBTC(currency, value) {
    $.ajax({
        url: 'https://blockchain.info/tobtc?currency=' + this.currency + '&value='+ this.value,
        success: function(response) {
            $('#btc').text(response);
        },
        error: function(response) {
            console.log(response);
        }
    })

}


//
//$('#waluta')change(function({
//    alert($'waluta').val();
//}));
//        klucz.append('<option/>' + klucz);
//        this.currency.append('<option/>' + klucz);
