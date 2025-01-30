(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3, // Number of items displayed
        loop: true, // Enable looping
        margin: 10, // Space between items
        autoplay: true, // Enable autoplay
        autoplayTimeout: 1000, // Time between transitions (3 seconds)
        autoplayHoverPause: true, // Pause on hover
         //nav: true,Show next/prev buttons
        dots: true, // Show pagination dots

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


});



// lightbox gallery 



$(document).ready(function(){

    $('.buttons').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.image').show(400);
        }else{
            $('.image').not('.'+filter).hide(200);
            $('.image').filter('.'+filter).show(400);
        }

    });

    $('.gallery').magnificPopup({

        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }

    });

});