$(function() {
    //gnb
    $('.m-menu').on('click', function() {
       $('.top-header').slideToggle();
    });
    
    //main-slide
    var swiper = new Swiper(".main-slide", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
    
     //story-slide
    var swiper = new Swiper(".story-slide", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});