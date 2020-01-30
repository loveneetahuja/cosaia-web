
$(".fa-bars").on("click", function(){
    $("#menu").fadeIn(300);
    $("body").css("overflow", "hidden");
});

$("#closeButton").on("click", function(){
    $("#menu").css("display", "none");
    $("body").css("overflow", "auto");
});



$("h1:first-of-type").hover(function(){
    $(this).html("Design<span class='br'></span><span class='sub'>Intelligence made visible. </span><span class='br'></span><a id='services' href='/design'>Learn More</a>");
}, function(){
    $(this).html("Design");
});

$("#middle").hover(function(){
    $(this).html("Development<span class='br'></span><span class='sub'>Your ideas our creation. </span><span class='br'></span><a id='services' href='/development'>Learn More</a>");
}, function(){
    $(this).html("Development");
});

$("h1:last-of-type").hover(function(){
    $(this).html("Digital Marketing<span class='br'></span><span class='sub'> Tell your story. </span><span class='br'></span><a id='services' href='/digitalmarketing'>Learn More</a>");
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
//     var blog = $('#blog');

// $(window).scroll(function () {
//     var s = $(this).scrollTop(),
//         d = $(document).height(),
//         c = $(this).height();

//     scrollPercent = (s / (d-c));
//     console.log(scrollPercent);
//     console.log(s);
//     console.log(c);
//     console.log(d);

//     var position = (scrollPercent * 400);
    
//     blog.css({
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



$('#links').on('show.bs.collapse', function () {
    $('#social').collapse("hide");
  })
  $('#social').on('show.bs.collapse', function () {
    $('#links').collapse("hide");
  })
