/**
* @subsection Slider
*/
function transitsBetweenPages() {
//  $('.j-openPracticeLink').on('click', function(){
//    setTimeout(function(){
//      $('.j-section.-type_home').removeClass('-type_active');
//      $('.j-section.-type_practice').addClass('-type_active');
//      $('body').removeClass('-type_home -type_portfolio').addClass('-type_practice');
//      changeTitle();
//      createParallaxA();
//      createParallaxB();
//      createParallaxC();
//      },700);
//    });
//  $('.j-openPortfolioLink').on('click', function(){
//     setTimeout(function(){
//      $('.j-section.-type_practice').removeClass('-type_active');
//      $('.j-section.-type_portfolio').addClass('-type_active');
//      $('body').removeClass('-type_home -type_practice').addClass('-type_portfolio');
//      changeTitle();
//      createParallaxA();
//      createParallaxB();
//      createParallaxC();
//      },700);
//  });
//  $('.j-siteLogo__link').on('click', function(){
//     setTimeout(function(){
//      $('.j-section.-type_practice').removeClass('-type_active');
//      $('.j-section.-type_portfolio').removeClass('-type_active');
//      $('.j-section.-type_home').addClass('-type_active');
//      $('body').removeClass('-type_portfolio -type_practice').addClass('-type_home');
//      changeTitle();
//      createParallaxA();
//      createParallaxB();
//      createParallaxC();
//      },700);
//  });
}
function changeTitle() {
  if($('body').hasClass('-type_home')) {
    $(document).prop('title', 'Mobile65.com: design and development of custom web and mobile applications');
  } else if($('body').hasClass('-type_practice')) {
    $(document).prop('title', 'Mobile65.com / What We Do');
  } else if($('body').hasClass('-type_portfolio')) {
    $(document).prop('title', 'Mobile65.com / Our Clients');
  }
}
function changePopUpTitle() {
  if($('.j-popUp.-type_contacts').hasClass('-type_active')) {
    $(document).prop('title', 'Mobile65.com / Contact Us');
  } else if($('.j-popUp.-type_estimate').hasClass('-type_active')) {
    $(document).prop('title', 'Mobile65.com / Get Estimate');
  } else if($('.j-popUp.-type_about').hasClass('-type_active')) {
    $(document).prop('title', 'Mobile65.com / About Us');
  }
}
