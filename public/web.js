
$(".fa-bars").on("click", function(){
    $("#menu").fadeIn(300);
    $("body").css("overflow", "hidden");
});

$("#closeButton").on("click", function(){
    $("#menu").css("display", "none");
    $("body").css("overflow", "auto");
});



$("#title1").hover(function(){
    $(this).html("Design<span class='br'></span><span class='sub'>Intelligence made visible. </span><span class='br'></span><a id='services' href='/design'>Learn More</a>");
}, function(){
    $(this).html("Design");
});

$("#title2").hover(function(){
    $(this).html("Development<span class='br'></span><span class='sub'>Your ideas our creation. </span><span class='br'></span><a id='services' href='/website-development'>Learn More</a>");
}, function(){
    $(this).html("Development");
});

$("#title3").hover(function(){
    $(this).html("Digital Marketing<span class='br'></span><span class='sub'> Tell your story. </span><span class='br'></span><a id='services' href='/digital-marketing-company'>Learn More</a>");
}, function(){
    $(this).html("Digital Marketing");
});

$(".carousel").carousel();

// var current = $(window).scrollTop();
// var total = $(window).height() - current;
// var ele = $("#about");
// var currPosition = ele.position().left + 2000;
// var trackLength = 475;
// $(window).scroll(function (event) {
//     current = $(window).scrollTop();
//     var newPosition = trackLength * (current/total)
//     ele.css("margin-left", currPosition+newPosition+'px');
// });




$(window).scroll(function(){
    if ($("#about").visible(true)){
    $("#about").css('margin-left',$(this).scrollTop()/4 + 'px');
    } 
});

// LOGO SLIDER
// $(function(){
//     // vars for clients list carousel
//      // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
//      var $clientcarousel = $('#clients-list');
//      var clients = $clientcarousel.children().length;
//      var clientwidth = (clients * 220); // 140px width for each client item 
//      $clientcarousel.css('width',clientwidth);
//      console.log(clients);
     
//      var rotating = true;
//      var clientspeed = 0;
//      var seeclients = setInterval(rotateClients, clientspeed);

//      $(document).on({
//         mouseenter: function(){
//           rotating = false; // turn off rotation when hovering
//         },
//         mouseleave: function(){
//           rotating = true;
//         }
//       }, '#clients');
     
//      function rotateClients() {
//        if(rotating != false) {
//          var $first = $('#clients-list li:first');
//          $first.animate({ 'margin-left': '-220px' }, 2000, "linear", function() {
//            $first.remove().css({ 'margin-left': '0px' });
//            $('#clients-list li:last').after($first);
//          });
//        }
//      }
//    });
   


// $(document).ready(function () {
//     var testimonial = $('#testimonial');

// $(window).scroll(function () {
//     var s = $(this).scrollTop(),
//         d = $(document).height(),
//         c = $(this).height();

//     scrollPercent = (s / (d-c));
//     console.log(scrollPercent);
//     console.log(s);
//     console.log(c);
//     console.log(d);

//     var position = (scrollPercent * 200);
    
//     testimonial.css({
//         'margin-left': position
//     });
// });
// });

// $(window).scroll(function(){
//     if ($("#blog").visible(true)){
//     $("#blog").css('margin-left',$("#about").scrollTop()/4 + 'px');
//     console.log($("#blog").css('margin-left'));
//     } 
// });


if ($("#blog").length){
$(document).ready(function(){
    $(window).bind('scroll', function() {
       var scrollTop = $(window).scrollTop();
       var elementOffset = $('#blog').offset().top;
       var currentElementOffset = (elementOffset - scrollTop);
       var abscEO = Math.abs(currentElementOffset);
       if ($("#blog").visible(true) && window.matchMedia('(min-width: 1100px)').matches){
       {$("#blog").css('margin-left', abscEO/1.4 + 'px')};
    } else {
        $("#blog").css('margin-left',"0px");
    }
    });
 });
}



$('#links').on('show.bs.collapse', function () {
    $('#social').collapse("hide");
  })
  $('#social').on('show.bs.collapse', function () {
    $('#links').collapse("hide");
  })

// Navbar animation


if ( $(window).width() > 769) {   
var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.slidd').stop().fadeOut(730);
        up = !up;
        // console.log(up);
    } else if(newscroll < mypos && up) {
        $('.slidd').stop().fadeIn(300);
        up = !up;
    }
    mypos = newscroll;
});
}


