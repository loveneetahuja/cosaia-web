//$('#toggle').click(function() {
//    $('.circle-loader').toggleClass('load-complete');
//    $('.checkmark').toggle();
//  });

setTimeout(doSomething, 1200);

function doSomething() {
   //do whatever you want here
   $('.circle-loader').toggleClass('load-complete');
    $('.checkmark').toggle();
}

setTimeout(redirectHome, 3000);

function redirectHome(){
    window.location = "/";
}