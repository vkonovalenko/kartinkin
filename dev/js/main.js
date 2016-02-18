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
