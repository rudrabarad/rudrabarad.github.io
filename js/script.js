// Click Function for Hamburger
$(document).ready(function()
{
    $('.hamburger').click(function()
    {
        $(this).toggleClass('active')
    });
});

// Hover Fade In-Out On Navigation Bar Icons
$(document).ready(function()
{
    $('#i-home').hover(function()
    {
        $('#t-home').fadeToggle();
    });
    $('#i-about').hover(function()
    {
        $('#t-about').fadeToggle();
    });
    $('#i-skill').hover(function()
    {
        $('#t-skill').fadeToggle();
    });
    $('#i-project').hover(function()
    {
        $('#t-project').fadeToggle();
    });
    $('#i-contact').hover(function()
    {
        $('#t-contact').fadeToggle();
    });
});