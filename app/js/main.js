$(document).ready(function() {
	/*nav*/
	$('.nav__item').hover(function() {
		$(this).children('.nav__link').addClass('nav__link-active');
		$(this).children('.sub-nav').stop(true, false).fadeIn();
	}, function() {
		$(this).children('.nav__link').removeClass('nav__link-active');
		$(this).children('.sub-nav').stop(true, false).fadeOut();
	});

	$('.sub-nav__item').hover(function() {
		$(this).children('.sub-nav__link').addClass('sub-nav__link-active');
		$(this).children('.sub-nav').stop(true, false).fadeIn();
	}, function() {
		$(this).children('.sub-nav__link').removeClass('sub-nav__link-active');
		$(this).children('.sub-nav').stop(true, false).fadeOut();
	});

	/*index-links*/
	$('.index-links__link').hover(function() {
		$(this).children('span').stop(true, false).fadeIn();
	}, function() {
		$(this).children('span').stop(true, false).fadeOut();
	});

	/*focus*/
	$('.calculation__city').focus(function() {
		$(this).parent('.calculation-geo').addClass('cg-active');
	}).blur(function() {
		$(this).parent('.calculation-geo').removeClass('cg-active')
	});
});