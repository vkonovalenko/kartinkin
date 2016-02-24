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
	$('select').styler();
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
    swipe: true,
    slideNum: 3
  });
}

function scrollUp() {
  function windowScrollUp() {
  var windowH, pageH, diffH, slideH, headerH; 

      windowH=$(window).height();
      pageH=$(document).height();
      diffH=pageH-windowH;

      headerH=$('.js-siteHeader').height();
      diffHScroll=headerH;
 
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

