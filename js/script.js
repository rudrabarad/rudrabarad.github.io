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