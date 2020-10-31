$(document).ready(function () {

    $(window).bind('scroll', function () {

        var navHeight = 70; // custom nav height

        ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop'): $('nav').removeClass('goToTop');

    });

    var typed = new Typed('.element', {
        // Waits 1000ms after typing "First"
        strings: ['Professional ^1000 Web Designer.',
            'Professional Web Developer.',
        ],
        typeSpeed: 100,
        startDelay: 100,
        loop: true,
        backSpeed: 40,
    });


});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: 900,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

// init Isotope
var $grid = $('.gallery').isotope({
    // options
});
// filter items on button click
$('.gallery-filter').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
    $(this).addClass('active').siblings().removeClass('active')
});
AOS.init({
    duration: 400
});