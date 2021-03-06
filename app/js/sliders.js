$(document).ready(function() {
	$('.index-slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
		fade: true
	});

	$('.promotions__slider').slick({
		arrows: true,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: '150px',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				centerMode: false,
				centerPadding: '0px'
			}
		}
		]
	});

	$('.airlines__slider').slick({
		arrows: false,
		slidesToShow: 7,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				arrows: true
			}
		}
		]
	});

	$('.mob-our-services__top').slick({
		asNavFor: '.mob-our-services__bottom'
	});
	$('.mob-our-services__bottom').slick({
		asNavFor: '.mob-our-services__top',
		arrows: false
	});
});