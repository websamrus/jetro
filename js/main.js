$(function() {

    // $('.slider__inner').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    //     nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    //     asNavFor: '.slider__mini',
    //     // dots: true,
    //     fade: true,

    // });

    // $('.slider__mini').slick({
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    //     dots: false,
    //     arrows: false,
    //     asNavFor: '.slider__inner',
    //     centerMode: true,
    //     focusOnSelect: true,
    //     infinite: false,
    // });

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__mini',
        centerMode: true,
        speed: 1000,
        //focusOnSelect: true,
        //infinite: true,
        //adaptiveHeight: true,

        //useTransform: true,
        //infinite: true,
    });
    $('.slider__mini').slick({
        slidesToShow: 5,
        slidesToScroll: 1,


        asNavFor: '.slider__inner',
        arrows: false,
        dots: false,
        //centerMode: true,
        variableWidth: true,

        focusOnSelect: true,
        infinite: true,
        speed: 1200,

    });

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