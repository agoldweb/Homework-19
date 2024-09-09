$(document).ready(function() {
    $('.fade-in').css('opacity', 0);
    function checkVisibility() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < windowBottom) {
                $(this).animate({ opacity: 1 }, 1000);
            }
        });
    }

    // fade-in Scroll
    checkVisibility();
    $(window).on('scroll', checkVisibility);

    // Image hover effect using jQuery
    $(".image-container").hover(function() {
        $(this).find('.default-image').fadeOut(1000); 
        $(this).find('.hover-image').fadeIn(1000);    
    }, function() {
        $(this).find('.default-image').fadeIn(1000);  
        $(this).find('.hover-image').fadeOut(1000);   
    });
});