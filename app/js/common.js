$(function() {

	$(".tourists").owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});

	$(".scroll").click(function() {
		$('html, body').animate({
			scrollTop: $(".nav").offset().top
		}, 2000);
	});
   
	$(window).scroll(function() { 
		if ($(this).scrollTop() > $(this).height()) {
  			$(".top").addClass("active-top");
  		} else {
  			$(".top").removeClass("active-top");
  		}
	});

	$(".top").click(function() {
		$("html,body").stop().animate({scrollTop: 0}, "slow", "swing");

	});

});
