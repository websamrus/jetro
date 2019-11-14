$(function() {
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__mini',
        centerMode: true,
        speed: 1000,
    });

    $('.slider__mini').slick({
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        arrows: false,
        dots: false,
        variableWidth: true,
        focusOnSelect: true,
        infinite: true,
        speed: 1000,
    });

});