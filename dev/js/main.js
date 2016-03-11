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
	$( '.js-rateStarts.-size-small' ).rating('create', {
		coloroff: '#e1e6e6',
		coloron:'#47e12d', 
		limit: 5,
		size: '1.0em',
		cursor: 'pointer'
	});	
	$( '.js-rateStarts.-size-big' ).rating('create', {
		coloroff: '#e1e6e6',
		coloron:'#47e12d', 
		limit: 5,
		size: '1.3em',
		cursor: 'pointer'
	});	
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
		console.log(sum);

		if($(window).scrollTop()>=sum) { 
		  $('.js-sidebar').addClass( '-type_fixed' );
		  console.log('add');
		}
		else {
		  $('.js-sidebar').removeClass( '-type_fixed' );
		  console.log('remove');
		}
	}
	fixMenu();
  $(window).scroll(fixMenu);
}



