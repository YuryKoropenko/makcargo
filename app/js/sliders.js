$(document).ready(function() {
	$('.index-slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
		fade: true
	});

	$('.promotions__slider').slick({
		arrows: false,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: '150px'
	});
});