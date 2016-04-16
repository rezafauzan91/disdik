$(document).ready(function(){
  $('#nav-main-menu').superfish({
    //add options here if required
  });
  $('.flexslider').flexslider({
      controlNav: false,
      directionNav: true,
      animationLoop: true,
      slideshow: true,
      slideshowSpeed:5000,
      pauseOnAction: true,
      touch: false,
      animationSpeed: 500
  });
  $('#gallery').flexslider({
      controlNav: true,
      
    });
});
