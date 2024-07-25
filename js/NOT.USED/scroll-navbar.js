var myNav = document.getElementsByClassName("navbar")[0];
$('header .navbar-gip').css("position", "fixed")
$('header .navbar-gip').css("background-color", "transparent")

$(window).scroll(function() {
    if (window.pageYOffset >= 280) {
        myNav.classList.add("scrolled");
    } else {
        myNav.classList.remove("scrolled");
    }
});

$(window).scroll(function() {
    if (window.pageYOffset >= 330) {
        myNav.classList.add("floatingNav");
    } else {
        myNav.classList.remove("floatingNav");
    }
});