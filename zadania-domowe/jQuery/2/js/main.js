$("#change").click(function () {
    $('p:last').insertBefore('p:first');
});


$("#revert").click(function () {
    $('p:first').insertAfter('p:last');
});