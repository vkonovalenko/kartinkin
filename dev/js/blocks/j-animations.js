/*Section "Type-Home" Animations*/
$(document).ready(function(){
  $( '.l-title' ).addClass( 'title-OnloadVisible' );
  $( '.b-animatedBlock__figure.-type_left' ).addClass( 'figureLeft-OnloadVisible' );
  $( '.b-animatedBlock__figure.-type_right' ).addClass( 'figureRight-OnloadVisible' );
  $( '.l-siteLogo' ).addClass( 'siteLogo-OnloadVisible' );
  $( '.b-siteNavigation.-type_left' ).addClass( 'navLeft-OnloadVisible' );
  $( '.b-siteNavigation.-type_right' ).addClass( 'navRight-OnloadVisible' );  
  $( '.b-text' ).addClass( 'text-OnLoadVisible' );
  $( '.b-siteFooter' ).addClass( 'footer-OnLoadVisible' );
  $( '.b-animated_top' ).addClass( 'containerTop-OnLoadVisible' );
  $( '.b-animated_left' ).addClass( 'containerLeft-OnLoadVisible' );
  $( '.b-animated_right' ).addClass( 'containerRight-OnLoadVisible' );
  $( '.b-sideBlock.-type_left' ).addClass( 'sideBlockLeft-OnloadVisible' );
  $( '.b-sideBlock.-type_right' ).addClass( 'sideBlockRight-OnloadVisible' );
});

/*onclick the middle button animation*/
$( "a.b-animatedBlock__link" ).click(function() {
  $( '.b-animatedClick' ).addClass( 'Clicked' );
  setTimeout(
    function(){
      $(".b-animatedClick").removeClass( 'Clicked' );
    }, 700);
});

function doAnimation(page) {
  var animation = {
    home: function() {
      if(prevHash.indexOf('get') != -1) return;
      $( '.l-title' ).removeClass( 'title-OnloadVisible' );
      $( '.b-animatedBlock__figure.-type_left' ).removeClass( 'figureLeft-OnloadVisible' );
      $( '.b-animatedBlock__figure.-type_right' ).removeClass( 'figureRight-OnloadVisible' );
      $( '.l-siteLogo' ).removeClass( 'siteLogo-OnloadVisible' );
      $( '.b-siteNavigation.-type_left' ).removeClass( 'navLeft-OnloadVisible' );
      $( '.b-siteNavigation.-type_right' ).removeClass( 'navRight-OnloadVisible' );  
      $( '.b-text' ).removeClass( 'text-OnLoadVisible' );
      $( '.b-siteFooter' ).removeClass( 'footer-OnLoadVisible' );
      $( '.b-animated_top' ).removeClass( 'containerTop-OnLoadVisible' );
      $( '.b-animated_left' ).removeClass( 'containerLeft-OnLoadVisible' );
      $( '.b-animated_right' ).removeClass( 'containerRight-OnLoadVisible' );
      $( '.b-sideBlock.-type_left' ).removeClass( 'sideBlockLeft-OnloadVisible' );
      $( '.b-sideBlock.-type_right' ).removeClass( 'sideBlockRight-OnloadVisible' );
      $( '.b-slider__menuItem.-type_active' ).removeClass( 'sliderMenuItemActive-OnLoadVisible' );
      $( '.b-slider__menuItem' ).removeClass( 'sliderMenuItem-OnLoadVisible' );
      $( '.b-slider__info' ).removeClass( 'sliderInfo-OnLoadVisible' );
      $( '.b-slider__images' ).removeClass( 'sliderImages-OnLoadVisible' );
      $( '.b-sideBlock.-type_left' ).removeClass( 'sideBlockLeft-OnloadVisible' );
      $( '.b-sideBlock.-type_right' ).removeClass( 'sideBlockRight-OnloadVisible' );
      $('.js-mobilePortfolio, .js-slider').css('display', '');
      setTimeout(function(){
        $( '.l-title' ).addClass( 'title-OnloadVisible' );
        $( '.b-animatedBlock__figure.-type_left' ).addClass( 'figureLeft-OnloadVisible' );
        $( '.b-animatedBlock__figure.-type_right' ).addClass( 'figureRight-OnloadVisible' );
        $( '.l-siteLogo' ).addClass( 'siteLogo-OnloadVisible' );
        $( '.b-siteNavigation.-type_left' ).addClass( 'navLeft-OnloadVisible' );
        $( '.b-siteNavigation.-type_right' ).addClass( 'navRight-OnloadVisible' );  
        $( '.b-text' ).addClass( 'text-OnLoadVisible' );
        $( '.b-siteFooter' ).addClass( 'footer-OnLoadVisible' );
        $( '.b-animated_top' ).addClass( 'containerTop-OnLoadVisible' );
        $( '.b-animated_left' ).addClass( 'containerLeft-OnLoadVisible' );
        $( '.b-animated_right' ).addClass( 'containerRight-OnLoadVisible' );
        $( '.b-sideBlock.-type_left' ).addClass( 'sideBlockLeft-OnloadVisible' );
        $( '.b-sideBlock.-type_right' ).addClass( 'sideBlockRight-OnloadVisible' );
      }, 100);
    },
    whatWeDo: function(){
      if(prevHash.indexOf('get') != -1) return;
      $( '.l-title' ).removeClass( 'title-OnloadVisible' );
      $( '.b-animatedBlock__figure.-type_left' ).removeClass( 'figureLeft-OnloadVisible' );
      $( '.b-animatedBlock__figure.-type_right' ).removeClass( 'figureRight-OnloadVisible' );
      $( '.l-siteLogo' ).removeClass( 'siteLogo-OnloadVisible' );
      $( '.b-siteNavigation.-type_left' ).removeClass( 'navLeft-OnloadVisible' );
      $( '.b-siteNavigation.-type_right' ).removeClass( 'navRight-OnloadVisible' );  
      $( '.b-text' ).removeClass( 'text-OnLoadVisible' );
      $( '.b-siteFooter' ).removeClass( 'footer-OnLoadVisible' );
      $( '.b-animated_top' ).removeClass( 'containerTop-OnLoadVisible' );
      $( '.b-animated_left' ).removeClass( 'containerLeft-OnLoadVisible' );
      $( '.b-animated_right' ).removeClass( 'containerRight-OnLoadVisible' );
      $( '.b-sideBlock.-type_left' ).removeClass( 'sideBlockLeft-OnloadVisible' );
      $( '.b-sideBlock.-type_right' ).removeClass( 'sideBlockRight-OnloadVisible' );
      setTimeout(function(){
        $( '.l-title' ).addClass( 'title-OnloadVisible' );
        $( '.l-siteLogo' ).addClass( 'siteLogo-OnloadVisible' );
        $( '.b-animatedBlock__figure.-type_left' ).addClass( 'figureLeft-OnloadVisible' );
        $( '.b-animatedBlock__figure.-type_right' ).addClass( 'figureRight-OnloadVisible' );
        $( '.b-siteNavigation.-type_left' ).addClass( 'navLeft-OnloadVisible' );
        $( '.b-siteNavigation.-type_right' ).addClass( 'navRight-OnloadVisible' );  
        $( '.b-sideBlock.-type_left' ).addClass( 'sideBlockLeft-OnloadVisible' );
        $( '.b-sideBlock.-type_right' ).addClass( 'sideBlockRight-OnloadVisible' );
        $( '.b-text' ).addClass( 'text-OnLoadVisible' );
        $( '.b-siteFooter' ).addClass( 'footer-OnLoadVisible' );
        $( '.b-animated_top' ).addClass( 'containerTop-OnLoadVisible' );
        $( '.b-animated_left' ).addClass( 'containerLeft-OnLoadVisible' );
        $( '.b-animated_right' ).addClass( 'containerRight-OnLoadVisible' );
      }, 1000);
    },
    ourClients: function(){
       if(prevHash.indexOf('get') != -1) return;
      
      var timer = 0;
      if(BBhistory.length > 0) {
        $( '.l-title' ).removeClass( 'title-OnloadVisible' );
        $( '.b-animatedBlock__figure.-type_left' ).removeClass( 'figureLeft-OnloadVisible' );
        $( '.b-animatedBlock__figure.-type_right' ).removeClass( 'figureRight-OnloadVisible' );
        $( '.l-siteLogo' ).removeClass( 'siteLogo-OnloadVisible' );
        $( '.b-siteNavigation.-type_left' ).removeClass( 'navLeft-OnloadVisible' );
        $( '.b-siteNavigation.-type_right' ).removeClass( 'navRight-OnloadVisible' );  
        $( '.b-text' ).removeClass( 'text-OnLoadVisible' );
        $( '.b-siteFooter' ).removeClass( 'footer-OnLoadVisible' );
        $( '.b-animated_top' ).removeClass( 'containerTop-OnLoadVisible' );
        $( '.b-animated_left' ).removeClass( 'containerLeft-OnLoadVisible' );
        $( '.b-animated_right' ).removeClass( 'containerRight-OnLoadVisible' );
        $( '.b-sideBlock.-type_left' ).removeClass( 'sideBlockLeft-OnloadVisible' );
        $( '.b-sideBlock.-type_right' ).removeClass( 'sideBlockRight-OnloadVisible' );
        timer = 1000;
      }
      setTimeout(function(){
        $( '.l-siteLogo' ).addClass( 'siteLogo-OnloadVisible' );
        $( '.b-siteNavigation.-type_left' ).addClass( 'navLeft-OnloadVisible' );
        $( '.b-siteNavigation.-type_right' ).addClass( 'navRight-OnloadVisible' );  
        $( '.b-siteFooter' ).addClass( 'footer-OnLoadVisible' );

        $( '.b-slider__menuItem.-type_active' ).addClass( 'sliderMenuItemActive-OnLoadVisible' );
        $( '.b-slider__menuItem' ).addClass( 'sliderMenuItem-OnLoadVisible' );
        $( '.b-slider__info' ).addClass( 'sliderInfo-OnLoadVisible' );
        $( '.b-slider__images' ).addClass( 'sliderImages-OnLoadVisible' );
      }, timer);
    }
  };

  //execute the animation
  animation[page]();
}