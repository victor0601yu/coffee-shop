/** @type {import('jquery')} */

$(function() {

    var spy = new Gumshoe('.navbar-nav .nav-link', {
        offset: 400,
    });

    var scroll = new SmoothScroll('.navbar-nav .nav-link', {
        speed: 1000,
        speedAsDuration: true
    });

    $('.navbar .nav-btn').on('click', function() {
        $('.navbar .navbar-nav').addClass('active');
    });
    $('.navbar a').on('click', function() {
        if($(this).is('.nav-link, .close-btn')){
            $('.navbar .navbar-nav').removeClass('active');
        }
    });

})