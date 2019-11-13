$(function() {

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        // asNavFor: '.slider__mini',
        dots: true,
        infinite: false,
        focusOnSelect: true,
    });

    // $('.slider__mini').slick({
    //     slidesToShow: 6,
    //     // slidesToScroll: 0,
    //     dots: false,
    //     arrows: false,
    //     asNavFor: '.slider__inner',
    //     centerMode: true,
    //     focusOnSelect: true,
    //     infinite: false,
    // });

});




// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
// });