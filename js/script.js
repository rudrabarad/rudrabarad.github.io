// Click Function for Hamburger
$(document).ready(function()
{
    $('.hamburger').click(function()
    {
        $(this).toggleClass('active');
        $('.overlay').fadeToggle(800);
        $('.bottom-navbar').fadeToggle(800);
        //$('.overlay').slideToggle(1000);
        //$('.bottom-navbar').slideToggle(1000);
    });
});
