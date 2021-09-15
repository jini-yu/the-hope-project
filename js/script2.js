$(function() {
	//swiper script
		var swiper = new Swiper('.swiper-container', {
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	
	//gnb 나타내기
	$('.m-menu').on('click', function() {
		$('#gnb').slideToggle();
		/*
		slideDown 상태이면 자동으로 slideUp상태가 되고
		slideUp 상태면 자동으로 slideDown 상태가 됨.
		브라우저가 판단
		*/
	});	
	/*$('#gnb').on('click', function(){
		$(this).slideUp();
	});*/	
});







