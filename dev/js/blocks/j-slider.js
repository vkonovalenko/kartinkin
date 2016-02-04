/**
* @subsection Slider
*/
function initCycle2() {
  var isPaused = $('html').hasClass('-device_mobile');
  
 $('.j-slider__slides').cycle({
    fx: 'fade',
    slides: '.j-slider__slide',
    slideActiveClass: '-type_active',
    pager: '.j-slider__menu',
    pagerTemplate: '<div class="b-slider__menuItem j-slider__menuItem"><div class="b-slider__menuLayer -type_one"></div><div class="b-slider__menuLayer -type_two"></div><div class="b-slider__menuLayer -type_three"></div><a href="#" class="b-slider__menuLink">0{{slideNum}}</a></div>',
    pagerActiveClass: '-type_active',
    timeout: 15000,
    pauseOnHover: true,
    swipe: true,
    paused: isPaused
  }).on('cycle-after', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
    BB.navigate('ourClients/' + $(incomingSlideEl).index()); 
 });
}
