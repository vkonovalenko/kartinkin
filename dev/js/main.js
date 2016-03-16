/**
 *  Authors: Daria Kaidalova, Alexander Lyashenko, Evgeny Makeev
*/
$(function() {
 like();
 initRate();
 changePage();
 selectView();
 initPlaceholder();
 initStyler();
 initCycle();
 scrollUp();
 initFancybox();
 makeFixedSidebar();
});

function like() {
	$( '.js-like' ).click(function() {
		$(this).toggleClass( '-state_liked' );
	});
}

function initRate() {
	$( '.js-rateStarts' ).one( 'click', '.js-rateStarts__item', function(){
		$(this).parents( '.js-rateStarts' ).addClass( '-state_filled' );
		fillStars($(this));
	});
	$( '.js-rateStarts' ).on( 'mouseover', '.js-rateStarts__item', function(){
		if(!$(this).parents( '.js-rateStarts' ).hasClass( '-state_filled' )) {
			fillStars($(this));
		}
	});
	$( '.js-rateStarts' ).on( 'mouseout', '.js-rateStarts__item', function(){
		if(!$(this).parents( '.js-rateStarts' ).hasClass( '-state_filled' )) {
			clearStars($(this));
		}
	});
	
}

function fillStars(star) {
	star.nextAll( '.js-rateStarts__item' ).removeClass( '-state_filled' ); 
	star.addClass('-state_filled').prevAll('.js-rateStarts__item').addClass('-state_filled');
}

function clearStars(star) {
	star.removeClass( '-state_filled' ).siblings( '.js-rateStarts__item' ).removeClass( '-state_filled' ); 
}

function selectView() {
	$( '.js-panelView' ).on( 'click', '.js-panelView__number', function() {
		$(this).parent().addClass( '-state_active' ).siblings().removeClass( '-state_active' );
	});
}

function changePage() {
	$( '.js-pagination__number' ).click(function(e) {
		e.preventDefault();
		$(this).addClass( '-state_active' ).siblings().removeClass( '-state_active' );
	});
}

function initPlaceholder() {
	$( 'input, textarea' ).placeholder({ customClass: 'b-placeholder' });
}

function initStyler() {
	$('select, input[type=checkbox]').styler();
}

function initCycle() {
	$('.js-slider__slides').cycle({
		fx: 'scrollHorz',
		slides: '.js-slider__slide',
		slideActiveClass: '-state_active',
		prev: '.-type_prev .js-slider__arrow',
		next: '.-type_next .js-slider__arrow',
		timeout: 15000,
		pauseOnHover: true,
		swipe: false,
		paused: true,
		slideNum: 3
	});
	  
  $('.js-slider__slides').cycle('goto', $('#js-slider').data('page'));
}

function scrollUp() {
  function windowScrollUp() {
	  var windowH, pageH, diffH, slideH, headerH; 

	  windowH=$(window).height();
	  pageH=$(document).height();
	  diffH=pageH-windowH;

	  headerH=$('.js-siteHeader').height();
	  diffHScroll=headerH + 300;

	  if(diffH>120 && $(window).scrollTop()>diffHScroll) { 
	    $('.js-scrollUp').addClass( '-state_active' );
	  }
	  else {
	    $('.js-scrollUp').removeClass( '-state_active' );
	  }
      
  }

  $('.js-scrollUp').click(function(){
    $( 'body' ).animate({ 'scrollTop' : 0 }, 'slow' );
  });

  windowScrollUp();
  $(window).scroll(windowScrollUp);
}

function initFancybox() {
	$('.js-popupLink').fancybox({
		tpl: {
		  wrap : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin b-customFancybox"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
		  closeBtn : '<a title="Close" class="fancybox-close" href="javascript:;"></a>'
		},
		helpers : {
		  overlay : {css : {'background' : 'rgba(0, 0, 0, 0.8)'}, closeClick : true, speedOut: 200, closeEffect : 'elastic', openEffect : 'elastic'}
		}
	});
}

function makeFixedSidebar() {
	function fixMenu() {
		var headerH, searchH, panelH, brcrH, sum;

		headerH = $('.js-siteHeader').height();
		searchH = $('.js-siteSearch').height();
		panelH = $('.js-panel').height();
		brcrH = $('.js-breadCrumbs').height();

		sum = headerH + searchH + panelH + brcrH;

		if($(window).scrollTop()>=sum) { 
		  $('.js-sidebar').addClass( '-type_fixed' );
		}
		else {
		  $('.js-sidebar').removeClass( '-type_fixed' );
		}
	}
	fixMenu();
  $(window).scroll(fixMenu);
}



