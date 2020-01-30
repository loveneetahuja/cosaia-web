var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });


  
  
var nh8card = document.getElementById("nh8card");
var nh8image = document.getElementById("nh8image");

nh8card.onmouseover = function(){
    nh8image.src='images/nh8-2.png';
    
}




nh8card.onmouseout = function() {
    nh8image.src='images/nh8-1.png';
    
}


var chcard = document.getElementById("chcard");
var chimage = document.getElementById("chimage");

chcard.onmouseover = function(){
    chimage.src='images/ch2.png';
    
}




chcard.onmouseout = function() {
    chimage.src='images/ch1.png';
    
}

$('#toggle').click(function() {
  $('.circle-loader').toggleClass('load-complete');
  $('.checkmark').toggle();
});