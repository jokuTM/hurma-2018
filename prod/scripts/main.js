'use strict';

$('document').ready(function() {
});

$('#menu-mobile select').change(function() {
    var local = ['', '#liput', '#tarina', '#speksi'];

    if(local.includes($('#menu-mobile select').val())){
        $('html, body').animate({
            scrollTop: $($('#menu-mobile select').val()).offset().top
        }, 500);
        $('#menu-mobile select').val('');
    }else{
        window.location.href = $('#menu-mobile select').val();
    }
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
