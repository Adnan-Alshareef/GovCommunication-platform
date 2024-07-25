$(window).scroll(function() {
    if (window.pageYOffset >= 40) {
        $('header .navbar-gip').addClass('floatingNav');

    } else {
        $('header .navbar-gip').removeClass('floatingNav');
    }
});