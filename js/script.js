
// ===================================== FOR SLIDE EFFECT ==================================//
// Click Function for Hamburger
$(document).ready(function()
{
    $('.hamburger').click(function()
    {
        $(this).toggleClass('active');
        $('.overlay').slideToggle(1000);
        $('.bottom-navbar').slideToggle(1000);
    });
// Click in the Overlay Menu
    $('.menu ul').click(function()
    {
        $('.overlay').slideToggle(100);
        $('.bottom-navbar').slideToggle(1000);
        $('.hamburger').toggleClass('active');        
    });

});

// ===================================== FOR FADE EFFECT ==================================//
/*
// Click Function for Hamburger
$(document).ready(function()
{
    $('.hamburger').click(function()
    {
        $(this).toggleClass('active');
        $('.overlay').fadeToggle(800);
        $('.bottom-navbar').fadeToggle(800);
    });
// Click in the Overlay Menu
    $('.menu ul').click(function()
    {
        $('.overlay').fadeToggle(400);
        $('.bottom-navbar').fadeToggle(800);
        $('.hamburger').toggleClass('active');        
    });

});
*/

$(document).ready(function()
{

    $(window).scroll(function(){
        if($(this).scrollTop()<50){
            $('.mouse-scroll').fadeIn(500);
        } else {
            $('.mouse-scroll').fadeOut(500);
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>80){
            $('.top-button').fadeIn(2000);
        } else {
            $('.top-button').fadeOut(800);
        }
    });

    $('.top-button').click(function()
    {
        $('html, body').animate({scrollTop:0},21);
    });

});