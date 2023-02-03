function fadeInOutTo() {
    //fade out - display to none
    $('.red-box').fadeOut(3000);
    //fade in - display to (in this case) block
    $('.red-box').fadeIn(1500);
    //fade to an opacity
    $('.green-box').fadeTo(2000, .3);
    // fade to half opacity
    $('.blue-box').fade(1000, .5);
    // toggle display (went to none)
    $('.blue-box').fadeToggle();
    // toggle display (went to block, but remembered the fadeTo)
    $('.blue-box').fadeToggle();
}
function hideElement() {
    $('.red-box').hide(1000);
    $('.red-box').show(2000);
    $('.red-box').slideup(2000);
    $('.red-box').slideDown(2000);
    $('.red-box').slideToggle(2000);
    $('.red-box').slideToggle(2000);
}
function chainAnimation() {
    //$('.red-box').fadeTo(1000, .5);
    //$('.green-box').delay(1000).fadeTo(1000, .5);
    // Chianing even more function callsn to crete animation
   // $(".blue-box").delay(2000).fadeTo(1000, 0.5).fadeTo(1000, 1.0).delay(1000).fadeOut(); 
   $(".red-box").fadeTo(1000, 0, function() {
    // This callback finction is executed once outer animation finishes.
    // SO the green box starts fading out once thebred box finshed fading out.
    $(".green-box").fadeTo(1000, 0, function() {
       // Similarly, any code inside this function will start executing only once
       // the green box finshes fading out (after 2 seconds)
       $(".blue-box").fadeTo(1000, 0);
   });
});
}
chainAnimation();
// hideElement();
// fadeInOutTo();