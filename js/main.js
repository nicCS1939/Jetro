$(document).ready(function(){
    $('.slider__inner1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__inner2'
      });
      $('.slider__inner2').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider__inner1',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
         {
            breakpoint: 984,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 660,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      });

    $('.header__menu-btm').on('click', function(){
      $('.header__inner ul').slideToggle();
    });
});

