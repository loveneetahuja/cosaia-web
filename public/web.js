
$(".fa-bars").on("click", function(){
    $("#menu").fadeIn(300);
});

$("#closeButton").on("click", function(){
    $("#menu").css("display", "none");
});

$("h1:first-of-type").on("mouseenter", function(){
    $(this).html("Design<span class='br'></span><span class='sub'>Lorem ipsum dolor sit amet, consectetur. </span>");
});

$("h1:first-of-type").on("mouseout", function(){
    $(this).html("Design");
});

$("#middle").on("mouseenter", function(){
    $(this).html("Development<span class='br'></span><span class='sub'>Lorem ipsum dolor sit amet, consectetur. </span>");
});

$("#middle").on("mouseout", function(){
    $(this).html("Development");
});

$("h1:last-of-type").on("mouseenter", function(){
    $(this).html("Digital Media<span class='br'></span><span class='sub'>Lorem ipsum dolor sit amet, consectetur. </span>");
});

$("h1:last-of-type").on("mouseout", function(){
    $(this).html("Digital Media");
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


