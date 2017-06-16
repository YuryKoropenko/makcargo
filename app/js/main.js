$(window).resize(function(){
	window.setTimeout('location.reload()', 500);
});
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

	/*tabs-blokc*/
	$('.urid-tab').on('click', function() {
		$('.busines-block__item').removeClass('busines-block__item-active');
		
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

	$('.seo__button a').on('click', function() {
		$('.seo .mob-seo-text').addClass('hidden');
		$('.seo p').show();
		return false;
	});

	$('.mob-tabs__item').on('click', function() {
		$(this).toggleClass('mob-tabs__item-active');
		$('.content').toggle();
	});

	$('.mob-content-button a').on('click', function() {
		$('.mob-content-text').hide();
		$('.content__wp').show();
		return false;
	});

	$('.license__img').hover(function() {
		$(this).children('.license__img-hover').css('opacity', '1');
	}, function() {
		$(this).children('.license__img-hover').css('opacity', '0');
	});

	$('.reviews__img').hover(function() {
		$(this).children('.license__img-hover').css('opacity', '1');
	}, function() {
		$(this).children('.license__img-hover').css('opacity', '0');
	});

	$('.phone__feedback').on('click', function() {
		$('.popup-bg').fadeIn();
		$('.feedback-popup').fadeIn();
		return false;
	});
	$('.index-links__link-calculation').on('click', function() {
		$('.popup-bg').fadeIn();
		$('.calculation-popup').fadeIn();
		return false;
	});
	$('.calculation__button').on('click', function() {
		$('.popup-bg').fadeIn();
		$('.calculation-popup').fadeIn();
		return false;
	});

	$('.popup-bg').on('click', function() {
		$(this).fadeOut();
		$('.feedback-popup').fadeOut();
		$('.calculation-popup').fadeOut();
		$('.feedback-popup-ok').fadeOut();
	});

	$('.feedback-popup__close').on('click', function() {
		$('.popup-bg').fadeOut();
		$('.feedback-popup').fadeOut();
		$('.calculation-popup').fadeOut();
		$('.feedback-popup-ok').fadeOut();
	});

	/*ok*/
	$('.feedback-popup__button button').on('click', function() {
		$('.popup-bg').fadeIn();
		$('.feedback-popup-ok').fadeIn();
		return false;
	});

	/*lic-popu*/
	$('.license__img').on('click', function() {
		$('.bg-popup').fadeIn();
		$(this).parent().children('.lic-popup').fadeIn();
	});
	$('.reviews__img').on('click', function() {
		$('.bg-popup').fadeIn();
		$(this).parent().children('.lic-popup').fadeIn();
	});

	/*tabs*/
	$('.urid-tab').on('click', function() {
		$('.busines-block__item').removeClass('busines-block__item-active');
		$(this).addClass('busines-block__item-active');
		$('.fac-block').hide();
		$('.urid-block').show();
	});
	$('.fiz-tab').on('click', function() {
		$('.busines-block__item').removeClass('busines-block__item-active');
		$(this).addClass('busines-block__item-active');
		$('.fac-block').hide();
		$('.fiz-block').show();
	});

	/*tabs-1*/
	$('.urid-tab-1').on('click', function() {
		$('.busines-block__item-1').removeClass('busines-block__item-1-active');
		$(this).addClass('busines-block__item-1-active');
		$('.fac-block-1').hide();
		$('.urid-block-1').show();
	});
	$('.fiz-tab-1').on('click', function() {
		$('.busines-block__item-1').removeClass('busines-block__item-1-active');
		$(this).addClass('busines-block__item-1-active');
		$('.fac-block-1').hide();
		$('.fiz-block-1').show();
	});

	/*bg-popup*/
	$('.bg-popup').on('click', function() {
		$('.bg-popup').fadeOut();
		$('.lic-popup').fadeOut();
	});

	/*наши услуги*/
	var ht = $('.our-services__left').height();
	$('.our-services__right').height(ht + 196);

	$('.phone-input').mask("(999) 999-9999");
});