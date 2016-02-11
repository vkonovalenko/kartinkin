/**
 *  Authors: Daria Kaidalova, Alexander Lyashenko, Evgeny Makeev
*/
$(function() {
 like();
 initRate();
});

function like() {
	$( '.js-like' ).click(function() {
		$(this).toggleClass( '-state_liked' );
	});
}

function initRate() {
	$( '.js-rateStarts' ).rating('create', {
		coloroff: '#e1e6e6',
		coloron:'#47e12d', 
		limit: 5,
		size: '1.0em',
		cursor: 'pointer'
	});	
}