
$(".fa-bars").on("click", function(){
    $("#menu").fadeIn(300);
    $("body").css("overflow", "hidden");
});

$("#closeButton").on("click", function(){
    $("#menu").css("display", "none");
    $("body").css("overflow", "auto");
});



$("h1:first-of-type").hover(function(){
    $(this).html("Design<span class='br'></span><span class='sub'>Lorem ipsum dolor sit amet, consectetur. </span><span class='br'></span><a id='services' href='/design'>Learn More</a>");
}, function(){
    $(this).html("Design");
});

$("#middle").hover(function(){
    $(this).html("Development<span class='br'></span><span class='sub'>Lorem ipsum dolor sit amet, consectetur. </span><span class='br'></span><a id='services' href='/development'>Learn More</a>");
}, function(){
    $(this).html("Development");
});

$("h1:last-of-type").hover(function(){
    $(this).html("Digital Marketing<span class='br'></span><span class='sub'>Lorem ipsum dolor sit amet, consectetur. </span><span class='br'></span><a id='services' href='/digitalmarketing'>Learn More</a>");
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


// $(document).ready(function () {
//     var about = $('#about');

// $(window).scroll(function () {
//     var s = $(this).scrollTop(),
//         d = $(document).height(),
//         c = $(this).height();

//     scrollPercent = (s / (d));

//     var position = (scrollPercent * ($(document).width() - 4 * (about).width()));
    
//     about.css({
//         'margin-left': position
//     });
// });
// });

$(window).scroll(function(){
    if ($("#blog").visible(true)){
    $("#blog").css('margin-left',$(this).scrollTop()-1400 + 'px');
    } 
});


$('#links').on('show.bs.collapse', function () {
    $('#social').collapse("hide");
  })
  $('#social').on('show.bs.collapse', function () {
    $('#links').collapse("hide");
  })
