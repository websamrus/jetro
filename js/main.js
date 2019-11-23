$(function() {
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__mini',
        centerMode: true,
        speed: 1000,
        responsive: [{
            breakpoint: 620,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
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
        responsive: [{
                breakpoint: 940,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 5,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 4,
                    variableWidth: false,
                }
            },
        ]
    });



    $('.header__menu-burger').on('click', function() {
        $('.header__menu__list').slideToggle();
    });

    $('.slider, .feature').on('click', function(e) {
        if ($('.header__menu__list').css('display') == 'block' &&
            $('.header__menu-burger').css('display') == 'block' ){
            $('.header__menu__list').slideToggle();
            $('.header__menu-burger > div:first-child+div').toggleClass('menu__burger-none');
            $('.header__menu-burger > div:first-child').toggleClass('menu__burger-first');
            $('.header__menu-burger > div:last-child').toggleClass('menu__burger-last');
        }
    });

    $('.header__menu-burger').on('click', function() {
        $('.header__menu-burger > div:first-child+div').toggleClass('menu__burger-none');
        $('.header__menu-burger > div:first-child').toggleClass('menu__burger-first');
        $('.header__menu-burger > div:last-child').toggleClass('menu__burger-last');
    });


    $('.contact__icon').jrumble({
        x: 1,
        y: 1,
        rotation: 1
        });
       $('.contact__icon').hover(function(){
       $(this).trigger('startRumble');
       }, function(){
       $(this).trigger('stopRumble');
       });



});