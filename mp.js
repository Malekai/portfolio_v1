$('.move').click(function(){
    $('html, body').animate({
        scrollTop: $('[data-name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 1000);
    return false;
});
