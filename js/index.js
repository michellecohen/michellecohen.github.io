$(function(){

  $('.slider').slick({

    // slidesToShow: 1,
    // slidesToScroll: 4,
    // autoplaySpeed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
  });

$("#premium").click(function() {
    $('html, body').animate({
        scrollTop: $("#scrollToPremium").offset().top
    }, 1000);
});

$("#packages").click(function() {
    $('html, body').animate({
        scrollTop: $("#scrollToPackage").offset().top
    }, 1000);
});

});
  


  //$('.your-class').slick({
   // setting-name: setting-value
  //});
