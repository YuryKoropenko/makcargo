$(document).ready(function() {
	if ($(window).width() > 1000) {
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
	}
	if ($(window).width() < 1000) {
		/*nav*/
		$('.nav__link').on('click',function() {
			$('.nav__link').css({
				'text-align': 'left'
			});
			$('.phone').css({
				'text-align': 'left'
			});
			$(this).parent().children('.sub-nav').stop(true, false).fadeToggle();
			return false;
		});
		$('.sub-nav__item').on('click' ,function() {
			$(this).children('.sub-nav__link').toggleClass('sub-nav__link-active');
			$(this).children('.sub-nav').stop(true, false).fadeToggle();
			return false;
		});

		/*mob-nav*/
		$('.nav__button a').on('click', function() {
			$(this).toggleClass('close');
			$('.page__bg').fadeToggle();
			$('.mob-nav__wp').slideToggle();
			return false;
		});
	}




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
	$('.calculation__value').on('input', function() {
		if($(this).val() != '') {
			$(this).parent().children('.calculation__text').show();
		} else {
			$(this).parent().children('.calculation__text').hide();
		}
	});

	/*вопросы*/
	$('.questions__item-name').on('click', function() {
		$(this).children('.plus-wp').children('.plus').toggleClass('minus');
		$(this).parent().children('.questions__item-block').slideToggle();
	});

	/*наши услуги*/
	var ht = $('.our-services__left').height();
	$('.our-services__right').height(ht + 196);

});